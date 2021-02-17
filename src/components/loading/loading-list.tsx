import { List, Placeholder } from "semantic-ui-react";

export default function LoadingList(){
    return (
      <List>
        {Array(5)
          .fill(0)
          .map((x, i) => (
            <List.Item key={i}>
              <Placeholder>
                <Placeholder.Header image>
                  <Placeholder.Line />
                  <Placeholder.Line length="full" />
                </Placeholder.Header>
              </Placeholder>
            </List.Item>
          ))}
      </List>
    );
  }