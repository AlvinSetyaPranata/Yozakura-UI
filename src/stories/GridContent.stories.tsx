import type { Meta, StoryObj } from '@storybook/react';

import GridContent from './GridContent';

const meta = {
  component: GridContent,
} satisfies Meta<typeof GridContent>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {}
};