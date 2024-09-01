import React from "react";

export interface IModalsProps extends React.HTMLAttributes<HTMLDivElement> {
    text: String,
    onYes?: () => void,
    onNo?: () => void
}