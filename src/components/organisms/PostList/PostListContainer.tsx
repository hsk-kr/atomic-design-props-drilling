import { useState, useEffect } from 'react';
import { PostList } from '.';

export interface PostListContainerProps {
  type: 'notice' | 'freeboard' | 'discuss';
}

const fetchPosts = async (type: 'notice' | 'freeboard' | 'discuss') => {
  const res = await fetch(`http://localhost:4000/${type}`);
  return await res.json();
};

export const PostListContainer = ({ type }: PostListContainerProps) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetchPosts(type).then((posts) => setPosts(posts));
  }, [type]);

  return <PostList posts={posts} />;
};
