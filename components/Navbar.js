import Link from 'next/link'
import Head from 'next/head'
import { Input, Menu, Segment } from 'semantic-ui-react'



const linkStyle = {
    marginRight: 20
}

const Navbar = () => (
    <div>
        <Head>
            <link rel='stylesheet' href='//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css' />
        </Head>
        <Menu pointing>
            <Menu.Item>
                <Link href="/about">
                    <a style={linkStyle}>About</a>
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link href="/project">
                    <a style={linkStyle}>Projects</a>
                </Link>
            </Menu.Item>
            <Menu.Item>
                <Link href="/skills">
                    <a style={linkStyle}>Skills</a>
                </Link>
            </Menu.Item>
        </Menu>
    </div>
)

export default Navbar