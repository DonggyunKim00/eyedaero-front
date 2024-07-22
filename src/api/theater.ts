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
