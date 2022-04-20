import logging

logLevel = logging.INFO  # 控制日志的输出等级，可选项[DEBUG,INFO,WARNING,ERROR]
myBuild = ['布兰德','泰隆','蕾欧娜','德莱文','辛德拉','泽丽','卡萨丁','斯维因']


def settings_init():
    logging.basicConfig(level=logLevel,  # 设置日志的默认响应级别为INFO,按需要更改成为debug，默认等级为warning
                        format='[%(asctime)s] %(filename)s:%(lineno)s - [%(levelname)s] %(message)s')  # 规定logging的输出格式