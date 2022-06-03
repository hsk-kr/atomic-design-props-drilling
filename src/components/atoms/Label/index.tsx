import { LabelHTMLAttributes } from 'react';
import styled from '@emotion/styled/macro';

type LabelProps = LabelHTMLAttributes<HTMLLabelElement>;

export const Label = (props: LabelProps) => <StyledLabel {...props} />;

const StyledLabel = styled.label`
  font-size: 14px;
`;
