import React, { useMemo } from 'react';
import { styled } from 'styled-components';
import ResponsiveWrapper from '../../components/ResponsiveWrapper';
import { generateRandomTheater } from '../../dummy/theater';
import FunctionButton from './components/FunctionButton';
import ReviewModal from './components/ReviewModal';
import Seat from './components/Seat';
import useReviewModalState from '../../store/modal/review';
import { Link, useSearchParams } from 'react-router-dom';

const DetailPage = () => {
  const theater = useMemo(() => {
    return generateRandomTheater();
  }, []);
  const max = Math.max(...theater.map((item) => item.length));
  const screeWidth = Math.max(407, 35 * max);
  const { reviewModalState, open } = useReviewModalState();
  const [searchParams, setSearchParams] = useSearchParams();
  const theaterRoomId = Number(searchParams.get('id'));
  return (
    <ResponsiveWrapper>
      {reviewModalState && <ReviewModal theaterRoomId={theaterRoomId} />}

      <Navigator>
        <button>
          <img src="/svg/PrevArrow.svg" />
        </button>
        <span>10관</span>
        <button>
          <img src="/svg/NextArrow.svg" />
        </button>
      </Navigator>

      <SeatLayout>
        <Screen width={screeWidth}>SCREEN</Screen>

        {theater.map((item, ascii) => {
          return (
            <RowWrapper key={ascii}>
              <Alpha>{String.fromCharCode(ascii + 65)}</Alpha>
              <Row ftype={screeWidth === 407 ? 'center' : 'flex-start'}>
                {item.map((type, idx) => (
                  <Seat key={idx} type={type} seatNum={idx + 1} />
                ))}
              </Row>
            </RowWrapper>
          );
        })}
      </SeatLayout>

      <ButtonList>
        <FunctionButton src="/svg/ReviewIcon.svg" onClick={open} />
        <Link to={'https://www.cgv.co.kr/'}>
          <FunctionButton src="/svg/Ticket.svg" onClick={() => {}} />
        </Link>
      </ButtonList>
    </ResponsiveWrapper>
  );
};

export default DetailPage;

const Navigator = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 25px;
  height: 30px;
  width: 100%;
  margin: 15px 0px;
  border-radius: 10px;
  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20px;
    height: 20px;
    border: none;
    background-color: transparent;
    cursor: pointer;
  }
  span {
    font-size: 30px;
    color: #66666666;
    font-weight: 600;
  }
`;
const SeatLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
const Screen = styled.div<{ width: number }>`
  margin: 15px 0px;
  margin-left: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #66666640;
  min-height: 30px;
  width: ${({ width }) => `${width}px`};
  color: white;
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
const Row = styled.div<{ ftype: string }>`
  display: flex;
  width: 100%;
  justify-content: ${({ ftype }) => ftype};
`;
const ButtonList = styled.div`
  position: fixed;
  right: 30px;
  bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 10px;
`;
