# from scipy. import curve_fit # type: ignore
from scipy.optimize import curve_fit
import numpy as np

import pandas as pd
from scipy.optimize import curve_fit
import matplotlib.pyplot as plt

# 读取CSV文件
data = pd.read_csv('charts_56000.csv')  # 替换为你的CSV文件路径

# 提取x和y列
x_data = data['x'].values  # 假设x列名为 'x'
y_data = data['y'].values  # 假设y列名为 'y'


# 目标数据
# x_data = np.array([3.6, 16.0, 83.2, 56239.8, 584242.3, 3288509.1])
# y_data = np.array([5, 10, 20, 80, 90, 95])

# 定义拟合的模型
def model(x, a, b, c):
    return a - (b / (c + x))

# 使用curve_fit进行拟合
params, covariance = curve_fit(model, x_data, y_data, p0=[7.96449005e+08, 9.33790152e+11, 1.40880178e+03])

# 拟合的参数值
print(params)

# 获取拟合后的y值
y_fit = model(x_data, *params)

# 绘制原始数据和拟合曲线
plt.figure(figsize=(10, 6))
plt.scatter(x_data, y_data, color='blue', label='Origin')  # 原始数据
plt.plot(x_data, y_fit, color='red', label='Fit')  # 拟合后的曲线

# 设置图像标题和标签
plt.title("Curve Fit")
plt.xlabel("x")
plt.ylabel("y")
plt.legend()
plt.grid(True)

# 显示图像
plt.show()