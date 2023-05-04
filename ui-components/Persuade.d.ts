/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { FlexProps, ImageProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
import { SyntheticEvent } from "react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type PersuadeOverridesProps = {
    Persuade?: PrimitiveOverrideProps<ViewProps>;
    "Join our community of like-minded individuals and gain access to premium content, tools, and resources to support your growth journey."?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<FlexProps>;
    label?: PrimitiveOverrideProps<TextProps>;
    Banner?: PrimitiveOverrideProps<ImageProps>;
} & EscapeHatchProps;
export declare type PersuadeProps = React.PropsWithChildren<Partial<ViewProps> & {
    handleClick?: (event: SyntheticEvent) => void;
    banner?: String;
} & {
    overrides?: PersuadeOverridesProps | undefined | null;
}>;
export default function Persuade(props: PersuadeProps): React.ReactElement;
