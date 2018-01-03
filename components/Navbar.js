import Link from 'next/link'


const linkStyle = {
    marginRight: 20
}

const Navbar = () => (
    <div>
        <Link href="/about">
            <a style={linkStyle}>About</a>
        </Link>
        <Link href="/project">
            <a style={linkStyle}>Projects</a>
        </Link>
        <Link href="/skills">
            <a style={linkStyle}>Skills</a>
        </Link>
    </div>
)

export default Navbar