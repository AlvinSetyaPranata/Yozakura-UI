import type { Meta, StoryObj } from '@storybook/react';

import Alert from './Alert';

const meta = {
  component: Alert,
} satisfies Meta<typeof Alert>;

export default meta;

type Story = StoryObj<typeof meta>;


export const Default: Story = {
  args: {
    text: "There is an update version of this app",
  },
};

export const Info: Story = {
  args: {
    text: "There is an update version of this app",
    variant: "info"
  },
};

export const Warning: Story = {
  args: {
    text: "Your order is still pending",
    variant: 'warning'
  },
};

export const Error: Story = {
  args: {
    text: "There is an error while fetching the resource",
    variant: 'error'
  },
};
