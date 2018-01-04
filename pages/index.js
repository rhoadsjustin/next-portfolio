import Link from 'next/link'

const landingPageStyle = {
    margin: 25,
    padding: 10,
    border: '1px solid #DDD'
}
export default () => (
    <div>
    <div style={landingPageStyle}>
        <h1>Justin Rhoads</h1>
        <h2>Web Developer</h2>
        <div id="landingButton">
        <Link href="/home">
            <button>Learn More</button>
        </Link>
        </div>
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
    #landingButton {
        display: flex;
        align-content: center;
        justify-content: center;
    }
    `}</style>
    </div>
)
