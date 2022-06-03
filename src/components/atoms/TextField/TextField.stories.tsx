import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextField } from '.';

export default {
  title: 'atoms/TextField',
  component: TextField,
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => (
  <TextField {...args} />
);

export const Default = Template.bind({});
