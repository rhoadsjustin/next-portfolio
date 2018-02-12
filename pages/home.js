import Layout from '../components/MyLayout'
import { Card, Icon, Image } from 'semantic-ui-react'

const picStyle = {
    width: 100,
    height: 100,
}
const socialLinkStyle = {
    marginRight: 20,
    paddingTop: 10
}
export default () => (
    <Layout>
        <Card style={{ width: '75%'}}>
            <Image src="../static/JustinRhoads.jpg"  style={picStyle}/>
            <Card.Content>
                    <Card.Header>
                        Justin Rhoads
                    </Card.Header>
                <Card.Meta>
                    <span className='date'>
                        Web Developer
                    </span>
                </Card.Meta>
                <Card.Description>
                    I am a passionate and skilled web developer. My passion for creating is driven by a desire to use technology to better the world around me. Simple, intuitive, and engaging designs are the solutions I always look for when problems are brought before me. I bring leadership, collaborative, and public-speaking skills from my previous career to complement my strong development skills.
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <a href="https://www.twitter.com/_justinrhoads" style={socialLinkStyle}>
                    <Icon name="twitter" />
                        Follow
                </a>
                <a href="https://www.github.com/rhoadsjustin" style={socialLinkStyle}>
                    <Icon name="github" />
                        Code
                </a>
                <a href="https://www.linkedin.com/in/rhoadsjustin" style={socialLinkStyle}>
                    <Icon name="linkedin" />
                        Connect
                </a>
            </Card.Content>
        </Card>
    </Layout>
)