//components/Layout.js
import React from "react";
import { View } from "@aws-amplify/ui-react";
import { Nav } from "../ui-components";

function Layout({ children, authText, handleClick, username }) {
  return (
    <View width="1440px" marginLeft="auto" marginRight="auto">
      <Nav
        marginTop={""}
        handleAuth={handleClick}
        authText={authText}
        username={username}
        avatar={username.split("")[0].toUpperCase()}
      />
      {children}
    </View>
  );
}
export default Layout;
