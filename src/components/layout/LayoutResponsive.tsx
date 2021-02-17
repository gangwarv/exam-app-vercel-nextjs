/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */

import { createMedia } from "@artsy/fresnel";
import Link from "next/link";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import React, { useContext, useState } from "react";
import AuthContext from "../../context/auth.context";

import {
  Button,
  Container,
  Dropdown,
  Grid,
  Header,
  Icon,
  List,
  Menu,
  Segment,
  Sidebar,
  Visibility,
} from "semantic-ui-react";

const menus = [
  { name: "Home", path: "/" },
  { name: "Explore", path: "/explore" },
  { name: "Content", path: "/content" },
  { name: "About", path: "/about" },
];

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 768,
    computer: 1024,
  },
});

/* Heads up!
 * HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled
 * components for such things.
 */
const HomepageHeading = ({ mobile }) => (
  <Container text>
    <Header
      as="h1"
      content="Imagine-a-Company"
      inverted
      style={{
        fontSize: mobile ? "2em" : "4em",
        fontWeight: "normal",
        marginBottom: 0,
        marginTop: mobile ? "1.5em" : "3em",
      }}
    />
    <Header
      as="h2"
      content="Do whatever you want when you want to."
      inverted
      style={{
        fontSize: mobile ? "1.5em" : "1.7em",
        fontWeight: "normal",
        marginTop: mobile ? "0.5em" : "1.5em",
      }}
    />
    <Button primary size="huge">
      Get Started
      <Icon name="chevron right" />
    </Button>
  </Container>
);

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
};

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
//const src = "icons/firefox/firefox-general-64-64.png"; //"https://img.icons8.com/nolan/64/maxcdn.png"

function DesktopContainer({ children, Banner }) {
  const [fixed, setFixed] = useState(false);
  const router = useRouter();
  const {
    isLoggedIn,
    logIn,
    logOut,
    logo: { src },
  } = useContext(AuthContext);
  return (
    <Media greaterThan="mobile">
      <Visibility
        once={false}
        onBottomPassed={() => setFixed(true)}
        onBottomPassedReverse={() => setFixed(false)}
      >
        <Menu
          fixed={fixed ? "top" : null}
          inverted={!fixed}
          pointing={!fixed}
          //   secondary={!fixed}
          size="large"
          stackable
        >
          <Container>
            <Menu.Item header>
              <>
                <img src={src} />
                <span style={{ fontSize: "22px", color: "orange" }}>WCT</span>
              </>
            </Menu.Item>
            {menus.map((m) => (
              <Link key={m.name} href={m.path}>
                <Menu.Item active={router.pathname == m.path} name={m.name} />
              </Link>
            ))}
            <Menu.Menu position="right">
              {isLoggedIn && (
                <Dropdown as={Button} simple item icon="user" text="Hi User!">
                  <Dropdown.Menu>
                    <Dropdown.Header>Text Size</Dropdown.Header>
                    <Dropdown.Item>Small</Dropdown.Item>
                    <Dropdown.Item>Medium</Dropdown.Item>
                    <Dropdown.Item>Large</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              )}
              <Menu.Item>
                {isLoggedIn ? (
                  <Button onClick={logOut} inverted={!fixed} as="a">
                    Log out
                  </Button>
                ) : (
                  <Button onClick={logIn} inverted={!fixed} as="a">
                    Log in
                  </Button>
                )}
              </Menu.Item>
            </Menu.Menu>
          </Container>
        </Menu>
      </Visibility>
      {Banner}
      <Container>{children}</Container>
    </Media>
  );
}

function MobileContainer({ children, Banner }) {
  const [sidebarOpened, setSidebarOpened] = useState(false);
  const {
    isLoggedIn,
    logIn,
    logOut,
    logo: { src },
  } = useContext(AuthContext);

  const router = useRouter();
  return (
    <Media at="mobile">
      <Sidebar.Pushable>
        <Sidebar
          direction="left"
          as={Menu}
          animation="overlay"
          inverted
          onHide={() => setSidebarOpened(false)}
          vertical
          visible={sidebarOpened}
          size="large"
        >
          <Menu.Item>
            <>
              <img src={src} />
              <span style={{ fontSize: "22px", color: "orange" }}>sWCT</span>
            </>
          </Menu.Item>
          {menus.map((m) => (
            <Link key={m.name} href={m.path}>
              <Menu.Item active={router.pathname == m.path} name={m.name} />
            </Link>
          ))}
          {isLoggedIn ? (
            <Menu.Item onClick={logOut} name="home" as="a">
              Log out
            </Menu.Item>
          ) : (
            <Menu.Item onClick={logIn} name="home" as="a">
              Log in
            </Menu.Item>
          )}
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Menu inverted size="large" style={{ marginBottom: "0em" }}>
            <Menu.Item onClick={() => setSidebarOpened(true)}>
              <Icon size="large" name="sidebar" />
            </Menu.Item>
            <Menu.Item>
              <img src={src} />
              <span style={{ fontSize: "22px", color: "orange" }}>mWCT</span>
            </Menu.Item>
            <Menu.Item position="right">
              {/* <Button as="a" inverted>
                mLog in
              </Button> */}
              {isLoggedIn ? (
                <Button onClick={logOut} inverted as="a">
                  Log out
                </Button>
              ) : (
                <Button onClick={logIn} inverted as="a">
                  Log in
                </Button>
              )}
            </Menu.Item>
          </Menu>
          {/* <Segment textAlign="center" style={{ padding: "55px 0em" }} vertical> */}
          {Banner}
          <Container>{children}</Container>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
      {/* <Footer /> */}
    </Media>
  );
}

const Footer = () => {
  return (
    <Segment inverted vertical style={{ padding: "5em 0em" }}>
      <Container>
        <Grid divided inverted stackable>
          <Grid.Row>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="About" />
              <List link inverted>
                <List.Item as="a">Sitemap</List.Item>
                <List.Item as="a">Contact Us</List.Item>
                <List.Item as="a">Religious Ceremonies</List.Item>
                <List.Item as="a">Gazebo Plans</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={3}>
              <Header inverted as="h4" content="Services" />
              <List link inverted>
                <List.Item as="a">Banana Pre-Order</List.Item>
                <List.Item as="a">DNA FAQ</List.Item>
                <List.Item as="a">How To Access</List.Item>
                <List.Item as="a">Favorite X-Men</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <Header as="h4" inverted>
                Footer Header
              </Header>
              <p>
                Extra space for a call to action inside the footer that could
                help re-engage users.
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    </Segment>
  );
};
const ResponsiveContainer = ({ children, banner }) => (
  /* Heads up!
   * For large applications it may not be best option to put all page into these containers at
   * they will be rendered twice for SSR.
   */
  <>
    <MediaContextProvider>
      <DesktopContainer Banner={banner}>{children}</DesktopContainer>
      <MobileContainer Banner={banner}>{children}</MobileContainer>
    </MediaContextProvider>

    <Footer />
  </>
);

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
  banner: PropTypes.node,
};

export default ResponsiveContainer;
