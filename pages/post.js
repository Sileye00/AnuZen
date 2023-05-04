import React from "react";
import Layout from "../components/Layout";
import {Authenticator,Flex,Heading,Text,useTheme,View,} from "@aws-amplify/ui-react";
import { Footer, Logo, Stories } from "../ui-components";

function Post() {
    const authComponents = {
        Header() {
          const { tokens } = useTheme();
          return (
            <Flex
              justifyContent={"center"}
              direction="column"
              paddingTop={tokens.space.xxxl}
              paddingBottom={tokens.space.xxl}
            >
              <Logo />
            </Flex>
          );
        },
      };
         return (
            <Authenticator components={authComponents} hideSignUp={true}>
            {({ signOut, user }) => (
              <Layout
                handleClick={() => signOut()}
                authText="Sign Out"
                username={user.attributes.email.split("@")[0]}
              >
      <View 
        style={{
          backgroundImage: "url('https://cdn.discordapp.com/attachments/989268410171006976/1101153317398249502/Anuaen.jpg')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          height: "670px",
          width: "100%",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View 
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            right: "0",
            textAlign: "center",
            padding: "20px",
          }}
        >
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          margin: "50px 0",
        }}
      >
        <Heading level={2}>Welcome to our backstage</Heading>
        <Text marginTop="20px">
          Discover stories, thinking, and expertise from writers on any top{" "}
        </Text>
      </View>
      <Stories />
      <View marginTop="" marginBottom="">
        <Footer />
      </View>
    </Layout>
    )}
    </Authenticator>
  );
}

export default Post;



