import React from 'react';
import { styled } from 'styled-components';

const Seat = ({ ...props }) => {
  return <Container type={props.type}>{props.seatNum}</Container>;
};

export default Seat;

const Container = styled.div<{ type: number | null }>`
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: ${({ type }) => (typeof type !== 'number' ? 0 : 1)};
  background-color: ${({ type }) => (type === 0 ? '#26CC9D1A' : '#26CC9D')};
  color: ${({ type }) => (type === 0 ? '#666666BF' : 'white')};
  font-size: 14px;
  height: 27px;
  width: 27px;
  margin: 4px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
