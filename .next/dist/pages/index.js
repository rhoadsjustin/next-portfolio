'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _semanticUiReact = require('semantic-ui-react');

var _MyLayout = require('../components/MyLayout');

var _MyLayout2 = _interopRequireDefault(_MyLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/justinrhoads/wdi/next-portfolio/pages/index.js?entry';


var landingPageStyle = {
    margin: 25,
    padding: 10,
    border: '1px solid #DDD',
    alignContent: 'center'
};

exports.default = function () {
    return _react2.default.createElement('div', { style: landingPageStyle, className: 'jsx-1398015119',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 14
        }
    }, _react2.default.createElement(_head2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    }, _react2.default.createElement('link', { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css', className: 'jsx-1398015119',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 16
        }
    })), _react2.default.createElement('h1', {
        className: 'jsx-1398015119',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 18
        }
    }, 'Justin Rhoads'), _react2.default.createElement('h2', {
        className: 'jsx-1398015119',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 19
        }
    }, 'Web Developer'), _react2.default.createElement('div', {
        className: 'jsx-1398015119' + ' ' + 'logo',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 20
        }
    }, _react2.default.createElement('img', { src: '../static/profilepic.jpg', className: 'jsx-1398015119',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 21
        }
    })), _react2.default.createElement('div', {
        className: 'jsx-1398015119' + ' ' + 'landingButton',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 23
        }
    }, _react2.default.createElement(_link2.default, { href: '/home', __source: {
            fileName: _jsxFileName,
            lineNumber: 24
        }
    }, _react2.default.createElement('button', {
        className: 'jsx-1398015119',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 25
        }
    }, 'Learn More'))), _react2.default.createElement(_style2.default, {
        styleId: '1398015119',
        css: 'h1.jsx-1398015119,h2.jsx-1398015119{text-align:center;}h1.jsx-1398015119{font-size:4em;font-weight:500;}h2.jsx-1398015119{font-size:22px;font-weight:200;}button.jsx-1398015119{width:100px;}.landingButton.jsx-1398015119{text-align:center;padding-top:20px;}.logo.jsx-1398015119{text-align:center;padding-top:20px;}.logo.jsx-1398015119 img.jsx-1398015119{border-radius:75px;-webkit-animation:App-logo-spin-jsx-1398015119 infinite 20s linear;animation:App-logo-spin-jsx-1398015119 infinite 20s linear;}@-webkit-keyframes App-logo-spin-jsx-1398015119{from{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes App-logo-spin-jsx-1398015119{from{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTJCZ0IsQUFHMkIsQUFHSixBQUlDLEFBSUgsQUFHTSxBQUlBLEFBSUMsQUFJYyxBQUNBLFlBZnJDLEVBUm9CLENBSUEsR0FQcEIsQUFjcUIsQUFJQSxDQUkyQixXQWxCaEQsQ0FJQSxJQU9BLEFBSUEsOENBTXNDLE1BQ0EsMERBSHRDIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qdXN0aW5yaG9hZHMvd2RpL25leHQtcG9ydGZvbGlvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgSW1hZ2UsIFJldmVhbCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL015TGF5b3V0J1xuXG5jb25zdCBsYW5kaW5nUGFnZVN0eWxlID0ge1xuICAgIG1hcmdpbjogMjUsXG4gICAgcGFkZGluZzogMTAsXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLFxuICAgIGFsaWduQ29udGVudDogJ2NlbnRlcidcbn1cblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICAgIDxkaXYgc3R5bGU9e2xhbmRpbmdQYWdlU3R5bGV9PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgIDxsaW5rIHJlbD0nc3R5bGVzaGVldCcgaHJlZj0nLy9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2VtYW50aWMtdWkvMi4yLjIvc2VtYW50aWMubWluLmNzcycgLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5KdXN0aW4gUmhvYWRzPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+V2ViIERldmVsb3BlcjwvaDI+XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPVwiLi4vc3RhdGljL3Byb2ZpbGVwaWMuanBnXCIgLz5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhbmRpbmdCdXR0b25cIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvaG9tZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+TGVhcm4gTW9yZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICA8c3R5bGUganN4PntgXG4gICAgaDEsIGgyIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogNGVtO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cbiAgICBoMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICB9XG4gICAgYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgIH1cbiAgICAubGFuZGluZ0J1dHRvbiB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgfVxuICAgIC5sb2dvIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nLXRvcDogMjBweDtcbiAgICB9XG4gICAgLmxvZ28gaW1nIHtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNzVweDtcbiAgICAgICAgYW5pbWF0aW9uOiBBcHAtbG9nby1zcGluIGluZmluaXRlIDIwcyBsaW5lYXI7XG4gICAgfVxuICAgIEBrZXlmcmFtZXMgQXBwLWxvZ28tc3BpbiB7XG4gICAgICAgICAgICBmcm9tIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgICAgICAgICAgIHRvIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxuICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4pXG4iXX0= */\n/*@ sourceURL=pages/index.js?entry */'
    }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJIZWFkIiwiSW1hZ2UiLCJSZXZlYWwiLCJMYXlvdXQiLCJsYW5kaW5nUGFnZVN0eWxlIiwibWFyZ2luIiwicGFkZGluZyIsImJvcmRlciIsImFsaWduQ29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQVMsQUFBTzs7QUFDaEIsQUFBTyxBQUFZOzs7Ozs7Ozs7QUFFbkIsSUFBTTtZQUFtQixBQUNiLEFBQ1I7YUFGcUIsQUFFWixBQUNUO1lBSHFCLEFBR2IsQUFDUjtrQkFKSixBQUF5QixBQUlQLEFBR2xCO0FBUHlCLEFBQ3JCOztrQkFNVyxZQUFBOzJCQUNYLGNBQUEsU0FBSyxPQUFMLEFBQVksNkJBQVo7O3NCQUFBO3dCQUFBLEFBQ0k7QUFESjtLQUFBLGtCQUNJLEFBQUM7O3NCQUFEO3dCQUFBLEFBQ0k7QUFESjtBQUFBLCtDQUNVLEtBQU4sQUFBVSxjQUFhLE1BQXZCLEFBQTRCLGtGQUE1Qjs7c0JBQUE7d0JBRlIsQUFDSSxBQUNJLEFBRWdCO0FBRmhCO3lCQUVnQixjQUFBO21CQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsT0FKeEIsQUFJd0IsQUFDQSxrQ0FBQSxjQUFBO21CQUFBOztzQkFBQTt3QkFBQTtBQUFBO0FBQUEsT0FMeEIsQUFLd0IsQUFDVixrQ0FBQSxjQUFBOzRDQUFBLEFBQWU7O3NCQUFmO3dCQUFBLEFBQ007QUFETjtBQUFBLDhDQUNXLEtBQUwsQUFBUyx1Q0FBVDs7c0JBQUE7d0JBUHBCLEFBTWMsQUFDTSxBQUVRO0FBRlI7eUJBRVEsY0FBQTs0Q0FBQSxBQUFlOztzQkFBZjt3QkFBQSxBQUNJO0FBREo7QUFBQSx1QkFDSSxBQUFDLGdDQUFLLE1BQU4sQUFBVztzQkFBWDt3QkFBQSxBQUNJO0FBREo7dUJBQ0ksY0FBQTttQkFBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLE9BWHBDLEFBUzRCLEFBQ0ksQUFDSTtpQkFYcEM7YUFEVyxBQUNYO0FBQUE7QUFESiIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvanVzdGlucmhvYWRzL3dkaS9uZXh0LXBvcnRmb2xpbyJ9