import Link from 'next/link'
import Head from 'next/head'
import { Image, Reveal } from 'semantic-ui-react'

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
            <div className="landingButton">
                    <Reveal animated='rotate'>
                        <Reveal.Content visible>
                            <Image circular size='small' src='../static/me.png' />
                        </Reveal.Content>
                        <Reveal.Content hidden >
                                    <Image circular size='small' src='../static/friends.jpg' />
                                    <Link href="/home">
                                        <button>Learn More</button>
                                    </Link>
                        </Reveal.Content>
                    </Reveal>
            </div>
    <style jsx>{`
    h1, h2 {
        text-align: center;
    }
    h1 {
        font-size: 2em;
        font-weight: 500;
    }
    h2 {
        font-size: 16px;
        font-weight: 200;
    }
    button {
        width: 100px;
    }
    .landingButton {
        display: flex;
        align-content: center;
        justify-items: center;
    }
    `}</style>
    </div>
)
