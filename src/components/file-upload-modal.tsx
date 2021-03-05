import React, { useEffect } from "react";
import { Button, Form, Header, Image, Message, Modal } from "semantic-ui-react";
import { Question } from "../../types";

interface Props {
  trigger: React.ReactElement;
  onChange:(data:Array<Question>) => void;
}
function FileUploadModal({ trigger, onChange }: Props) {
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState([]);
  const [content, setContent] = React.useState("");

  let onSubmit = () => {
      setOpen(false);
      onChange(data)
  };

  return (
    <Modal
      closeIcon
      onClose={() => {
        setOpen(false);
      }}
      onOpen={() =>
        loadCsv((d) => {
          setContent(d);
          let json = getJson(d);
          console.log(json);
          setData(json)
          setOpen(true);
        })
      }
      open={open}
      trigger={trigger}
    >
      <Modal.Header>Upload CSV</Modal.Header>
      <Modal.Content scrolling>
        <Message
          warning
          attached
          header="Note:"
          content="Only red marked fields (marked with red * sign) are mandatory."
        />
        <pre>{content}</pre>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <Button
          content="Ok"
          labelPosition="right"
          icon="checkmark"
          onClick={onSubmit}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
}

export default FileUploadModal;

function loadCsv(cb: (data: string) => void) {
  var fileInput = document.createElement("input");
  var att = document.createAttribute("type");
  att.value = "file";
  fileInput.setAttributeNode(att);

  //document.body.appendChild(h1)
  // let fileInput = fileInput;
  fileInput.onchange = (event: any) => {
    const file = event.target.files[0];
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
function getJson(result) {
  const lines = CSVToArray(result, ","); //result.split("\n").filter((x) => x != "");
  const header = lines[0];
  const rows = lines.slice(1);
  console.log({ header, rows });

  let questions = [];
  rows.forEach((row) => {
    if (row[0] == "") return;
    let q = {};
    q["text"] = row[header.indexOf("ques")];
    q["type"] = row[header.indexOf("type")];
    q["opt_set"] = []; // row[header.indexOf("type")];
    q["ans_set"] = []; // row[header.indexOf("type")];
    q["ans_text"] = row[header.indexOf("ans_text")] || "";
    // options 
    let optionColumn = "a";
    while (header.indexOf(optionColumn) > -1) {
      q["opt_set"].push(row[header.indexOf(optionColumn)]);
      
      if (
        q["type"] == "Objective" &&
        row[header.indexOf("ans")].includes(optionColumn)
      ) {
        q["ans_set"].push(String(optionColumn).charCodeAt(0) - 97);
      }
      optionColumn = String.fromCharCode(optionColumn.charCodeAt(0) + 1);
    }
    questions.push(q);
  });
  return questions;
}
function CSVToArray(
  strData: string,
  strDelimiter: string
): Array<Array<string>> {
  // Check to see if the delimiter is defined. If not,
  // then default to comma.
  strDelimiter = strDelimiter || ",";
  // Create a regular expression to parse the CSV values.
  var objPattern = new RegExp(
    // Delimiters.
    "(\\" +
      strDelimiter +
      "|\\r?\\n|\\r|^)" +
      // Quoted fields.
      '(?:"([^"]*(?:""[^"]*)*)"|' +
      // Standard fields.
      '([^"\\' +
      strDelimiter +
      "\\r\\n]*))",
    "gi"
  );

  // Create an array to hold our data. Give the array
  // a default empty first row.
  var arrData = [[]];

  // Create an array to hold our individual pattern
  // matching groups.
  var arrMatches = null;

  // Keep looping over the regular expression matches
  // until we can no longer find a match.
  while ((arrMatches = objPattern.exec(strData))) {
    // Get the delimiter that was found.
    var strMatchedDelimiter = arrMatches[1];

    // Check to see if the given delimiter has a length
    // (is not the start of string) and if it matches
    // field delimiter. If id does not, then we know
    // that this delimiter is a row delimiter.
    if (strMatchedDelimiter.length && strMatchedDelimiter !== strDelimiter) {
      // Since we have reached a new row of data,
      // add an empty row to our data array.
      arrData.push([]);
    }

    var strMatchedValue;

    // Now that we have our delimiter out of the way,
    // let's check to see which kind of value we
    // captured (quoted or unquoted).
    if (arrMatches[2]) {
      // We found a quoted value. When we capture
      // this value, unescape any double quotes.
      strMatchedValue = arrMatches[2].replace(new RegExp('""', "g"), '"');
    } else {
      // We found a non-quoted value.
      strMatchedValue = arrMatches[3];
    }

    // Now that we have our value string, let's add
    // it to the data array.
    arrData[arrData.length - 1].push(strMatchedValue);
  }

  // Return the parsed data.
  return arrData;
}

/**
 *     ques_id: string;
    text: string;
    type: 'Objective' | 'Subjective' | "";
    opt_set?: Array<string>; //array set
    ans_set?: Array<number>;
    ans_text?: string;
 */
