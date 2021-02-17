import React, { useState } from "react";
import { Button, Form, Icon, Input, Table } from "semantic-ui-react";
import { Question } from "../../types";

interface Props {
  questions: Array<Question>;
  setQuestions: React.Dispatch<React.SetStateAction<Question[]>>;
}

export default function QuestionsEdit({ questions, setQuestions }: Props) {
  const [] = useState(5);
  function decrease(editIndex: number) {
    setQuestions((qs) =>
      qs.map((q, i) => {
        if (i !== editIndex) return q;
        let newAns = {
          ...q,
          ans_set: q.ans_set.filter((x) => x != q.opt_set.length - 1),
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
      qs.map((_q, i) => {
        if (i !== index) return _q;
        let q = { ..._q };
        q[key] = value;
        if (key === "type" && value === "Objective") {
          q.opt_set = q.opt_set || ["", ""];
          q.ans_set = q.ans_set || [];
        }
        return q;
      })
    );
  }
  function handleOption({ text, checked, qIndex, oIndex }) {
    setQuestions((qs) =>
      qs.map((q, i) => {
        if (i !== qIndex) return q;
        let { opt_set, ans_set } = q;
        opt_set = [...opt_set];
        ans_set = [...ans_set];
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
                    onChange={(e, { value }) =>
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
                      <Button type="button" onClick={() => decrease(i)}>
                        <Icon name="minus" />
                      </Button>
                      <Button disabled>
                        {x.opt_set.length}/{x.ans_set.length}
                      </Button>
                      <Button type="button" onClick={() => increase(i)}>
                        <Icon name="plus" />
                      </Button>
                    </Button.Group>
                  )}
                </Table.Cell>
                <Table.Cell>
                  <Form as={"div"}>
                    {(x.type == "Objective" &&
                      x.opt_set?.map((_, j) => (
                        <InputWithCheckbox
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
                        placeholder={"Type answere here (Optional)...."}
                        value={x.ans_text}
                        onChange={(e, { value }) =>
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

const InputWithCheckbox = ({ index, value, checked, handleOption }) => {
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
