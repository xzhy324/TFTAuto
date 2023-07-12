import spider
import logging


class TFTDB:
    def __init__(self):
        logging.info("fetching data from tft api!")
        self.chessList = spider.getChessList()
        self.raceList = spider.getRaceList()
        self.jobList = spider.getJobList()
        logging.info("data successfully fetched!")

    def printTFTDB(self):
        print("printing TFTDB==========================")
        print(self.chessList)
        print(self.raceList)
        print(self.jobList)
        print("========================================")

    # 判断形如 "7,5,3"的字符串是不是"2,7,3,5"的数字意义上的子串
    def isSubIDString(self, pattern: str, src: str) -> bool:
        p_nums = pattern.split(',')
        s_nums = src.split(',')
        for p_num in p_nums:
            if p_num not in s_nums:
                return False
        return True

    # 只有当输入不是默认值的时候才会附加该搜索条件,全部采用字符串搜索
    def searchTFTDB(self, name: str = '', raceIds: str = '', jobIds: str = '', price: int = 0) -> [dict]:
        # 时间复杂度：O(n2),这里的筛选可以优化到O(n),优化关键是不使用remove
        ret = self.chessList[:]
        for item in self.chessList:
            if name:
                if name not in item["title"] and name not in item["displayName"]:
                    ret.remove(item)
                    continue
            if raceIds:
                if not self.isSubIDString(raceIds, item["raceIds"]):
                    ret.remove(item)
                    continue
            if jobIds:
                if not self.isSubIDString(jobIds, item["jobIds"]):
                    ret.remove(item)
                    continue
            if price:
                if item["price"] != price:
                    ret.remove(item)
                    continue
        return ret

    # 通过种族名字查询种族id
    def getRaceIdByName(self, race_name: str) -> str:
        for item in self.raceList:
            if item["name"] == race_name:
                return item["raceId"]
        return ''

    # 通过职业名字查询职业id
    def getJobIdByName(self, job_name: str) -> str:
        for item in self.jobList:
            if item["name"] == job_name:
                return item["jobId"]
        return ''

    # 返回纯名字的职业列表
    def getJobNameList(self) -> [str]:
        return [item["name"] for item in self.jobList]

    # 返回纯名字的种族列表
    def getRaceNameList(self) -> [str]:
        return [item["name"] for item in self.raceList]


# 仅供调试用
if __name__ == '__main__':
    tftdb = TFTDB()
    tftdb.printTFTDB()
    result = tftdb.searchTFTDB(raceIds="9", jobIds="7", name="赛娜")
    print(result)
