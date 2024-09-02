import React from "react";

export interface IFormProps extends React.HTMLAttributes<HTMLDivElement> {
    title: string,
    errorMessege?: string,
}