import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Post } from '.';

export default {
  title: 'molecules/Post',
  component: Post,
  includeStories: ['Example'],
  excludeStories: ['generatePostArgs'],
} as ComponentMeta<typeof Post>;

const Template: ComponentStory<typeof Post> = (args) => <Post {...args} />;

export const generatePostArgs = (cnt: number) =>
  Array(cnt)
    .fill(0)
    .map((_, idx) => ({
      id: (idx + 1).toString(),
      title: 'title',
      content: 'content',
    }));

export const Example = Template.bind({});

Example.args = { ...generatePostArgs(1)[0] };
