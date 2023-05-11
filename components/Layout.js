import React from "react";
import { View } from "@aws-amplify/ui-react";
import { Nav } from "../ui-components";
import styled from "styled-components";

const StyledView = styled(View)`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 0 1rem;

  @media screen and (max-width: 768px) {
    /* Adjust the layout for screens up to 768 pixels wide */
    .nav {
      flex-direction: column;
    }
  }
`;

function Layout({ children, authText, handleClick, username }) {
  return (
    <StyledView>
      <Nav
        marginTop={""}
        handleAuth={handleClick}
        authText={authText}
        username={username}
        avatar={username.split("")[0].toUpperCase()}
      />
      {children}
    </StyledView>
  );
}

export default Layout;
