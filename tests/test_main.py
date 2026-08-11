import importlib
import sys
import types
import unittest
from unittest.mock import Mock


def load_main_without_gui_dependencies():
    """Import main with small stand-ins for optional desktop dependencies."""
    pyqt = types.ModuleType("PyQt5")
    qt_gui = types.ModuleType("PyQt5.QtGui")
    qt_widgets = types.ModuleType("PyQt5.QtWidgets")
    qt_core = types.ModuleType("PyQt5.QtCore")

    qt_gui.QCursor = object
    for name in (
        "QApplication", "QDialog", "QAbstractItemView", "QRadioButton",
        "QLineEdit", "QPushButton",
    ):
        setattr(qt_widgets, name, type(name, (), {}))
    qt_core.pyqtSlot = lambda *args, **kwargs: lambda function: function
    qt_core.Qt = object()
    pyqt.QtCore = qt_core

    form_hero = types.ModuleType("gui.Form_hero")
    simulator = types.ModuleType("simulator")
    tftdb_module = types.ModuleType("TFTDB")
    tftdb_module.TFTDB = type("TFTDB", (), {})

    modules = {
        "PyQt5": pyqt,
        "PyQt5.QtGui": qt_gui,
        "PyQt5.QtWidgets": qt_widgets,
        "PyQt5.QtCore": qt_core,
        "gui.Form_hero": form_hero,
        "simulator": simulator,
        "TFTDB": tftdb_module,
    }
    with unittest.mock.patch.dict(sys.modules, modules):
        sys.modules.pop("main", None)
        return importlib.import_module("main")


class FormHeroSearchTest(unittest.TestCase):
    def test_search_uses_keyword_input_and_active_filters(self):
        main = load_main_without_gui_dependencies()
        main.tftdb = Mock()

        form = main.FormHero.__new__(main.FormHero)
        form.led_keyword = Mock()
        form.led_keyword.text.return_value = "  赛娜  "
        form.filter = {"name": "", "raceIds": "9", "jobIds": "7", "price": 2}

        form.pb_click()

        main.tftdb.searchTFTDB.assert_called_once_with(
            name="赛娜", raceIds="9", jobIds="7", price=2
        )


if __name__ == "__main__":
    unittest.main()
