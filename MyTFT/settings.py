import logging

logLevel = logging.INFO

def settings_init():
    logging.basicConfig(level=logLevel,  # 设置日志的默认响应级别为INFO,按需要更改成为debug，默认等级为warning
                        format='[%(asctime)s] %(filename)s:%(lineno)s - [%(levelname)s] %(message)s')  # 规定logging的输出格式