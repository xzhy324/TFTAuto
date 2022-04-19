import logging
import sys
from TFTDB import TFTDB
from gui import Form_hero
import settings

from PyQt5.QtGui import QCursor
from PyQt5.QtWidgets import QApplication, QDialog, QAbstractItemView, QRadioButton, QLineEdit, QPushButton
from PyQt5 import QtCore
from PyQt5.QtCore import Qt


class FormHero(QDialog):
    def __init__(self, parent=None):
        super(QDialog, self).__init__(parent)  # ui对象初始化的时候，须将自身指针传给ui类，以供其中控件对象初始化
        self.hero_filter_ui = Form_hero.Ui_Form_hero()
        self.hero_filter_ui.setupUi(self)
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
        self.hero_filter_ui.verticalLayout.setContentsMargins(1, 0, 1, 0)

        # 禁止编辑
        self.hero_filter_ui.tabHero.setEditTriggers(QAbstractItemView.NoEditTriggers)
        # 水平表格头显示和隐藏
        self.hero_filter_ui.tabHero.horizontalHeader().setVisible(False)
        # 垂直表格头显示和隐藏
        self.hero_filter_ui.tabHero.verticalHeader().setVisible(False)
        # 隐藏分割线
        self.hero_filter_ui.tabHero.setShowGrid(False)
        # 绑定双击事件
        # self.hero_filter_ui.tabHero.doubleClicked.connect(double_click_Hero_Add)
        # 动态加载筛选条件控件
        # 设置一些边框距离.
        self.hero_filter_ui.hbox_price.setContentsMargins(20, 20, 0, 0)
        self.hero_filter_ui.hbox_job.setContentsMargins(20, 20, 0, 0)
        self.hero_filter_ui.hbox_race.setContentsMargins(20, 20, 0, 0)

        # -----------------费用
        prices = ['全部', '1金币', '2金币', '3金币', '4金币', '5金币']
        for price in prices:
            rb_price = QRadioButton(price)
            # 绑定事件槽  并且传递一个参数,用来标记,是什么类型的条件
            rb_price.pressed.connect(lambda: self.rb_click("price"))
            self.hero_filter_ui.hbox_price.addWidget(rb_price)

        # -----------------职业
        jobs = ['全部']
        jobs.extend(tftdb.getJobNameList())
        for job_name in jobs:
            rb_job = QRadioButton(job_name)
            rb_job.pressed.connect(lambda: self.rb_click("job"))
            self.hero_filter_ui.hbox_job.addWidget(rb_job)

        # -----------------种族
        races = ['全部']
        races.extend(tftdb.getRaceNameList())
        for race_name in races:
            rb_race = QRadioButton(race_name)
            rb_race.pressed.connect(lambda: self.rb_click("race"))
            self.hero_filter_ui.hbox_race.addWidget(rb_race)

        # -----------------按称号或名字搜索
        led_keyword = QLineEdit()
        self.hero_filter_ui.hbox_price.addWidget(led_keyword)
        pb_search = QPushButton('搜索')
        self.hero_filter_ui.hbox_price.addWidget(pb_search)
        # 尾部增加一个弹簧占位置
        self.hero_filter_ui.hbox_price.addStretch()

    # 圆形选择点的槽函数，注意filter的键值应该和 @TFTDB.py:searchTFTDB() 函数签名一直
    @QtCore.pyqtSlot()
    def rb_click(self, tag):
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


if __name__ == '__main__':
    # 加载初始配置
    settings.settings_init()
    # 加载数据库类
    tftdb = TFTDB()
    # 创建窗口
    app = QApplication(sys.argv)
    form_hero = FormHero()
    form_hero.show()
    sys.exit(app.exec())
