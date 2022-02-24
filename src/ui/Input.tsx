import { Field } from 'formik';
import styled from '@emotion/styled';
import { FC } from 'react';

const StyledField = styled(Field)`
  background: var(--inputbackground);
  border-bottom: 1px var(--text) solid;
  color: var(--text);
  height: 51px;
  padding-left: 10px;
  margin-bottom: 10px;
  &::placeholder {
    color: var(--text);
  }
`;
const Input: FC = ({ name, placeholder }) => {
  return <StyledField type="input" name={name} placeholder={placeholder} />;
};

export default Input;
