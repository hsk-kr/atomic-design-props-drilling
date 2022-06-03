import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Label } from '.';

export default {
  title: 'atoms/Label',
  component: Label,
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

export const Example = Template.bind({});

Example.args = {
  children: 'This is label',
};
