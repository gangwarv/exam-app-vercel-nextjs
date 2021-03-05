import React, { useRef, useState } from "react";
import {
  Button,
  Form,
  Icon,
  Input,
  InputOnChangeData,
  Table,
} from "semantic-ui-react";
import { Question } from "../../types";
import FileUploadModal from "./file-upload-modal";

interface Props {
  questions: Array<Question>;
  setQuestions: React.Dispatch<React.SetStateAction<Question[]>>;
}

export default function QuestionsEdit({ questions, setQuestions }: Props) {
  function removeOption(qIndex: number) {
    // removing last element from options array
    // removing removed element's index from answeres array if present.
    // return if options array have 2 or less than 2 options. 
    setQuestions((qs) =>
      qs.map((q, i) => {
        if (i !== qIndex ) return q;
        if(q.opt_set.length <= 2){
          console.log('can\'t have less than 2 options for objective question');
          return q;
        }
        let newAns = {
          ...q,
          ans_set: q.ans_set.filter((x) => x != q.opt_set.length - 1),
          opt_set: q.opt_set.slice(0, q.opt_set.length - 1),
        };
        return newAns;
      })
    );
  }
  function addOption(qIndex: number) {
    // appending one more option in options array
    setQuestions((qs) =>
      qs.map((q, i) => {
        if (i !== qIndex) return q;
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
        else{
          q.ans_text = q.ans_text || "";
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
  function addQuestion() {
    setQuestions((q) => [...q, { type: "Subjective" } as Question]);
    document.getElementsByClassName("last-row")[0]?.scrollIntoView();
  }
  function removeQuestion(index: number) {
    setQuestions((q) => q.filter((x, i) => i !== index));
  }
  function onUpload(data: Array<Question>) {
    setQuestions(() => data);
  }
  return (
    <Table striped compact>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell textAlign="right" colSpan="6">
            <Button.Group>
              <Button type="button" onClick={addQuestion} primary>
                <Icon name="plus" /> Add
              </Button>
              <Button.Or />
              <FileUploadModal
                trigger={
                  <Button type="button" color="teal">
                    <Icon name="upload" /> Import
                  </Button>
                }
                onChange={onUpload}
              />
              <Button.Or />
              <Button as="a" href="/test.csv">
                <Icon name="download" />
                Sample CSV
              </Button>
            </Button.Group>
          </Table.HeaderCell>
        </Table.Row>
        <Table.Row>
          <Table.HeaderCell collapsing></Table.HeaderCell>
          <Table.HeaderCell>Question Text</Table.HeaderCell>
          <Table.HeaderCell collapsing>Question Type</Table.HeaderCell>
          <Table.HeaderCell>Max Options</Table.HeaderCell>
          <Table.HeaderCell>Options/Answere</Table.HeaderCell>
          <Table.HeaderCell collapsing></Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {questions.length == 0 && (
          <Table.Row>
            <Table.Cell colSpan="6" textAlign="center">
              No data to display.
            </Table.Cell>
          </Table.Row>
        )}
        {questions.map((x, i) => {
          return (
            <Table.Row
              key={i}
              className={i === questions.length - 1 ? "last-row" : ""}
            >
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
                    // { text: "--Select--", value: "" },
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
                    <Button type="button" onClick={() => removeOption(i)}>
                      <Icon name="minus" />
                    </Button>
                    <Button disabled>
                      {x.opt_set.length}/{x.ans_set.length}
                    </Button>
                    <Button type="button" onClick={() => addOption(i)}>
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
              <Table.Cell>
                <Button
                  type="button"
                  onClick={() => removeQuestion(i)}
                  icon="minus"
                />
              </Table.Cell>
            </Table.Row>
          );
        })}
      </Table.Body>
    </Table>
  );
}

const InputWithCheckbox = ({ index, value, checked, handleOption }) => {
  function handleChange(text, checked) {
    handleOption({ text, checked, index });
  }
  return (
    <Form.Input size="small" type="text" action>
      <Input
        required
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

function myFunction(cb: (data: string) => void) {
  console.log("started..");
  var fileInput = document.createElement("input");
  var att = document.createAttribute("type");
  att.value = "file";
  fileInput.setAttributeNode(att);

  //document.body.appendChild(h1)
  // let fileInput = fileInput;
  fileInput.onchange = (event: any) => {
    const file = event.target.files[0];
    console.log(file);
    let fr = new FileReader();
    fr.onload = () => {
      // showResult(fr, "CC");
      cb(getResult(fr));
    };
    fr.readAsText(file);
  };
  // setTimeout(fileInput.click,100)
  fileInput.click();
}
function getResult(fr) {
  var markup, result, n, aByte, byteStr;

  markup = [];
  result = fr.result;
  for (n = 0; n < result.length; ++n) {
    aByte = result.charCodeAt(n);
    byteStr = aByte.toString(16);
    if (byteStr.length < 2) {
      byteStr = "0" + byteStr;
    }
    markup.push(byteStr);
  }
  return result;
}

function showResult(fr, label) {
  var markup, result, n, aByte, byteStr;

  markup = [];
  result = fr.result;
  for (n = 0; n < result.length; ++n) {
    aByte = result.charCodeAt(n);
    byteStr = aByte.toString(16);
    if (byteStr.length < 2) {
      byteStr = "0" + byteStr;
    }
    markup.push(byteStr);
  }
  bodyAppend("pre", label + " <br/>" + result);
  bodyAppend("pre", markup.join(" "));
}

function bodyAppend(tagName, innerHTML) {
  var elm;

  elm = document.createElement(tagName);
  elm.innerHTML = innerHTML;
  document.body.appendChild(elm);
}
