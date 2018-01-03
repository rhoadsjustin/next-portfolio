'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MyLayout = require('../components/MyLayout');

var _MyLayout2 = _interopRequireDefault(_MyLayout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/justinrhoads/wdi/next-portfolio/pages/project.js?entry';


var projectStyle = {
    margin: 10,
    padding: 10
};

var linkStyle = {
    textDecoration: 'none'
};
var Project = function Project(props) {
    return _react2.default.createElement('div', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 12
        }
    }, _react2.default.createElement('h1', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 13
        }
    }, props.title), _react2.default.createElement('p', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 14
        }
    }, 'This project is amazing and should cause you to hire me.'), _react2.default.createElement('div', { style: projectStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 15
        }
    }, _react2.default.createElement('a', { href: props.github, style: linkStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 16
        }
    }, 'Project Github '), _react2.default.createElement('a', { href: props.live, style: linkStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 17
        }
    }, '| Live Project')));
};

exports.default = function (props) {
    return _react2.default.createElement(_MyLayout2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 23
        }
    }, _react2.default.createElement(Project, { title: 'Argue Smarter', github: 'https://github.com/rhoadsjustin/ArgueSmarter', live: 'https://expo.io/@rhoadsjustin/argue-smarter', __source: {
            fileName: _jsxFileName,
            lineNumber: 24
        }
    }), _react2.default.createElement(Project, { title: 'Spotify Clone', github: 'https://github.com/rhoadsjustin/Slotify', __source: {
            fileName: _jsxFileName,
            lineNumber: 25
        }
    }), _react2.default.createElement(Project, { title: 'Drone Builder', github: 'https://github.com/rhoadsjustin/DroneDB', live: 'https://dronedatabase.herokuapp.com/', __source: {
            fileName: _jsxFileName,
            lineNumber: 26
        }
    }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Byb2plY3QuanMiXSwibmFtZXMiOlsiTGF5b3V0IiwicHJvamVjdFN0eWxlIiwibWFyZ2luIiwicGFkZGluZyIsImxpbmtTdHlsZSIsInRleHREZWNvcmF0aW9uIiwiUHJvamVjdCIsInByb3BzIiwidGl0bGUiLCJnaXRodWIiLCJsaXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFZOzs7Ozs7Ozs7QUFFbkIsSUFBTTtZQUFlLEFBQ1QsQUFDUjthQUZKLEFBQXFCLEFBRVI7QUFGUSxBQUNqQjs7QUFJSixJQUFNO29CQUFOLEFBQWtCLEFBQ0U7QUFERixBQUNkO0FBRUosSUFBTSxVQUFVLFNBQVYsQUFBVSxRQUFBLEFBQUMsT0FBRDsyQkFDWixjQUFBOztzQkFBQTt3QkFBQSxBQUNJO0FBREo7QUFBQSxLQUFBLGtCQUNJLGNBQUE7O3NCQUFBO3dCQUFBLEFBQUs7QUFBTDtBQUFBLGFBREosQUFDSSxBQUFXLEFBQ1gsd0JBQUEsY0FBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLE9BRkosQUFFSSxBQUNBLDZFQUFBLGNBQUEsU0FBSyxPQUFMLEFBQVk7c0JBQVo7d0JBQUEsQUFDSTtBQURKO3VCQUNJLGNBQUEsT0FBRyxNQUFNLE1BQVQsQUFBZSxRQUFRLE9BQXZCLEFBQThCO3NCQUE5Qjt3QkFBQTtBQUFBO09BREosQUFDSSxBQUNBLG9DQUFBLGNBQUEsT0FBRyxNQUFNLE1BQVQsQUFBZSxNQUFNLE9BQXJCLEFBQTRCO3NCQUE1Qjt3QkFBQTtBQUFBO09BTkksQUFDWixBQUdJLEFBRUk7QUFOWixBQVdBOztrQkFBZSxVQUFBLEFBQUMsT0FBRDsyQkFDWCxBQUFDOztzQkFBRDt3QkFBQSxBQUNJO0FBREo7QUFBQSxLQUFBLGdDQUNJLEFBQUMsV0FBUSxPQUFULEFBQWUsaUJBQWdCLFFBQS9CLEFBQXNDLGdEQUErQyxNQUFyRixBQUEwRjtzQkFBMUY7d0JBREosQUFDSSxBQUNBO0FBREE7c0NBQ0EsQUFBQyxXQUFRLE9BQVQsQUFBZSxpQkFBZ0IsUUFBL0IsQUFBc0M7c0JBQXRDO3dCQUZKLEFBRUksQUFDQTtBQURBO3NDQUNBLEFBQUMsV0FBUSxPQUFULEFBQWUsaUJBQWdCLFFBQS9CLEFBQXNDLDJDQUEwQyxNQUFoRixBQUFxRjtzQkFBckY7d0JBSk8sQUFDWCxBQUdJO0FBQUE7O0FBSlIiLCJmaWxlIjoicHJvamVjdC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvanVzdGlucmhvYWRzL3dkaS9uZXh0LXBvcnRmb2xpbyJ9