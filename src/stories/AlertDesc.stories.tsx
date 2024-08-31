import type { Meta, StoryObj } from '@storybook/react';

import AlertDesc from './AlertDesc';

const meta = {
  component: AlertDesc,
} satisfies Meta<typeof AlertDesc>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "You order is being checked",
    desc: "Tap here to see details",
    variant: "info"
  }
};
export const Warning: Story = {
  args: {
    title: "You order is being held",
    desc: "Tap here to see details",
    variant: "warning"
  }
};
export const Error: Story = {
  args: {
    title: "You has cancelled the order",
    desc: "Tap here to see details",
    variant: "error"
  }
};