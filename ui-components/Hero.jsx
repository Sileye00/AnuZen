/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, Icon, Image, Text, View } from "@aws-amplify/ui-react";
export default function Hero(props) {
  const { handleClick, overrides, ...rest } = props;
  return (
    <View
      width="1440px"
      height="1069px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Hero")}
      {...rest}
    >
      <View
        width="1441px"
        height="671px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        overflow="hidden"
        position="absolute"
        top="-0.5px"
        left="-0.5px"
        border="1px SOLID rgba(129,94,134,1)"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 5589")}
      >
        <Image
          width="540px"
          height="670px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="0px"
          left="900px"
          borderRadius="0px 0px 0px 300px"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src="https://cdn.discordapp.com/attachments/989268410171006976/1103528730867015790/palladius__imagination_the_beginning_of_humans_fe4f6363-84a3-469a-83ae-8c74d9e77d1b.png"
          {...getOverrideProps(overrides, "Rectangle 2")}
        ></Image>
        <Text
          fontFamily="Poppins"
          fontSize="48px"
          fontWeight="700"
          color="rgba(51,51,51,1)"
          lineHeight="72px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="2.97px"
          width="650px"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="125px"
          left="119px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Discover Your Inner Zen"
          {...getOverrideProps(overrides, "Discover Your Inner Zen")}
        ></Text>
        <View
          padding="0px 0px 0px 0px"
          width="467px"
          height="40px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="412px"
          left="212px"
          onClick={handleClick}
          {...getOverrideProps(overrides, "Button ")}
        >
          <Flex
            gap="4px"
            direction="row"
            width="219px"
            height="40px"
            justifyContent="center"
            alignItems="center"
            overflow="hidden"
            position="absolute"
            top="0px"
            left="248px"
            border="1px SOLID rgba(129,94,134,1)"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            borderRadius="15px"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "Frame 5588")}
          >
            <Text
              fontFamily="HK Grotesk"
              fontSize="18px"
              fontWeight="700"
              color="rgba(255,255,255,1)"
              lineHeight="32px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="💰"
              {...getOverrideProps(overrides, "\uD83D\uDCB0")}
            ></Text>
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
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="For $99.99/Month"
              {...getOverrideProps(overrides, "For $99.99/Month")}
            ></Text>
          </Flex>
          <Flex
            gap="0"
            direction="row"
            width="219px"
            height="40px"
            justifyContent="center"
            alignItems="center"
            overflow="hidden"
            position="absolute"
            top="0px"
            left="0px"
            border="1px SOLID rgba(0,0,0,0)"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
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
        </View>
        <Icon
          width="300px"
          height="300px"
          viewBox={{ minX: 0, minY: 0, width: 300, height: 300 }}
          paths={[
            {
              d: "M300 150C300 232.843 232.843 300 150 300C67.1573 300 0 232.843 0 150C0 67.1573 67.1573 0 150 0C232.843 0 300 67.1573 300 150Z",
              fill: "rgba(129,94,134,0.76)",
              fillRule: "nonzero",
            },
          ]}
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="534px"
          left="-150px"
          {...getOverrideProps(overrides, "Ellipse 2")}
        ></Icon>
        <View
          padding="0px 0px 0px 0px"
          width="280px"
          height="58px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="581px"
          left="166px"
          {...getOverrideProps(overrides, "design47641837")}
        >
          <Icon
            width="277.83px"
            height="24.23px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 277.82958984375,
              height: 24.22784423828125,
            }}
            paths={[
              {
                d: "M67.2868 12.0677L67.7637 12.9466L67.7785 12.9386L67.7929 12.9302L67.2868 12.0677ZM138.915 12.0677L138.424 12.9389L138.433 12.944L138.442 12.9489L138.915 12.0677ZM214.16 12.0677L213.715 11.1725L213.696 11.1818L213.678 11.1919L214.16 12.0677ZM-0.467112 12.9519C13.671 20.4209 24.5197 23.8437 34.9926 23.6488C45.4631 23.454 55.4193 19.6446 67.7637 12.9466L66.8099 11.1887C54.5557 17.8378 44.9419 21.4633 34.9554 21.6492C24.9712 21.8349 14.4759 18.5842 0.467112 11.1835L-0.467112 12.9519ZM67.7929 12.9302C81.7155 4.76011 92.443 0.921543 103.093 1.00121C113.752 1.08094 124.486 5.08493 138.424 12.9389L139.406 11.1965C125.371 3.28842 114.278 -0.915176 103.108 -0.998729C91.9313 -1.08234 80.8312 2.96011 66.7807 11.2052L67.7929 12.9302ZM138.442 12.9489C155.205 21.9435 167.661 25.6385 179.283 25.1919C190.897 24.7457 201.535 20.167 214.643 12.9435L213.678 11.1919C200.62 18.388 190.328 22.7661 179.207 23.1934C168.094 23.6203 156.01 20.1055 139.388 11.1865L138.442 12.9489ZM214.606 12.9629C231.041 4.78054 242.155 1.62969 251.385 2.04631C260.581 2.46138 268.063 6.42359 277.254 12.8857L278.405 11.2496C269.134 4.73142 261.26 0.490003 251.475 0.0483472C241.725 -0.391755 230.236 2.94758 213.715 11.1725L214.606 12.9629Z",
                stroke: "rgba(129,94,134,1)",
                fillRule: "nonzero",
                strokeWidth: 2,
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="9.54px"
            left="2.17px"
            {...getOverrideProps(overrides, "Vector 647641838")}
          ></Icon>
          <Icon
            width="277.83px"
            height="21.29px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 277.82958984375,
              height: 21.2911376953125,
            }}
            paths={[
              {
                d: "M67.2868 10.6049L67.7172 11.5076L67.7313 11.5009L67.7452 11.4937L67.2868 10.6049ZM138.915 10.6049L138.471 11.5011L138.48 11.5053L138.488 11.5094L138.915 10.6049ZM214.16 10.6049L213.759 9.68879L213.742 9.69652L213.724 9.70494L214.16 10.6049ZM-0.421088 11.512C13.7165 18.0754 24.5471 21.0743 34.9903 20.9035C45.4322 20.7328 55.3716 17.3943 67.7172 11.5076L66.8564 9.70231C54.6034 15.5448 44.9728 18.74 34.9576 18.9038C24.9438 19.0675 14.4304 16.2018 0.421088 9.69793L-0.421088 11.512ZM67.7452 11.4937C81.6665 4.31461 92.4121 0.930847 103.094 1.00107C113.783 1.07134 124.534 4.59996 138.471 11.5011L139.358 9.7088C125.322 2.75844 114.246 -0.925661 103.107 -0.998886C91.9622 -1.07215 80.8801 2.46983 66.8285 9.71617L67.7452 11.4937ZM138.488 11.5094C155.251 19.4136 167.687 22.651 179.279 22.2596C190.864 21.8685 201.486 17.8543 214.596 11.505L213.724 9.70494C200.67 16.0274 190.361 19.8843 179.211 20.2608C168.068 20.637 155.964 17.5387 139.341 9.70046L138.488 11.5094ZM214.561 11.5211C230.996 4.331 242.129 1.55223 251.391 1.9196C260.62 2.28569 268.118 5.78037 277.304 11.4557L278.355 9.75423C269.078 4.02252 261.221 0.307952 251.47 -0.0788332C241.751 -0.464341 230.281 2.46038 213.759 9.68879L214.561 11.5211Z",
                stroke: "rgba(129,94,134,1)",
                fillRule: "nonzero",
                strokeWidth: 2,
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="24.23px"
            left="0px"
            {...getOverrideProps(overrides, "Vector 747641839")}
          ></Icon>
          <Icon
            width="277.83px"
            height="24.23px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 277.82958984375,
              height: 24.22784423828125,
            }}
            paths={[
              {
                d: "M67.2868 12.0677L67.7637 12.9466L67.7785 12.9386L67.7929 12.9302L67.2868 12.0677ZM138.915 12.0677L138.424 12.9389L138.433 12.944L138.442 12.9489L138.915 12.0677ZM214.16 12.0677L213.715 11.1725L213.696 11.1818L213.678 11.1919L214.16 12.0677ZM-0.467112 12.9519C13.671 20.4209 24.5197 23.8437 34.9926 23.6488C45.4631 23.454 55.4193 19.6446 67.7637 12.9466L66.8099 11.1887C54.5557 17.8378 44.9419 21.4633 34.9554 21.6492C24.9712 21.8349 14.4759 18.5842 0.467112 11.1835L-0.467112 12.9519ZM67.7929 12.9302C81.7155 4.76011 92.443 0.921543 103.093 1.00121C113.752 1.08094 124.486 5.08493 138.424 12.9389L139.406 11.1965C125.371 3.28842 114.278 -0.915176 103.108 -0.998729C91.9313 -1.08234 80.8312 2.96011 66.7807 11.2052L67.7929 12.9302ZM138.442 12.9489C155.205 21.9435 167.661 25.6385 179.283 25.1919C190.897 24.7457 201.535 20.167 214.643 12.9435L213.678 11.1919C200.62 18.388 190.328 22.7661 179.207 23.1934C168.094 23.6203 156.01 20.1055 139.388 11.1865L138.442 12.9489ZM214.606 12.9629C231.041 4.78054 242.155 1.62969 251.385 2.04631C260.581 2.46138 268.063 6.42359 277.254 12.8857L278.405 11.2496C269.134 4.73142 261.26 0.490003 251.475 0.0483472C241.725 -0.391755 230.236 2.94758 213.715 11.1725L214.606 12.9629Z",
                stroke: "rgba(129,94,134,1)",
                fillRule: "nonzero",
                strokeWidth: 2,
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="0.72px"
            {...getOverrideProps(overrides, "Vector 847641840")}
          ></Icon>
          <Icon
            width="277.83px"
            height="24.23px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 277.82958984375,
              height: 24.22784423828125,
            }}
            paths={[
              {
                d: "M67.2868 12.0677L67.7637 12.9466L67.7785 12.9386L67.7929 12.9302L67.2868 12.0677ZM138.915 12.0677L138.424 12.9389L138.433 12.944L138.442 12.9489L138.915 12.0677ZM214.16 12.0677L213.715 11.1725L213.696 11.1818L213.678 11.1919L214.16 12.0677ZM-0.467112 12.9519C13.671 20.4209 24.5197 23.8437 34.9926 23.6488C45.4631 23.454 55.4193 19.6446 67.7637 12.9466L66.8099 11.1887C54.5557 17.8378 44.9419 21.4633 34.9554 21.6492C24.9712 21.8349 14.4759 18.5842 0.467112 11.1835L-0.467112 12.9519ZM67.7929 12.9302C81.7155 4.76011 92.443 0.921543 103.093 1.00121C113.752 1.08094 124.486 5.08493 138.424 12.9389L139.406 11.1965C125.371 3.28842 114.278 -0.915176 103.108 -0.998729C91.9313 -1.08234 80.8312 2.96011 66.7807 11.2052L67.7929 12.9302ZM138.442 12.9489C155.205 21.9435 167.661 25.6385 179.283 25.1919C190.897 24.7457 201.535 20.167 214.643 12.9435L213.678 11.1919C200.62 18.388 190.328 22.7661 179.207 23.1934C168.094 23.6203 156.01 20.1055 139.388 11.1865L138.442 12.9489ZM214.606 12.9629C231.041 4.78054 242.155 1.62969 251.385 2.04631C260.581 2.46138 268.063 6.42359 277.254 12.8857L278.405 11.2496C269.134 4.73142 261.26 0.490003 251.475 0.0483472C241.725 -0.391755 230.236 2.94758 213.715 11.1725L214.606 12.9629Z",
                stroke: "rgba(129,94,134,1)",
                fillRule: "nonzero",
                strokeWidth: 2,
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="33.77px"
            left="1.45px"
            {...getOverrideProps(overrides, "Vector 947641841")}
          ></Icon>
        </View>
        <View
          padding="0px 0px 0px 0px"
          width="280px"
          height="58px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          position="absolute"
          top="32px"
          left="1017px"
          {...getOverrideProps(overrides, "design47641847")}
        >
          <Icon
            width="277.83px"
            height="24.23px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 277.82958984375,
              height: 24.2279052734375,
            }}
            paths={[
              {
                d: "M67.2868 12.0677L67.5253 12.5072L67.5327 12.5032L67.5399 12.4989L67.2868 12.0677ZM138.915 12.0677L138.669 12.5034L138.678 12.5083L138.915 12.0677ZM214.16 12.0677L213.937 11.6201L213.928 11.6248L213.919 11.6298L214.16 12.0677ZM-0.233556 12.5098C13.8722 19.9617 24.6326 23.3415 34.9833 23.1489C45.3328 22.9563 55.2034 19.1929 67.5253 12.5072L67.0484 11.6282C54.7716 18.2895 45.0722 21.961 34.9647 22.1491C24.8584 22.3371 14.2747 19.0434 0.233556 11.6256L-0.233556 12.5098ZM67.5399 12.4989C81.4944 4.31011 92.315 0.420572 103.097 0.501229C113.883 0.581914 124.707 4.6358 138.669 12.5033L139.16 11.6321C125.15 3.73755 114.146 -0.416146 103.105 -0.498743C92.0592 -0.58137 81.0522 3.41011 67.0338 11.6365L67.5399 12.4989ZM138.678 12.5083C155.406 21.484 167.769 25.134 179.264 24.6923C190.755 24.2508 201.307 19.7222 214.402 12.5056L213.919 11.6298C200.849 18.8327 190.47 23.261 179.226 23.693C167.986 24.1249 155.809 20.565 139.151 11.6271L138.678 12.5083ZM214.383 12.5153C230.84 4.3223 242.048 1.12433 251.408 1.54682C260.75 1.96854 268.331 6.00055 277.542 12.4767L278.117 11.6587C268.866 5.15447 261.09 0.982848 251.453 0.547839C241.833 0.113607 230.437 3.40582 213.937 11.6201L214.383 12.5153Z",
                stroke: "rgba(255,255,255,1)",
                fillRule: "nonzero",
                strokeWidth: 1,
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="9.54px"
            left="2.17px"
            {...getOverrideProps(overrides, "Vector 647641848")}
          ></Icon>
          <Icon
            width="277.83px"
            height="21.29px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 277.82958984375,
              height: 21.2911376953125,
            }}
            paths={[
              {
                d: "M67.2868 10.6049L67.502 11.0563L67.5091 11.0529L67.516 11.0493L67.2868 10.6049ZM138.915 10.6049L138.693 11.0531L138.701 11.0572L138.915 10.6049ZM214.16 10.6049L213.96 10.1469L213.951 10.1507L213.942 10.1549L214.16 10.6049ZM-0.210544 11.0585C13.895 17.607 24.6463 20.5726 34.9822 20.4036C45.3174 20.2346 55.1795 16.9319 67.502 11.0563L67.0716 10.1536C54.7954 16.0072 45.0876 19.2382 34.9658 19.4037C24.8446 19.5692 14.2519 16.6702 0.210544 10.1514L-0.210544 11.0585ZM67.516 11.0493C81.4699 3.85341 92.2996 0.430097 103.098 0.501081C113.899 0.572087 124.731 4.13958 138.693 11.053L139.137 10.1569C125.125 3.21882 114.131 -0.426412 103.104 -0.498897C92.0747 -0.571404 81.0767 2.93102 67.0577 10.1606L67.516 11.0493ZM138.701 11.0572C155.429 18.9448 167.782 22.1475 179.262 21.7599C190.738 21.3724 201.282 17.3975 214.378 11.0549L213.942 10.1549C200.874 16.4841 190.487 20.3803 179.228 20.7605C167.973 21.1405 155.786 18.0074 139.128 10.1527L138.701 11.0572ZM214.361 11.063C230.817 3.86335 242.035 1.04808 251.41 1.41999C260.77 1.79125 268.358 5.34091 277.567 11.0303L278.092 10.1796C268.838 4.46199 261.07 0.802386 251.45 0.420774C241.846 0.0398004 230.46 2.92804 213.96 10.1469L214.361 11.063Z",
                stroke: "rgba(255,255,255,1)",
                fillRule: "nonzero",
                strokeWidth: 1,
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="24.23px"
            left="0px"
            {...getOverrideProps(overrides, "Vector 747641849")}
          ></Icon>
          <Icon
            width="277.83px"
            height="24.23px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 277.82958984375,
              height: 24.2279052734375,
            }}
            paths={[
              {
                d: "M67.2868 12.0677L67.5253 12.5072L67.5327 12.5032L67.5399 12.4989L67.2868 12.0677ZM138.915 12.0677L138.669 12.5034L138.678 12.5083L138.915 12.0677ZM214.16 12.0677L213.937 11.6201L213.928 11.6248L213.919 11.6298L214.16 12.0677ZM-0.233556 12.5098C13.8722 19.9617 24.6326 23.3415 34.9833 23.1489C45.3328 22.9563 55.2034 19.1929 67.5253 12.5072L67.0484 11.6282C54.7716 18.2895 45.0722 21.961 34.9647 22.1491C24.8584 22.3371 14.2747 19.0434 0.233556 11.6256L-0.233556 12.5098ZM67.5399 12.4989C81.4944 4.31011 92.315 0.420572 103.097 0.501229C113.883 0.581914 124.707 4.6358 138.669 12.5033L139.16 11.6321C125.15 3.73755 114.146 -0.416146 103.105 -0.498743C92.0592 -0.58137 81.0522 3.41011 67.0338 11.6365L67.5399 12.4989ZM138.678 12.5083C155.406 21.484 167.769 25.134 179.264 24.6923C190.755 24.2508 201.307 19.7222 214.402 12.5056L213.919 11.6298C200.849 18.8327 190.47 23.261 179.226 23.693C167.986 24.1249 155.809 20.565 139.151 11.6271L138.678 12.5083ZM214.383 12.5153C230.84 4.3223 242.048 1.12433 251.408 1.54682C260.75 1.96854 268.331 6.00055 277.542 12.4767L278.117 11.6587C268.866 5.15447 261.09 0.982848 251.453 0.547839C241.833 0.113607 230.437 3.40582 213.937 11.6201L214.383 12.5153Z",
                stroke: "rgba(255,255,255,1)",
                fillRule: "nonzero",
                strokeWidth: 1,
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0px"
            left="0.72px"
            {...getOverrideProps(overrides, "Vector 847641850")}
          ></Icon>
          <Icon
            width="277.83px"
            height="24.23px"
            viewBox={{
              minX: 0,
              minY: 0,
              width: 277.82958984375,
              height: 24.2279052734375,
            }}
            paths={[
              {
                d: "M67.2868 12.0677L67.5253 12.5072L67.5327 12.5032L67.5399 12.4989L67.2868 12.0677ZM138.915 12.0677L138.669 12.5034L138.678 12.5083L138.915 12.0677ZM214.16 12.0677L213.937 11.6201L213.928 11.6248L213.919 11.6298L214.16 12.0677ZM-0.233556 12.5098C13.8722 19.9617 24.6326 23.3415 34.9833 23.1489C45.3328 22.9563 55.2034 19.1929 67.5253 12.5072L67.0484 11.6282C54.7716 18.2895 45.0722 21.961 34.9647 22.1491C24.8584 22.3371 14.2747 19.0434 0.233556 11.6256L-0.233556 12.5098ZM67.5399 12.4989C81.4944 4.31011 92.315 0.420572 103.097 0.501229C113.883 0.581914 124.707 4.6358 138.669 12.5033L139.16 11.6321C125.15 3.73755 114.146 -0.416146 103.105 -0.498743C92.0592 -0.58137 81.0522 3.41011 67.0338 11.6365L67.5399 12.4989ZM138.678 12.5083C155.406 21.484 167.769 25.134 179.264 24.6923C190.755 24.2508 201.307 19.7222 214.402 12.5056L213.919 11.6298C200.849 18.8327 190.47 23.261 179.226 23.693C167.986 24.1249 155.809 20.565 139.151 11.6271L138.678 12.5083ZM214.383 12.5153C230.84 4.3223 242.048 1.12433 251.408 1.54682C260.75 1.96854 268.331 6.00055 277.542 12.4767L278.117 11.6587C268.866 5.15447 261.09 0.982848 251.453 0.547839C241.833 0.113607 230.437 3.40582 213.937 11.6201L214.383 12.5153Z",
                stroke: "rgba(255,255,255,1)",
                fillRule: "nonzero",
                strokeWidth: 1,
              },
            ]}
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="33.77px"
            left="1.45px"
            {...getOverrideProps(overrides, "Vector 947641851")}
          ></Icon>
        </View>
        <Text
          fontFamily="Poppins"
          fontSize="36px"
          fontWeight="400"
          color="rgba(66,55,51,1)"
          lineHeight="64.80818176269531px"
          textAlign="center"
          display="block"
          direction="column"
          justifyContent="unset"
          letterSpacing="2.19px"
          width="823px"
          height="unset"
          gap="unset"
          alignItems="unset"
          position="absolute"
          top="198px"
          left="32px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Subscribe today to Embark on a Journey of Self-Discovery Growth to Connect with Your Inner Self and Find True Peace.&#xA;"
          {...getOverrideProps(
            overrides,
            "Subscribe today to Embark on a Journey of Self-Discovery Growth to Connect with Your Inner Self and Find True Peace."
          )}
        ></Text>
      </View>
      <Icon
        width="1440px"
        height="0px"
        viewBox={{ minX: 0, minY: 0, width: 1440, height: 2.1239013671875 }}
        paths={[
          {
            d: "M0 0L1440 0L1440 -1L0 -1L0 0Z",
            stroke: "rgba(129,94,134,1)",
            fillRule: "nonzero",
            strokeWidth: 1,
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="670px"
        left="0px"
        transformOrigin="top left"
        transform="rotate(0.08deg)"
        underlinePosition="1"
        {...getOverrideProps(overrides, "Line 1")}
      ></Icon>
      <Text
        fontFamily="Poppins"
        fontSize="48px"
        fontWeight="700"
        color="rgba(51,51,51,1)"
        lineHeight="72px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="1151px"
        height="77px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="781px"
        left="125px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children=" Discover what our clients are saying about us"
        {...getOverrideProps(
          overrides,
          "Discover what our clients are saying about us"
        )}
      ></Text>
      <Text
        fontFamily="Poppins"
        fontSize="36px"
        fontWeight="400"
        color="rgba(51,51,51,1)"
        lineHeight="54px"
        textAlign="center"
        display="block"
        direction="column"
        justifyContent="unset"
        width="1116px"
        height="150px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="858px"
        left="143px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Read inspiring stories of transformation and success from those who have experienced the power of AnuZen"
        {...getOverrideProps(
          overrides,
          "Read inspiring stories of transformation and success from those who have experienced the power of AnuZen"
        )}
      ></Text>
      <Icon
        width="300px"
        height="300px"
        viewBox={{ minX: 0, minY: 0, width: 300, height: 300 }}
        paths={[
          {
            d: "M300 150C300 232.843 232.843 300 150 300C67.1573 300 0 232.843 0 150C0 67.1573 67.1573 0 150 0C232.843 0 300 67.1573 300 150Z",
            fill: "rgba(255,255,255,1)",
            fillRule: "nonzero",
          },
        ]}
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        position="absolute"
        top="-193px"
        left="1306px"
        {...getOverrideProps(overrides, "Ellipse 3")}
      ></Icon>
    </View>
  );
}
