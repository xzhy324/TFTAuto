**云顶官方接口**：

https://lol.qq.com/tft/js/api.js

# 需求分析
## 阶段1. 制作一个能够筛选英雄的GUI界面
1. 完成英雄列表及基本信息的拉取
2. 制作筛选界面
3. 设想：
   1. updater.py 从api中爬取原始信息的爬虫
   2. TFTDB.py 数据库类
   3. main.py 主控逻辑
   4. settings.py 保存基本配置
   5. GUI.Form_hero.py 英雄筛选器的GUI实现

### 架构示意
main.py 作为程序入口，依次完成如下功能
1. 加载配置项settings.py
2. 初始化数据库对象TFTDB
3. 加载英雄筛选器的GUI界面

### 开发进度
已经开发的部分：api的信息拉取以及筛选函数，gui的大部分
待开发的部分：gui中的搜索功能以及英雄头像显示功能


## 阶段2：客户端的ocr识别

## 阶段3：自动拿牌与卖牌的逻辑