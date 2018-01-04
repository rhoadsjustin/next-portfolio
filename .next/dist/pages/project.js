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

var logoPicStyle = {
    width: 150,
    height: 150
};
var Project = function Project(props) {
    return _react2.default.createElement('div', { style: projectStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 17
        }
    }, _react2.default.createElement('h1', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 18
        }
    }, props.title), _react2.default.createElement('img', { src: props.logo, style: logoPicStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 19
        }
    }), _react2.default.createElement('p', {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 20
        }
    }, 'This project is amazing and should cause you to hire me.'), _react2.default.createElement('div', { style: projectStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 21
        }
    }, _react2.default.createElement('a', { href: props.github, style: linkStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 22
        }
    }, 'Project Github '), _react2.default.createElement('a', { href: props.live, style: linkStyle, __source: {
            fileName: _jsxFileName,
            lineNumber: 23
        }
    }, '| Live Project')));
};

exports.default = function (props) {
    return _react2.default.createElement(_MyLayout2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 29
        }
    }, _react2.default.createElement(Project, { title: 'Argue Smarter', github: 'https://github.com/rhoadsjustin/ArgueSmarter', live: 'https://expo.io/@rhoadsjustin/argue-smarter', logo: '../static/argueSmarter.png', tech: 'React Native, CosmicJS, FantasyData.net API, Expo', __source: {
            fileName: _jsxFileName,
            lineNumber: 30
        }
    }), _react2.default.createElement(Project, { title: 'Spotify Clone', github: 'https://github.com/rhoadsjustin/Slotify', __source: {
            fileName: _jsxFileName,
            lineNumber: 31
        }
    }), _react2.default.createElement(Project, { title: 'Drone Builder', github: 'https://github.com/rhoadsjustin/DroneDB', live: 'https://dronedatabase.herokuapp.com/', __source: {
            fileName: _jsxFileName,
            lineNumber: 32
        }
    }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Byb2plY3QuanMiXSwibmFtZXMiOlsiTGF5b3V0IiwicHJvamVjdFN0eWxlIiwibWFyZ2luIiwicGFkZGluZyIsImxpbmtTdHlsZSIsInRleHREZWNvcmF0aW9uIiwibG9nb1BpY1N0eWxlIiwid2lkdGgiLCJoZWlnaHQiLCJQcm9qZWN0IiwicHJvcHMiLCJ0aXRsZSIsImxvZ28iLCJnaXRodWIiLCJsaXZlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUEsQUFBTyxBQUFZOzs7Ozs7Ozs7QUFFbkIsSUFBTTtZQUFlLEFBQ1QsQUFDUjthQUZKLEFBQXFCLEFBRVI7QUFGUSxBQUNqQjs7QUFJSixJQUFNO29CQUFOLEFBQWtCLEFBQ0U7QUFERixBQUNkOztBQUdKLElBQU07V0FBZSxBQUNWLEFBQ1A7WUFGSixBQUFxQixBQUVUO0FBRlMsQUFDakI7QUFHSixJQUFNLFVBQVUsU0FBVixBQUFVLFFBQUEsQUFBQyxPQUFEOzJCQUNaLGNBQUEsU0FBSyxPQUFMLEFBQVk7c0JBQVo7d0JBQUEsQUFDSTtBQURKO0tBQUEsa0JBQ0ksY0FBQTs7c0JBQUE7d0JBQUEsQUFBSztBQUFMO0FBQUEsYUFESixBQUNJLEFBQVcsQUFDWCwrQ0FBSyxLQUFLLE1BQVYsQUFBZ0IsTUFBTSxPQUF0QixBQUE2QjtzQkFBN0I7d0JBRkosQUFFSSxBQUNBO0FBREE7d0JBQ0EsY0FBQTs7c0JBQUE7d0JBQUE7QUFBQTtBQUFBLE9BSEosQUFHSSxBQUNBLDZFQUFBLGNBQUEsU0FBSyxPQUFMLEFBQVk7c0JBQVo7d0JBQUEsQUFDSTtBQURKO3VCQUNJLGNBQUEsT0FBRyxNQUFNLE1BQVQsQUFBZSxRQUFRLE9BQXZCLEFBQThCO3NCQUE5Qjt3QkFBQTtBQUFBO09BREosQUFDSSxBQUNBLG9DQUFBLGNBQUEsT0FBRyxNQUFNLE1BQVQsQUFBZSxNQUFNLE9BQXJCLEFBQTRCO3NCQUE1Qjt3QkFBQTtBQUFBO09BUEksQUFDWixBQUlJLEFBRUk7QUFQWixBQVlBOztrQkFBZSxVQUFBLEFBQUMsT0FBRDsyQkFDWCxBQUFDOztzQkFBRDt3QkFBQSxBQUNJO0FBREo7QUFBQSxLQUFBLGdDQUNJLEFBQUMsV0FBUSxPQUFULEFBQWUsaUJBQWdCLFFBQS9CLEFBQXNDLGdEQUErQyxNQUFyRixBQUEwRiwrQ0FBOEMsTUFBeEksQUFBNkksOEJBQTZCLE1BQTFLLEFBQStLO3NCQUEvSzt3QkFESixBQUNJLEFBQ0E7QUFEQTtzQ0FDQSxBQUFDLFdBQVEsT0FBVCxBQUFlLGlCQUFnQixRQUEvQixBQUFzQztzQkFBdEM7d0JBRkosQUFFSSxBQUNBO0FBREE7c0NBQ0EsQUFBQyxXQUFRLE9BQVQsQUFBZSxpQkFBZ0IsUUFBL0IsQUFBc0MsMkNBQTBDLE1BQWhGLEFBQXFGO3NCQUFyRjt3QkFKTyxBQUNYLEFBR0k7QUFBQTs7QUFKUiIsImZpbGUiOiJwcm9qZWN0LmpzP2VudHJ5Iiwic291cmNlUm9vdCI6Ii9Vc2Vycy9qdXN0aW5yaG9hZHMvd2RpL25leHQtcG9ydGZvbGlvIn0=