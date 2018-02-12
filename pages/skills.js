import Layout from '../components/MyLayout.js'
import { Grid, Segment, Divider, Card} from 'semantic-ui-react'


export default () => (
    <Layout>
        <div class="skillsContainer">
            <h1>My Skills</h1>
                <h3>What I bring to a team:</h3>
            <Grid columns={3} relaxed>
                <Grid.Column>
                    <Segment basic>
                            <h2>Problem Solving</h2>
                    </Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment basic>
                        <h2>Javascript</h2>
                        <h5>React, React Native, Angular, Vue</h5>
                    </Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment basic>
                        <h2>HTML/CSS</h2>
                    </Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment basic>
                        <h2>Node.js</h2>
                        <h5>Express, Body Parser</h5>
                    </Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment basic>
                        <h2>REST API's</h2>
                        <h5>Firebase, MongoDB, CosmicJS</h5>
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