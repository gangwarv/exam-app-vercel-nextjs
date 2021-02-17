import React, { useEffect } from "react";
import { Button, Form, Header, Image, Modal } from "semantic-ui-react";
import { Question } from "../../types";

interface Props {
  question: Question;
  trigger: React.ReactElement;
  onOpen?: () => Question;
  onClose?: () => void;
}
function QuestionEditModal({ onClose, onOpen, question, trigger }: Props) {
  const [open, setOpen] = React.useState(false);
  useEffect(() => {
    // setOpen(true);
  }, []);

  let handleChange = (e, { value }) => console.log({ value })
  let value = "sm";
  return (
    <Modal closeIcon
      onClose={() => {
        setOpen(false);
        onClose && onClose();
      }}
      onOpen={() => {
        setOpen(true);
        onOpen && onOpen();
      }}
      open={open}
      trigger={trigger}
    >
      <Modal.Header>Add/Edit Question</Modal.Header>
      <Modal.Content image>
        <Modal.Description> 
          <Form>
            <Form.Group widths="equal">
              <Form.Input fluid label="First name" placeholder="First name" />
              <Form.Input fluid label="Last name" placeholder="Last name" />
            </Form.Group>
            <Form.Group inline>
              <label>Size</label>
              <Form.Radio
                label="Small"
                value="sm"
                checked={value === "sm"}
                onChange={handleChange}
              />
              <Form.Radio
                label="Medium"
                value="md"
                checked={value === "md"}
                onChange={handleChange}
              />
              <Form.Radio
                label="Large"
                value="lg"
                checked={value === "lg"}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.TextArea
              label="About"
              placeholder="Tell us more about you..."
            />
            <Form.Checkbox label="I agree to the Terms and Conditions" />
            <Form.Button>Submit</Form.Button>
          </Form>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color="black" onClick={() => setOpen(false)}>
          Cancel
        </Button>
        <Button
          content="Save it, and Create More"
          labelPosition="right"
          icon="checkmark"
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  );
}

export default QuestionEditModal;
