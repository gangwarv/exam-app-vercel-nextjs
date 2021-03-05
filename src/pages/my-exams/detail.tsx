import { useQuery, gql, useMutation } from "@apollo/client";
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
import Layout from "../../components/layout";
// import QuestionEditModal from "../../components/question-edit-modal";
import QuestionsEdit from "../../components/questions-edit";
import LoadingList from "../../components/loading/loading-list";
import { Question } from "../../../types";
import SelectThumbnailModal from "../../components/select-thumbnail-modal";

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

  const exam =
    data.exam ??
    ({
      exam_id: "-1",
      img: "https://via.placeholder.com/320x240.png?text=title",
      questions: [],
      topics: [""],
    } as Exam);
  return (
    <Layout>
      <Header as="h1">Add/Edit Page</Header>
      <EditDetails exam={exam} />
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
                onClick: () => {
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

const UPSERT_EXAM = gql`
  mutation UpsertExam(){

  }
`;
function EditDetails({ exam: initialExam }: { exam: Exam }) {
  const [exam, setExam] = useState(initialExam);
  const {} = useMutation(UPSERT_EXAM, {
    variables: {
      input: exam,
    },
  });

  function handleExamChange({ name, value }: any) {
    setExam({ ...exam, [name]: value });
  }

  function onSubmit(e, data) {
    console.log("Submitted:", data);
  }
  return (
    <Grid>
      <Grid.Row>
        <Grid.Column>
          <Message
            warning
            attached
            header="Note:"
            content="Only red marked fields (marked with red * sign) are mandatory."
          />

          <Form onSubmit={onSubmit} className="attached fluid segment">
            <Grid columns="2">
              <Grid.Row>
                <Grid.Column width={12}>
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
                  <Form.TextArea
                    label="Description"
                    placeholder="Description"
                    required
                    name="description"
                    value={exam.description}
                    onChange={handleExamChange}
                  />
                </Grid.Column>
                <Grid.Column textAlign="center" width="3">
                  <SelectThumbnailModal
                    name="img"
                    value={exam.img}
                    onChange={handleExamChange}
                  />
                </Grid.Column>
              </Grid.Row>
            </Grid>

            <FieldArray
              itemArray={exam.topics}
              setItemArray={(tops) => {
                handleExamChange({ name: "topics", value: tops });
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
            <QuestionsEdit
              questions={exam.questions}
              setQuestions={(cb: (d: Array<Question>) => Array<Question>) => {
                let updatedQuestions = cb(exam.questions);
                setExam((ex) => ({ ...ex, questions: updatedQuestions }));
              }}
            />

            <Form.Checkbox inline label="I agree to the terms and conditions" />
            <Button color="blue">Submit</Button>
          </Form>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}
