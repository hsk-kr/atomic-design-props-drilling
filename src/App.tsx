import React from 'react';
import { Global } from '@emotion/react';
import globalStyle from './globalStyle';
// import { PostListWithoutContainer } from './components/pages/PostListWithoutContainer';
import { PostListWithContainer } from './components/pages/PostListWithContainer';

function App() {
  return (
    <>
      <PostListWithContainer />
      {/* <PostListWithoutContainer /> */}
      <Global styles={globalStyle} />
    </>
  );
}

export default App;
