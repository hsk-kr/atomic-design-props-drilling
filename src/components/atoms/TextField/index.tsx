import { InputHTMLAttributes } from 'react';
import styled from '@emotion/styled/macro';

type TextFieldProps = InputHTMLAttributes<HTMLInputElement>;

export const TextField = (props: TextFieldProps) => (
  <StyledTextField type="text" {...props} />
);

const StyledTextField = styled.input`
  outline: 0;
  border: 1px solid #a3a3a3;
  border-radius: 4px;
  padding: 8px;

  &:focus {
    border: 2px solid #3b49df;
  }
`;
