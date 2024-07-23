import axios from 'axios';

export const getTheaterInfo = async ({
  theaterRoomId,
}: {
  theaterRoomId: number;
}) => {
  const res = axios.get(
    `${process.env.REACT_APP_API_KEY}/theaterroom/info/${theaterRoomId}`,
  );

  return res;
};

export const getTheaterRoomList = async ({
  theaterId,
}: {
  theaterId: number;
}) => {
  const res = axios.get(
    `${process.env.REACT_APP_API_KEY}/theaterroom/list/${theaterId}`,
  );

  return res;
};

export const getTheaterRoomSeat = async ({
  theaterRoomId,
}: {
  theaterRoomId: number;
}) => {
  const res = axios.get(
    `${process.env.REACT_APP_API_KEY}/theaterroom/seats/${theaterRoomId}`,
  );

  return res;
};
