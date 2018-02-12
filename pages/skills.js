import Layout from '../components/MyLayout.js'
import { Grid, Segment, Divider, Card, Message} from 'semantic-ui-react'


export default () => (
    <Layout>
        <div class="skillsContainer">
            <h1>My Skills</h1>
                <h3>What I bring to a team:</h3>
            <Grid columns={3} relaxed>
                <Grid.Column>
                    <Segment basic>
                        <Message 
                            icon='puzzle'
                            header="Problem Solving"
                            content="Challenges inspire me, and finding solutions give me energy"
                            />
                    </Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment basic>
                        <Message 
                            icon='save'
                            header='Javascript'
                            content='React, React Native, Angular, Vue' />
                    </Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment basic>
                        <Message
                            icon='browser'
                            header='HTML/CSS'
                            content='Responsive Web Design, Materialize, Bootstrap'
                            />
                    </Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment basic>
                        <Message 
                            icon='server'
                            header='Node.js'
                            content='Express, Body Parser' />
                    </Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment basic>
                        <Message
                            icon='connectdevelop'
                            header="REST API's"
                            content='Firebase, MongoDB, CosmicJS'
                            />
                    </Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment basic>
                        <Message
                            icon='users'
                            header="Leadership"
                            content='Development, Collaboration, Communication, Coachability, Humility'
                        />
                    </Segment>
                </Grid.Column>
            </Grid>
        </div>
        <style jsx>{`
            h1, h2, h3, h5 {
                text-align: center;
                font-weight: 400;
            }
            .skillsContainer {
                align-content: center;
            }


        `}</style>

    </Layout>
)