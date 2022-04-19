# -*- coding: utf-8 -*-

# Form implementation generated from reading ui file 'Form_hero.ui'
#
# Created by: PyQt5 UI code generator 5.15.4
#
# WARNING: Any manual changes made to this file will be lost when pyuic5 is
# run again.  Do not edit this file unless you know what you are doing.


from PyQt5 import QtCore, QtGui, QtWidgets


class Ui_Form_hero(object):
    def setupUi(self, Form_hero):
        Form_hero.setObjectName("Form_hero")
        Form_hero.resize(811, 695)
        Form_hero.setStyleSheet("QTableView\n"
"{\n"
"    font:13px \"微软雅黑\";\n"
"    color: rgb(255, 255, 255);\n"
"    border: None;\n"
"    background: rgba(22,26,32, 200)   \n"
"\n"
"\n"
"}\n"
"QLabel{\n"
"font:13px \"微软雅黑\";\n"
"color: rgb(255, 255, 255);\n"
"}\n"
"QGroupBox\n"
"{\n"
"    font:13px \"微软雅黑\";\n"
"    color: rgb(255, 255, 255);\n"
"    border: None;\n"
"    background: rgba(22,26,32, 200)   \n"
"\n"
"\n"
"}\n"
"QLineEdit\n"
"{\n"
"background:none;\n"
"}\n"
"QTableView::pane\n"
"{\n"
"    font:13px \"微软雅黑\";\n"
"    color: rgb(255, 255, 255);\n"
"    border: None;\n"
"    \n"
"}\n"
"QScrollBar{\n"
"    background-color:rgb(0, 0, 0);\n"
"    width:10px;\n"
"}\n"
"QScrollBar::handle{\n"
"     image: url(data/Center.png)  ; \n"
"     border:none; \n"
"     border-radius:5px;\n"
"} \n"
"QScrollBar::handle:hover{image: url(data/Center.png)  ; }\n"
"QScrollBar::add-page:vertical,QScrollBar::sub-page:vertical{background:none;}\n"
"QToolTip{\n"
"border: 2px solid qconicalgradient(cx:0, cy:0, angle:135, stop:0 rgba(255, 255, 0, 69), stop:0.375 rgba(255, 255, 0, 69), stop:0.423533 rgba(251, 255, 0, 145), stop:0.45 rgba(247, 255, 0, 208), stop:0.477581 rgba(255, 244, 71, 130), stop:0.518717 rgba(255, 218, 71, 130), stop:0.55 rgba(255, 255, 0, 255), stop:0.57754 rgba(255, 203, 0, 130), stop:0.625 rgba(255, 255, 0, 69), stop:1 rgba(255, 255, 0, 69));   \n"
"    background-color: rgb(22,26,32);\n"
"    ridge:ridge;\n"
"    padding: 4px;\n"
"    border-radius:10px;\n"
"}\n"
"QPushButton{\n"
"    color: qconicalgradient(cx:0, cy:0, angle:135, stop:0 rgba(255, 255, 0, 69), stop:0.375 rgba(255, 255, 0, 69), stop:0.423533 rgba(251, 255, 0, 145), stop:0.45 rgba(247, 255, 0, 208), stop:0.477581 rgba(255, 244, 71, 130), stop:0.518717 rgba(255, 218, 71, 130), stop:0.55 rgba(255, 255, 0, 255), stop:0.57754 rgba(255, 203, 0, 130), stop:0.625 rgba(255, 255, 0, 69), stop:1 rgba(255, 255, 0, 69));\n"
"    border: 2px solid qconicalgradient(cx:0, cy:0, angle:135, stop:0 rgba(255, 255, 0, 69), stop:0.375 rgba(255, 255, 0, 69), stop:0.423533 rgba(251, 255, 0, 145), stop:0.45 rgba(247, 255, 0, 208), stop:0.477581 rgba(255, 244, 71, 130), stop:0.518717 rgba(255, 218, 71, 130), stop:0.55 rgba(255, 255, 0, 255), stop:0.57754 rgba(255, 203, 0, 130), stop:0.625 rgba(255, 255, 0, 69), stop:1 rgba(255, 255, 0, 69));   \n"
"    background-color: rgb(22,26,32);\n"
"    ridge:ridge;\n"
"    padding: 4px;\n"
"    border-radius:10px;\n"
"    \n"
"    font: 75 14pt \"微软雅黑\";\n"
"}\n"
"QPushButton:hover {\n"
"    color: rgb(255, 255, 255);\n"
"    border: 2px solid qradialgradient(spread:pad, cx:0.5, cy:0.5, radius:0.5, fx:0.5, fy:0.5, stop:0 rgba(0, 0, 0, 255), stop:0.19397 rgba(0, 0, 0, 255), stop:0.202312 rgba(122, 97, 0, 255), stop:0.495514 rgba(76, 58, 0, 255), stop:0.504819 rgba(255, 255, 255, 255), stop:0.79 rgba(255, 255, 255, 255), stop:1 rgba(255, 158, 158, 255));   \n"
"}\n"
"QGroupBox{\n"
"    color:rgb(255, 255, 255);\n"
"    font: 75 11pt \"微软雅黑\";\n"
"}\n"
"\n"
"QRadioButton{\n"
"color:rgb(182, 182, 182);\n"
"font: 75 10pt \"微软雅黑\";\n"
"}\n"
"QLineEdit{\n"
"color: rgb(255, 85, 0);\n"
"font: 75 12pt \"微软雅黑\";\n"
"with:200px;\n"
"}\n"
"\n"
"\n"
"")
        self.verticalLayout = QtWidgets.QVBoxLayout(Form_hero)
        self.verticalLayout.setObjectName("verticalLayout")
        self.groupBox_price = QtWidgets.QGroupBox(Form_hero)
        self.groupBox_price.setObjectName("groupBox_price")
        self.hbox_price = QtWidgets.QHBoxLayout(self.groupBox_price)
        self.hbox_price.setObjectName("hbox_price")
        self.verticalLayout.addWidget(self.groupBox_price)
        self.groupBox_job = QtWidgets.QGroupBox(Form_hero)
        self.groupBox_job.setObjectName("groupBox_job")
        self.hbox_job = QtWidgets.QHBoxLayout(self.groupBox_job)
        self.hbox_job.setSpacing(6)
        self.hbox_job.setObjectName("hbox_job")
        self.verticalLayout.addWidget(self.groupBox_job)
        self.groupBox_race = QtWidgets.QGroupBox(Form_hero)
        self.groupBox_race.setObjectName("groupBox_race")
        self.hbox_race = QtWidgets.QHBoxLayout(self.groupBox_race)
        self.hbox_race.setObjectName("hbox_race")
        self.verticalLayout.addWidget(self.groupBox_race)
        self.tabHero = QtWidgets.QTableWidget(Form_hero)
        self.tabHero.setObjectName("tabHero")
        self.tabHero.setColumnCount(0)
        self.tabHero.setRowCount(0)
        self.verticalLayout.addWidget(self.tabHero)

        self.retranslateUi(Form_hero)
        QtCore.QMetaObject.connectSlotsByName(Form_hero)

    def retranslateUi(self, Form_hero):
        _translate = QtCore.QCoreApplication.translate
        Form_hero.setWindowTitle(_translate("Form_hero", "Form"))
        self.groupBox_price.setTitle(_translate("Form_hero", "费用:"))
        self.groupBox_job.setTitle(_translate("Form_hero", "职业:"))
        self.groupBox_race.setTitle(_translate("Form_hero", "种族:"))
