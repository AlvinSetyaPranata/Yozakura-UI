import React, { HTMLAttributes } from "react";

export interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    text: String,
    icon?: React.ReactElement
}