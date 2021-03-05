import { gql, useQuery } from "@apollo/client";
import React, { useEffect } from "react";
import { Button, Card, Form, Header, Image, Modal } from "semantic-ui-react";
import LoadingCards from "./loading/loading-cards";

interface Props {
  name: string;
  value: string;
  onChange: (e: any, data: { name: string; value: string }) => void;
}

const GET_IMAGES = gql`
  query GetImages {
    images
  }
`;

function SelectThumbnailModal({
  onChange: onSelected,
  value: src,
  name,
}: Props) {
  const [open, setOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState(0);
  const { loading, data, error } = useQuery<{ images: Array<string> }>(
    GET_IMAGES
  );
  useEffect(() => {
    // setOpen(true);
  }, []);

  let handleChange = (i) => {
    setSelectedIndex(i);
  };
  const onSubmit = () => {
    setOpen(false);
    onSelected(null, { name, value: data.images[selectedIndex] });
  };
  return (
    <Card>
      <Image
        src={src}
        wrapped
        ui={false}
      />

      <Card.Content extra>
        <Modal
          closeIcon
          onClose={() => {
            setOpen(false);
          }}
          onOpen={() => {
            setOpen(true);
          }}
          open={open}
          trigger={
            <Button secondary basic fluid>
              Change
            </Button>
          }
        >
          <Modal.Header>Select Image</Modal.Header>
          <Modal.Content image>
            <Card.Group itemsPerRow={4} doubling>
              {loading && <LoadingCards />}
              {!loading &&
                data.images.map((src, i) => (
                  <Card key={i} onClick={() => handleChange(i)}>
                    <Image
                      src={src}
                      label={
                        selectedIndex === i && {
                          as: "span",
                          color: "red",
                          corner: "left",
                          icon: "check",
                        }
                      }
                    />
                  </Card>
                ))}
            </Card.Group>
          </Modal.Content>
          <Modal.Actions>
            <Button type="button" color="black" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button
              content="Choose"
              labelPosition="right"
              icon="checkmark"
              onClick={onSubmit}
              type="button"
              positive
            />
          </Modal.Actions>
        </Modal>
      </Card.Content>
    </Card>
  );
}

export default SelectThumbnailModal;
