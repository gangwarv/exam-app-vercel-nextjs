import { AgGridReact } from "ag-grid-react/lib/agGridReact";
import React, { useState } from "react";
import {
  Button,
  Card,
  Container,
  Divider,
  Form,
  Icon,
  Input,
  Label,
  Segment,
  Table,
  TextArea,
} from "semantic-ui-react";
import { Question } from "../../types";
import styles from "./csv-editor.module.css";

interface Props {
  //   headers?: Array<string>;
  rows: number;
  columns: number;
}

const Q: Question[] = [
  {
    ques_id: "1",
    text: "What is SEO?",
    type: "Objective",
    opt_set: ["SEO", "Xcd", "Other"],
    ans_set: [0],
  },
  {
    ques_id: "2",
    text: "What is related to programming?",
    type: "Objective",
    opt_set: ["var", "const", "Pen", "Many Spoons"],
    ans_set: [0, 1],
  },
  {
    ques_id: "3",
    text: "Where is Noida?",
    type: "Subjective",
    ans_text:
      "Noida city is located in Uttar Pradesh. It comes under national capital region (NCR).",
  },
];
export default function CsvEditor({ rows, columns }: Props) {
  const [options, setOptions] = useState(5);
  const [questions, setQuestions] = useState(Q);
  function decrease(editIndex: number) {
    setQuestions((qs) =>
      qs.map((q, i) => {
        if (i !== editIndex) return q;
        let newAns = {
          ...q,
          opt_set: q.opt_set.slice(0, q.opt_set.length - 1),
        };
        return newAns;
      })
    );
  }
  function increase(editIndex: number) {
    setQuestions((qs) =>
      qs.map((q, i) => {
        if (i !== editIndex) return q;
        return { ...q, opt_set: [...q.opt_set, ""] };  
      })
    );
  }
  function handleQuestion({ key, index, value }) {
    setQuestions((qs) =>
      qs.map((q, i) => {
        if (i !== index) return q;
        q[key] = value;
        if (key === "type" && value === "Objective") {
          q.opt_set = q.opt_set || ["", ""];
          q.ans_set = q.ans_set || [];
        }
        return { ...q };
      })
    );
  }
  function handleOption({ text, checked, qIndex, oIndex }) { 
    setQuestions((qs) =>
      qs.map((q, i) => {
        if (i !== qIndex) return q;
        let { opt_set, ans_set } = q;
        opt_set[oIndex] = text;

        if (!checked) ans_set = ans_set.filter((a) => a !== oIndex);
        else ans_set.push(oIndex);

        return { ...q, ans_set: [...ans_set], opt_set: [...opt_set] }; 
      })
    );
  }
  return (
    <div className="resp">
      <Table striped compact>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell collapsing></Table.HeaderCell>
            <Table.HeaderCell>Question Text</Table.HeaderCell>
            <Table.HeaderCell collapsing>Question Type</Table.HeaderCell>
            <Table.HeaderCell>Max Options</Table.HeaderCell>
            <Table.HeaderCell>Options</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Table.Body>
          {questions.map((x, i) => {
            return (
              <Table.Row key={i}>
                <Table.Cell verticalAlign="top">{i + 1}.</Table.Cell>
                <Table.Cell verticalAlign="top">
                  <Form.TextArea
                    style={{ width: "100%", height: "100%" }}
                    placeholder={"Input text.."}
                    value={x.text}
                    onChange={(e,{value}) =>
                      handleQuestion({
                        index: i,
                        key: "text",
                        value,
                      })
                    }
                  />
                </Table.Cell>
                <Table.Cell verticalAlign="top">
                  <Form.Select
                    fluid
                    value={x.type}
                    options={[
                      { text: "Objective", value: "Objective" },
                      { text: "Subjective", value: "Subjective" },
                    ]}
                    onChange={(e, { value }) =>
                      handleQuestion({ index: i, key: "type", value })
                    }
                  />
                </Table.Cell>
                <Table.Cell verticalAlign="top">
                  {x.type == "Objective" && (
                    <Button.Group icon>
                      <Button onClick={() => decrease(i)}>
                        <Icon name="minus" />
                      </Button>
                      <Button disabled>
                        {x.opt_set.length}/{x.ans_set.length}
                      </Button>
                      <Button onClick={() => increase(i)}>
                        <Icon name="plus" />
                      </Button>
                    </Button.Group>
                  )}
                </Table.Cell>
                <Table.Cell>
                  <Form as={"div"}>
                    {(x.type == "Objective" &&
                      x.opt_set?.map((_, j) => (
                        <InputExampleActions
                          key={j}
                          value={_}
                          checked={x.ans_set?.includes(j)}
                          index={j}
                          handleOption={(e) =>
                            handleOption({ ...e, qIndex: i, oIndex: j })
                          }
                        />
                      ))) || (
                      <Form.TextArea
                        style={{ width: "100%", height: "100%" }}
                        placeholder={"Type answere here (Optional)..."}
                        value={x.ans_text}
                        onChange={(e,{value}) =>
                          handleQuestion({
                            index: i,
                            key: "ans_text",
                            value,
                          })
                        }
                      />
                    )}
                  </Form>
                </Table.Cell>
              </Table.Row>
            );
          })}
        </Table.Body>
      </Table>
    </div>
  );
}

const InputExampleActions = ({ index, value, checked, handleOption }) => {
  const [checkeds, setChecked] = useState(false);
  function handleChange(text, checked) {
    handleOption({ text, checked, index });
  }
  return (
    <Form.Input size="small" type="text" action>
      <Input
        label={{ basic: true, content: index + 1 + "." }}
        value={value}
        placeholder={"option " + index}
        onChange={(e, { value }) => {
          handleChange(value, checked);
        }}
      />

      <Button
        color={checked ? "green" : "red"}
        type="button"
        onClick={() => handleChange(value, !checked)}
        icon
      >
        <Icon name={checked ? "check" : "close"} />
      </Button>
    </Form.Input>
  );
};
