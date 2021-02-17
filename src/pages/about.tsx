import React from "react";
import { Button, Segment } from "semantic-ui-react";
import Layout from "../components/layout";

export default function About({ Username, UserAttributes }) {
  const setCookie = () => {
    var d = new Date();
    d.setTime(d.getTime() + 1 * 24 * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    document.cookie =
      "accessToken" + "=" + "cvalue" + ";" + expires + ";path=/";
  };
  const removeCookie = () => {
    var d = new Date();
    var expires = "expires=" + d.toUTCString();
    document.cookie = "accessToken" + "=" + "" + ";" + expires + ";path=/";
  };
  return (
    <Layout>
      <Segment>
        <h1>buttons {Username}</h1>
        <pre>{JSON.stringify(UserAttributes, null, 5)}</pre>
        <Button primary>Primary</Button>
        <Button secondary>Secondary</Button>
        <Button positive>Primary</Button>
        <Button negative>Secondary</Button>
        <Button primary basic onClick={setCookie}>
          Primary (Set)
        </Button>
        <Button secondary basic onClick={removeCookie}>
          Secondary (Remove)
        </Button>
        <Button positive basic>
          Primary
        </Button>
        <Button negative basic>
          Secondary
        </Button>
        <div>
          <div className="ui red message">Red</div>
          <div className="ui orange message">Orange</div>
          <div className="ui yellow message">Yellow</div>
          <div className="ui olive message">Olive</div>
          <div className="ui green message">Green</div>
          <div className="ui teal message">Teal</div>
          <div className="ui blue message">Blue</div>
          <div className="ui violet message">Violet</div>
          <div className="ui purple message">Purple</div>
          <div className="ui pink message">Pink</div>
          <div className="ui brown message">Brown</div>
          <div className="ui black message">Black</div>
        </div>
      </Segment>
    </Layout>
  );
}

// import { config } from "../configureAmplify";

// export const getServerSideProps: GetServerSideProps = async ({ req }) => {
//   const cisp = new AWS.CognitoIdentityServiceProvider({
//     apiVersion: "2016-04-18",
//     region: config.aws_cognito_region,
//   });
//   try {
//     const param: AWS.CognitoIdentityServiceProvider.GetUserRequest = {
//       AccessToken:
//         req.cookies[
//           "CognitoIdentityServiceProvider.4dma9kljjjklvf5sto8fbnkdri.google_107070157255656505404.accessToken"
//         ],
//     };
//     const user = await cisp.getUser(param).promise();
//     const { UserAttributes, Username } = user;
//   } catch (error) {}
//   return {
//     props: {
//       Username: "",
//       UserAttributes: "",
//     },
//   };
// };
