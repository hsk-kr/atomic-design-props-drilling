import React from 'react';
import { Global } from '@emotion/react';
import globalStyle from './globalStyle';
// import { PostListWithoutContainer } from './components/pages/PostListWithoutContainer';
// import { PostListWithContainer } from './components/pages/PostListWithContainer';
// import { EditProfileFormWithoutCustomHook } from './components/pages/EditProfileFormWithoutCustomHook';
import { EditProfileFormWithCustomHook } from './components/pages/EditProfileFormWithCustomHook';

function App() {
  return (
    <>
      <EditProfileFormWithCustomHook />
      {/* <PostListWithoutContainer /> */}
      <Global styles={globalStyle} />
    </>
  );
}

export default App;
