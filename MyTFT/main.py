import logging, sys
from TFTDB import TFTDB
from gui import Form_hero
import settings
import simulator

from PyQt5.QtGui import QCursor
from PyQt5.QtWidgets import QApplication, QDialog, QAbstractItemView, QRadioButton, QLineEdit, QPushButton
from PyQt5 import QtCore
from PyQt5.QtCore import Qt


class FormHero(QDialog):
    def __init__(self, parent=None):
        super(QDialog, self).__init__(parent)  # ui对象初始化的时候，须将自身指针传给ui类，以供其中控件对象初始化
        self.ui = Form_hero.Ui_Form_hero()
        self.ui.setupUi(self)
        self.filter = {
            "name": '',
            "raceIds": '',
            "jobIds": '',
            "price": 0
        }  # 与TFTDB的searchTFTDB函数签名一一对应

        # 槽函数关联
        # self.hero_filter_ui.groupBox_race.clicked.connect(self.on_groupBox_race_clicked)

        # 设置一些基本的样式
        self.resize(566, 500)
        self.setAttribute(Qt.WA_TranslucentBackground)
        self.setCursor(QCursor(Qt.PointingHandCursor))
        # 去掉标题和置顶
        self.setWindowFlags(Qt.Tool | Qt.WindowMaximizeButtonHint | Qt.WindowStaysOnTopHint | Qt.FramelessWindowHint)
        # 窗口透明
        self.setAttribute(Qt.WA_TranslucentBackground)
        self.ui.verticalLayout.setContentsMargins(1, 0, 1, 0)

        # 禁止编辑
        self.ui.tabHero.setEditTriggers(QAbstractItemView.NoEditTriggers)
        # 水平表格头显示和隐藏
        self.ui.tabHero.horizontalHeader().setVisible(False)
        # 垂直表格头显示和隐藏
        self.ui.tabHero.verticalHeader().setVisible(False)
        # 隐藏分割线
        self.ui.tabHero.setShowGrid(False)
        # 绑定双击事件
        # self.hero_filter_ui.tabHero.doubleClicked.connect(double_click_Hero_Add)
        # 动态加载筛选条件控件
        # 设置一些边框距离.
        self.ui.hbox_price.setContentsMargins(20, 20, 0, 0)
        self.ui.hbox_job.setContentsMargins(20, 20, 0, 0)
        self.ui.hbox_race.setContentsMargins(20, 20, 0, 0)

        # -----------------费用
        prices = ['全部', '1金币', '2金币', '3金币', '4金币', '5金币']
        for price in prices:
            rb_price = QRadioButton(price)
            # 绑定事件槽  并且传递一个参数,用来标记,是什么类型的条件
            rb_price.pressed.connect(lambda: self.rb_click("price"))
            self.ui.hbox_price.addWidget(rb_price)

        # -----------------职业
        jobs = ['全部']
        jobs.extend(tftdb.getJobNameList())
        for job_name in jobs:
            rb_job = QRadioButton(job_name)
            rb_job.pressed.connect(lambda: self.rb_click("job"))
            self.ui.hbox_job.addWidget(rb_job)

        # -----------------种族
        races = ['全部']
        races.extend(tftdb.getRaceNameList())
        for race_name in races:
            rb_race = QRadioButton(race_name)
            rb_race.pressed.connect(lambda: self.rb_click("race"))
            self.ui.hbox_race.addWidget(rb_race)

        # -----------------按称号或名字搜索
        led_keyword = QLineEdit()
        self.ui.hbox_price.addWidget(led_keyword)
        pb_search = QPushButton('搜索')
        pb_search.pressed.connect(lambda: self.pb_click())
        self.ui.hbox_price.addWidget(pb_search)
        # 尾部增加一个弹簧占位置
        self.ui.hbox_price.addStretch()

        # 显示
        self.show()
        self.setVisible(False)

    # 圆形选择点的槽函数，注意filter的键值应该和 @TFTDB.py:searchTFTDB() 函数签名一致
    @QtCore.pyqtSlot()
    def rb_click(self, tag) -> None:
        text = self.sender().text()  # 从发送信号的QRadioButton控件中获取值
        if tag == "price":
            if text == "全部":
                self.filter["price"] = 0
            else:
                self.filter["price"] = int(text.replace('金币', ''))
        if tag == "race":
            if text == "全部":
                self.filter["raceIds"] = ''
            else:
                self.filter["raceIds"] = tftdb.getRaceIdByName(text)
        if tag == "job":
            if text == "全部":
                self.filter["jobIds"] = ''
            else:
                self.filter["jobIds"] = tftdb.getJobIdByName(text)

        result = tftdb.searchTFTDB(raceIds=self.filter["raceIds"],
                                   jobIds=self.filter["jobIds"],
                                   price=self.filter["price"])
        logging.info(result)

    # 搜索按钮按下的槽函数
    @QtCore.pyqtSlot()
    def pb_click(self) -> None:
        self.filter["name"] = self.sender().text()
        result = tftdb.searchTFTDB(name=self.filter["name"])
        logging.info(result)


class KeyboardMonitor:
    def __init__(self):
        self.keyboardListener = simulator.keyboard.Listener(on_press=self.keyPress)
        self.keyboardListener.start()

    def __del__(self):
        if self.keyboardListener:
            self.keyboardListener.stop()

    # D键检测：d牌后自动判断并拿牌
    def keyPress(self, key) -> None:
        print(key)
        try:
            # 对于pynput包，只有普通按键有char属性域
            if key.char == 'd':
                fiveCards = simulator.getFiveTitles()
                logging.info(fiveCards)
                for index, card in enumerate(fiveCards):
                    if card in settings.myBuild:
                        simulator.pag.moveTo(index * 200 + 550, 1000, 0.1, simulator.pag.easeOutQuad)
                        simulator.pag.click()

        except AttributeError:
            # 特殊按键按下时不做反应
            pass


if __name__ == '__main__':
    # 加载初始配置
    settings.settings_init()
    # 加载数据库类
    tftdb = TFTDB()
    # 创建PyQt项目
    app = QApplication(sys.argv)
    # 创建英雄筛选界面
    form_hero = FormHero()
    # 前面对象都实例化了再创建键盘监听器
    key_monitor = KeyboardMonitor()

    sys.exit(app.exec())
