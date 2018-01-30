import Layout from '../components/MyLayout.js'

const aboutPhotoStyle = {
    minWidth: 100,
    maxWidth: 300,
    width: '100%',
    height: 300,
    borderRadius: 5,
}

export default () => (
    <Layout>
        <div>
        <h1>This is Justin Rhoads</h1>
        <img style={aboutPhotoStyle} src="../static/me.png" />

        <h2>Experience:</h2>
            <ul>
                <li>
                    <h4>Campus Watch - Web Developer</h4>
                    <p>Aug 2017 - Present</p>
                </li>
            </ul>
            <h2>Interests:</h2>
            <ul>
                <li>Sports</li>
                <li>Food</li>
                <li>Fitness so I can have more freedom in the interest above</li>
            </ul>
        
            </div>
            <style jsx>{`
                p {

                }
            `}</style>
    </Layout>
)
