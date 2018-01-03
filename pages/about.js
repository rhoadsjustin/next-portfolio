import Layout from '../components/MyLayout.js'
import me from '../static/me.png'

export default () => (
    <Layout>
        <div>
        <p>This is Justin Rhoads</p>
        <img src={me} />

        <p>Exprience:</p>
            <ul>
                <li>
                    <h4>Campus Watch - Web Developer</h4>
                    <p>Aug 2017 - Present</p>
                    </li>
            </ul>
            </div>
    </Layout>
)
