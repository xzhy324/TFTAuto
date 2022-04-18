from PyQt5.Qt import *
from PyQt5.QtGui import *
from PyQt5.QtCore import *
class SoPaiJieZou(QDialog):
    def __init__(self,data):
        super().__init__()
        self.data=data
        self.initshow()
    def initshow(self):
        self.setMinimumWidth(504)
        self.setMaximumWidth(530)
        self.setObjectName('sopaijiezou')
        self.spTitle=QLabel('搜牌节奏')
        self.spTitle.setObjectName('Title')
        self.spTitle.setAlignment(Qt.AlignRight)
        self.spDoc=QLabel(self.data['d_time'])
        self.spDoc.setObjectName('Doc')
        self.spDoc.setWordWrap(True)

        self.kzTitle = QLabel('克制分析')
        self.kzTitle.setObjectName('Title')
        self.kzTitle.setAlignment(Qt.AlignRight)
        self.kzDoc = QLabel(self.data['enemy_info'])
        self.kzDoc.setObjectName('Doc')
        self.kzDoc.setWordWrap(True)
        self.hbox=QVBoxLayout()
        self.hbox.setSpacing(2)
        self.hbox.addWidget(self.spTitle)
        self.hbox.addWidget(self.spDoc)
        self.hbox.addWidget(self.kzTitle)
        self.hbox.addWidget(self.kzDoc)
        self.setLayout(self.hbox)
        self.setStyleSheet('''
        #sopaijiezou{
        border: 1px solid rgb(185, 185, 185);  
        
    	background-color: rgb(22,26,32);
    	border-right-style:none;
        border-top-style:none;
        }
        #Title{
	    color: rgb(184,155,94);
	    background: rgba(22,26,32, 200);
	    font: 75 12pt "微软雅黑";}
	    #Doc{
	    color: #7E807D;
	    border-left-style: 1px solid rgb(185, 185, 185);  
	    background: rgba(22,26,32, 200);  
	    font: 75 10pt "微软雅黑";}
        ''')




