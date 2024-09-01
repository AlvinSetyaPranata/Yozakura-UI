import type { Meta, StoryObj } from '@storybook/react';

import Modals from './Modals';

const meta = {
  component: Modals,
} satisfies Meta<typeof Modals>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    text: "This a simple modals"
  }
};