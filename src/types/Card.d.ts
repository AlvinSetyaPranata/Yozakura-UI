import React, { HTMLAttributes } from "react";
import { StoryObj } from "@storybook/react"
import Card from "src/stories/Card";



export interface ICardProps extends React.HTMLAttributes<HTMLDivElement> {
    title?: string,
    desc?: string,
    image?: string,
    buttonText?: string,
    variant?: string|null
}


export interface ICardVariantsProps extends Omit<ICardProps, 'variant'>{}


export type CardStory = StoryObj<typeof Card>