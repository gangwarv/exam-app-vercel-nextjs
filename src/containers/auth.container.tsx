import React from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "../apollo";
import { Auth } from "aws-amplify";

import AuthContext, {
  defaultValue,
  AuthContextModel,
} from "../context/auth.context";

interface Props {
  children: React.ReactElement;
}

export default class AuthContainer extends React.Component<
  Props,
  AuthContextModel
> {
  constructor(props) {
    super(props);

    this.state = {
      ...defaultValue,
      logIn: this.logIn,
      logOut: this.logOut,
    };
  }
  async componentDidMount() {
    const data = await Auth.currentAuthenticatedUser();
    let user = null;
    if (data) {
      const {
        attributes: { email },
      } = data;
      user = { email, name: email };
      // sessionStorage.setItem('accessToken','fdsvxadafscvsgsas')
    }
    this.setState({ isLoggedIn: !!user, user });
  }
  logIn = () => {
    Auth.federatedSignIn();
    // .then(data=>{
    //   console.log('iCrede',data)
    // });
    // setTimeout(() => {
    //   this.set(true);
    //   this.setState({ isLoggedIn: true });
    // }, 1000);
  };
  logOut = () => {
    // this.set(false);
    // this.removeCookie()
    this.setState({ isLoggedIn: false, user: null });
    Auth.signOut();
  };
  // setCookie = (token) => {
  //   var d = new Date();
  //   d.setTime(d.getTime() + 1 * 24 * 60 * 60 * 1000);
  //   var expires = "expires=" + d.toUTCString();
  //   document.cookie =
  //     "accessToken" + "=" + token + ";" + expires + ";path=/";
  // };
  // removeCookie = () => {
  //   var d = new Date();
  //   var expires = "expires=" + d.toUTCString();
  //   document.cookie = "accessToken" + "=" + "" + ";" + expires + ";path=/";
  // };
  render() {
    return (
      <AuthContext.Provider value={this.state}>
        <ApolloProvider client={client}>{this.props.children}</ApolloProvider>
      </AuthContext.Provider>
    );
  }
}
