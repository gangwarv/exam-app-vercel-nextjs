import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import React from "react";
import {
  Button,
  Card,
  Container,
  Grid,
  Header,
  Icon,
  Image,
  Input,
  Label,
  Loader,
  Message,
  Segment,
  Table,
} from "semantic-ui-react";
import { Exam } from "../../../types";
import Layout from "../../components/layout";
import LoadingList from "../../components/loading/loading-list";
const GET_EXAM = gql`
  query GetExam($id: String) {
    exam(id: $id) {
      exam_id
      title
      sub_title
      topics
      img
      description
      creator {
        id
        name
      }
      questions {
        ques_id
        text
        opt_set
        ans_set
      }
    }
  }
`;

export default function ViewExamPage() {
  const {
    query: { id },
  } = useRouter();
  const { loading, data } = useQuery<{ exam: Exam }>(GET_EXAM, {
    variables: {
      id,
    },
  });
  if (loading)
    return (
      <Layout>
        <LoadingList />
      </Layout>
    );
  const exam = data?.exam || ({} as Exam);
  return (
    <Layout
      banner={ 
        <Segment style={{ padding: "1em 1em" }} inverted vertical>
         
          <Container>
            <Grid stackable>
              <Grid.Row>
                <Grid.Column width={4}>
                  <Card>
                    <Image src={exam.img} />
                    <Card.Content>
                      <Header color="grey" size="small">
                        This exam includes:
                      </Header>
                      <Card.Meta>
                        <Icon name="clock" /> 3 hours
                      </Card.Meta>
                    </Card.Content>
                    <Card.Content className="card-extra" extra>
                      <Button color="green" basic fluid>
                        Start
                      </Button>
                      {/* <Button basic color="red" fluid>
                        Publish
                      </Button> */}
                    </Card.Content>
                  </Card>
                </Grid.Column>
                <Grid.Column width={9}>
                  <Header as="h1" inverted>
                    {exam.title}
                  </Header>
                  <Header
                    color="grey"
                    style={{ marginTop: "-.2em" }}
                    as="h3"
                    inverted
                  >
                    {exam.sub_title}
                  </Header>
                  <Label>by: {exam.creator?.name}</Label>
                  {/* <Divider hidden /> */}
                  <br />
                  <br />
                  <p>{exam.description}</p>
                  <Label icon="globe" basic content="Languages: English" />
                </Grid.Column>
              </Grid.Row>
              {/* <Grid.Row>
                <Grid.Column verticalAlign="bottom" width={3}>
                  <Button.Group  fluid>
                    <Button size="large" inverted secondary>
                      Start
                    </Button>
                    <Button size="large" inverted secondary>
                      Publish
                    </Button>
                  </Button.Group>
                </Grid.Column>
              </Grid.Row> */}
            </Grid>
          </Container>
        </Segment>
      }
    >
      {loading ? (
        <Loader active inline="centered" />
      ) : (
        <>
          <Message icon>
            <Icon name="inbox" />
            <Message.Content>
              <Message.Header>Topics Included</Message.Header>
              <Message.List>
                {exam.topics.map((topic, i) => {
                  return <Message.Item key={i}>{topic}</Message.Item>;
                })}
              </Message.List>
            </Message.Content>
          </Message>
          <Grid>
            <Grid.Row>
              <Grid.Column>
                <Table celled striped>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell colSpan={4}>
                        <Input icon="search" placeholder="Search..." />
                      </Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>

                  <Table.Body>
                    {exam.questions.map((q, i) => (
                      <Table.Row key={i}>
                        <Table.Cell collapsing>#</Table.Cell>
                        <Table.Cell collapsing>{q.text}</Table.Cell>
                        <Table.Cell>
                          <ol type="A" style={{ margin: "0px" }}>
                            {q.opt_set?.map((a) => (
                              <li key={a}>{a}</li>
                            ))}
                          </ol>
                        </Table.Cell>
                        <Table.Cell collapsing textAlign="right">
                          <Button size="small">Delete</Button>
                        </Table.Cell>
                      </Table.Row>
                    ))}
                    {/* 
                    <Table.Row>
                      <Table.Cell collapsing>#</Table.Cell>
                      <Table.Cell collapsing>
                        What is SEO stands for?
                      </Table.Cell>
                      <Table.Cell>
                        A. Search Engine Optimization <br />
                        B. Simple Elect Object
                      </Table.Cell>
                      <Table.Cell collapsing textAlign="right">
                        <Link href="/examset/abc">
                          <Button size="small">Approve</Button>
                        </Link>
                      </Table.Cell>
                    </Table.Row> */}
                  </Table.Body>
                </Table>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </>
      )}
    </Layout>
  );
}
