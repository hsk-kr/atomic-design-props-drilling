import { ComponentStory, ComponentMeta } from '@storybook/react';
import { EditProfileForm } from '.';

export default {
  title: 'organisms/EditProfileForm',
  component: EditProfileForm,
} as ComponentMeta<typeof EditProfileForm>;

const Template: ComponentStory<typeof EditProfileForm> = (args) => (
  <EditProfileForm {...args} />
);

export const Default = Template.bind({});
