'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _semanticUiReact = require('semantic-ui-react');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/justinrhoads/wdi/next-portfolio/components/Navbar.js';


var linkStyle = {
    marginRight: 20
};

var Navbar = function Navbar() {
    return _react2.default.createElement('div', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 12
        }
    }, _react2.default.createElement(_head2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 13
        }
    }, _react2.default.createElement('link', { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css', __source: {
            fileName: _jsxFileName,
            lineNumber: 14
        }
    })), _react2.default.createElement(_semanticUiReact.Menu, { pointing: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 16
        }
    }, _react2.default.createElement(_semanticUiReact.Menu.Item, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 17
        }
    }, _react2.default.createElement(_link2.default, { href: '/home', __source: {
            fileName: _jsxFileName,
            lineNumber: 18
        }
    }, _react2.default.createElement('a', { style: linkStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 19
        }
    }, 'About'))), _react2.default.createElement(_semanticUiReact.Menu.Item, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 22
        }
    }, _react2.default.createElement(_link2.default, { href: '/project', __source: {
            fileName: _jsxFileName,
            lineNumber: 23
        }
    }, _react2.default.createElement('a', { style: linkStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 24
        }
    }, 'Projects'))), _react2.default.createElement(_semanticUiReact.Menu.Item, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 27
        }
    }, _react2.default.createElement(_link2.default, { href: '/skills', __source: {
            fileName: _jsxFileName,
            lineNumber: 28
        }
    }, _react2.default.createElement('a', { style: linkStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 29
        }
    }, 'Skills')))));
};

exports.default = Navbar;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNvbXBvbmVudHMvTmF2YmFyLmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJIZWFkIiwiSW5wdXQiLCJNZW51IiwiU2VnbWVudCIsImxpbmtTdHlsZSIsIm1hcmdpblJpZ2h0IiwiTmF2YmFyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBTzs7OztBQUNQLEFBQU87Ozs7QUFDUCxBQUFTLEFBQU8sQUFBTTs7Ozs7OztBQUl0QixJQUFNO2lCQUFOLEFBQWtCLEFBQ0Q7QUFEQyxBQUNkOztBQUdKLElBQU0sU0FBUyxTQUFULEFBQVMsU0FBQTsyQkFDWCxjQUFBOztzQkFBQTt3QkFBQSxBQUNJO0FBREo7QUFBQSxLQUFBLGtCQUNJLEFBQUM7O3NCQUFEO3dCQUFBLEFBQ0k7QUFESjtBQUFBLCtDQUNVLEtBQU4sQUFBVSxjQUFhLE1BQXZCLEFBQTRCO3NCQUE1Qjt3QkFGUixBQUNJLEFBQ0ksQUFFSjtBQUZJO3lCQUVKLEFBQUMsdUNBQUssVUFBTjtzQkFBQTt3QkFBQSxBQUNJO0FBREo7dUJBQ0ssY0FBRCxzQkFBQSxBQUFNOztzQkFBTjt3QkFBQSxBQUNJO0FBREo7QUFBQSx1QkFDSSxBQUFDLGdDQUFLLE1BQU4sQUFBVztzQkFBWDt3QkFBQSxBQUNJO0FBREo7dUJBQ0ksY0FBQSxPQUFHLE9BQUgsQUFBVTtzQkFBVjt3QkFBQTtBQUFBO09BSFosQUFDSSxBQUNJLEFBQ0ksQUFHUiw0QkFBQyxjQUFELHNCQUFBLEFBQU07O3NCQUFOO3dCQUFBLEFBQ0k7QUFESjtBQUFBLHVCQUNJLEFBQUMsZ0NBQUssTUFBTixBQUFXO3NCQUFYO3dCQUFBLEFBQ0k7QUFESjt1QkFDSSxjQUFBLE9BQUcsT0FBSCxBQUFVO3NCQUFWO3dCQUFBO0FBQUE7T0FSWixBQU1JLEFBQ0ksQUFDSSxBQUdSLCtCQUFDLGNBQUQsc0JBQUEsQUFBTTs7c0JBQU47d0JBQUEsQUFDSTtBQURKO0FBQUEsdUJBQ0ksQUFBQyxnQ0FBSyxNQUFOLEFBQVc7c0JBQVg7d0JBQUEsQUFDSTtBQURKO3VCQUNJLGNBQUEsT0FBRyxPQUFILEFBQVU7c0JBQVY7d0JBQUE7QUFBQTtPQWxCTCxBQUNYLEFBSUksQUFXSSxBQUNJLEFBQ0k7QUFsQnBCLEFBeUJBOztrQkFBQSxBQUFlIiwiZmlsZSI6Ik5hdmJhci5qcyIsInNvdXJjZVJvb3QiOiIvVXNlcnMvanVzdGlucmhvYWRzL3dkaS9uZXh0LXBvcnRmb2xpbyJ9