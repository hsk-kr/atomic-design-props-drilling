import styled from '@emotion/styled/macro';
import { PostListContainer } from '../organisms/PostList/PostListContainer';

export const PostListWithContainer = () => {
  return (
    <Page>
      <PostListContainer type="notice" />
      <hr />
      <PostListContainer type="freeboard" />
      <hr />
      <PostListContainer type="discuss" />
    </Page>
  );
};

const Page = styled.div`
  padding: 16px;
`;
