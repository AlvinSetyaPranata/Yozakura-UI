import React, { HTMLAttributes } from "react";
import { StoryObj } from "@storybook/react"
import AlertDesc from "src/stories/AlertDesc";

export interface IAlertDescProps extends React.HTMLAttributes<HTMLDivElement> {
    title?: String,
    desc?: String,
    variant: String
}


export type AlertDescStory = StoryObj<typeof AlertDesc>