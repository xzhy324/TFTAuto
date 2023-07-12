import logging
from time import sleep
from aip import AipOcr
from io import BytesIO
import pyautogui as pag
from pynput import keyboard

# 初始化对百度api的连接
_APP_ID = '26013200'
_API_KEY = 'OSWuIzTPnunvVbXTosQEtZ8i'
_SECRET_KEY = "	TDODzQaboN1SF36uXPf2vQDChEsuKu5k"
_client = AipOcr(_APP_ID, _API_KEY, _SECRET_KEY)


#  获取图片并返回识别结果
def getFiveTitles() -> [str]:
    # 1080p分辨率，无边框显示下，英雄名字定位为480 1040 1475 1065
    img = pag.screenshot().crop((480, 1040, 1475, 1065))
    imgByteArr = BytesIO()
    img.save(imgByteArr, format='PNG')
    data: dict = _client.basicGeneral(imgByteArr.getvalue())
    if 'words_result' in data:
        data = data["words_result"]
    else:
        logging.error("cannot recognize words_result from baidu API")
        return []
    return [item["words"] for item in data if not ('0' <= item["words"][-1] <= '9')]
