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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/justinrhoads/wdi/next-portfolio/pages/index.js?entry';


var landingPageStyle = {
    margin: 25,
    padding: 10,
    border: '1px solid #DDD',
    alignContent: 'center'
};

exports.default = function () {
    return _react2.default.createElement('div', { style: landingPageStyle, className: 'jsx-3437707104',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 13
        }
    }, _react2.default.createElement(_head2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 14
        }
    }, _react2.default.createElement('link', { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css', className: 'jsx-3437707104',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    })), _react2.default.createElement('h1', {
        className: 'jsx-3437707104',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 17
        }
    }, 'Justin Rhoads'), _react2.default.createElement('h2', {
        className: 'jsx-3437707104',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 18
        }
    }, 'Web Developer'), _react2.default.createElement(_semanticUiReact.Reveal, { animated: 'rotate', className: 'landingButton', __source: {
            fileName: _jsxFileName,
            lineNumber: 19
        }
    }, _react2.default.createElement(_semanticUiReact.Reveal.Content, { visible: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 20
        }
    }, _react2.default.createElement(_semanticUiReact.Image, { circular: true, size: 'small', src: '../static/me.png', __source: {
            fileName: _jsxFileName,
            lineNumber: 21
        }
    })), _react2.default.createElement(_semanticUiReact.Reveal.Content, { hidden: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 23
        }
    }, _react2.default.createElement(_semanticUiReact.Image, { circular: true, size: 'small', src: '../static/friends.jpg', __source: {
            fileName: _jsxFileName,
            lineNumber: 24
        }
    }), _react2.default.createElement(_link2.default, { href: '/home', __source: {
            fileName: _jsxFileName,
            lineNumber: 25
        }
    }, _react2.default.createElement('button', {
        className: 'jsx-3437707104',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 26
        }
    }, 'Learn More')))), _react2.default.createElement(_style2.default, {
        styleId: '3437707104',
        css: 'h1.jsx-3437707104,h2.jsx-3437707104{text-align:center;}h1.jsx-3437707104{font-size:2em;font-weight:500;}h2.jsx-3437707104{font-size:16px;font-weight:200;}button.jsx-3437707104{width:100px;}.landingButton.jsx-3437707104{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-align-content:center;-ms-flex-line-pack:center;align-content:center;justify-items:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZCZ0IsQUFHMkIsQUFHSixBQUlDLEFBSUgsQUFHQyxZQUZqQixFQVJvQixDQUlBLEdBUHBCLFlBSUEsQ0FJQSwyQ0FNeUIsNEVBQ0EscUJBQ3pCIiwiZmlsZSI6InBhZ2VzL2luZGV4LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qdXN0aW5yaG9hZHMvd2RpL25leHQtcG9ydGZvbGlvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJ1xuaW1wb3J0IHsgSW1hZ2UsIFJldmVhbCB9IGZyb20gJ3NlbWFudGljLXVpLXJlYWN0J1xuXG5jb25zdCBsYW5kaW5nUGFnZVN0eWxlID0ge1xuICAgIG1hcmdpbjogMjUsXG4gICAgcGFkZGluZzogMTAsXG4gICAgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnLFxuICAgIGFsaWduQ29udGVudDogJ2NlbnRlcidcbn1cblxuZXhwb3J0IGRlZmF1bHQgKCkgPT4gKFxuICAgIDxkaXYgc3R5bGU9e2xhbmRpbmdQYWdlU3R5bGV9PlxuICAgICAgICA8SGVhZD5cbiAgICAgICAgICAgIDxsaW5rIHJlbD0nc3R5bGVzaGVldCcgaHJlZj0nLy9jZG5qcy5jbG91ZGZsYXJlLmNvbS9hamF4L2xpYnMvc2VtYW50aWMtdWkvMi4yLjIvc2VtYW50aWMubWluLmNzcycgLz5cbiAgICAgICAgPC9IZWFkPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT5KdXN0aW4gUmhvYWRzPC9oMT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDI+V2ViIERldmVsb3BlcjwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxSZXZlYWwgYW5pbWF0ZWQ9J3JvdGF0ZScgY2xhc3NOYW1lPVwibGFuZGluZ0J1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJldmVhbC5Db250ZW50IHZpc2libGU+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEltYWdlIGNpcmN1bGFyIHNpemU9J3NtYWxsJyBzcmM9Jy4uL3N0YXRpYy9tZS5wbmcnIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JldmVhbC5Db250ZW50PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFJldmVhbC5Db250ZW50IGhpZGRlbiA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8SW1hZ2UgY2lyY3VsYXIgc2l6ZT0nc21hbGwnIHNyYz0nLi4vc3RhdGljL2ZyaWVuZHMuanBnJyAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9ob21lXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbj5MZWFybiBNb3JlPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L1JldmVhbC5Db250ZW50PlxuICAgICAgICAgICAgICAgICAgICA8L1JldmVhbD5cbiAgICA8c3R5bGUganN4PntgXG4gICAgaDEsIGgyIHtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIH1cbiAgICBoMSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMmVtO1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgIH1cbiAgICBoMiB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgICB9XG4gICAgYnV0dG9uIHtcbiAgICAgICAgd2lkdGg6IDEwMHB4O1xuICAgIH1cbiAgICAubGFuZGluZ0J1dHRvbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGFsaWduLWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1pdGVtczogY2VudGVyO1xuICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4pXG4iXX0= */\n/*@ sourceURL=pages/index.js?entry */'
    }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJIZWFkIiwiSW1hZ2UiLCJSZXZlYWwiLCJsYW5kaW5nUGFnZVN0eWxlIiwibWFyZ2luIiwicGFkZGluZyIsImJvcmRlciIsImFsaWduQ29udGVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQVMsQUFBTzs7Ozs7OztBQUVoQixJQUFNO1lBQW1CLEFBQ2IsQUFDUjthQUZxQixBQUVaLEFBQ1Q7WUFIcUIsQUFHYixBQUNSO2tCQUpKLEFBQXlCLEFBSVAsQUFHbEI7QUFQeUIsQUFDckI7O2tCQU1XLFlBQUE7MkJBQ1gsY0FBQSxTQUFLLE9BQUwsQUFBWSw2QkFBWjs7c0JBQUE7d0JBQUEsQUFDSTtBQURKO0tBQUEsa0JBQ0ksQUFBQzs7c0JBQUQ7d0JBQUEsQUFDSTtBQURKO0FBQUEsK0NBQ1UsS0FBTixBQUFVLGNBQWEsTUFBdkIsQUFBNEIsa0ZBQTVCOztzQkFBQTt3QkFGUixBQUNJLEFBQ0ksQUFFZ0I7QUFGaEI7eUJBRWdCLGNBQUE7bUJBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxPQUp4QixBQUl3QixBQUNBLGtDQUFBLGNBQUE7bUJBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxPQUx4QixBQUt3QixBQUNSLGtDQUFBLEFBQUMseUNBQU8sVUFBUixBQUFpQixVQUFTLFdBQTFCLEFBQW9DO3NCQUFwQzt3QkFBQSxBQUNJO0FBREo7dUJBQ0ssY0FBRCx3QkFBQSxBQUFRLFdBQVEsU0FBaEI7c0JBQUE7d0JBQUEsQUFDSTtBQURKO3VCQUNJLEFBQUMsd0NBQU0sVUFBUCxNQUFnQixNQUFoQixBQUFxQixTQUFRLEtBQTdCLEFBQWlDO3NCQUFqQzt3QkFGUixBQUNJLEFBQ0ksQUFFSjtBQUZJO3lCQUVILGNBQUQsd0JBQUEsQUFBUSxXQUFRLFFBQWhCO3NCQUFBO3dCQUFBLEFBQ1k7QUFEWjt1QkFDWSxBQUFDLHdDQUFNLFVBQVAsTUFBZ0IsTUFBaEIsQUFBcUIsU0FBUSxLQUE3QixBQUFpQztzQkFBakM7d0JBRFosQUFDWSxBQUNBO0FBREE7d0JBQ0EsQUFBQyxnQ0FBSyxNQUFOLEFBQVc7c0JBQVg7d0JBQUEsQUFDSTtBQURKO3VCQUNJLGNBQUE7bUJBQUE7O3NCQUFBO3dCQUFBO0FBQUE7QUFBQSxPQWJwQyxBQU1nQixBQUlJLEFBRVksQUFDSTtpQkFicEM7YUFEVyxBQUNYO0FBQUE7QUFESiIsImZpbGUiOiJpbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvanVzdGlucmhvYWRzL3dkaS9uZXh0LXBvcnRmb2xpbyJ9