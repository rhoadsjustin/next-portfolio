'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Navbar = require('./Navbar');

var _Navbar2 = _interopRequireDefault(_Navbar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/justinrhoads/wdi/next-portfolio/components/MyLayout.js';


var layoutStyle = {
    margin: 20,
    padding: 20,
    border: '1px solid #DDD'
};

var Layout = function Layout(props) {
    return _react2.default.createElement('div', { style: layoutStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 10
        }
    }, _react2.default.createElement(_Navbar2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 11
        }
    }), props.children);
};

exports.default = Layout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTXlMYXlvdXQuanMiXSwibmFtZXMiOlsiTmF2YmFyIiwibGF5b3V0U3R5bGUiLCJtYXJnaW4iLCJwYWRkaW5nIiwiYm9yZGVyIiwiTGF5b3V0IiwicHJvcHMiLCJjaGlsZHJlbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBLEFBQU8sQUFBWTs7Ozs7Ozs7O0FBRW5CLElBQU07WUFBYyxBQUNSLEFBQ1I7YUFGZ0IsQUFFUCxBQUNUO1lBSEosQUFBb0IsQUFHUjtBQUhRLEFBQ2hCOztBQUtKLElBQU0sU0FBUyxTQUFULEFBQVMsT0FBQSxBQUFDLE9BQUQ7MkJBQ1gsY0FBQSxTQUFLLE9BQUwsQUFBWTtzQkFBWjt3QkFBQSxBQUNJO0FBREo7S0FBQSxrQkFDSSxBQUFDOztzQkFBRDt3QkFESixBQUNJLEFBQ0M7QUFERDtBQUFBLGNBRk8sQUFDWCxBQUVXO0FBSGYsQUFPQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJNeUxheW91dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvanVzdGlucmhvYWRzL3dkaS9uZXh0LXBvcnRmb2xpbyJ9