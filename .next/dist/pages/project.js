'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _MyLayout = require('../components/MyLayout');

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _semanticUiReact = require('semantic-ui-react');

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
            lineNumber: 19
        }
    }, _react2.default.createElement(_head2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 20
        }
    }, _react2.default.createElement('link', { rel: 'stylesheet', href: '//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css', __source: {
            fileName: _jsxFileName,
            lineNumber: 21
        }
    })), _react2.default.createElement(_semanticUiReact.Card, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 23
        }
    }, _react2.default.createElement(_semanticUiReact.Image, { src: props.logo, __source: {
            fileName: _jsxFileName,
            lineNumber: 24
        }
    }), _react2.default.createElement(_semanticUiReact.Card.Content, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 25
        }
    }, _react2.default.createElement(_semanticUiReact.Card.Header, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 26
        }
    }, props.title), _react2.default.createElement(_semanticUiReact.Card.Description, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 29
        }
    }, props.description), _react2.default.createElement(_semanticUiReact.Card.Content, { extra: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 32
        }
    }, 'Tech Used: ', props.tech)), _react2.default.createElement(_semanticUiReact.Card.Content, { extra: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 36
        }
    }, _react2.default.createElement('div', { className: 'ui two buttons', __source: {
            fileName: _jsxFileName,
            lineNumber: 37
        }
    }, _react2.default.createElement(_semanticUiReact.Button, { basic: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 38
        }
    }, _react2.default.createElement('a', { href: props.github, __source: {
            fileName: _jsxFileName,
            lineNumber: 39
        }
    }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'github', __source: {
            fileName: _jsxFileName,
            lineNumber: 40
        }
    }), 'Github')), _react2.default.createElement(_semanticUiReact.Button, { basic: true, __source: {
            fileName: _jsxFileName,
            lineNumber: 44
        }
    }, _react2.default.createElement('a', { href: props.live, __source: {
            fileName: _jsxFileName,
            lineNumber: 45
        }
    }, _react2.default.createElement(_semanticUiReact.Icon, { name: 'video play outline', __source: {
            fileName: _jsxFileName,
            lineNumber: 46
        }
    }), 'Live Project'))))));
};

exports.default = function (props) {
    return _react2.default.createElement(_MyLayout2.default, {
        __source: {
            fileName: _jsxFileName,
            lineNumber: 57
        }
    }, _react2.default.createElement(Project, {
        title: 'Argue Smarter',
        github: 'https://github.com/rhoadsjustin/ArgueSmarter',
        live: 'https://expo.io/@rhoadsjustin/argue-smarter',
        logo: '../static/argueSmarter.png',
        description: 'React Native App utilizing Sports Data Api for stats so users can compare players, vote on matchups, and see live scoring updates on their favorite team',
        tech: 'React Native, Redux, Router-Flux, Expo, NativeBase', __source: {
            fileName: _jsxFileName,
            lineNumber: 58
        }
    }), _react2.default.createElement(Project, {
        title: 'Spotify Clone',
        github: 'https://github.com/rhoadsjustin/Slotify',
        description: 'Spotify like music player allowing users to create profiles, playlists, and play music',
        tech: 'PHP, XAMPP, Javascript, CSS, HTML, MySQL',
        logo: '../static/SLOTIFY.png',
        __source: {
            fileName: _jsxFileName,
            lineNumber: 65
        }
    }), _react2.default.createElement(Project, {
        title: 'Drone Builder',
        github: 'https://github.com/rhoadsjustin/DroneDB',
        live: 'https://dronedatabase.herokuapp.com/',
        logo: '../static/droneDB.png',
        description: 'A step by step Racing Drone Builder site that helps you build your first racing drone with prices for each part.',
        tech: 'React, Materialize, CSS, Firebase', __source: {
            fileName: _jsxFileName,
            lineNumber: 72
        }
    }));
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Byb2plY3QuanMiXSwibmFtZXMiOlsiTGF5b3V0IiwiSGVhZCIsIkNhcmQiLCJJY29uIiwiSW1hZ2UiLCJCdXR0b24iLCJwcm9qZWN0U3R5bGUiLCJtYXJnaW4iLCJwYWRkaW5nIiwibGlua1N0eWxlIiwidGV4dERlY29yYXRpb24iLCJsb2dvUGljU3R5bGUiLCJ3aWR0aCIsImhlaWdodCIsIlByb2plY3QiLCJwcm9wcyIsImxvZ28iLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwidGVjaCIsImdpdGh1YiIsImxpdmUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQSxBQUFPLEFBQVk7Ozs7QUFDbkIsQUFBTzs7OztBQUNQLEFBQVMsQUFBTSxBQUFNLEFBQU87Ozs7Ozs7QUFFNUIsSUFBTTtZQUFlLEFBQ1QsQUFDUjthQUZKLEFBQXFCLEFBRVI7QUFGUSxBQUNqQjs7QUFJSixJQUFNO29CQUFOLEFBQWtCLEFBQ0U7QUFERixBQUNkOztBQUdKLElBQU07V0FBZSxBQUNWLEFBQ1A7WUFGSixBQUFxQixBQUVUO0FBRlMsQUFDakI7QUFHSixJQUFNLFVBQVUsU0FBVixBQUFVLFFBQUEsQUFBQyxPQUFEOzJCQUNaLGNBQUEsU0FBSyxPQUFMLEFBQVk7c0JBQVo7d0JBQUEsQUFDSTtBQURKO0tBQUEsa0JBQ0ksQUFBQzs7c0JBQUQ7d0JBQUEsQUFDSTtBQURKO0FBQUEsK0NBQ1UsS0FBTixBQUFVLGNBQWEsTUFBdkIsQUFBNEI7c0JBQTVCO3dCQUZSLEFBQ0ksQUFDSSxBQUVKO0FBRkk7eUJBRUosQUFBQzs7c0JBQUQ7d0JBQUEsQUFDSTtBQURKO0FBQUEsdUJBQ0ksQUFBQyx3Q0FBTSxLQUFLLE1BQVosQUFBa0I7c0JBQWxCO3dCQURKLEFBQ0ksQUFDQTtBQURBO3dCQUNDLGNBQUQsc0JBQUEsQUFBTTs7c0JBQU47d0JBQUEsQUFDSTtBQURKO0FBQUEsdUJBQ0ssY0FBRCxzQkFBQSxBQUFNOztzQkFBTjt3QkFBQSxBQUNLO0FBREw7QUFBQSxhQURKLEFBQ0ksQUFDVyxBQUVYLHdCQUFDLGNBQUQsc0JBQUEsQUFBTTs7c0JBQU47d0JBQUEsQUFDSztBQURMO0FBQUEsYUFKSixBQUlJLEFBQ1csQUFFWCw4QkFBQyxjQUFELHNCQUFBLEFBQU0sV0FBUSxPQUFkO3NCQUFBO3dCQUFBO0FBQUE7T0FDZ0IscUJBVnhCLEFBRUksQUFPSSxBQUNzQixBQUcxQix3QkFBQyxjQUFELHNCQUFBLEFBQU0sV0FBUSxPQUFkO3NCQUFBO3dCQUFBLEFBQ1E7QUFEUjt1QkFDUSxjQUFBLFNBQUssV0FBTCxBQUFlO3NCQUFmO3dCQUFBLEFBQ0k7QUFESjt1QkFDSSxBQUFDLHlDQUFPLE9BQVI7c0JBQUE7d0JBQUEsQUFDSTtBQURKO3VCQUNJLGNBQUEsT0FBRyxNQUFNLE1BQVQsQUFBZTtzQkFBZjt3QkFBQSxBQUNBO0FBREE7dUJBQ0EsQUFBQyx1Q0FBSyxNQUFOLEFBQVc7c0JBQVg7d0JBREEsQUFDQTtBQUFBO1FBSFIsQUFDSSxBQUNJLEFBS0osNEJBQUEsQUFBQyx5Q0FBTyxPQUFSO3NCQUFBO3dCQUFBLEFBQ0k7QUFESjt1QkFDSSxjQUFBLE9BQUcsTUFBTSxNQUFULEFBQWU7c0JBQWY7d0JBQUEsQUFDSTtBQURKO3VCQUNJLEFBQUMsdUNBQUssTUFBTixBQUFXO3NCQUFYO3dCQURKLEFBQ0k7QUFBQTtRQTVCaEIsQUFDWixBQUlJLEFBYUksQUFDUSxBQU9JLEFBQ0k7QUEzQjVCLEFBc0NBOztrQkFBZSxVQUFBLEFBQUMsT0FBRDsyQkFDWCxBQUFDOztzQkFBRDt3QkFBQSxBQUNJO0FBREo7QUFBQSxLQUFBLGdDQUNJLEFBQUM7ZUFBRCxBQUNVLEFBQ047Z0JBRkosQUFFVyxBQUNQO2NBSEosQUFHUyxBQUNMO2NBSkosQUFJUyxBQUNMO3FCQUxKLEFBS2dCLEFBQ1o7Y0FOSixBQU1TO3NCQU5UO3dCQURKLEFBQ0ksQUFPQTtBQVBBO0FBQ0ksc0NBTUosQUFBQztlQUFELEFBQ1UsQUFDTjtnQkFGSixBQUVXLEFBQ1A7cUJBSEosQUFHZ0IsQUFDWjtjQUpKLEFBSVMsQUFDTDtjQUxKLEFBS1M7O3NCQUxUO3dCQVJKLEFBUUksQUFPQTtBQVBBO0FBQ0ksc0NBTUosQUFBQztlQUFELEFBQ1UsQUFDTjtnQkFGSixBQUVXLEFBQ1A7Y0FISixBQUdTLEFBQ0w7Y0FKSixBQUlTLEFBQ0w7cUJBTEosQUFLZ0IsQUFDWjtjQU5KLEFBTVM7c0JBTlQ7d0JBaEJPLEFBQ1gsQUFlSTtBQUFBO0FBQ0k7QUFqQloiLCJmaWxlIjoicHJvamVjdC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvanVzdGlucmhvYWRzL3dkaS9uZXh0LXBvcnRmb2xpbyJ9