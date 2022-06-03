import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TextFieldWithLabel } from '.';

export default {
  title: 'molecules/TextFieldWithLabel',
  component: TextFieldWithLabel,
} as ComponentMeta<typeof TextFieldWithLabel>;

const Template: ComponentStory<typeof TextFieldWithLabel> = (args) => (
  <TextFieldWithLabel {...args} />
);

export const Example = Template.bind({});

Example.args = {
  id: 'label',
  label: 'Label',
};
