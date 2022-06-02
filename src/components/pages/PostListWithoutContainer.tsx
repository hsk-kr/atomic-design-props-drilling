import { useState, useEffect } from 'react';
import styled from '@emotion/styled/macro';
import { PostList } from '../organisms/PostList';

const fetchPosts = async (type: 'notice' | 'freeboard' | 'discuss') => {
  const res = await fetch(`http://localhost:4000/${type}`);
  return await res.json();
};

export const PostListWithoutContainer = () => {
  const [noticeList, setNoticeList] = useState([]);
  const [freeboardList, setFreeboardList] = useState([]);
  const [discussList, setDiscussList] = useState([]);

  useEffect(() => {
    fetchPosts('notice').then((posts) => setNoticeList(posts));
    fetchPosts('freeboard').then((posts) => setFreeboardList(posts));
    fetchPosts('discuss').then((posts) => setDiscussList(posts));
  }, []);

  return (
    <Page>
      <PostList posts={noticeList} />
      <hr />
      <PostList posts={freeboardList} />
      <hr />
      <PostList posts={discussList} />
    </Page>
  );
};

const Page = styled.div`
  padding: 16px;
`;
