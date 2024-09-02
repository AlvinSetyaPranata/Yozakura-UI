import type { Meta, StoryObj } from '@storybook/react';

import Forms from './Forms';

const meta = {
  component: Forms,
} satisfies Meta<typeof Forms>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "Username",
    errorMessege: "No user match with given credentials"
  }
};