import Layout from '../components/MyLayout'
import { Card, Icon, Image, Button } from 'semantic-ui-react'

const projectStyle = {
    margin: 10,
    padding: 10,
}

const linkStyle = {
    textDecoration: 'none'
}

const logoPicStyle = {
    width: 150,
    height: 150
}
const Project = (props) => (
    <div style={projectStyle}>
        <Card>
            <Image src={props.logo} />
            <Card.Content>
                <Card.Header>
                    {props.title}
                </Card.Header>
                <Card.Description>
                    {props.description}
                </Card.Description>
                <Card.Content extra>
                    Tech Used: {props.tech} 
                </Card.Content>
            </Card.Content>
            <Card.Content extra>
                    <div className='ui two buttons'>
                        <Button basic>
                            <a href={props.github}>
                            <Icon name='github' />
                            Github
                            </a>
                        </Button>
                        <Button basic>
                            <a href={props.live}>
                                <Icon name='video play outline' />
                                Live Project
                            </a>
                        </Button>
                    </div>
            </Card.Content>
        </Card>
    </div>
)

export default (props) => (
    <Layout>
        <Project 
            title="Argue Smarter" 
            github="https://github.com/rhoadsjustin/ArgueSmarter" 
            live="https://expo.io/@rhoadsjustin/argue-smarter" 
            logo="../static/argueSmarter.png" 
            description="React Native App utilizing Sports Data Api for stats so users can compare players, vote on matchups, and see live scoring updates on their favorite team" 
            tech="React Native, Redux, Router-Flux, Expo, NativeBase"/>
        <Project 
            title="Spotify Clone" 
            github="https://github.com/rhoadsjustin/Slotify" 
            description="Spotify like music player allowing users to create profiles, playlists, and play music"
            tech="PHP, XAMPP, Javascript, CSS, HTML, MySQL" 
            logo="../static/SLOTIFY.png"
            />
        <Project 
            title="Drone Builder" 
            github="https://github.com/rhoadsjustin/DroneDB" 
            live="https://dronedatabase.herokuapp.com/" 
            logo="../static/droneDB.png"
            description="A step by step Racing Drone Builder site that helps you build your first racing drone with prices for each part."
            tech="React, Materialize, CSS, Firebase"/>
    </Layout>
)