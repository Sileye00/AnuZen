/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Image, Text, View } from "@aws-amplify/ui-react";
export default function Logo(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="250px"
      height="48px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Logo")}
      {...rest}
    >
      <Image
        width="12.3%"
        height="62.5%"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="8.33%"
        bottom="29.17%"
        left="0%"
        right="87.7%"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src="https://cdn.discordapp.com/attachments/989268410171006976/1103490680283738142/anupurple.png"
        {...getOverrideProps(overrides, "LogoMakr-0HzpOk 1")}
      ></Image>
      <Text
        fontFamily="Poppins"
        fontSize="32px"
        fontWeight="700"
        color="rgba(129,94,134,1)"
        lineHeight="48px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="1.93px"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="-10.42%"
        bottom="10.42%"
        left="12.68%"
        right="32.12%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="AnuZen"
        {...getOverrideProps(overrides, "AnuZen")}
      ></Text>
    </View>
  );
}
