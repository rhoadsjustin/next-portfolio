import Link from 'next/link'
import Head from 'next/head'
import { Image, Reveal } from 'semantic-ui-react'
import Layout from '../components/MyLayout'
import * as d3 from 'd3'
import React, { Component } from 'react'
const landingPageStyle = {
    margin: 25,
    padding: 10,
    border: '1px solid #DDD',
    alignContent: 'center',
    zIndex: -1
}



export default class Index extends Component{
    componentDidMount(){
var width = Math.max(960, innerWidth),
    height = Math.max(500, innerHeight);

var x1 = width / 2,
    y1 = height / 2,
    x0 = x1,
    y0 = y1,
    i = 0,
    r = 200,
    τ = 2 * Math.PI;

var canvas = d3.select(".app").append("canvas")
    .attr("width", width)
    .attr("height", height)
    .on("ontouchstart" in document ? "touchmove" : "mousemove", move);

var context = canvas.node().getContext("2d");
context.globalCompositeOperation = "lighter";
context.lineWidth = 2;

d3.timer(function () {
    context.clearRect(0, 0, width, height);

    var z = d3.hsl(++i % 360, 1, .5).rgb(),
        c = "rgba(" + z.r + "," + z.g + "," + z.b + ",",
        x = x0 += (x1 - x0) * .1,
        y = y0 += (y1 - y0) * .1;

    d3.select({}).transition()
        .duration(2000)
        .ease(Math.sqrt)
        .tween("circle", function () {
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
    render(){
        return (
            <div className="app" style={landingPageStyle}>
                <Head>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" key="viewport" />
                </Head>
                <h1>Justin Rhoads</h1>
                <h2>Web Developer</h2>
                <div className="logo">
                    <img src="../static/profilepic.jpg" />
                </div>
                <div className="landingButton">
                    <Link href="/home">
                        <button>Learn More</button>
                    </Link>
                </div>
                <style jsx>{`
    h1, h2 {
        text-align: center;
    }
    h1 {
        font-size: 4em;
        font-weight: 500;
    }
    h2 {
        font-size: 22px;
        font-weight: 200;
    }
    button {
        width: 100px;
    }
    .landingButton {
        text-align: center;
        padding-top: 20px;
    }
    .logo {
        text-align: center;
        padding-top: 20px;
        font-size: 4em;
    }
    .logo img {
        border-radius: 75px;
        animation: App-logo-spin infinite 20s linear;
        width: 75px;
    }
    @keyframes App-logo-spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
    }
    `}</style>
            </div>
        )
    }
} 

