import styled from '@emotion/styled/macro';
import { Post, PostProps } from '../../molecules/Post';

interface PostListProps {
  posts: PostProps[];
}

export const PostList = ({ posts }: PostListProps) => {
  return (
    <Wrapper>
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  column-gap: 16px;
  row-gap: 16px;
`;
