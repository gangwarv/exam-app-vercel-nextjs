import { Card, Placeholder } from "semantic-ui-react";

export default function LoadingCards() {
  return (
    <>
      {Array(4)
        .fill(0)
        .map((x, i) => {
          return (
            <Card key={i}>
              <Placeholder>
                <Placeholder.Image rectangular />
              </Placeholder>
              <Card.Content>
                <Placeholder>
                  <Placeholder.Header>
                    <Placeholder.Line length="very short" />
                    <Placeholder.Line length="medium" />
                  </Placeholder.Header>
                  <Placeholder.Paragraph>
                    <Placeholder.Line length="short" />
                  </Placeholder.Paragraph>
                </Placeholder>
              </Card.Content>

              {/* <Card.Content extra>
                <Button disabled={loading} primary>
                  Add
                </Button>
                <Button disabled={loading}>Delete</Button>
              </Card.Content> */}
            </Card>
          );
        })}
    </>
  );
}


