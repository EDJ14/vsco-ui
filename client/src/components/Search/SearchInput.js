import React from 'react';
import styled from 'styled-components';

const InputContainer = styled.div`
  grid-row: 2 / -1;
  grid-column: 2 / 3;

  display: grid;
  grid-template-rows: 0.5fr 1fr 1fr 1fr;
`;

const Input = styled.input`
  grid-row: 2 / 3;
  background-color: white;
  font-size: 2.5rem;
  border: none;

  &:after {
    content: '';
    width: 2rem;
    background-color: red;
  }
`;

export default props => {
  return (
    <InputContainer>
      <Input placeholder={'Search'}></Input>
    </InputContainer>
  );
};
