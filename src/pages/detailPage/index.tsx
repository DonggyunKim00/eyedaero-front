import React from 'react';
import { styled } from 'styled-components';
import ResponsiveWrapper from '../../components/ResponsiveWrapper';
import { theater3, theater2 } from '../../dummy/theater';
import Seat from './components/Seat';

const DetailPage = () => {
  return (
    <ResponsiveWrapper>
      <Navigator>10관</Navigator>
      <Screen>SCREEN</Screen>

      <SeatLayout>
        {theater3.map((item, ascii) => {
          console.log(String.fromCharCode(ascii));
          return (
            <RowWrapper>
              <Alpha>{String.fromCharCode(ascii + 65)}</Alpha>
              <Row>
                {item.map((type, idx) => (
                  <Seat type={type} seatNum={idx + 1} />
                ))}
              </Row>
            </RowWrapper>
          );
        })}
      </SeatLayout>
    </ResponsiveWrapper>
  );
};

export default DetailPage;

const Navigator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 30px;
  width: 100%;
  margin: 15px 0;
  border: 1px solid #dedede;
  color: black;
  border-radius: 10px;
`;
const Screen = styled.div`
  margin: 15px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #66666640;
  min-height: 30px;
  width: 100%;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.3);
  color: white;
`;
const SeatLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  max-height: 300px;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const Alpha = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
  font-size: 16px;
  min-width: 18px;
  height: 18px;
  color: #666666bf;
`;
const RowWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
  width: 100%;
`;
const Row = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;
