import React from "react";

export interface IModalsProps extends React.HTMLAttributes<HTMLDivElement> {
    text: string,
    onYes?: () => void,
    onNo?: () => void
}