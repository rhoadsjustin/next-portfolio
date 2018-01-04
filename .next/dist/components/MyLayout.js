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
var childrenStyle = {
    display: 'flex',
    justifyContent: 'center'
};
var Layout = function Layout(props) {
    return _react2.default.createElement('div', { style: layoutStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 13
        }
    }, _react2.default.createElement(_Navbar2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 14
        }
    }), _react2.default.createElement('div', { style: childrenStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    }, props.children));
};

exports.default = Layout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTXlMYXlvdXQuanMiXSwibmFtZXMiOlsiTmF2YmFyIiwibGF5b3V0U3R5bGUiLCJtYXJnaW4iLCJwYWRkaW5nIiwiYm9yZGVyIiwiY2hpbGRyZW5TdHlsZSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsIkxheW91dCIsInByb3BzIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVk7Ozs7Ozs7OztBQUVuQixJQUFNO1lBQWMsQUFDUixBQUNSO2FBRmdCLEFBRVAsQUFDVDtZQUhKLEFBQW9CLEFBR1I7QUFIUSxBQUNoQjtBQUlKLElBQU07YUFBZ0IsQUFDVCxBQUNUO29CQUZKLEFBQXNCLEFBRUY7QUFGRSxBQUNsQjtBQUdKLElBQU0sU0FBUyxTQUFULEFBQVMsT0FBQSxBQUFDLE9BQUQ7MkJBQ1gsY0FBQSxTQUFLLE9BQUwsQUFBWTtzQkFBWjt3QkFBQSxBQUNJO0FBREo7S0FBQSxrQkFDSSxBQUFDOztzQkFBRDt3QkFESixBQUNJLEFBQ0E7QUFEQTtBQUFBLHdCQUNBLGNBQUEsU0FBSyxPQUFMLEFBQVk7c0JBQVo7d0JBQUEsQUFDSztBQURMO2FBSE8sQUFDWCxBQUVJLEFBQ1c7QUFKbkIsQUFTQTs7a0JBQUEsQUFBZSIsImZpbGUiOiJNeUxheW91dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvanVzdGlucmhvYWRzL3dkaS9uZXh0LXBvcnRmb2xpbyJ9