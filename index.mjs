
// https://gist.githubusercontent.com/jeduan/3fc20fb788a95b8de563c914c4187a6d/raw/847020ef6ee36a96450e4b25084168ea350e4fb1/index.mjs

import BN from 'bn.js';
export { default as BN } from 'bn.js';
import { sendAndConfirmRawTransaction, PublicKey, Transaction, TransactionInstruction, SystemProgram } from '@solana/web3.js';
import * as web3_js from '@solana/web3.js';
export { web3_js as web3 };
import { Buffer } from 'buffer';
import camelCase from 'camelcase';
import * as borsh from '@project-serum/borsh';
import bs58$1 from 'bs58';
import { sha256 as sha256$1 } from 'js-sha256';
import * as base64$1 from 'base64-js';
import * as assert from 'assert';
import assert__default from 'assert';
import { inflate } from 'pako';
import EventEmitter from 'eventemitter3';

/**
 * Splits an array into chunks
 *
 * @param array Array of objects to chunk.
 * @param size The max size of a chunk.
 * @returns A two dimensional array where each T[] length is < the provided size.
 */
function chunks(array, size) {
    return Array.apply(0, new Array(Math.ceil(array.length / size))).map((_, index) => array.slice(index * size, (index + 1) * size));
}

/**
 * The network and wallet context used to send transactions paid for and signed
 * by the provider.
 */
class Provider {
    /**
     * @param connection The cluster connection where the program is deployed.
     * @param wallet     The wallet used to pay for and sign all transactions.
     * @param opts       Transaction confirmation options to use by default.
     */
    constructor(connection, wallet, opts) {
        this.connection = connection;
        this.wallet = wallet;
        this.opts = opts;
    }
    static defaultOptions() {
        return {
            preflightCommitment: "recent",
            commitment: "recent",
        };
    }
    /**
     * Returns a `Provider` with a wallet read from the local filesystem.
     *
     * @param url  The network cluster url.
     * @param opts The default transaction confirmation options.
     *
     * (This api is for Node only.)
     */
    static local(url, opts) {
        {
            throw new Error(`Provider local is not available on browser.`);
        }
    }
    /**
     * Returns a `Provider` read from the `ANCHOR_PROVIDER_URL` environment
     * variable
     *
     * (This api is for Node only.)
     */
    static env() {
        {
            throw new Error(`Provider env is not available on browser.`);
        }
    }
    /**
     * Sends the given transaction, paid for and signed by the provider's wallet.
     *
     * @param tx      The transaction to send.
     * @param signers The set of signers in addition to the provider wallet that
     *                will sign the transaction.
     * @param opts    Transaction confirmation options.
     */
    async send(tx, signers, opts) {
        if (signers === undefined) {
            signers = [];
        }
        if (opts === undefined) {
            opts = this.opts;
        }
        tx.feePayer = this.wallet.publicKey;
        tx.recentBlockhash = (await this.connection.getRecentBlockhash(opts.preflightCommitment)).blockhash;
        await this.wallet.signTransaction(tx);
        signers
            .filter((s) => s !== undefined)
            .forEach((kp) => {
            tx.partialSign(kp);
        });
        const rawTx = tx.serialize();
        const txId = await sendAndConfirmRawTransaction(this.connection, rawTx, opts);
        return txId;
    }
    /**
     * Similar to `send`, but for an array of transactions and signers.
     */
    async sendAll(reqs, opts) {
        if (opts === undefined) {
            opts = this.opts;
        }
        const blockhash = await this.connection.getRecentBlockhash(opts.preflightCommitment);
        let txs = reqs.map((r) => {
            let tx = r.tx;
            let signers = r.signers;
            if (signers === undefined) {
                signers = [];
            }
            tx.feePayer = this.wallet.publicKey;
            tx.recentBlockhash = blockhash.blockhash;
            signers
                .filter((s) => s !== undefined)
                .forEach((kp) => {
                tx.partialSign(kp);
            });
            return tx;
        });
        const signedTxs = await this.wallet.signAllTransactions(txs);
        const sigs = [];
        for (let k = 0; k < txs.length; k += 1) {
            const tx = signedTxs[k];
            const rawTx = tx.serialize();
            sigs.push(await sendAndConfirmRawTransaction(this.connection, rawTx, opts));
        }
        return sigs;
    }
    /**
     * Simulates the given transaction, returning emitted logs from execution.
     *
     * @param tx      The transaction to send.
     * @param signers The set of signers in addition to the provdier wallet that
     *                will sign the transaction.
     * @param opts    Transaction confirmation options.
     */
    async simulate(tx, signers, opts = this.opts) {
        var _a, _b, _c;
        if (signers === undefined) {
            signers = [];
        }
        tx.feePayer = this.wallet.publicKey;
        tx.recentBlockhash = (await this.connection.getRecentBlockhash((_a = opts.preflightCommitment) !== null && _a !== void 0 ? _a : this.opts.preflightCommitment)).blockhash;
        await this.wallet.signTransaction(tx);
        signers
            .filter((s) => s !== undefined)
            .forEach((kp) => {
            tx.partialSign(kp);
        });
        return await simulateTransaction(this.connection, tx, (_c = (_b = opts.commitment) !== null && _b !== void 0 ? _b : this.opts.commitment) !== null && _c !== void 0 ? _c : "recent");
    }
}
// Copy of Connection.simulateTransaction that takes a commitment parameter.
async function simulateTransaction(connection, transaction, commitment) {
    // @ts-ignore
    transaction.recentBlockhash = await connection._recentBlockhash(
    // @ts-ignore
    connection._disableBlockhashCaching);
    const signData = transaction.serializeMessage();
    // @ts-ignore
    const wireTransaction = transaction._serialize(signData);
    const encodedTransaction = wireTransaction.toString("base64");
    const config = { encoding: "base64", commitment };
    const args = [encodedTransaction, config];
    // @ts-ignore
    const res = await connection._rpcRequest("simulateTransaction", args);
    if (res.error) {
        throw new Error("failed to simulate transaction: " + res.error.message);
    }
    return res.result;
}
/**
 * Sets the default provider on the client.
 */
function setProvider(provider) {
    _provider = provider;
}
/**
 * Returns the default provider being used by the client.
 */
function getProvider() {
    if (_provider === null) {
        return Provider.local();
    }
    return _provider;
}
// Global provider used as the default when a provider is not given.
let _provider = null;

class IdlError extends Error {
    constructor(message) {
        super(message);
        this.name = "IdlError";
    }
}
// An error from a user defined program.
class ProgramError extends Error {
    constructor(code, msg, ...params) {
        super(...params);
        this.code = code;
        this.msg = msg;
    }
    static parse(err, idlErrors) {
        // TODO: don't rely on the error string. web3.js should preserve the error
        //       code information instead of giving us an untyped string.
        let components = err.toString().split("custom program error: ");
        if (components.length !== 2) {
            return null;
        }
        let errorCode;
        try {
            errorCode = parseInt(components[1]);
        }
        catch (parseErr) {
            return null;
        }
        // Parse user error.
        let errorMsg = idlErrors.get(errorCode);
        if (errorMsg !== undefined) {
            return new ProgramError(errorCode, errorMsg, errorCode + ": " + errorMsg);
        }
        // Parse framework internal error.
        errorMsg = LangErrorMessage.get(errorCode);
        if (errorMsg !== undefined) {
            return new ProgramError(errorCode, errorMsg, errorCode + ": " + errorMsg);
        }
        // Unable to parse the error. Just return the untranslated error.
        return null;
    }
    toString() {
        return this.msg;
    }
}
const LangErrorCode = {
    // Instructions.
    InstructionMissing: 100,
    InstructionFallbackNotFound: 101,
    InstructionDidNotDeserialize: 102,
    InstructionDidNotSerialize: 103,
    // IDL instructions.
    IdlInstructionStub: 120,
    IdlInstructionInvalidProgram: 121,
    // Constraints.
    ConstraintMut: 140,
    ConstraintHasOne: 141,
    ConstraintSigner: 142,
    ConstraintRaw: 143,
    ConstraintOwner: 144,
    ConstraintRentExempt: 145,
    ConstraintSeeds: 146,
    ConstraintExecutable: 147,
    ConstraintState: 148,
    ConstraintAssociated: 149,
    ConstraintAssociatedInit: 150,
    ConstraintClose: 151,
    ConstraintAddress: 152,
    // Accounts.
    AccountDiscriminatorAlreadySet: 160,
    AccountDiscriminatorNotFound: 161,
    AccountDiscriminatorMismatch: 162,
    AccountDidNotDeserialize: 163,
    AccountDidNotSerialize: 164,
    AccountNotEnoughKeys: 165,
    AccountNotMutable: 166,
    AccountNotProgramOwned: 167,
    InvalidProgramId: 168,
    InvalidProgramExecutable: 169,
    AccountNotSigner: 170,
    AccountNotSystemOwned: 171,
    AccountNotInitialized: 172,
    AccountNotProgramData: 173,
    // State.
    StateInvalidAddress: 180,
    // Used for APIs that shouldn't be used anymore.
    Deprecated: 299,
};
const LangErrorMessage = new Map([
    // Instructions.
    [
        LangErrorCode.InstructionMissing,
        "8 byte instruction identifier not provided",
    ],
    [
        LangErrorCode.InstructionFallbackNotFound,
        "Fallback functions are not supported",
    ],
    [
        LangErrorCode.InstructionDidNotDeserialize,
        "The program could not deserialize the given instruction",
    ],
    [
        LangErrorCode.InstructionDidNotSerialize,
        "The program could not serialize the given instruction",
    ],
    // Idl instructions.
    [
        LangErrorCode.IdlInstructionStub,
        "The program was compiled without idl instructions",
    ],
    [
        LangErrorCode.IdlInstructionInvalidProgram,
        "The transaction was given an invalid program for the IDL instruction",
    ],
    // Constraints.
    [LangErrorCode.ConstraintMut, "A mut constraint was violated"],
    [LangErrorCode.ConstraintHasOne, "A has_one constraint was violated"],
    [LangErrorCode.ConstraintSigner, "A signer constraint was violated"],
    [LangErrorCode.ConstraintRaw, "A raw constraint was violated"],
    [LangErrorCode.ConstraintOwner, "An owner constraint was violated"],
    [LangErrorCode.ConstraintRentExempt, "A rent exempt constraint was violated"],
    [LangErrorCode.ConstraintSeeds, "A seeds constraint was violated"],
    [LangErrorCode.ConstraintExecutable, "An executable constraint was violated"],
    [LangErrorCode.ConstraintState, "A state constraint was violated"],
    [LangErrorCode.ConstraintAssociated, "An associated constraint was violated"],
    [
        LangErrorCode.ConstraintAssociatedInit,
        "An associated init constraint was violated",
    ],
    [LangErrorCode.ConstraintClose, "A close constraint was violated"],
    [LangErrorCode.ConstraintAddress, "An address constraint was violated"],
    // Accounts.
    [
        LangErrorCode.AccountDiscriminatorAlreadySet,
        "The account discriminator was already set on this account",
    ],
    [
        LangErrorCode.AccountDiscriminatorNotFound,
        "No 8 byte discriminator was found on the account",
    ],
    [
        LangErrorCode.AccountDiscriminatorMismatch,
        "8 byte discriminator did not match what was expected",
    ],
    [LangErrorCode.AccountDidNotDeserialize, "Failed to deserialize the account"],
    [LangErrorCode.AccountDidNotSerialize, "Failed to serialize the account"],
    [
        LangErrorCode.AccountNotEnoughKeys,
        "Not enough account keys given to the instruction",
    ],
    [LangErrorCode.AccountNotMutable, "The given account is not mutable"],
    [
        LangErrorCode.AccountNotProgramOwned,
        "The given account is not owned by the executing program",
    ],
    [LangErrorCode.InvalidProgramId, "Program ID was not as expected"],
    [LangErrorCode.InvalidProgramExecutable, "Program account is not executable"],
    [LangErrorCode.AccountNotSigner, "The given account did not sign"],
    [
        LangErrorCode.AccountNotSystemOwned,
        "The given account is not owned by the system program",
    ],
    [
        LangErrorCode.AccountNotInitialized,
        "The program expected this account to be already initialized",
    ],
    [
        LangErrorCode.AccountNotProgramData,
        "The given account is not a program data account",
    ],
    // State.
    [
        LangErrorCode.StateInvalidAddress,
        "The given state account does not have the correct address",
    ],
    // Misc.
    [
        LangErrorCode.Deprecated,
        "The API being used is deprecated and should no longer be used",
    ],
]);

class IdlCoder {
    static fieldLayout(field, types) {
        const fieldName = field.name !== undefined ? camelCase(field.name) : undefined;
        switch (field.type) {
            case "bool": {
                return borsh.bool(fieldName);
            }
            case "u8": {
                return borsh.u8(fieldName);
            }
            case "i8": {
                return borsh.i8(fieldName);
            }
            case "u16": {
                return borsh.u16(fieldName);
            }
            case "i16": {
                return borsh.i16(fieldName);
            }
            case "u32": {
                return borsh.u32(fieldName);
            }
            case "i32": {
                return borsh.i32(fieldName);
            }
            case "u64": {
                return borsh.u64(fieldName);
            }
            case "i64": {
                return borsh.i64(fieldName);
            }
            case "u128": {
                return borsh.u128(fieldName);
            }
            case "i128": {
                return borsh.i128(fieldName);
            }
            case "bytes": {
                return borsh.vecU8(fieldName);
            }
            case "string": {
                return borsh.str(fieldName);
            }
            case "publicKey": {
                return borsh.publicKey(fieldName);
            }
            default: {
                if ("vec" in field.type) {
                    return borsh.vec(IdlCoder.fieldLayout({
                        name: undefined,
                        // @ts-ignore
                        type: field.type.vec,
                    }, types), fieldName);
                }
                else if ("option" in field.type) {
                    return borsh.option(IdlCoder.fieldLayout({
                        name: undefined,
                        type: field.type.option,
                    }, types), fieldName);
                }
                else if ("defined" in field.type) {
                    const defined = field.type.defined;
                    // User defined type.
                    if (types === undefined) {
                        throw new IdlError("User defined types not provided");
                    }
                    const filtered = types.filter((t) => t.name === defined);
                    if (filtered.length !== 1) {
                        throw new IdlError(`Type not found: ${JSON.stringify(field)}`);
                    }
                    return IdlCoder.typeDefLayout(filtered[0], types, fieldName);
                }
                else if ("array" in field.type) {
                    let arrayTy = field.type.array[0];
                    let arrayLen = field.type.array[1];
                    let innerLayout = IdlCoder.fieldLayout({
                        name: undefined,
                        type: arrayTy,
                    }, types);
                    return borsh.array(innerLayout, arrayLen, fieldName);
                }
                else {
                    throw new Error(`Not yet implemented: ${field}`);
                }
            }
        }
    }
    static typeDefLayout(typeDef, types = [], name) {
        if (typeDef.type.kind === "struct") {
            const fieldLayouts = typeDef.type.fields.map((field) => {
                const x = IdlCoder.fieldLayout(field, types);
                return x;
            });
            return borsh.struct(fieldLayouts, name);
        }
        else if (typeDef.type.kind === "enum") {
            let variants = typeDef.type.variants.map((variant) => {
                const name = camelCase(variant.name);
                if (variant.fields === undefined) {
                    return borsh.struct([], name);
                }
                // @ts-ignore
                const fieldLayouts = variant.fields.map((f) => {
                    // @ts-ignore
                    if (f.name === undefined) {
                        throw new Error("Tuple enum variants not yet implemented.");
                    }
                    // @ts-ignore
                    return IdlCoder.fieldLayout(f, types);
                });
                return borsh.struct(fieldLayouts, name);
            });
            if (name !== undefined) {
                // Buffer-layout lib requires the name to be null (on construction)
                // when used as a field.
                return borsh.rustEnum(variants).replicate(name);
            }
            return borsh.rustEnum(variants, name);
        }
        else {
            throw new Error(`Unknown type kint: ${typeDef}`);
        }
    }
}

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign$1 = function() {
    __assign$1 = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign$1.apply(this, arguments);
};

/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

/**
 * Source: ftp://ftp.unicode.org/Public/UCD/latest/ucd/SpecialCasing.txt
 */
/**
 * Lower case as a function.
 */
function lowerCase(str) {
    return str.toLowerCase();
}

// Support camel case ("camelCase" -> "camel Case" and "CAMELCase" -> "CAMEL Case").
var DEFAULT_SPLIT_REGEXP = [/([a-z0-9])([A-Z])/g, /([A-Z])([A-Z][a-z])/g];
// Remove all non-word characters.
var DEFAULT_STRIP_REGEXP = /[^A-Z0-9]+/gi;
/**
 * Normalize the string into something other libraries can manipulate easier.
 */
function noCase(input, options) {
    if (options === void 0) { options = {}; }
    var _a = options.splitRegexp, splitRegexp = _a === void 0 ? DEFAULT_SPLIT_REGEXP : _a, _b = options.stripRegexp, stripRegexp = _b === void 0 ? DEFAULT_STRIP_REGEXP : _b, _c = options.transform, transform = _c === void 0 ? lowerCase : _c, _d = options.delimiter, delimiter = _d === void 0 ? " " : _d;
    var result = replace(replace(input, splitRegexp, "$1\0$2"), stripRegexp, "\0");
    var start = 0;
    var end = result.length;
    // Trim the delimiter from around the output string.
    while (result.charAt(start) === "\0")
        start++;
    while (result.charAt(end - 1) === "\0")
        end--;
    // Transform each token independently.
    return result.slice(start, end).split("\0").map(transform).join(delimiter);
}
/**
 * Replace `re` in the input string with the replacement value.
 */
function replace(input, re, value) {
    if (re instanceof RegExp)
        return input.replace(re, value);
    return re.reduce(function (input, re) { return input.replace(re, value); }, input);
}

function dotCase(input, options) {
    if (options === void 0) { options = {}; }
    return noCase(input, __assign({ delimiter: "." }, options));
}

function snakeCase(input, options) {
    if (options === void 0) { options = {}; }
    return dotCase(input, __assign$1({ delimiter: "_" }, options));
}

function accountSize(idl, idlAccount) {
    if (idlAccount.type.kind === "enum") {
        let variantSizes = idlAccount.type.variants.map((variant) => {
            if (variant.fields === undefined) {
                return 0;
            }
            return variant.fields
                .map((f) => {
                if (!(typeof f === "object" && "name" in f)) {
                    throw new Error("Tuple enum variants not yet implemented.");
                }
                return typeSize(idl, f.type);
            })
                .reduce((a, b) => a + b);
        });
        return Math.max(...variantSizes) + 1;
    }
    if (idlAccount.type.fields === undefined) {
        return 0;
    }
    return idlAccount.type.fields
        .map((f) => typeSize(idl, f.type))
        .reduce((a, b) => a + b, 0);
}
// Returns the size of the type in bytes. For variable length types, just return
// 1. Users should override this value in such cases.
function typeSize(idl, ty) {
    var _a, _b;
    switch (ty) {
        case "bool":
            return 1;
        case "u8":
            return 1;
        case "i8":
            return 1;
        case "i16":
            return 2;
        case "u16":
            return 2;
        case "u32":
            return 4;
        case "i32":
            return 4;
        case "u64":
            return 8;
        case "i64":
            return 8;
        case "u128":
            return 16;
        case "i128":
            return 16;
        case "bytes":
            return 1;
        case "string":
            return 1;
        case "publicKey":
            return 32;
        default:
            if ("vec" in ty) {
                return 1;
            }
            if ("option" in ty) {
                return 1 + typeSize(idl, ty.option);
            }
            if ("defined" in ty) {
                const filtered = (_b = (_a = idl.types) === null || _a === void 0 ? void 0 : _a.filter((t) => t.name === ty.defined)) !== null && _b !== void 0 ? _b : [];
                if (filtered.length !== 1) {
                    throw new IdlError(`Type not found: ${JSON.stringify(ty)}`);
                }
                let typeDef = filtered[0];
                return accountSize(idl, typeDef);
            }
            if ("array" in ty) {
                let arrayTy = ty.array[0];
                let arraySize = ty.array[1];
                return typeSize(idl, arrayTy) * arraySize;
            }
            throw new Error(`Invalid type ${JSON.stringify(ty)}`);
    }
}
// Not technically sighash, since we don't include the arguments, as Rust
// doesn't allow function overloading.
function sighash(nameSpace, ixName) {
    let name = snakeCase(ixName);
    let preimage = `${nameSpace}:${name}`;
    return Buffer.from(sha256$1.digest(preimage)).slice(0, 8);
}

/**
 * Namespace for state method function signatures.
 */
const SIGHASH_STATE_NAMESPACE = "state";
/**
 * Namespace for global instruction function signatures (i.e. functions
 * that aren't namespaced by the state or any of its trait implementations).
 */
const SIGHASH_GLOBAL_NAMESPACE = "global";
/**
 * Encodes and decodes program instructions.
 */
class InstructionCoder {
    constructor(idl) {
        this.idl = idl;
        this.ixLayout = InstructionCoder.parseIxLayout(idl);
        const sighashLayouts = new Map();
        idl.instructions.forEach((ix) => {
            const sh = sighash(SIGHASH_GLOBAL_NAMESPACE, ix.name);
            sighashLayouts.set(bs58$1.encode(sh), {
                layout: this.ixLayout.get(ix.name),
                name: ix.name,
            });
        });
        if (idl.state) {
            idl.state.methods.map((ix) => {
                const sh = sighash(SIGHASH_STATE_NAMESPACE, ix.name);
                sighashLayouts.set(bs58$1.encode(sh), {
                    layout: this.ixLayout.get(ix.name),
                    name: ix.name,
                });
            });
        }
        this.sighashLayouts = sighashLayouts;
    }
    /**
     * Encodes a program instruction.
     */
    encode(ixName, ix) {
        return this._encode(SIGHASH_GLOBAL_NAMESPACE, ixName, ix);
    }
    /**
     * Encodes a program state instruction.
     */
    encodeState(ixName, ix) {
        return this._encode(SIGHASH_STATE_NAMESPACE, ixName, ix);
    }
    _encode(nameSpace, ixName, ix) {
        const buffer = Buffer.alloc(1000); // TODO: use a tighter buffer.
        const methodName = camelCase(ixName);
        const layout = this.ixLayout.get(methodName);
        if (!layout) {
            throw new Error(`Unknown method: ${methodName}`);
        }
        const len = layout.encode(ix, buffer);
        const data = buffer.slice(0, len);
        return Buffer.concat([sighash(nameSpace, ixName), data]);
    }
    static parseIxLayout(idl) {
        const stateMethods = idl.state ? idl.state.methods : [];
        const ixLayouts = stateMethods
            .map((m) => {
            let fieldLayouts = m.args.map((arg) => {
                var _a, _b;
                return IdlCoder.fieldLayout(arg, Array.from([...((_a = idl.accounts) !== null && _a !== void 0 ? _a : []), ...((_b = idl.types) !== null && _b !== void 0 ? _b : [])]));
            });
            const name = camelCase(m.name);
            return [name, borsh.struct(fieldLayouts, name)];
        })
            .concat(idl.instructions.map((ix) => {
            let fieldLayouts = ix.args.map((arg) => {
                var _a, _b;
                return IdlCoder.fieldLayout(arg, Array.from([...((_a = idl.accounts) !== null && _a !== void 0 ? _a : []), ...((_b = idl.types) !== null && _b !== void 0 ? _b : [])]));
            });
            const name = camelCase(ix.name);
            return [name, borsh.struct(fieldLayouts, name)];
        }));
        // @ts-ignore
        return new Map(ixLayouts);
    }
    /**
     * Dewcodes a program instruction.
     */
    decode(ix, encoding = "hex") {
        if (typeof ix === "string") {
            ix = encoding === "hex" ? Buffer.from(ix, "hex") : bs58$1.decode(ix);
        }
        let sighash = bs58$1.encode(ix.slice(0, 8));
        let data = ix.slice(8);
        const decoder = this.sighashLayouts.get(sighash);
        if (!decoder) {
            return null;
        }
        return {
            data: decoder.layout.decode(data),
            name: decoder.name,
        };
    }
    /**
     * Returns a formatted table of all the fields in the given instruction data.
     */
    format(ix, accountMetas) {
        return InstructionFormatter.format(ix, accountMetas, this.idl);
    }
}
class InstructionFormatter {
    static format(ix, accountMetas, idl) {
        const idlIx = idl.instructions.filter((i) => ix.name === i.name)[0];
        if (idlIx === undefined) {
            console.error("Invalid instruction given");
            return null;
        }
        const args = idlIx.args.map((idlField) => {
            return {
                name: idlField.name,
                type: InstructionFormatter.formatIdlType(idlField.type),
                data: InstructionFormatter.formatIdlData(idlField, ix.data[idlField.name], idl.types),
            };
        });
        const flatIdlAccounts = InstructionFormatter.flattenIdlAccounts(idlIx.accounts);
        const accounts = accountMetas.map((meta, idx) => {
            if (idx < flatIdlAccounts.length) {
                return {
                    name: flatIdlAccounts[idx].name,
                    ...meta,
                };
            }
            // "Remaining accounts" are unnamed in Anchor.
            else {
                return {
                    name: undefined,
                    ...meta,
                };
            }
        });
        return {
            args,
            accounts,
        };
    }
    static formatIdlType(idlType) {
        if (typeof idlType === "string") {
            return idlType;
        }
        if ("vec" in idlType) {
            return `Vec<${this.formatIdlType(idlType.vec)}>`;
        }
        if ("option" in idlType) {
            return `Option<${this.formatIdlType(idlType.option)}>`;
        }
        if ("defined" in idlType) {
            return idlType.defined;
        }
        if ("array" in idlType) {
            return `Array<${idlType.array[0]}; ${idlType.array[1]}>`;
        }
        throw new Error(`Unknown IDL type: ${idlType}`);
    }
    static formatIdlData(idlField, data, types) {
        if (typeof idlField.type === "string") {
            return data.toString();
        }
        // @ts-ignore
        if (idlField.type.vec) {
            // @ts-ignore
            return ("[" +
                data
                    // @ts-ignore
                    .map((d) => this.formatIdlData(
                // @ts-ignore
                { name: "", type: idlField.type.vec }, d))
                    .join(", ") +
                "]");
        }
        // @ts-ignore
        if (idlField.type.option) {
            // @ts-ignore
            return data === null
                ? "null"
                : this.formatIdlData(
                // @ts-ignore
                { name: "", type: idlField.type.option }, data);
        }
        // @ts-ignore
        if (idlField.type.defined) {
            if (types === undefined) {
                throw new Error("User defined types not provided");
            }
            // @ts-ignore
            const filtered = types.filter((t) => t.name === idlField.type.defined);
            if (filtered.length !== 1) {
                // @ts-ignore
                throw new Error(`Type not found: ${idlField.type.defined}`);
            }
            return InstructionFormatter.formatIdlDataDefined(filtered[0], data, types);
        }
        return "unknown";
    }
    static formatIdlDataDefined(typeDef, data, types) {
        if (typeDef.type.kind === "struct") {
            const struct = typeDef.type;
            const fields = Object.keys(data)
                .map((k) => {
                const f = struct.fields.filter((f) => f.name === k)[0];
                if (f === undefined) {
                    throw new Error("Unable to find type");
                }
                return (k + ": " + InstructionFormatter.formatIdlData(f, data[k], types));
            })
                .join(", ");
            return "{ " + fields + " }";
        }
        else {
            if (typeDef.type.variants.length === 0) {
                return "{}";
            }
            // Struct enum.
            if (typeDef.type.variants[0].name) {
                const variants = typeDef.type.variants;
                const variant = Object.keys(data)[0];
                const enumType = data[variant];
                const namedFields = Object.keys(enumType)
                    .map((f) => {
                    var _a;
                    const fieldData = enumType[f];
                    const idlField = (_a = variants[variant]) === null || _a === void 0 ? void 0 : _a.filter((v) => v.name === f)[0];
                    if (idlField === undefined) {
                        throw new Error("Unable to find variant");
                    }
                    return (f +
                        ": " +
                        InstructionFormatter.formatIdlData(idlField, fieldData, types));
                })
                    .join(", ");
                const variantName = camelCase(variant, { pascalCase: true });
                if (namedFields.length === 0) {
                    return variantName;
                }
                return `${variantName} { ${namedFields} }`;
            }
            // Tuple enum.
            else {
                // TODO.
                return "Tuple formatting not yet implemented";
            }
        }
    }
    static flattenIdlAccounts(accounts, prefix) {
        // @ts-ignore
        return accounts
            .map((account) => {
            const accName = sentenceCase(account.name);
            // @ts-ignore
            if (account.accounts) {
                const newPrefix = prefix ? `${prefix} > ${accName}` : accName;
                // @ts-ignore
                return InstructionFormatter.flattenIdlAccounts(
                // @ts-ignore
                account.accounts, newPrefix);
            }
            else {
                return {
                    ...account,
                    name: prefix ? `${prefix} > ${accName}` : accName,
                };
            }
        })
            .flat();
    }
}
function sentenceCase(field) {
    const result = field.replace(/([A-Z])/g, " $1");
    return result.charAt(0).toUpperCase() + result.slice(1);
}

/**
 * Number of bytes of the account discriminator.
 */
const ACCOUNT_DISCRIMINATOR_SIZE = 8;
/**
 * Encodes and decodes account objects.
 */
class AccountsCoder {
    constructor(idl) {
        if (idl.accounts === undefined) {
            this.accountLayouts = new Map();
            return;
        }
        const layouts = idl.accounts.map((acc) => {
            return [acc.name, IdlCoder.typeDefLayout(acc, idl.types)];
        });
        this.accountLayouts = new Map(layouts);
    }
    async encode(accountName, account) {
        const buffer = Buffer.alloc(1000); // TODO: use a tighter buffer.
        const layout = this.accountLayouts.get(accountName);
        if (!layout) {
            throw new Error(`Unknown account: ${accountName}`);
        }
        const len = layout.encode(account, buffer);
        let accountData = buffer.slice(0, len);
        let discriminator = AccountsCoder.accountDiscriminator(accountName);
        return Buffer.concat([discriminator, accountData]);
    }
    decode(accountName, ix) {
        // Chop off the discriminator before decoding.
        const data = ix.slice(ACCOUNT_DISCRIMINATOR_SIZE);
        const layout = this.accountLayouts.get(accountName);
        if (!layout) {
            throw new Error(`Unknown account: ${accountName}`);
        }
        return layout.decode(data);
    }
    /**
     * Calculates and returns a unique 8 byte discriminator prepended to all anchor accounts.
     *
     * @param name The name of the account to calculate the discriminator.
     */
    static accountDiscriminator(name) {
        return Buffer.from(sha256$1.digest(`account:${camelCase(name, { pascalCase: true })}`)).slice(0, ACCOUNT_DISCRIMINATOR_SIZE);
    }
}

class EventCoder {
    constructor(idl) {
        if (idl.events === undefined) {
            this.layouts = new Map();
            return;
        }
        const layouts = idl.events.map((event) => {
            let eventTypeDef = {
                name: event.name,
                type: {
                    kind: "struct",
                    fields: event.fields.map((f) => {
                        return { name: f.name, type: f.type };
                    }),
                },
            };
            return [event.name, IdlCoder.typeDefLayout(eventTypeDef, idl.types)];
        });
        // @ts-ignore
        this.layouts = new Map(layouts);
        this.discriminators = new Map(idl.events === undefined
            ? []
            : idl.events.map((e) => [
                base64$1.fromByteArray(eventDiscriminator(e.name)),
                e.name,
            ]));
    }
    decode(log) {
        let logArr;
        // This will throw if log length is not a multiple of 4.
        try {
            logArr = Buffer.from(base64$1.toByteArray(log));
        }
        catch (e) {
            return null;
        }
        const disc = base64$1.fromByteArray(logArr.slice(0, 8));
        // Only deserialize if the discriminator implies a proper event.
        const eventName = this.discriminators.get(disc);
        if (eventName === undefined) {
            return null;
        }
        const layout = this.layouts.get(eventName);
        if (!layout) {
            throw new Error(`Unknown event: ${eventName}`);
        }
        const data = layout.decode(logArr.slice(8));
        return { data, name: eventName };
    }
}
function eventDiscriminator(name) {
    return Buffer.from(sha256$1.digest(`event:${name}`)).slice(0, 8);
}

const _AVAILABLE_FEATURES = new Set(["anchor-deprecated-state"]);
const _FEATURES = new Map();
function set(key) {
    if (!_AVAILABLE_FEATURES.has(key)) {
        throw new Error("Invalid feature");
    }
    _FEATURES.set(key, true);
}
function isSet(key) {
    return _FEATURES.get(key) !== undefined;
}

var features = /*#__PURE__*/Object.freeze({
    __proto__: null,
    set: set,
    isSet: isSet
});

class StateCoder {
    constructor(idl) {
        if (idl.state === undefined) {
            throw new Error("Idl state not defined.");
        }
        this.layout = IdlCoder.typeDefLayout(idl.state.struct, idl.types);
    }
    async encode(name, account) {
        const buffer = Buffer.alloc(1000); // TODO: use a tighter buffer.
        const len = this.layout.encode(account, buffer);
        const disc = await stateDiscriminator(name);
        const accData = buffer.slice(0, len);
        return Buffer.concat([disc, accData]);
    }
    decode(ix) {
        // Chop off discriminator.
        const data = ix.slice(8);
        return this.layout.decode(data);
    }
}
// Calculates unique 8 byte discriminator prepended to all anchor state accounts.
async function stateDiscriminator(name) {
    let ns = isSet("anchor-deprecated-state") ? "account" : "state";
    return Buffer.from(sha256$1.digest(`${ns}:${name}`)).slice(0, 8);
}

/**
 * Coder provides a facade for encoding and decoding all IDL related objects.
 */
class Coder {
    constructor(idl) {
        this.instruction = new InstructionCoder(idl);
        this.accounts = new AccountsCoder(idl);
        this.events = new EventCoder(idl);
        if (idl.state) {
            this.state = new StateCoder(idl);
        }
    }
    sighash(nameSpace, ixName) {
        return sighash(nameSpace, ixName);
    }
}

function hash(data) {
    return sha256$1(data);
}

var sha256 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    hash: hash
});

function parseIdlErrors(idl) {
    const errors = new Map();
    if (idl.errors) {
        idl.errors.forEach((e) => {
            var _a;
            let msg = (_a = e.msg) !== null && _a !== void 0 ? _a : e.name;
            errors.set(e.code, msg);
        });
    }
    return errors;
}
// Allow either IdLInstruction or IdlStateMethod since the types share fields.
function toInstruction(idlIx, ...args) {
    if (idlIx.args.length != args.length) {
        throw new Error("Invalid argument length");
    }
    const ix = {};
    let idx = 0;
    idlIx.args.forEach((ixArg) => {
        ix[ixArg.name] = args[idx];
        idx += 1;
    });
    return ix;
}
// Throws error if any account required for the `ix` is not given.
function validateAccounts(ixAccounts, accounts = {}) {
    ixAccounts.forEach((acc) => {
        if ("accounts" in acc) {
            validateAccounts(acc.accounts, accounts[acc.name]);
        }
        else {
            if (accounts[acc.name] === undefined) {
                throw new Error(`Invalid arguments: ${acc.name} not provided.`);
            }
        }
    });
}
// Translates an address to a Pubkey.
function translateAddress(address) {
    if (typeof address === "string") {
        const pk = new PublicKey(address);
        return pk;
    }
    else if (address.constructor.prototype.constructor.name === "PublicKey") {
        return address;
    }
    else {
        throw new Error("Given address is not a PublicKey nor a string.");
    }
}

/**
 * Sends a transaction to a program with the given accounts and instruction
 * data.
 */
async function invoke(programId, accounts, data, provider) {
    programId = translateAddress(programId);
    if (!provider) {
        provider = getProvider();
    }
    const tx = new Transaction();
    tx.add(new TransactionInstruction({
        programId,
        keys: accounts !== null && accounts !== void 0 ? accounts : [],
        data,
    }));
    return await provider.send(tx);
}
const GET_MULTIPLE_ACCOUNTS_LIMIT = 99;
async function getMultipleAccounts(connection, publicKeys) {
    if (publicKeys.length <= GET_MULTIPLE_ACCOUNTS_LIMIT) {
        return await getMultipleAccountsCore(connection, publicKeys);
    }
    else {
        const batches = chunks(publicKeys, GET_MULTIPLE_ACCOUNTS_LIMIT);
        const results = await Promise.all(batches.map((batch) => getMultipleAccountsCore(connection, batch)));
        return results.flat();
    }
}
async function getMultipleAccountsCore(connection, publicKeys) {
    const args = [publicKeys.map((k) => k.toBase58()), { commitment: "recent" }];
    // @ts-ignore
    const res = await connection._rpcRequest("getMultipleAccounts", args);
    if (res.error) {
        throw new Error("failed to get info about accounts " +
            publicKeys.map((k) => k.toBase58()).join(", ") +
            ": " +
            res.error.message);
    }
    assert__default(typeof res.result !== "undefined");
    const accounts = [];
    for (const account of res.result.value) {
        let value = null;
        if (account === null) {
            accounts.push(null);
            continue;
        }
        if (res.result.value) {
            const { executable, owner, lamports, data } = account;
            assert__default(data[1] === "base64");
            value = {
                executable,
                owner: new PublicKey(owner),
                lamports,
                data: Buffer.from(data[0], "base64"),
            };
        }
        if (value === null) {
            throw new Error("Invalid response");
        }
        accounts.push(value);
    }
    return accounts.map((account, idx) => {
        if (account === null) {
            return null;
        }
        return {
            publicKey: publicKeys[idx],
            account,
        };
    });
}

var rpc = /*#__PURE__*/Object.freeze({
    __proto__: null,
    invoke: invoke,
    getMultipleAccounts: getMultipleAccounts
});

// Sync version of web3.PublicKey.createWithSeed.
function createWithSeedSync(fromPublicKey, seed, programId) {
    const buffer = Buffer.concat([
        fromPublicKey.toBuffer(),
        Buffer.from(seed),
        programId.toBuffer(),
    ]);
    const hash = sha256$1.digest(buffer);
    return new PublicKey(Buffer.from(hash));
}
// Sync version of web3.PublicKey.createProgramAddress.
function createProgramAddressSync(seeds, programId) {
    const MAX_SEED_LENGTH = 32;
    let buffer = Buffer.alloc(0);
    seeds.forEach(function (seed) {
        if (seed.length > MAX_SEED_LENGTH) {
            throw new TypeError(`Max seed length exceeded`);
        }
        buffer = Buffer.concat([buffer, toBuffer(seed)]);
    });
    buffer = Buffer.concat([
        buffer,
        programId.toBuffer(),
        Buffer.from("ProgramDerivedAddress"),
    ]);
    let hash = sha256$1(new Uint8Array(buffer));
    let publicKeyBytes = new BN(hash, 16).toArray(undefined, 32);
    if (PublicKey.isOnCurve(new Uint8Array(publicKeyBytes))) {
        throw new Error(`Invalid seeds, address must fall off the curve`);
    }
    return new PublicKey(publicKeyBytes);
}
// Sync version of web3.PublicKey.findProgramAddress.
function findProgramAddressSync(seeds, programId) {
    let nonce = 255;
    let address;
    while (nonce != 0) {
        try {
            const seedsWithNonce = seeds.concat(Buffer.from([nonce]));
            address = createProgramAddressSync(seedsWithNonce, programId);
        }
        catch (err) {
            if (err instanceof TypeError) {
                throw err;
            }
            nonce--;
            continue;
        }
        return [address, nonce];
    }
    throw new Error(`Unable to find a viable program address nonce`);
}
const toBuffer = (arr) => {
    if (arr instanceof Buffer) {
        return arr;
    }
    else if (arr instanceof Uint8Array) {
        return Buffer.from(arr.buffer, arr.byteOffset, arr.byteLength);
    }
    else {
        return Buffer.from(arr);
    }
};
async function associated(programId, ...args) {
    let seeds = [Buffer.from([97, 110, 99, 104, 111, 114])]; // b"anchor".
    args.forEach((arg) => {
        seeds.push(
        // @ts-ignore
        arg.buffer !== undefined ? arg : translateAddress(arg).toBuffer());
    });
    const [assoc] = await PublicKey.findProgramAddress(seeds, translateAddress(programId));
    return assoc;
}

var pubkey = /*#__PURE__*/Object.freeze({
    __proto__: null,
    createWithSeedSync: createWithSeedSync,
    createProgramAddressSync: createProgramAddressSync,
    findProgramAddressSync: findProgramAddressSync,
    associated: associated
});

function encode$3(data) {
    return data.reduce((str, byte) => str + byte.toString(16).padStart(2, "0"), "0x");
}
function decode$3(data) {
    if (data.indexOf("0x") === 0) {
        data = data.substr(2);
    }
    if (data.length % 2 === 1) {
        data = "0" + data;
    }
    let key = data.match(/.{2}/g);
    if (key === null) {
        return Buffer.from([]);
    }
    return Buffer.from(key.map((byte) => parseInt(byte, 16)));
}

var hex = /*#__PURE__*/Object.freeze({
    __proto__: null,
    encode: encode$3,
    decode: decode$3
});

function decode$2(array) {
    const decoder = new TextDecoder("utf-8") // Browser https://caniuse.com/textencoder
        ; // Node.
    return decoder.decode(array);
}
function encode$2(input) {
    const encoder = new TextEncoder() // Browser.
        ; // Node.
    return encoder.encode(input);
}

var utf8 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    decode: decode$2,
    encode: encode$2
});

function encode$1(data) {
    return bs58$1.encode(data);
}
function decode$1(data) {
    return bs58$1.decode(data);
}

var bs58 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    encode: encode$1,
    decode: decode$1
});

function encode(data) {
    return base64$1.fromByteArray(data);
}
function decode(data) {
    return Buffer.from(base64$1.toByteArray(data));
}

var base64 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    encode: encode,
    decode: decode
});

var index$1 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    hex: hex,
    utf8: utf8,
    bs58: bs58,
    base64: base64
});

const TOKEN_PROGRAM_ID = new PublicKey("TokenkegQfeZyiNwAJbNbGKPFXCWuBvf9Ss623VQ5DA");
const ASSOCIATED_PROGRAM_ID = new PublicKey("ATokenGPvbdGVxr1b2hvZbsiqW5xWH25efTNsLJA8knL");
async function associatedAddress({ mint, owner, }) {
    return (await PublicKey.findProgramAddress([owner.toBuffer(), TOKEN_PROGRAM_ID.toBuffer(), mint.toBuffer()], ASSOCIATED_PROGRAM_ID))[0];
}

var token = /*#__PURE__*/Object.freeze({
    __proto__: null,
    associatedAddress: associatedAddress
});

var index = /*#__PURE__*/Object.freeze({
    __proto__: null,
    sha256: sha256,
    rpc: rpc,
    publicKey: pubkey,
    bytes: index$1,
    token: token,
    features: features
});

// Deterministic IDL address as a function of the program id.
async function idlAddress(programId) {
    const base = (await PublicKey.findProgramAddress([], programId))[0];
    return await PublicKey.createWithSeed(base, seed(), programId);
}
// Seed for generating the idlAddress.
function seed() {
    return "anchor:idl";
}
const IDL_ACCOUNT_LAYOUT = borsh.struct([
    borsh.publicKey("authority"),
    borsh.vecU8("data"),
]);
function decodeIdlAccount(data) {
    return IDL_ACCOUNT_LAYOUT.decode(data);
}

function splitArgsAndCtx(idlIx, args) {
    var _a, _b;
    let options = {};
    const inputLen = idlIx.args ? idlIx.args.length : 0;
    if (args.length > inputLen) {
        if (args.length !== inputLen + 1) {
            throw new Error(`provided too many arguments ${args} to instruction ${idlIx === null || idlIx === void 0 ? void 0 : idlIx.name} expecting: ${(_b = (_a = idlIx.args) === null || _a === void 0 ? void 0 : _a.map((a) => a.name)) !== null && _b !== void 0 ? _b : []}`);
        }
        options = args.pop();
    }
    return [args, options];
}

class InstructionNamespaceFactory {
    static build(idlIx, encodeFn, programId) {
        if (idlIx.name === "_inner") {
            throw new IdlError("the _inner name is reserved");
        }
        const ix = (...args) => {
            const [ixArgs, ctx] = splitArgsAndCtx(idlIx, [...args]);
            validateAccounts(idlIx.accounts, ctx.accounts);
            validateInstruction(idlIx, ...args);
            const keys = ix.accounts(ctx.accounts);
            if (ctx.remainingAccounts !== undefined) {
                keys.push(...ctx.remainingAccounts);
            }
            if (isSet("debug-logs")) {
                console.log("Outgoing account metas:", keys);
            }
            return new TransactionInstruction({
                keys,
                programId,
                data: encodeFn(idlIx.name, toInstruction(idlIx, ...ixArgs)),
            });
        };
        // Utility fn for ordering the accounts for this instruction.
        ix["accounts"] = (accs) => {
            return InstructionNamespaceFactory.accountsArray(accs, idlIx.accounts, idlIx.name);
        };
        return ix;
    }
    static accountsArray(ctx, accounts, ixName) {
        if (!ctx) {
            return [];
        }
        return accounts
            .map((acc) => {
            // Nested accounts.
            const nestedAccounts = "accounts" in acc ? acc.accounts : undefined;
            if (nestedAccounts !== undefined) {
                const rpcAccs = ctx[acc.name];
                return InstructionNamespaceFactory.accountsArray(rpcAccs, acc.accounts, ixName).flat();
            }
            else {
                const account = acc;
                let pubkey;
                try {
                    pubkey = translateAddress(ctx[acc.name]);
                }
                catch (err) {
                    throw new Error(`Wrong input type for account "${acc.name}" in the instruction accounts object${ixName !== undefined ? ' for instruction "' + ixName + '"' : ""}. Expected PublicKey or string.`);
                }
                return {
                    pubkey,
                    isWritable: account.isMut,
                    isSigner: account.isSigner,
                };
            }
        })
            .flat();
    }
}
// Throws error if any argument required for the `ix` is not given.
function validateInstruction(ix, ...args) {
    // todo
}

class RpcFactory {
    static build(idlIx, txFn, idlErrors, provider) {
        const rpc = async (...args) => {
            const tx = txFn(...args);
            const [, ctx] = splitArgsAndCtx(idlIx, [...args]);
            try {
                const txSig = await provider.send(tx, ctx.signers, ctx.options);
                return txSig;
            }
            catch (err) {
                if (isSet("debug-logs")) {
                    console.log("Translating error:", err);
                }
                let translatedErr = ProgramError.parse(err, idlErrors);
                if (translatedErr === null) {
                    throw err;
                }
                throw translatedErr;
            }
        };
        return rpc;
    }
}

class TransactionFactory {
    static build(idlIx, ixFn) {
        const txFn = (...args) => {
            var _a, _b, _c;
            const [, ctx] = splitArgsAndCtx(idlIx, [...args]);
            const tx = new Transaction();
            if (ctx.preInstructions && ctx.instructions) {
                throw new Error("instructions is deprecated, use preInstructions");
            }
            (_a = ctx.preInstructions) === null || _a === void 0 ? void 0 : _a.forEach((ix) => tx.add(ix));
            (_b = ctx.instructions) === null || _b === void 0 ? void 0 : _b.forEach((ix) => tx.add(ix));
            tx.add(ixFn(...args));
            (_c = ctx.postInstructions) === null || _c === void 0 ? void 0 : _c.forEach((ix) => tx.add(ix));
            return tx;
        };
        return txFn;
    }
}

class StateFactory {
    static build(idl, coder, programId, provider) {
        if (idl.state === undefined) {
            return undefined;
        }
        return new StateClient(idl, programId, provider, coder);
    }
}
/**
 * A client for the program state. Similar to the base [[Program]] client,
 * one can use this to send transactions and read accounts for the state
 * abstraction.
 */
class StateClient {
    constructor(idl, programId,
    /**
     * Returns the client's wallet and network provider.
     */
    provider = getProvider(),
    /**
     * Returns the coder.
     */
    coder = new Coder(idl)) {
        this.provider = provider;
        this.coder = coder;
        this._idl = idl;
        this._programId = programId;
        this._address = programStateAddress(programId);
        this._sub = null;
        // Build namespaces.
        const [instruction, transaction, rpc] = (() => {
            var _a;
            let instruction = {};
            let transaction = {};
            let rpc = {};
            (_a = idl.state) === null || _a === void 0 ? void 0 : _a.methods.forEach((m) => {
                // Build instruction method.
                const ixItem = InstructionNamespaceFactory.build(m, (ixName, ix) => coder.instruction.encodeState(ixName, ix), programId);
                ixItem["accounts"] = (accounts) => {
                    const keys = stateInstructionKeys(programId, provider, m, accounts);
                    return keys.concat(InstructionNamespaceFactory.accountsArray(accounts, m.accounts, m.name));
                };
                // Build transaction method.
                const txItem = TransactionFactory.build(m, ixItem);
                // Build RPC method.
                const rpcItem = RpcFactory.build(m, txItem, parseIdlErrors(idl), provider);
                // Attach them all to their respective namespaces.
                const name = camelCase(m.name);
                instruction[name] = ixItem;
                transaction[name] = txItem;
                rpc[name] = rpcItem;
            });
            return [
                instruction,
                transaction,
                rpc,
            ];
        })();
        this.instruction = instruction;
        this.transaction = transaction;
        this.rpc = rpc;
    }
    /**
     * Returns the program ID owning the state.
     */
    get programId() {
        return this._programId;
    }
    /**
     * Returns the deserialized state account.
     */
    async fetch() {
        const addr = this.address();
        const accountInfo = await this.provider.connection.getAccountInfo(addr);
        if (accountInfo === null) {
            throw new Error(`Account does not exist ${addr.toString()}`);
        }
        // Assert the account discriminator is correct.
        const state = this._idl.state;
        if (!state) {
            throw new Error("State is not specified in IDL.");
        }
        const expectedDiscriminator = await stateDiscriminator(state.struct.name);
        if (expectedDiscriminator.compare(accountInfo.data.slice(0, 8))) {
            throw new Error("Invalid account discriminator");
        }
        return this.coder.state.decode(accountInfo.data);
    }
    /**
     * Returns the state address.
     */
    address() {
        return this._address;
    }
    /**
     * Returns an `EventEmitter` with a `"change"` event that's fired whenever
     * the state account cahnges.
     */
    subscribe(commitment) {
        if (this._sub !== null) {
            return this._sub.ee;
        }
        const ee = new EventEmitter();
        const listener = this.provider.connection.onAccountChange(this.address(), (acc) => {
            const account = this.coder.state.decode(acc.data);
            ee.emit("change", account);
        }, commitment);
        this._sub = {
            ee,
            listener,
        };
        return ee;
    }
    /**
     * Unsubscribes to state changes.
     */
    unsubscribe() {
        if (this._sub !== null) {
            this.provider.connection
                .removeAccountChangeListener(this._sub.listener)
                .then(async () => {
                this._sub = null;
            })
                .catch(console.error);
        }
    }
}
// Calculates the deterministic address of the program's "state" account.
function programStateAddress(programId) {
    let [registrySigner] = findProgramAddressSync([], programId);
    return createWithSeedSync(registrySigner, "unversioned", programId);
}
// Returns the common keys that are prepended to all instructions targeting
// the "state" of a program.
function stateInstructionKeys(programId, provider, m, accounts) {
    if (m.name === "new") {
        // Ctor `new` method.
        const [programSigner] = findProgramAddressSync([], programId);
        return [
            {
                pubkey: provider.wallet.publicKey,
                isWritable: false,
                isSigner: true,
            },
            {
                pubkey: programStateAddress(programId),
                isWritable: true,
                isSigner: false,
            },
            { pubkey: programSigner, isWritable: false, isSigner: false },
            {
                pubkey: SystemProgram.programId,
                isWritable: false,
                isSigner: false,
            },
            { pubkey: programId, isWritable: false, isSigner: false },
        ];
    }
    else {
        validateAccounts(m.accounts, accounts);
        return [
            {
                pubkey: programStateAddress(programId),
                isWritable: true,
                isSigner: false,
            },
        ];
    }
}

class AccountFactory {
    static build(idl, coder, programId, provider) {
        var _a;
        const accountFns = {};
        (_a = idl.accounts) === null || _a === void 0 ? void 0 : _a.forEach((idlAccount) => {
            const name = camelCase(idlAccount.name);
            accountFns[name] = new AccountClient(idl, idlAccount, programId, provider, coder);
        });
        return accountFns;
    }
}
class AccountClient {
    constructor(idl, idlAccount, programId, provider, coder) {
        var _a;
        this._idlAccount = idlAccount;
        this._programId = programId;
        this._provider = provider !== null && provider !== void 0 ? provider : getProvider();
        this._coder = coder !== null && coder !== void 0 ? coder : new Coder(idl);
        this._size =
            ACCOUNT_DISCRIMINATOR_SIZE + ((_a = accountSize(idl, idlAccount)) !== null && _a !== void 0 ? _a : 0);
    }
    /**
     * Returns the number of bytes in this account.
     */
    get size() {
        return this._size;
    }
    /**
     * Returns the program ID owning all accounts.
     */
    get programId() {
        return this._programId;
    }
    /**
     * Returns the client's wallet and network provider.
     */
    get provider() {
        return this._provider;
    }
    /**
     * Returns the coder.
     */
    get coder() {
        return this._coder;
    }
    /**
     * Returns a deserialized account, returning null if it doesn't exist.
     *
     * @param address The address of the account to fetch.
     */
    async fetchNullable(address) {
        const accountInfo = await this._provider.connection.getAccountInfo(translateAddress(address));
        if (accountInfo === null) {
            return null;
        }
        // Assert the account discriminator is correct.
        const discriminator = AccountsCoder.accountDiscriminator(this._idlAccount.name);
        if (discriminator.compare(accountInfo.data.slice(0, 8))) {
            throw new Error("Invalid account discriminator");
        }
        return this._coder.accounts.decode(this._idlAccount.name, accountInfo.data);
    }
    /**
     * Returns a deserialized account.
     *
     * @param address The address of the account to fetch.
     */
    async fetch(address) {
        const data = await this.fetchNullable(address);
        if (data === null) {
            throw new Error(`Account does not exist ${address.toString()}`);
        }
        return data;
    }
    /**
     * Returns multiple deserialized accounts.
     * Accounts not found or with wrong discriminator are returned as null.
     *
     * @param addresses The addresses of the accounts to fetch.
     */
    async fetchMultiple(addresses) {
        const accounts = await getMultipleAccounts(this._provider.connection, addresses.map((address) => translateAddress(address)));
        const discriminator = AccountsCoder.accountDiscriminator(this._idlAccount.name);
        // Decode accounts where discriminator is correct, null otherwise
        return accounts.map((account) => {
            if (account == null) {
                return null;
            }
            if (discriminator.compare(account === null || account === void 0 ? void 0 : account.account.data.slice(0, 8))) {
                return null;
            }
            return this._coder.accounts.decode(this._idlAccount.name, account === null || account === void 0 ? void 0 : account.account.data);
        });
    }
    /**
     * Returns all instances of this account type for the program.
     *
     * @param filters User-provided filters to narrow the results from `connection.getProgramAccounts`.
     *
     *                When filters are not defined this method returns all
     *                the account instances.
     *
     *                When filters are of type `Buffer`, the filters are appended
     *                after the discriminator.
     *
     *                When filters are of type `GetProgramAccountsFilter[]`,
     *                filters are appended after the discriminator filter.
     */
    async all(filters) {
        const discriminator = AccountsCoder.accountDiscriminator(this._idlAccount.name);
        let resp = await this._provider.connection.getProgramAccounts(this._programId, {
            commitment: this._provider.connection.commitment,
            filters: [
                {
                    memcmp: {
                        offset: 0,
                        bytes: bs58$1.encode(filters instanceof Buffer
                            ? Buffer.concat([discriminator, filters])
                            : discriminator),
                    },
                },
                ...(Array.isArray(filters) ? filters : []),
            ],
        });
        return resp.map(({ pubkey, account }) => {
            return {
                publicKey: pubkey,
                account: this._coder.accounts.decode(this._idlAccount.name, account.data),
            };
        });
    }
    /**
     * Returns an `EventEmitter` emitting a "change" event whenever the account
     * changes.
     */
    subscribe(address, commitment) {
        const sub = subscriptions.get(address.toString());
        if (sub) {
            return sub.ee;
        }
        const ee = new EventEmitter();
        address = translateAddress(address);
        const listener = this._provider.connection.onAccountChange(address, (acc) => {
            const account = this._coder.accounts.decode(this._idlAccount.name, acc.data);
            ee.emit("change", account);
        }, commitment);
        subscriptions.set(address.toString(), {
            ee,
            listener,
        });
        return ee;
    }
    /**
     * Unsubscribes from the account at the given address.
     */
    async unsubscribe(address) {
        let sub = subscriptions.get(address.toString());
        if (!sub) {
            console.warn("Address is not subscribed");
            return;
        }
        if (subscriptions) {
            await this._provider.connection
                .removeAccountChangeListener(sub.listener)
                .then(() => {
                subscriptions.delete(address.toString());
            })
                .catch(console.error);
        }
    }
    /**
     * Returns an instruction for creating this account.
     */
    async createInstruction(signer, sizeOverride) {
        const size = this.size;
        return SystemProgram.createAccount({
            fromPubkey: this._provider.wallet.publicKey,
            newAccountPubkey: signer.publicKey,
            space: sizeOverride !== null && sizeOverride !== void 0 ? sizeOverride : size,
            lamports: await this._provider.connection.getMinimumBalanceForRentExemption(sizeOverride !== null && sizeOverride !== void 0 ? sizeOverride : size),
            programId: this._programId,
        });
    }
    /**
     * @deprecated since version 14.0.
     *
     * Function returning the associated account. Args are keys to associate.
     * Order matters.
     */
    async associated(...args) {
        const addr = await this.associatedAddress(...args);
        return await this.fetch(addr);
    }
    /**
     * @deprecated since version 14.0.
     *
     * Function returning the associated address. Args are keys to associate.
     * Order matters.
     */
    async associatedAddress(...args) {
        return await associated(this._programId, ...args);
    }
}
// Tracks all subscriptions.
const subscriptions = new Map();

const LOG_START_INDEX = "Program log: ".length;
class EventManager {
    constructor(programId, provider, coder) {
        this._programId = programId;
        this._provider = provider;
        this._eventParser = new EventParser(programId, coder);
        this._eventCallbacks = new Map();
        this._eventListeners = new Map();
        this._listenerIdCount = 0;
    }
    addEventListener(eventName, callback) {
        var _a;
        let listener = this._listenerIdCount;
        this._listenerIdCount += 1;
        // Store the listener into the event map.
        if (!(eventName in this._eventCallbacks)) {
            this._eventListeners.set(eventName, []);
        }
        this._eventListeners.set(eventName, ((_a = this._eventListeners.get(eventName)) !== null && _a !== void 0 ? _a : []).concat(listener));
        // Store the callback into the listener map.
        this._eventCallbacks.set(listener, [eventName, callback]);
        // Create the subscription singleton, if needed.
        if (this._onLogsSubscriptionId !== undefined) {
            return listener;
        }
        this._onLogsSubscriptionId = this._provider.connection.onLogs(this._programId, (logs, ctx) => {
            if (logs.err) {
                console.error(logs);
                return;
            }
            this._eventParser.parseLogs(logs.logs, (event) => {
                const allListeners = this._eventListeners.get(event.name);
                if (allListeners) {
                    allListeners.forEach((listener) => {
                        const listenerCb = this._eventCallbacks.get(listener);
                        if (listenerCb) {
                            const [, callback] = listenerCb;
                            callback(event.data, ctx.slot);
                        }
                    });
                }
            });
        });
        return listener;
    }
    async removeEventListener(listener) {
        // Get the callback.
        const callback = this._eventCallbacks.get(listener);
        if (!callback) {
            throw new Error(`Event listener ${listener} doesn't exist!`);
        }
        const [eventName] = callback;
        // Get the listeners.
        let listeners = this._eventListeners.get(eventName);
        if (!listeners) {
            throw new Error(`Event listeners don't exist for ${eventName}!`);
        }
        // Update both maps.
        this._eventCallbacks.delete(listener);
        listeners = listeners.filter((l) => l !== listener);
        if (listeners.length === 0) {
            this._eventListeners.delete(eventName);
        }
        // Kill the websocket connection if all listeners have been removed.
        if (this._eventCallbacks.size == 0) {
            assert.ok(this._eventListeners.size === 0);
            if (this._onLogsSubscriptionId !== undefined) {
                await this._provider.connection.removeOnLogsListener(this._onLogsSubscriptionId);
                this._onLogsSubscriptionId = undefined;
            }
        }
    }
}
class EventParser {
    constructor(programId, coder) {
        this.coder = coder;
        this.programId = programId;
    }
    // Each log given, represents an array of messages emitted by
    // a single transaction, which can execute many different programs across
    // CPI boundaries. However, the subscription is only interested in the
    // events emitted by *this* program. In achieving this, we keep track of the
    // program execution context by parsing each log and looking for a CPI
    // `invoke` call. If one exists, we know a new program is executing. So we
    // push the programId onto a stack and switch the program context. This
    // allows us to track, for a given log, which program was executing during
    // its emission, thereby allowing us to know if a given log event was
    // emitted by *this* program. If it was, then we parse the raw string and
    // emit the event if the string matches the event being subscribed to.
    parseLogs(logs, callback) {
        const logScanner = new LogScanner(logs);
        const execution = new ExecutionContext(logScanner.next());
        let log = logScanner.next();
        while (log !== null) {
            let [event, newProgram, didPop] = this.handleLog(execution, log);
            if (event) {
                callback(event);
            }
            if (newProgram) {
                execution.push(newProgram);
            }
            if (didPop) {
                execution.pop();
            }
            log = logScanner.next();
        }
    }
    // Main log handler. Returns a three element array of the event, the
    // next program that was invoked for CPI, and a boolean indicating if
    // a program has completed execution (and thus should be popped off the
    // execution stack).
    handleLog(execution, log) {
        // Executing program is this program.
        if (execution.stack.length > 0 &&
            execution.program() === this.programId.toString()) {
            return this.handleProgramLog(log);
        }
        // Executing program is not this program.
        else {
            return [null, ...this.handleSystemLog(log)];
        }
    }
    // Handles logs from *this* program.
    handleProgramLog(log) {
        // This is a `msg!` log.
        if (log.startsWith("Program log:")) {
            const logStr = log.slice(LOG_START_INDEX);
            const event = this.coder.events.decode(logStr);
            return [event, null, false];
        }
        // System log.
        else {
            return [null, ...this.handleSystemLog(log)];
        }
    }
    // Handles logs when the current program being executing is *not* this.
    handleSystemLog(log) {
        // System component.
        const logStart = log.split(":")[0];
        // Did the program finish executing?
        if (logStart.match(/^Program (.*) success/g) !== null) {
            return [null, true];
            // Recursive call.
        }
        else if (logStart.startsWith(`Program ${this.programId.toString()} invoke`)) {
            return [this.programId.toString(), false];
        }
        // CPI call.
        else if (logStart.includes("invoke")) {
            return ["cpi", false]; // Any string will do.
        }
        else {
            return [null, false];
        }
    }
}
// Stack frame execution context, allowing one to track what program is
// executing for a given log.
class ExecutionContext {
    constructor(log) {
        var _a;
        // Assumes the first log in every transaction is an `invoke` log from the
        // runtime.
        const program = (_a = /^Program (.*) invoke.*$/g.exec(log)) === null || _a === void 0 ? void 0 : _a[1];
        if (!program) {
            throw new Error(`Could not find program invocation log line`);
        }
        this.stack = [program];
    }
    program() {
        assert.ok(this.stack.length > 0);
        return this.stack[this.stack.length - 1];
    }
    push(newProgram) {
        this.stack.push(newProgram);
    }
    pop() {
        assert.ok(this.stack.length > 0);
        this.stack.pop();
    }
}
class LogScanner {
    constructor(logs) {
        this.logs = logs;
    }
    next() {
        if (this.logs.length === 0) {
            return null;
        }
        let l = this.logs[0];
        this.logs = this.logs.slice(1);
        return l;
    }
}

class SimulateFactory {
    static build(idlIx, txFn, idlErrors, provider, coder, programId, idl) {
        const simulate = async (...args) => {
            const tx = txFn(...args);
            const [, ctx] = splitArgsAndCtx(idlIx, [...args]);
            let resp = undefined;
            try {
                resp = await provider.simulate(tx, ctx.signers, ctx.options);
            }
            catch (err) {
                if (isSet("debug-logs")) {
                    console.log("Translating error:", err);
                }
                let translatedErr = ProgramError.parse(err, idlErrors);
                if (translatedErr === null) {
                    throw err;
                }
                throw translatedErr;
            }
            if (resp === undefined) {
                throw new Error("Unable to simulate transaction");
            }
            if (resp.value.err) {
                throw new Error(`Simulate error: ${resp.value.err.toString()}`);
            }
            const logs = resp.value.logs;
            if (!logs) {
                throw new Error("Simulated logs not found");
            }
            const events = [];
            if (idl.events) {
                let parser = new EventParser(programId, coder);
                parser.parseLogs(logs, (event) => {
                    events.push(event);
                });
            }
            return { events, raw: logs };
        };
        return simulate;
    }
}

class NamespaceFactory {
    /**
     * Generates all namespaces for a given program.
     */
    static build(idl, coder, programId, provider) {
        const rpc = {};
        const instruction = {};
        const transaction = {};
        const simulate = {};
        const idlErrors = parseIdlErrors(idl);
        const state = StateFactory.build(idl, coder, programId, provider);
        idl.instructions.forEach((idlIx) => {
            const ixItem = InstructionNamespaceFactory.build(idlIx, (ixName, ix) => coder.instruction.encode(ixName, ix), programId);
            const txItem = TransactionFactory.build(idlIx, ixItem);
            const rpcItem = RpcFactory.build(idlIx, txItem, idlErrors, provider);
            const simulateItem = SimulateFactory.build(idlIx, txItem, idlErrors, provider, coder, programId, idl);
            const name = camelCase(idlIx.name);
            instruction[name] = ixItem;
            transaction[name] = txItem;
            rpc[name] = rpcItem;
            simulate[name] = simulateItem;
        });
        const account = idl.accounts
            ? AccountFactory.build(idl, coder, programId, provider)
            : {};
        return [
            rpc,
            instruction,
            transaction,
            account,
            simulate,
            state,
        ];
    }
}

/**
 * ## Program
 *
 * Program provides the IDL deserialized client representation of an Anchor
 * program.
 *
 * This API is the one stop shop for all things related to communicating with
 * on-chain programs. Among other things, one can send transactions, fetch
 * deserialized accounts, decode instruction data, subscribe to account
 * changes, and listen to events.
 *
 * In addition to field accessors and methods, the object provides a set of
 * dynamically generated properties, also known as namespaces, that
 * map one-to-one to program methods and accounts. These namespaces generally
 *  can be used as follows:
 *
 * ## Usage
 *
 * ```javascript
 * program.<namespace>.<program-specific-method>
 * ```
 *
 * API specifics are namespace dependent. The examples used in the documentation
 * below will refer to the two counter examples found
 * [here](https://github.com/project-serum/anchor#examples).
 */
class Program {
    /**
     * @param idl       The interface definition.
     * @param programId The on-chain address of the program.
     * @param provider  The network and wallet context to use. If not provided
     *                  then uses [[getProvider]].
     */
    constructor(idl, programId, provider) {
        programId = translateAddress(programId);
        if (!provider) {
            provider = getProvider();
        }
        // Fields.
        this._idl = idl;
        this._provider = provider;
        this._programId = programId;
        this._coder = new Coder(idl);
        this._events = new EventManager(this._programId, provider, this._coder);
        // Dynamic namespaces.
        const [rpc, instruction, transaction, account, simulate, state,] = NamespaceFactory.build(idl, this._coder, programId, provider);
        this.rpc = rpc;
        this.instruction = instruction;
        this.transaction = transaction;
        this.account = account;
        this.simulate = simulate;
        this.state = state;
    }
    /**
     * Address of the program.
     */
    get programId() {
        return this._programId;
    }
    /**
     * IDL defining the program's interface.
     */
    get idl() {
        return this._idl;
    }
    /**
     * Coder for serializing requests.
     */
    get coder() {
        return this._coder;
    }
    /**
     * Wallet and network provider.
     */
    get provider() {
        return this._provider;
    }
    /**
     * Generates a Program client by fetching the IDL from the network.
     *
     * In order to use this method, an IDL must have been previously initialized
     * via the anchor CLI's `anchor idl init` command.
     *
     * @param programId The on-chain address of the program.
     * @param provider  The network and wallet context.
     */
    static async at(address, provider) {
        const programId = translateAddress(address);
        const idl = await Program.fetchIdl(programId, provider);
        if (!idl) {
            throw new Error(`IDL not found for program: ${address.toString()}`);
        }
        return new Program(idl, programId, provider);
    }
    /**
     * Fetches an idl from the blockchain.
     *
     * In order to use this method, an IDL must have been previously initialized
     * via the anchor CLI's `anchor idl init` command.
     *
     * @param programId The on-chain address of the program.
     * @param provider  The network and wallet context.
     */
    static async fetchIdl(address, provider) {
        provider = provider !== null && provider !== void 0 ? provider : getProvider();
        const programId = translateAddress(address);
        const idlAddr = await idlAddress(programId);
        const accountInfo = await provider.connection.getAccountInfo(idlAddr);
        if (!accountInfo) {
            return null;
        }
        // Chop off account discriminator.
        let idlAccount = decodeIdlAccount(accountInfo.data.slice(8));
        const inflatedIdl = inflate(idlAccount.data);
        return JSON.parse(decode$2(inflatedIdl));
    }
    /**
     * Invokes the given callback every time the given event is emitted.
     *
     * @param eventName The PascalCase name of the event, provided by the IDL.
     * @param callback  The function to invoke whenever the event is emitted from
     *                  program logs.
     */
    addEventListener(eventName, callback) {
        return this._events.addEventListener(eventName, callback);
    }
    /**
     * Unsubscribes from the given eventName.
     */
    async removeEventListener(listener) {
        return await this._events.removeEventListener(listener);
    }
}

export { AccountClient, AccountsCoder, Coder, EventCoder, EventManager, EventParser, IdlError, InstructionCoder, Program, ProgramError, Provider, StateClient, StateCoder, getProvider, parseIdlErrors, setProvider, splitArgsAndCtx, toInstruction, translateAddress, index as utils, validateAccounts };
//# sourceMappingURL=index.js.map