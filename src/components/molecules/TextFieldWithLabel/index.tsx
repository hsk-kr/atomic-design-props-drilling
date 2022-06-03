import { ChangeEventHandler } from 'react';
import styled from '@emotion/styled/macro';

import { Label } from '../../atoms/Label';
import { TextField } from '../../atoms/TextField';

interface TextFieldWithLabelProps {
  id?: string;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  label?: string;
}

export const TextFieldWithLabel = ({
  id,
  value,
  onChange,
  label,
}: TextFieldWithLabelProps) => {
  return (
    <Wrapper>
      <Label htmlFor={id}>{label}</Label>
      <TextField id={id} value={value} onChange={onChange} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;
