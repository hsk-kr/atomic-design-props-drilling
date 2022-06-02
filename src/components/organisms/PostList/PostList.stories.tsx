import { ComponentStory, ComponentMeta } from '@storybook/react';
import { PostList } from '.';
import { generatePostArgs } from '../../molecules/Post/Post.stories';

export default {
  title: 'organisms/PostList',
  component: PostList,
} as ComponentMeta<typeof PostList>;

const Template: ComponentStory<typeof PostList> = (args) => (
  <PostList {...args} />
);

export const Example = Template.bind({});

Example.args = {
  posts: generatePostArgs(3),
};
