'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

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
    return _react2.default.createElement('div', { style: layoutStyle, className: 'jsx-3128653247' + ' ' + 'mainApp',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 13
        }
    }, _react2.default.createElement(_Navbar2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 14
        }
    }), _react2.default.createElement('div', { style: childrenStyle, className: 'jsx-3128653247',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    }, props.children), _react2.default.createElement(_style2.default, {
        styleId: '3128653247',
        css: 'div.jsx-3128653247{background:url(\'../static/bg.png\');background-size:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTXlMYXlvdXQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJnQixBQUc0QyxtQ0FDZCxxQkFDekIiLCJmaWxlIjoiY29tcG9uZW50cy9NeUxheW91dC5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvanVzdGlucmhvYWRzL3dkaS9uZXh0LXBvcnRmb2xpbyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOYXZiYXIgZnJvbSAnLi9OYXZiYXInXG5cbmNvbnN0IGxheW91dFN0eWxlID0ge1xuICAgIG1hcmdpbjogMjAsXG4gICAgcGFkZGluZzogMjAsIFxuICAgIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyxcbn1cbmNvbnN0IGNoaWxkcmVuU3R5bGUgPSB7XG4gICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgIGp1c3RpZnlDb250ZW50OiAnY2VudGVyJ1xufVxuY29uc3QgTGF5b3V0ID0gKHByb3BzKSA9PiAoXG4gICAgPGRpdiBzdHlsZT17bGF5b3V0U3R5bGV9IGNsYXNzTmFtZT1cIm1haW5BcHBcIj5cbiAgICAgICAgPE5hdmJhciAvPlxuICAgICAgICA8ZGl2IHN0eWxlPXtjaGlsZHJlblN0eWxlfT5cbiAgICAgICAgICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgICAgICAgPC9kaXY+XG4gICAgPHN0eWxlIGpzeD57YFxuICAgIGRpdiB7XG4gICAgICAgIGJhY2tncm91bmQ6IHVybCgnLi4vc3RhdGljL2JnLnBuZycpO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IDEwMCU7XG4gICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cblxuKVxuXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQiXX0= */\n/*@ sourceURL=components/MyLayout.js */'
    }));
};

exports.default = Layout;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTXlMYXlvdXQuanMiXSwibmFtZXMiOlsiTmF2YmFyIiwibGF5b3V0U3R5bGUiLCJtYXJnaW4iLCJwYWRkaW5nIiwiYm9yZGVyIiwiY2hpbGRyZW5TdHlsZSIsImRpc3BsYXkiLCJqdXN0aWZ5Q29udGVudCIsIkxheW91dCIsInByb3BzIiwiY2hpbGRyZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFZOzs7Ozs7Ozs7QUFFbkIsSUFBTTtZQUFjLEFBQ1IsQUFDUjthQUZnQixBQUVQLEFBQ1Q7WUFISixBQUFvQixBQUdSO0FBSFEsQUFDaEI7QUFJSixJQUFNO2FBQWdCLEFBQ1QsQUFDVDtvQkFGSixBQUFzQixBQUVGO0FBRkUsQUFDbEI7QUFHSixJQUFNLFNBQVMsU0FBVCxBQUFTLE9BQUEsQUFBQyxPQUFEOzJCQUNYLGNBQUEsU0FBSyxPQUFMLEFBQVksaURBQVosQUFBbUM7O3NCQUFuQzt3QkFBQSxBQUNJO0FBREo7S0FBQSxrQkFDSSxBQUFDOztzQkFBRDt3QkFESixBQUNJLEFBQ0E7QUFEQTtBQUFBLHdCQUNBLGNBQUEsU0FBSyxPQUFMLEFBQVksMEJBQVo7O3NCQUFBO3dCQUFBLEFBQ0s7QUFETDthQUZKLEFBRUksQUFDVztpQkFIZjthQURXLEFBQ1g7QUFBQTtBQURKLEFBZ0JBOztrQkFBQSxBQUFlIiwiZmlsZSI6Ik15TGF5b3V0LmpzIiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qdXN0aW5yaG9hZHMvd2RpL25leHQtcG9ydGZvbGlvIn0=