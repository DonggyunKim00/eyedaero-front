import { useQuery } from '@tanstack/react-query';
import {
  getTheaterInfo,
  getTheaterRoomList,
  getTheaterRoomSeat,
} from '../../api/theater';

export const useGetTheaterInfo = (id: number) => {
  const { data } = useQuery({
    queryKey: ['theater', id],
    queryFn: () => getTheaterInfo({ theaterRoomId: id }),
  });

  return { data };
};

export const useGetTheaterRoomList = (id: number) => {
  const { data } = useQuery({
    queryKey: ['theater', id],
    queryFn: () => getTheaterRoomList({ theaterId: id }),
  });

  return { data };
};

export const useGetTheaterRoomSeat = (id: number) => {
  const { data } = useQuery({
    queryKey: ['theater', id],
    queryFn: () => getTheaterRoomSeat({ theaterRoomId: id }),
  });

  return { data };
};
