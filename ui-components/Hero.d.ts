/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, DividerProps, FlexProps, IconProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { SyntheticEvent } from "react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type HeroOverridesProps = {
    Hero?: PrimitiveOverrideProps<ViewProps>;
    Divider47861834?: PrimitiveOverrideProps<DividerProps>;
    "Discover what our clients are saying about us"?: PrimitiveOverrideProps<TextProps>;
    "Read inspiring stories of transformation and success from those who have experienced the power of AnuZen"?: PrimitiveOverrideProps<TextProps>;
    "Frame 5589"?: PrimitiveOverrideProps<ViewProps>;
    "Rectangle 2"?: PrimitiveOverrideProps<ImageProps>;
    "Discover Your Inner Zen"?: PrimitiveOverrideProps<TextProps>;
    "Button Area"?: PrimitiveOverrideProps<FlexProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
    "Frame 5588"?: PrimitiveOverrideProps<FlexProps>;
    "For $99.99/Month"?: PrimitiveOverrideProps<TextProps>;
    "Ellipse 2"?: PrimitiveOverrideProps<IconProps>;
    design47641837?: PrimitiveOverrideProps<ViewProps>;
    "Vector 647641838"?: PrimitiveOverrideProps<IconProps>;
    "Vector 747641839"?: PrimitiveOverrideProps<IconProps>;
    "Vector 847641840"?: PrimitiveOverrideProps<IconProps>;
    "Vector 947641841"?: PrimitiveOverrideProps<IconProps>;
    design47641847?: PrimitiveOverrideProps<ViewProps>;
    "Vector 647641848"?: PrimitiveOverrideProps<IconProps>;
    "Vector 747641849"?: PrimitiveOverrideProps<IconProps>;
    "Vector 847641850"?: PrimitiveOverrideProps<IconProps>;
    "Vector 947641851"?: PrimitiveOverrideProps<IconProps>;
    "Subscribe today to Embark on a Journey of Self-Discovery Growth to Connect with Your Inner Self and Find True Peace."?: PrimitiveOverrideProps<TextProps>;
    "Ellipse 3"?: PrimitiveOverrideProps<IconProps>;
    Divider47861837?: PrimitiveOverrideProps<DividerProps>;
} & EscapeHatchProps;
export declare type HeroProps = React.PropsWithChildren<Partial<ViewProps> & {
    handleClick?: (event: SyntheticEvent) => void;
} & {
    overrides?: HeroOverridesProps | undefined | null;
}>;
export default function Hero(props: HeroProps): React.ReactElement;
