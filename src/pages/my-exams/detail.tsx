import { useQuery, gql } from "@apollo/client";
import { useRouter } from "next/router";
import React, { useState } from "react";
import {
  Button,
  Form,
  Grid,
  Header,
  Input,
  Message,
  SemanticWIDTHS,
} from "semantic-ui-react";
import { Exam } from "../../../types";
// import CsvEditor from "../../components/CsvEditor";
import Layout from "../../components/layout";
// import QuestionEditModal from "../../components/question-edit-modal";
import QuestionsEdit from "../../components/questions-edit";
import LoadingList from "../../components/loading/loading-list";
import { Question } from "../../../types";

const GET_EXAM = gql`
  query GetExam($id: String) {
    exam(id: $id) {
      exam_id
      title
      sub_title
      topics
      img
      description
      language
      duration
      creator {
        id
        name
      }
      questions {
        ques_id
        type
        text
        opt_set
        ans_set
        ans_text
      }
    }
  }
`;

export default function ExamDetailPage() {
  const {
    query: { id },
  } = useRouter();
  const { loading, data, error } = useQuery<{ exam: Exam }>(GET_EXAM, {
    variables: {
      id,
    },
  });
  if (error) {
    return (
      <Layout>
        <h1>Error</h1>
      </Layout>
    );
  }
  if (loading) {
    return (
      <Layout>
        <LoadingList />
      </Layout>
    );
  }

  const exam = data.exam;
  return (
    <Layout>
      <Header as="h1">{exam.title}</Header>
      <EditDetails exam={data.exam} />
    </Layout>
  );
}

interface FieldArrayProps {
  itemArray: Array<string>;
  label?: string;
  setItemArray: (topics: Array<string>) => void;
  width?: SemanticWIDTHS;
}
function FieldArray({
  itemArray,
  setItemArray,
  width,
  label,
}: FieldArrayProps) {
  return (
    <>
      {itemArray.map((x, i) => {
        const isFirst = i == 0;
        return (
          <Form.Field key={i} width={width}>
            {isFirst && label && <label>{label}</label>}

            <Input
              value={x}
              onChange={(_, { value }) => {
                let newarray = [...itemArray];
                newarray[i] = value;
                setItemArray(newarray);
              }}
              action={{
                icon: isFirst ? "plus" : "minus",
                type: "button",
                onClick: (e) => {
                  if (isFirst)
                    setItemArray([...itemArray, "item " + itemArray.length]);
                  else {
                    setItemArray(
                      itemArray.filter((_, j) => {
                        return j != i;
                      })
                    );
                  }
                  return false;
                },
              }}
              placeholder={label + " " + (i + 1)}
            />
          </Form.Field>
        );
      })}
    </>
  );
}

function EditDetails({ exam: initialExam }: { exam: Exam }) {
  // const [] = useState(false);
  const [exam, setExam] = useState(initialExam);

  function handleExamChange(e: any, { name, value }: any) {
    console.log({ name, value });
    setExam({ ...exam, [name]: value });
  }
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <Message
            attached
            header="Welcome to our site!"
            content="Fill out the form below to sign-up for a new account"
          />
          <Form
            onSubmit={() => console.log("Submitted:", exam)}
            className="attached fluid segment"
          >
            <Form.Group widths="equal">
              <Form.Input
                fluid
                label="Title"
                placeholder="Title"
                type="text"
                required
                value={exam.title}
                name="title"
                onChange={handleExamChange}
              />
              <Form.Input
                fluid
                label="Sub Title"
                placeholder="Sub-Title"
                type="text"
                required
                name="sub_title"
                value={exam.sub_title}
                onChange={handleExamChange}
              />
            </Form.Group>
            <Form.TextArea
              label="Description"
              placeholder="Description"
              required
              name="description"
              value={exam.description}
              onChange={handleExamChange}
            />

            <FieldArray
              itemArray={exam.topics}
              setItemArray={(tops) => {
                handleExamChange(null, { name: "topics", value: tops });
              }}
              width="16"
              label="Topics Included"
            />
            <Form.Group widths="equal">
              <Form.Input
                label="Language"
                placeholder="Language"
                type="text"
                name="language"
                value={exam.language || ""}
                onChange={handleExamChange}
              />
              <Form.Input
                label="Exam Duration"
                placeholder="Duration eg; 2 hour"
                type="text"
                name="duation"
                value={exam.duration || ""}
                onChange={handleExamChange}
              />
            </Form.Group>
            {/* <Form.Input label="Password" type="password" /> */}
            <QuestionsEdit
              questions={exam.questions}
              setQuestions={(cb: (d: Array<Question>) => Array<Question>) => {
                let updatedQuestions = cb(exam.questions);
                setExam((ex) => ({ ...ex, questions: updatedQuestions }));
              }}
            />
            {/* <Table compact className={showQues ? "" : "text-blur"}>
              <Table.Header>
                <Table.Row>
                  <Table.HeaderCell colSpan="3">
                    <Header floated="left">Questions Set</Header>
                    <Checkbox
                      checked={showQues}
                      onChange={() => setShowQues(!showQues)}
                      toggle
                      label={showQues ? "Hide Questions" : "Show Questions"}
                    />
                  </Table.HeaderCell>
                  <Table.HeaderCell colSpan="2">
                    <Button.Group floated="right">
                      <Button type="button" color="blue">
                        Import CSV
                      </Button>
                      <Button.Or />
                      <Button type="button" color="grey">
                        Export CSV
                      </Button>
                    </Button.Group>
                  </Table.HeaderCell>
                </Table.Row>
                <Table.Row>
                  <Table.HeaderCell></Table.HeaderCell>
                  <Table.HeaderCell>Question Type</Table.HeaderCell>
                  <Table.HeaderCell>Question</Table.HeaderCell>
                  <Table.HeaderCell>Answere(s)</Table.HeaderCell>
                  <Table.HeaderCell>
                    <QuestionEditModal
                      question={null}
                      trigger={
                        <Button type="button" icon>
                          <Icon name="plus" />
                        </Button>
                      }
                    />
                  </Table.HeaderCell>
                </Table.Row>
              </Table.Header>
              <Table.Body>
                {exam.questions.map((q, i) => (
                  <Table.Row key={i}>
                    <Table.Cell collapsing>{i + 1}</Table.Cell>
                    <Table.Cell collapsing title={q.type}>
                      <Icon
                        color="blue"
                        name={q.type === "Subjective" ? "write" : "check"}
                      />
                    </Table.Cell>
                    <Table.Cell collapsing>
                      {q.text}
                      <ol type="a">
                        {q.opt_set?.map((a) => (
                          <li key={a}>{a}</li>
                        ))}
                      </ol>
                    </Table.Cell>
                    <Table.Cell>
                      {!q.ans_set ? null : q.ans_set.join(", ")}
                    </Table.Cell>
                    <Table.Cell collapsing>
                      <QuestionEditModal
                        question={null}
                        trigger={
                          <Button type="button" icon>
                            <Icon name="edit" />
                          </Button>
                        }
                      />
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table> */}

            <Form.Checkbox inline label="I agree to the terms and conditions" />
            <Button color="blue">Submit</Button>
          </Form>
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column></Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
