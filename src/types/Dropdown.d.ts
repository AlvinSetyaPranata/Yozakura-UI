import React from "react";



export interface IDropdownProps extends React.HTMLAttributes<HTMLDivElement> {
    defaultValue?: string,
    options: string[]
}