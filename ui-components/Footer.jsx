/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
import Logo from "./Logo";
export default function Footer(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1440px"
      height="90px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Footer")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(129,94,134,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.01px"
        width="309px"
        height="30px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="30%"
        bottom="36.67%"
        left="77.78%"
        right="0.76%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="© 2023 AnuZen | All  Rights Reserved"
        {...getOverrideProps(
          overrides,
          "\u00A9 2023 AnuZen | All Rights Reserved"
        )}
      ></Text>
      <Logo
        width="250px"
        height="48px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="23.33%"
        bottom="23.33%"
        left="1.88%"
        right="80.76%"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Logo")}
      ></Logo>
    </View>
  );
}
