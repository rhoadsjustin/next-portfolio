import Layout from '../components/MyLayout'
const picStyle = {
    width: 100,
    height: 100,
    paddingRight: 10,
    paddingTop: 10
}

export default () => (
    <Layout>
       <img src="../static/JustinRhoads.jpg" style={picStyle}/>
        <div>
            <p>
                I am a passionate and skilled web developer. My passion for creating is driven by a desire to use technology to better the world around me. Simple, intuitive, and engaging designs are the solutions I always look for when problems are brought before me. I bring leadership, collaborative, and public-speaking skills from my previous career to complement my strong development skills.
            </p>
        </div>
    </Layout>
)