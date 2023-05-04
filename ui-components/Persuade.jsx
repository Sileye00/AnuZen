/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Image, Text, View } from "@aws-amplify/ui-react";
export default function Persuade(props) {
  const { handleClick, banner, overrides, ...rest } = props;
  return (
    <View
      width="1440px"
      height="1024px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      borderRadius="24px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Persuade")}
      {...rest}
    >
      <Text
        fontFamily="Poppins"
        fontSize="40px"
        fontWeight="400"
        color="rgba(51,51,51,1)"
        lineHeight="50px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="1105.23px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="calc(50% - 75px - 404px)"
        left="11.6%"
        right="11.65%"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Join our community of like-minded individuals and gain access to premium content, tools, and resources to support your growth journey."
        {...getOverrideProps(
          overrides,
          "Join our community of like-minded individuals and gain access to premium content, tools, and resources to support your growth journey."
        )}
      ></Text>
      <Flex
        gap="0"
        direction="row"
        width="219px"
        height="40px"
        justifyContent="center"
        alignItems="center"
        overflow="hidden"
        position="absolute"
        top="242px"
        left="610px"
        border="1px SOLID rgba(0,0,0,0)"
        borderRadius="15px"
        padding="7px 15px 7px 15px"
        backgroundColor="rgba(129,94,134,1)"
        onClick={handleClick}
        {...getOverrideProps(overrides, "Button")}
      >
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="21px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="128px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Become a Member"
          {...getOverrideProps(overrides, "label")}
        ></Text>
      </Flex>
      <Image
        width="1440px"
        height="683px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="345px"
        left="0px"
        padding="0px 0px 0px 0px"
        objectFit="cover"
        src={banner}
        {...getOverrideProps(overrides, "Banner")}
      ></Image>
    </View>
  );
}
