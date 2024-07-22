import React from 'react';
import { styled } from 'styled-components';

interface Props {
  src: string;
  onClick: () => void;
}
const FunctionButton = ({ ...props }: Props) => {
  return (
    <Container onClick={() => props.onClick()}>
      <img src={props.src} />
    </Container>
  );
};

export default FunctionButton;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 63px;
  height: 63px;
  background-color: #26cc9d;
  border-radius: 50px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  transition: all 0.1s ease-out;
  color: white;
  font-weight: 700;
`;
const Inner = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;
