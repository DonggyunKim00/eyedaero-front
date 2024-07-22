import { useQuery } from '@tanstack/react-query';
import { getTheaterInfo } from '../../api/theater';

export const useGetTheaterInfo = (id: number) => {
  const { data } = useQuery({
    queryKey: ['theater', id],
    queryFn: () => getTheaterInfo({ theaterRoomId: id }),
  });

  return { data };
};
