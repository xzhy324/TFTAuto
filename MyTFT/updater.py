import requests, json

_headers = {
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36'}


# 根据api提供的json文件特点构造的request请求函数
def __myRequestGet(url) -> [dict]:
    rq = requests.get(url=url, headers=_headers)
    ret = json.loads(rq.text)
    return ret['data']


# 获取弈子信息
def getChessList() -> [dict]:
    rawData = __myRequestGet("https://game.gtimg.cn/images/lol/act/img/tft/js/chess.js")
    ret = []
    for data in rawData:
        dic = dict.fromkeys(("title", "displayName", "price", "job", "race"))
        dic["title"] = data["title"]
        dic["displayName"] = data["displayName"]
        dic["price"] = int(data["price"])
        dic["jobIds"] = data["jobIds"]
        dic["raceIds"] = data["raceIds"]
        ret.append(dic)
    return ret


# 获取种族列表
def getRaceList() -> [dict]:
    return __myRequestGet("https://game.gtimg.cn/images/lol/act/img/tft/js/race.js")


# 获取职业列表
def getJobList() -> [dict]:
    return __myRequestGet("https://game.gtimg.cn/images/lol/act/img/tft/js/job.js")
