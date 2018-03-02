'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _style = require('styled-jsx/style.js');

var _style2 = _interopRequireDefault(_style);

var _link = require('next/dist/lib/link.js');

var _link2 = _interopRequireDefault(_link);

var _head = require('next/dist/lib/head.js');

var _head2 = _interopRequireDefault(_head);

var _semanticUiReact = require('semantic-ui-react');

var _MyLayout = require('../components/MyLayout');

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _d = require('d3');

var d3 = _interopRequireWildcard(_d);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/justinrhoads/wdi/next-portfolio/pages/index.js?entry';

var landingPageStyle = {
    margin: 25,
    padding: 10,
    border: '1px solid #DDD',
    alignContent: 'center',
    zIndex: -1
};

var Index = function (_Component) {
    (0, _inherits3.default)(Index, _Component);

    function Index() {
        (0, _classCallCheck3.default)(this, Index);

        return (0, _possibleConstructorReturn3.default)(this, (Index.__proto__ || (0, _getPrototypeOf2.default)(Index)).apply(this, arguments));
    }

    (0, _createClass3.default)(Index, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var width = Math.max(960, innerWidth),
                height = Math.max(500, innerHeight);

            var x1 = width / 2,
                y1 = height / 2,
                x0 = x1,
                y0 = y1,
                i = 0,
                r = 200,
                τ = 2 * Math.PI;

            var canvas = d3.select(".app").append("canvas").attr("width", width).attr("height", height).on("ontouchstart" in document ? "touchmove" : "mousemove", move);

            var context = canvas.node().getContext("2d");
            context.globalCompositeOperation = "lighter";
            context.lineWidth = 2;

            d3.timer(function () {
                context.clearRect(0, 0, width, height);

                var z = d3.hsl(++i % 360, 1, .5).rgb(),
                    c = "rgba(" + z.r + "," + z.g + "," + z.b + ",",
                    x = x0 += (x1 - x0) * .1,
                    y = y0 += (y1 - y0) * .1;

                d3.select({}).transition().duration(2000).ease(Math.sqrt).tween("circle", function () {
                    return function (t) {
                        context.strokeStyle = c + (1 - t) + ")";
                        context.beginPath();
                        context.arc(x, y, r * t, 0, τ);
                        context.stroke();
                    };
                });
            });

            function move() {
                var mouse = d3.mouse(this);
                x1 = mouse[0];
                y1 = mouse[1];
                d3.event.preventDefault();
            }
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement('div', { style: landingPageStyle, className: 'jsx-4211956783' + ' ' + 'app',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 70
                }
            }, _react2.default.createElement(_head2.default, {
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 71
                }
            }, _react2.default.createElement('meta', { name: 'viewport', content: 'initial-scale=1.0, width=device-width', key: 'viewport', className: 'jsx-4211956783',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 72
                }
            })), _react2.default.createElement('h1', {
                className: 'jsx-4211956783',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 74
                }
            }, 'Justin Rhoads'), _react2.default.createElement('h2', {
                className: 'jsx-4211956783',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 75
                }
            }, 'Web Developer'), _react2.default.createElement('div', {
                className: 'jsx-4211956783' + ' ' + 'logo',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 76
                }
            }, _react2.default.createElement('img', { src: '../static/profilepic.jpg', className: 'jsx-4211956783',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 77
                }
            })), _react2.default.createElement('div', {
                className: 'jsx-4211956783' + ' ' + 'landingButton',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 79
                }
            }, _react2.default.createElement(_link2.default, { href: '/home', __source: {
                    fileName: _jsxFileName,
                    lineNumber: 80
                }
            }, _react2.default.createElement('button', {
                className: 'jsx-4211956783',
                __source: {
                    fileName: _jsxFileName,
                    lineNumber: 81
                }
            }, 'Learn More'))), _react2.default.createElement(_style2.default, {
                styleId: '4211956783',
                css: 'h1.jsx-4211956783,h2.jsx-4211956783{text-align:center;}h1.jsx-4211956783{font-size:4em;font-weight:500;}h2.jsx-4211956783{font-size:22px;font-weight:200;}button.jsx-4211956783{width:100px;}.landingButton.jsx-4211956783{text-align:center;padding-top:20px;}.logo.jsx-4211956783{text-align:center;padding-top:20px;font-size:4em;}.logo.jsx-4211956783 img.jsx-4211956783{border-radius:75px;-webkit-animation:App-logo-spin-jsx-4211956783 infinite 20s linear;animation:App-logo-spin-jsx-4211956783 infinite 20s linear;width:75px;}@-webkit-keyframes App-logo-spin-jsx-4211956783{from{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}@keyframes App-logo-spin-jsx-4211956783{from{-webkit-transform:rotate(0deg);-ms-transform:rotate(0deg);transform:rotate(0deg);}to{-webkit-transform:rotate(360deg);-ms-transform:rotate(360deg);transform:rotate(360deg);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzP2VudHJ5Il0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW1GNEIsQUFHMkIsQUFHSixBQUlDLEFBSUgsQUFHTSxBQUlBLEFBS0MsQUFLYyxBQUNBLFlBakJyQyxFQVJvQixDQUlBLEdBUHBCLEFBY3FCLEFBSUEsQ0FLMkIsV0FuQmhELENBSUEsSUFPQSxBQUlrQixjQUNsQixnQ0FPc0MsTUFDQSwwREFKdkIsV0FDZiIsImZpbGUiOiJwYWdlcy9pbmRleC5qcz9lbnRyeSIsInNvdXJjZVJvb3QiOiIvVXNlcnMvanVzdGlucmhvYWRzL3dkaS9uZXh0LXBvcnRmb2xpbyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcbmltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCdcbmltcG9ydCB7IEltYWdlLCBSZXZlYWwgfSBmcm9tICdzZW1hbnRpYy11aS1yZWFjdCdcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dCdcbmltcG9ydCAqIGFzIGQzIGZyb20gJ2QzJ1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuY29uc3QgbGFuZGluZ1BhZ2VTdHlsZSA9IHtcbiAgICBtYXJnaW46IDI1LFxuICAgIHBhZGRpbmc6IDEwLFxuICAgIGJvcmRlcjogJzFweCBzb2xpZCAjREREJyxcbiAgICBhbGlnbkNvbnRlbnQ6ICdjZW50ZXInLFxuICAgIHpJbmRleDogLTFcbn1cblxuXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZGV4IGV4dGVuZHMgQ29tcG9uZW50e1xuICAgIGNvbXBvbmVudERpZE1vdW50KCl7XG52YXIgd2lkdGggPSBNYXRoLm1heCg5NjAsIGlubmVyV2lkdGgpLFxuICAgIGhlaWdodCA9IE1hdGgubWF4KDUwMCwgaW5uZXJIZWlnaHQpO1xuXG52YXIgeDEgPSB3aWR0aCAvIDIsXG4gICAgeTEgPSBoZWlnaHQgLyAyLFxuICAgIHgwID0geDEsXG4gICAgeTAgPSB5MSxcbiAgICBpID0gMCxcbiAgICByID0gMjAwLFxuICAgIM+EID0gMiAqIE1hdGguUEk7XG5cbnZhciBjYW52YXMgPSBkMy5zZWxlY3QoXCIuYXBwXCIpLmFwcGVuZChcImNhbnZhc1wiKVxuICAgIC5hdHRyKFwid2lkdGhcIiwgd2lkdGgpXG4gICAgLmF0dHIoXCJoZWlnaHRcIiwgaGVpZ2h0KVxuICAgIC5vbihcIm9udG91Y2hzdGFydFwiIGluIGRvY3VtZW50ID8gXCJ0b3VjaG1vdmVcIiA6IFwibW91c2Vtb3ZlXCIsIG1vdmUpO1xuXG52YXIgY29udGV4dCA9IGNhbnZhcy5ub2RlKCkuZ2V0Q29udGV4dChcIjJkXCIpO1xuY29udGV4dC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSBcImxpZ2h0ZXJcIjtcbmNvbnRleHQubGluZVdpZHRoID0gMjtcblxuZDMudGltZXIoZnVuY3Rpb24gKCkge1xuICAgIGNvbnRleHQuY2xlYXJSZWN0KDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xuXG4gICAgdmFyIHogPSBkMy5oc2woKytpICUgMzYwLCAxLCAuNSkucmdiKCksXG4gICAgICAgIGMgPSBcInJnYmEoXCIgKyB6LnIgKyBcIixcIiArIHouZyArIFwiLFwiICsgei5iICsgXCIsXCIsXG4gICAgICAgIHggPSB4MCArPSAoeDEgLSB4MCkgKiAuMSxcbiAgICAgICAgeSA9IHkwICs9ICh5MSAtIHkwKSAqIC4xO1xuXG4gICAgZDMuc2VsZWN0KHt9KS50cmFuc2l0aW9uKClcbiAgICAgICAgLmR1cmF0aW9uKDIwMDApXG4gICAgICAgIC5lYXNlKE1hdGguc3FydClcbiAgICAgICAgLnR3ZWVuKFwiY2lyY2xlXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAodCkge1xuICAgICAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSBjICsgKDEgLSB0KSArIFwiKVwiO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgY29udGV4dC5hcmMoeCwgeSwgciAqIHQsIDAsIM+EKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LnN0cm9rZSgpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG59KTtcblxuZnVuY3Rpb24gbW92ZSgpIHtcbiAgICB2YXIgbW91c2UgPSBkMy5tb3VzZSh0aGlzKTtcbiAgICB4MSA9IG1vdXNlWzBdO1xuICAgIHkxID0gbW91c2VbMV07XG4gICAgZDMuZXZlbnQucHJldmVudERlZmF1bHQoKTtcbn1cblxuICAgIH1cbiAgICByZW5kZXIoKXtcbiAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXBwXCIgc3R5bGU9e2xhbmRpbmdQYWdlU3R5bGV9PlxuICAgICAgICAgICAgICAgIDxIZWFkPlxuICAgICAgICAgICAgICAgICAgICA8bWV0YSBuYW1lPVwidmlld3BvcnRcIiBjb250ZW50PVwiaW5pdGlhbC1zY2FsZT0xLjAsIHdpZHRoPWRldmljZS13aWR0aFwiIGtleT1cInZpZXdwb3J0XCIgLz5cbiAgICAgICAgICAgICAgICA8L0hlYWQ+XG4gICAgICAgICAgICAgICAgPGgxPkp1c3RpbiBSaG9hZHM8L2gxPlxuICAgICAgICAgICAgICAgIDxoMj5XZWIgRGV2ZWxvcGVyPC9oMj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxvZ29cIj5cbiAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIuLi9zdGF0aWMvcHJvZmlsZXBpYy5qcGdcIiAvPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibGFuZGluZ0J1dHRvblwiPlxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2hvbWVcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24+TGVhcm4gTW9yZTwvYnV0dG9uPlxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgIGgxLCBoMiB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG4gICAgaDEge1xuICAgICAgICBmb250LXNpemU6IDRlbTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICB9XG4gICAgaDIge1xuICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gICAgfVxuICAgIGJ1dHRvbiB7XG4gICAgICAgIHdpZHRoOiAxMDBweDtcbiAgICB9XG4gICAgLmxhbmRpbmdCdXR0b24ge1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIHBhZGRpbmctdG9wOiAyMHB4O1xuICAgIH1cbiAgICAubG9nbyB7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZy10b3A6IDIwcHg7XG4gICAgICAgIGZvbnQtc2l6ZTogNGVtO1xuICAgIH1cbiAgICAubG9nbyBpbWcge1xuICAgICAgICBib3JkZXItcmFkaXVzOiA3NXB4O1xuICAgICAgICBhbmltYXRpb246IEFwcC1sb2dvLXNwaW4gaW5maW5pdGUgMjBzIGxpbmVhcjtcbiAgICAgICAgd2lkdGg6IDc1cHg7XG4gICAgfVxuICAgIEBrZXlmcmFtZXMgQXBwLWxvZ28tc3BpbiB7XG4gICAgICAgICAgICBmcm9tIHsgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7IH1cbiAgICAgICAgICAgIHRvIHsgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTsgfVxuICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKVxuICAgIH1cbn0gXG5cbiJdfQ== */\n/*@ sourceURL=pages/index.js?entry */'
            }));
        }
    }]);

    return Index;
}(_react.Component);

exports.default = Index;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbIkxpbmsiLCJIZWFkIiwiSW1hZ2UiLCJSZXZlYWwiLCJMYXlvdXQiLCJkMyIsIlJlYWN0IiwiQ29tcG9uZW50IiwibGFuZGluZ1BhZ2VTdHlsZSIsIm1hcmdpbiIsInBhZGRpbmciLCJib3JkZXIiLCJhbGlnbkNvbnRlbnQiLCJ6SW5kZXgiLCJJbmRleCIsIndpZHRoIiwiTWF0aCIsIm1heCIsImlubmVyV2lkdGgiLCJoZWlnaHQiLCJpbm5lckhlaWdodCIsIngxIiwieTEiLCJ4MCIsInkwIiwiaSIsInIiLCLPhCIsIlBJIiwiY2FudmFzIiwic2VsZWN0IiwiYXBwZW5kIiwiYXR0ciIsIm9uIiwiZG9jdW1lbnQiLCJtb3ZlIiwiY29udGV4dCIsIm5vZGUiLCJnZXRDb250ZXh0IiwiZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uIiwibGluZVdpZHRoIiwidGltZXIiLCJjbGVhclJlY3QiLCJ6IiwiaHNsIiwicmdiIiwiYyIsImciLCJiIiwieCIsInkiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJlYXNlIiwic3FydCIsInR3ZWVuIiwidCIsInN0cm9rZVN0eWxlIiwiYmVnaW5QYXRoIiwiYXJjIiwic3Ryb2tlIiwibW91c2UiLCJldmVudCIsInByZXZlbnREZWZhdWx0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxBQUFPOzs7O0FBQ1AsQUFBTzs7OztBQUNQLEFBQVMsQUFBTzs7QUFDaEIsQUFBTyxBQUFZOzs7O0FBQ25CLEFBQU87O0lBQVAsQUFBWTs7QUFDWixBQUFPLEFBQVM7Ozs7Ozs7Ozs7QUFDaEIsSUFBTTtZQUFtQixBQUNiLEFBQ1I7YUFGcUIsQUFFWixBQUNUO1lBSHFCLEFBR2IsQUFDUjtrQkFKcUIsQUFJUCxBQUNkO1lBQVEsQ0FMWixBQUF5QixBQUtaO0FBTFksQUFDckI7O0ksQUFTaUI7Ozs7Ozs7Ozs7OzRDQUNFLEFBQ3ZCO2dCQUFJLFFBQVEsS0FBQSxBQUFLLElBQUwsQUFBUyxLQUFyQixBQUFZLEFBQWM7Z0JBQ3RCLFNBQVMsS0FBQSxBQUFLLElBQUwsQUFBUyxLQUR0QixBQUNhLEFBQWMsQUFFM0I7O2dCQUFJLEtBQUssUUFBVCxBQUFpQjtnQkFDYixLQUFLLFNBRFQsQUFDa0I7Z0JBQ2QsS0FGSixBQUVTO2dCQUNMLEtBSEosQUFHUztnQkFDTCxJQUpKLEFBSVE7Z0JBQ0osSUFMSixBQUtRO2dCQUNKLElBQUksSUFBSSxLQU5aLEFBTWlCLEFBRWpCOztnQkFBSSxTQUFTLEdBQUEsQUFBRyxPQUFILEFBQVUsUUFBVixBQUFrQixPQUFsQixBQUF5QixVQUF6QixBQUNSLEtBRFEsQUFDSCxTQURHLEFBQ00sT0FETixBQUVSLEtBRlEsQUFFSCxVQUZHLEFBRU8sUUFGUCxBQUdSLEdBQUcsa0JBQUEsQUFBa0IsV0FBbEIsQUFBNkIsY0FIeEIsQUFHc0MsYUFIbkQsQUFBYSxBQUdtRCxBQUVoRTs7Z0JBQUksVUFBVSxPQUFBLEFBQU8sT0FBUCxBQUFjLFdBQTVCLEFBQWMsQUFBeUIsQUFDdkM7b0JBQUEsQUFBUSwyQkFBUixBQUFtQyxBQUNuQztvQkFBQSxBQUFRLFlBQVIsQUFBb0IsQUFFcEI7O2VBQUEsQUFBRyxNQUFNLFlBQVksQUFDakI7d0JBQUEsQUFBUSxVQUFSLEFBQWtCLEdBQWxCLEFBQXFCLEdBQXJCLEFBQXdCLE9BQXhCLEFBQStCLEFBRS9COztvQkFBSSxJQUFJLEdBQUEsQUFBRyxJQUFJLEVBQUEsQUFBRSxJQUFULEFBQWEsS0FBYixBQUFrQixHQUFsQixBQUFxQixJQUE3QixBQUFRLEFBQXlCO29CQUM3QixJQUFJLFVBQVUsRUFBVixBQUFZLElBQVosQUFBZ0IsTUFBTSxFQUF0QixBQUF3QixJQUF4QixBQUE0QixNQUFNLEVBQWxDLEFBQW9DLElBRDVDLEFBQ2dEO29CQUM1QyxJQUFJLE1BQU0sQ0FBQyxLQUFELEFBQU0sTUFGcEIsQUFFMEI7b0JBQ3RCLElBQUksTUFBTSxDQUFDLEtBQUQsQUFBTSxNQUhwQixBQUcwQixBQUUxQjs7bUJBQUEsQUFBRyxPQUFILEFBQVUsSUFBVixBQUFjLGFBQWQsQUFDSyxTQURMLEFBQ2MsTUFEZCxBQUVLLEtBQUssS0FGVixBQUVlLE1BRmYsQUFHSyxNQUhMLEFBR1csVUFBVSxZQUFZLEFBQ3pCOzJCQUFPLFVBQUEsQUFBVSxHQUFHLEFBQ2hCO2dDQUFBLEFBQVEsY0FBYyxLQUFLLElBQUwsQUFBUyxLQUEvQixBQUFvQyxBQUNwQztnQ0FBQSxBQUFRLEFBQ1I7Z0NBQUEsQUFBUSxJQUFSLEFBQVksR0FBWixBQUFlLEdBQUcsSUFBbEIsQUFBc0IsR0FBdEIsQUFBeUIsR0FBekIsQUFBNEIsQUFDNUI7Z0NBQUEsQUFBUSxBQUNYO0FBTEQsQUFNSDtBQVZMLEFBV0g7QUFuQkQsQUFxQkE7O3FCQUFBLEFBQVMsT0FBTyxBQUNaO29CQUFJLFFBQVEsR0FBQSxBQUFHLE1BQWYsQUFBWSxBQUFTLEFBQ3JCO3FCQUFLLE1BQUwsQUFBSyxBQUFNLEFBQ1g7cUJBQUssTUFBTCxBQUFLLEFBQU0sQUFDWDttQkFBQSxBQUFHLE1BQUgsQUFBUyxBQUNaO0FBRUk7Ozs7aUNBQ08sQUFDSjttQ0FDSSxjQUFBLFNBQXFCLE9BQXJCLEFBQTRCLHNEQUE1QixBQUFlOzs4QkFBZjtnQ0FBQSxBQUNJO0FBREo7YUFBQSxrQkFDSSxBQUFDOzs4QkFBRDtnQ0FBQSxBQUNJO0FBREo7QUFBQSx1REFDVSxNQUFOLEFBQVcsWUFBVyxTQUF0QixBQUE4Qix5Q0FBd0MsS0FBdEUsQUFBMEUsdUJBQTFFOzs4QkFBQTtnQ0FGUixBQUNJLEFBQ0ksQUFFSjtBQUZJO2lDQUVKLGNBQUE7MkJBQUE7OzhCQUFBO2dDQUFBO0FBQUE7QUFBQSxlQUpKLEFBSUksQUFDQSxrQ0FBQSxjQUFBOzJCQUFBOzs4QkFBQTtnQ0FBQTtBQUFBO0FBQUEsZUFMSixBQUtJLEFBQ0Esa0NBQUEsY0FBQTtvREFBQSxBQUFlOzs4QkFBZjtnQ0FBQSxBQUNJO0FBREo7QUFBQSxzREFDUyxLQUFMLEFBQVMsdUNBQVQ7OzhCQUFBO2dDQVBSLEFBTUksQUFDSSxBQUVKO0FBRkk7aUNBRUosY0FBQTtvREFBQSxBQUFlOzs4QkFBZjtnQ0FBQSxBQUNJO0FBREo7QUFBQSwrQkFDSSxBQUFDLGdDQUFLLE1BQU4sQUFBVzs4QkFBWDtnQ0FBQSxBQUNJO0FBREo7K0JBQ0ksY0FBQTsyQkFBQTs7OEJBQUE7Z0NBQUE7QUFBQTtBQUFBLGVBWFosQUFTSSxBQUNJLEFBQ0k7eUJBWFo7cUJBREosQUFDSSxBQWtEUDtBQWxETzs7Ozs7QUFyRHVCLEE7O2tCQUFkLEEiLCJmaWxlIjoiaW5kZXguanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL2p1c3RpbnJob2Fkcy93ZGkvbmV4dC1wb3J0Zm9saW8ifQ==