import React from "react";
import Header from "./Header";
import AuthContainer from '../containers/auth.container'

export default function Main(App) {
  
  return function (props) {
    return (
      <>
        <Header />
        <AuthContainer>
          <App {...props} />
        </AuthContainer>
      </>
    );
  };
}
