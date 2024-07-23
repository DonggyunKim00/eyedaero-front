import React, { useMemo, useState } from 'react';
import { styled } from 'styled-components';
import ResponsiveWrapper from '../../components/ResponsiveWrapper';
import FunctionButton from './components/FunctionButton';
import ReviewModal from './components/ReviewModal';
import Seat from './components/Seat';
import useReviewModalState from '../../store/modal/review';
import { Link, useSearchParams } from 'react-router-dom';
import { useGetTheaterRoomList } from '../../hooks/query/useTheater';

const DetailPage = () => {
  const [theaterRoomId, setTheaterRoomId] = useState<number>(0);

  const theater = useMemo(() => {
    switch (theaterRoomId) {
      case 0:
        return [
          [0, 0, 0, 0, 0],
          [0, 1, 1, 1, 0],
          [0, 0, 0, 0, 0],
          [0, 1, 1, 1, 0],
          [0, 0, 0, 0, 0],
        ];
      case 1:
        return [
          [null, 1, 1, 1, null],
          [1, 0, 0, 0, 1],
          [1, 0, 0, 0, 1],
          [1, 0, 0, 0, 1],
          [null, 1, 1, 1, null],
        ];
      case 2:
        return [
          [null, 0, 0, 0, null],
          [0, 0, 1, 0, 0],
          [0, 0, 0, 0, 0],
          [0, 1, 0, 1, 0],
          [null, 0, 0, 0, null],
        ];
      case 3:
        return [
          [null, 0, 1, 0, null],
          [0, 0, 0, 0, 0],
          [1, 1, 1, 1, 1],
          [0, 0, 0, 0, 0],
          [null, 0, 1, 0, null],
        ];
      case 4:
        return [
          [null, 0, 1, 0, null],
          [0, 0, 0, 0, 0],
          [1, 1, 1, 1, 1],
          [0, 0, 0, 0, 0],
          [null, 0, 1, 0, null],
        ];
      case 5:
        return [
          [0, null, 0, null, 0],
          [0, 0, 0, 0, 0],
          [1, 0, 0, 0, 1],
          [0, 0, 0, 0, 0],
          [0, null, 0, null, 0],
        ];
      default:
        return [[]];
    }
  }, [theaterRoomId]);
  const max = Math.max(...theater.map((item) => item.length));
  const screeWidth = Math.max(407, 35 * max);
  const { reviewModalState, open } = useReviewModalState();
  const [searchParams, setSearchParams] = useSearchParams();
  const theaterId = Number(searchParams.get('id'));
  const { data } = useGetTheaterRoomList(theaterId);

  return (
    <ResponsiveWrapper>
      {reviewModalState && <ReviewModal theaterRoomId={theaterRoomId} />}
      <Header to={'/'}>
        <img src="/svg/Back.svg" />
        <span>{data && data.data.theaterName}</span>
      </Header>
      <Navigator>
        <button>
          {theaterRoomId !== 0 ? (
            <img
              src="/svg/PrevArrow.svg"
              onClick={() => setTheaterRoomId((prev) => prev - 1)}
            />
          ) : (
            <div />
          )}
        </button>

        <span>
          {data
            ? data?.data.theaterRoomIds[theaterRoomId] + '관'
            : 'loading...'}
        </span>

        <button>
          {data && theaterRoomId + 1 !== data?.data.theaterRoomIds.length ? (
            <img
              src="/svg/NextArrow.svg"
              onClick={() => setTheaterRoomId((prev) => prev + 1)}
            />
          ) : (
            <div />
          )}
        </button>
      </Navigator>

      <SeatLayout>
        <Screen width={screeWidth}>SCREEN</Screen>

        {theater.map((item: any, ascii: any) => {
          return (
            <RowWrapper key={ascii}>
              <Alpha>{String.fromCharCode(ascii + 65)}</Alpha>
              <Row ftype={screeWidth === 407 ? 'center' : 'flex-start'}>
                {item.map((type: any, idx: any) => (
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
const Header = styled(Link)`
  padding: 0px 11px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  height: 110px;
  background-color: #26cc9d;
  color: white;
  font-weight: 700;
  text-decoration: none;
  span {
    font-size: 18px;
  }
`;
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
