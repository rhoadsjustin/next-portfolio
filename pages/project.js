import Layout from '../components/MyLayout'

const projectStyle = {
    margin: 10,
    padding: 10,
}

const linkStyle = {
    textDecoration: 'none'
}
const Project = (props) => (
    <div>
        <h1>{props.title}</h1>
        <p>This project is amazing and should cause you to hire me.</p>
        <div style={projectStyle}>
            <a href={props.github} style={linkStyle}>Project Github </a>
            <a href={props.live} style={linkStyle}>| Live Project</a>
        </div>
    </div>
)

export default (props) => (
    <Layout>
        <Project title="Argue Smarter" github="https://github.com/rhoadsjustin/ArgueSmarter" live="https://expo.io/@rhoadsjustin/argue-smarter" />
        <Project title="Spotify Clone" github="https://github.com/rhoadsjustin/Slotify" />
        <Project title="Drone Builder" github="https://github.com/rhoadsjustin/DroneDB" live="https://dronedatabase.herokuapp.com/" />
    </Layout>
)