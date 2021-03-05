import {
  Button,
  Container,
  Grid,
  Header,
  Image,
  Segment,
} from "semantic-ui-react";
import Layout from "../components/layout"; 
import AuthContext from '../context/auth.context';
import { useContext } from "react";


export default function Home() { 
  const { appName } = useContext(AuthContext)
  const banner = (
    <Segment
      style={{ padding: "1em 1em", minHeight: "200px" }}
      inverted
      vertical
    >
      <Container>
        <div>
          <Header color="black" size="huge" inverted>
            {appName.toUpperCase()}
          </Header>
          <Header color="black" inverted>
            Ultimate Plateform for Beginners. 
          </Header>
          <div>
            <Button size="large" inverted secondary>
              Check It Out
            </Button>
          </div>
        </div>
      </Container>
    </Segment>
  );
  return (
    <Layout banner={banner}>
      <Segment padded vertical>
        <Grid container stackable verticalAlign="middle">
          <Grid.Row>
            <Grid.Column textAlign="center">
              <Header size="huge">WHAT IS {appName.toUpperCase()}?</Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column textAlign="center">
              <Button secondary basic animated="vertical" size="huge">
                <Button.Content visible>Watch the video</Button.Content>
                <Button.Content hidden> 
                  <i className="fa fa-youtube-play fa-lg" />
                </Button.Content>
              </Button>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column width={8}>
              <Header as="h3" style={{ fontSize: "2em" }}>
                We Help Companies and Companions
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                We can give your company superpowers to do things that they
                never thought possible. Let us delight your customers and
                empower your needs... through pure data analytics.
              </p>
              <Header as="h3" style={{ fontSize: "2em" }}>
                We Make Bananas That Can Dance
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                Yes that's right, you thought it was the stuff of dreams, but
                even bananas can be bioengineered.
              </p>
            </Grid.Column>
            <Grid.Column floated="right" width={6}>
              <Image bordered rounded size="large" src="img/exam-home.jpg" />
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
    </Layout>
  );
}
