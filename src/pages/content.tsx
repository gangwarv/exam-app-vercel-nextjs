import Link from "next/link";
import React, { useState } from "react";
import {
  Grid,
  Segment,
  Header,
  Table,
  Icon,
  Image,
  Input,
  Dropdown,
  Container,
  Button,
  Message,
} from "semantic-ui-react";
import Layout from "../components/layout";

// function Banner() {
//   const [visible, setVisible] = useState(true);
//   if (visible) {
//     return (
//       <Message size="big" style={{textAlign: "center"}}
//         onDismiss={() =>{ setVisible(false); setTimeout(() => {
//           setVisible(true);
//         }, 2000);}}
//         header="Welcome back!"
//         content="This is a special notification which you can dismiss."
//       />
//     );
//   }

//   return null;
// }

export default function Content() {
  // const banner = (
  //   <Segment textAlign="center" padded secondary>
  //     <Header>
  //       <Icon name="search" />
  //       We don't have any documents matching your query.
  //     </Header>
  //     {/* <Segment.Inline>
  //       <Button primary>Clear Query</Button>
  //       <Button>Add Document</Button>
  //     </Segment.Inline> */}
  //   </Segment>
  // );
  return (
    <Layout>
      <Grid padded>
        <Grid.Row>
          <Header size="huge" as="h1">
            Available Exam Set
          </Header>
        </Grid.Row>
        <Grid.Row>
          <Table celled striped>
            <Table.Header>
              <Table.Row>
                {/* <Table.HeaderCell>Git Repository</Table.HeaderCell> */}
                <Table.HeaderCell colSpan={2}>
                  <Input icon="search" placeholder="Search..." />
                </Table.HeaderCell>
                <Table.HeaderCell textAlign="right">
                  <Header as="h4">
                    <Icon name="trophy" />
                    <Header.Content>
                      Trending repos{" "}
                      <Dropdown
                        direction="left"
                        text="Sort By"
                        inline
                        header="x"
                        options={[
                          {
                            key: "today",
                            text: "today",
                            value: "today",
                            content: "Today",
                          },
                          {
                            key: "this week",
                            text: "this week",
                            value: "this week",
                            content: "This Week",
                          },
                        ]}
                      >
                        {/* <Dropdown.Menu>
                      <Dropdown.Item text="New" selected />
                      <Dropdown.Item text="Open..." description="ctrl + o" />
                      <Dropdown.Item text="Save as..." description="ctrl + s" />
                      <Dropdown.Item text="Rename" description="ctrl + r" />
                      <Dropdown.Item text="Make a copy" />
                      <Dropdown.Item icon="folder" text="Move to folder" />
                      <Dropdown.Item icon="trash" text="Move to trash" />
                      <Dropdown.Divider />
                      <Dropdown.Item text="Download As..." />
                      <Dropdown.Item text="Publish To Web" />
                      <Dropdown.Item text="E-mail Collaborators" />
                    </Dropdown.Menu> */}
                      </Dropdown>
                    </Header.Content>
                  </Header>
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>

            <Table.Body>
              <Table.Row>
                <Table.Cell collapsing>
                  {/* <Icon name="folder" /> node_modules */}
                  <Header as="h4" image>
                    <Image
                      src="img/item-square.jpg" //"https://react.semantic-ui.com/images/avatar/small/lena.png"
                      rounded
                      size="large"
                    />
                    <Header.Content>
                      BCA Computer Numericals and Analysis (Best)
                      <Header.Subheader>by: Vishal</Header.Subheader>
                    </Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>Initial commit</Table.Cell>
                <Table.Cell collapsing textAlign="right">
                  <Link href="/examset/abc">
                    <Button size="small">Approve</Button>
                  </Link>
                  <Button disabled size="small">
                    Approve All
                  </Button>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell collapsing>
                  {/* <Icon name="folder" /> node_modules */}
                  <Header as="h4" image>
                    <Image
                      src="img/item-square.jpg" //"https://react.semantic-ui.com/images/avatar/small/lena.png"
                      rounded
                      size="large"
                    />
                    <Header.Content>
                      BCA Computer Numericals and Analysis (lower)
                      <Header.Subheader>by: Manvi</Header.Subheader>
                    </Header.Content>
                  </Header>
                </Table.Cell>
                <Table.Cell>Initial commit</Table.Cell>
                <Table.Cell collapsing textAlign="right">
                  <Link href="/examset/123">
                    <Button size="small">Approve</Button>
                  </Link>

                  <Button disabled size="small">
                    Approve All
                  </Button>
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Icon name="folder" /> test
                </Table.Cell>
                <Table.Cell>Initial commit</Table.Cell>
                <Table.Cell textAlign="right">10 hours ago</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Icon name="folder" /> build
                </Table.Cell>
                <Table.Cell>Initial commit</Table.Cell>
                <Table.Cell textAlign="right">10 hours ago</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Icon name="file outline" /> package.json
                </Table.Cell>
                <Table.Cell>Initial commit</Table.Cell>
                <Table.Cell textAlign="right">10 hours ago</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>
                  <Icon name="file outline" /> Gruntfile.js
                </Table.Cell>
                <Table.Cell>Initial commit</Table.Cell>
                <Table.Cell textAlign="right">10 hours ago</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid.Row>
        <Grid.Row>
          <Table singleLine striped selectable  >
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>#</Table.HeaderCell>
                <Table.HeaderCell>Header</Table.HeaderCell>
                <Table.HeaderCell>Header</Table.HeaderCell>
                <Table.HeaderCell>Header</Table.HeaderCell>
                <Table.HeaderCell>Header</Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>1.001</Table.Cell>
                <Table.Cell>Lorem</Table.Cell>
                <Table.Cell>ipsum</Table.Cell>
                <Table.Cell>dolor</Table.Cell>
                <Table.Cell>sit</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>1,002</Table.Cell>
                <Table.Cell>amet</Table.Cell>
                <Table.Cell>consectetur</Table.Cell>
                <Table.Cell>adipiscing</Table.Cell>
                <Table.Cell>elit</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>1,003</Table.Cell>
                <Table.Cell>Integer</Table.Cell>
                <Table.Cell>nec</Table.Cell>
                <Table.Cell>odio</Table.Cell>
                <Table.Cell>Praesent</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>1,003</Table.Cell>
                <Table.Cell>libero</Table.Cell>
                <Table.Cell>Sed</Table.Cell>
                <Table.Cell>cursus</Table.Cell>
                <Table.Cell>ante</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>1,004</Table.Cell>
                <Table.Cell>dapibus</Table.Cell>
                <Table.Cell>diam</Table.Cell>
                <Table.Cell>Sed</Table.Cell>
                <Table.Cell>nisi</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>1,005</Table.Cell>
                <Table.Cell>Nulla</Table.Cell>
                <Table.Cell>quis</Table.Cell>
                <Table.Cell>sem</Table.Cell>
                <Table.Cell>at</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>1,006</Table.Cell>
                <Table.Cell>nibh</Table.Cell>
                <Table.Cell>elementum</Table.Cell>
                <Table.Cell>imperdiet</Table.Cell>
                <Table.Cell>Duis</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>1,007</Table.Cell>
                <Table.Cell>sagittis</Table.Cell>
                <Table.Cell>ipsum</Table.Cell>
                <Table.Cell>Praesent</Table.Cell>
                <Table.Cell>mauris</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>1,008</Table.Cell>
                <Table.Cell>Fusce</Table.Cell>
                <Table.Cell>nec</Table.Cell>
                <Table.Cell>tellus</Table.Cell>
                <Table.Cell>sed</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>1,009</Table.Cell>
                <Table.Cell>augue</Table.Cell>
                <Table.Cell>semper</Table.Cell>
                <Table.Cell>porta</Table.Cell>
                <Table.Cell>Mauris</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>1,010</Table.Cell>
                <Table.Cell>massa</Table.Cell>
                <Table.Cell>Vestibulum</Table.Cell>
                <Table.Cell>lacinia</Table.Cell>
                <Table.Cell>arcu</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>1,011</Table.Cell>
                <Table.Cell>eget</Table.Cell>
                <Table.Cell>nulla</Table.Cell>
                <Table.Cell>Class</Table.Cell>
                <Table.Cell>aptent</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>1,012</Table.Cell>
                <Table.Cell>taciti</Table.Cell>
                <Table.Cell>sociosqu</Table.Cell>
                <Table.Cell>ad</Table.Cell>
                <Table.Cell>litora</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>1,013</Table.Cell>
                <Table.Cell>torquent</Table.Cell>
                <Table.Cell>per</Table.Cell>
                <Table.Cell>conubia</Table.Cell>
                <Table.Cell>nostra</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>1,014</Table.Cell>
                <Table.Cell>per</Table.Cell>
                <Table.Cell>inceptos</Table.Cell>
                <Table.Cell>himenaeos</Table.Cell>
                <Table.Cell>Curabitur</Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>1,015</Table.Cell>
                <Table.Cell>sodales</Table.Cell>
                <Table.Cell>ligula</Table.Cell>
                <Table.Cell>in</Table.Cell>
                <Table.Cell>libero</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Grid.Row>
      </Grid>
    </Layout>
  );
}
