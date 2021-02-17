import {
  Button,
    Card,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  Label,
  Segment,
} from "semantic-ui-react";
import { Exam } from "../../types";

export default function Banner() {
  const exam: Exam = {
    title: "Exam First of the Year",
    img: "/img/item.jpg",
    exam_id: "1",
    creator: {
      name: "Vishal Fng",
      id: "1",
    },
    description:
      "The next generation of our icon library + toolkit is coming with more icons, more styles, more services, and more awesome. Pre-order now to get access to our alpha and future releases!",
  };
  const banner = (
    <Segment style={{ padding: "1em 1em" }} inverted vertical>
      <Container>
        <Grid stackable>
          <Grid.Column width={9}>
            <Header color="black" size="huge" inverted>
              {exam.title}
            </Header>
            <Header color="black" inverted>
              {exam.description}
            </Header>
            <Label className="cinema">By: {exam.creator.name}</Label>
            <Divider />
            <Button size="large" inverted secondary>
              Check It Out
            </Button>
          </Grid.Column>
          <Grid.Column textAlign="center" floated="right" width={4}>
            <Card>
                <Image 
                  src="https://react.semantic-ui.com/images/avatar/large/steve.jpg"
                />
              {/* <Card.Content>
                <Card.Header>Steve Sanders</Card.Header>
                <Card.Meta>Friends of Elliot</Card.Meta>
                <Card.Description>
                  Steve wants to add you to the group{" "}
                  <strong>best friends</strong>
                </Card.Description>
              </Card.Content> */}
              <Card.Content extra>
                <div className="ui two buttons inverted">
                  <Button basic color="green">
                    Approve
                  </Button>
                  <Button basic color="red">
                    Decline
                  </Button>
                </div>
              </Card.Content>
            </Card>
            {/* <Image size="medium" src={exam.img} />
            <br/>
            <Button size="large" inverted secondary>
              Publish
            </Button>  */}
          </Grid.Column>
        </Grid>
      </Container>
    </Segment>
  );

  return banner;
}
