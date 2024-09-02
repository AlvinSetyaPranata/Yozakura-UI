import React, { HTMLAttributes } from "react";
import { StoryObj } from "@storybook/react"
import Alert from "src/stories/Alert";

export interface IAlertProps extends React.HTMLAttributes<HTMLDivElement> {
    text?: string,
    variant?: string|null
}


export type AlertStory = StoryObj<typeof Alert>