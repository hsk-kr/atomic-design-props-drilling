import styled from '@emotion/styled/macro';

export interface PostProps {
  id: string;
  title: string;
  content: string;
}

export const Post = ({ id, title, content }: PostProps) => {
  return (
    <Wrapper key={id}>
      <div>{title}</div>
      <hr />
      <div>{content}</div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  padding: 24px;
  width: 150px;
  height: 100px;

  > hr {
    margin: 8px 8px;
  }

  > div {
    text-align: center;
  }
`;
