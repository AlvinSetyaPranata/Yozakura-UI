import type { Meta, StoryObj } from '@storybook/react';

import Card from './Card';

const meta = {
  component: Card,
} satisfies Meta<typeof Card>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Shoes",
    image: "https://img.freepik.com/free-photo/pair-trainers_144627-3799.jpg",
    desc: "An adidas Shoes that designed by Lauren Philps, which is the most famous art",
    buttonText: "Take a look"
  }
};


export const WithPrice: Story = {
  args: {
    title: "Sepatu Adidas - Eagle Eye from south africa to malaysian",
    image: "https://img.freepik.com/free-photo/pair-trainers_144627-3799.jpg",
    desc: "An adidas Shoes that designed by Lauren Philps, which is the most famous art",
    variant: "withPrice",
    buttonText: "Take a look",
  }
};