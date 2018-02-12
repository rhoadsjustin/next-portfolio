import Link from 'next/link'
import Head from 'next/head'
import { Image, Reveal } from 'semantic-ui-react'
import Layout from '../components/MyLayout'

const landingPageStyle = {
    margin: 25,
    padding: 10,
    border: '1px solid #DDD',
    alignContent: 'center'
}

export default () => (
    <div style={landingPageStyle}>
        <Head>
            <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css' />
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
    }
    .logo img {
        border-radius: 75px;
        animation: App-logo-spin infinite 20s linear;
    }
    @keyframes App-logo-spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
    }
    `}</style>
    </div>
)
