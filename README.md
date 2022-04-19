**云顶官方接口**：

https://lol.qq.com/tft/js/api.js

# 需求分析
## 阶段1. 制作一个能够筛选英雄的GUI界面
1. 完成英雄列表及基本信息的拉取
2. 制作筛选界面
3. 设想：
   1. updater.py完成信息的获取和标准化
   2. TFTDB.py 构造了信息的保存类
   3. main.py主控逻辑
   4. settings.py 保存常量以及初始化日志的基本配置
   5. chess_filter_form.py 一个pyqtGUI

已经开发的部分：api的信息拉取以及筛选函数
待开发的部分：gui


## 阶段2：完成客户端的ocr识别

## 阶段3：完成鼠标事件的响应