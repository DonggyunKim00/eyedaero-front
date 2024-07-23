import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  getReview,
  postReview,
  PostReviewType,
  likeReview,
} from '../../api/review';

export const usePostReview = (id: number) => {
  const queryClient = useQueryClient();
  const { mutate: postReviewMutate } = useMutation({
    mutationFn: ({ ...props }: PostReviewType) => postReview({ ...props }),
    onSuccess: (data) => {
      alert('리뷰가 생성되었습니다.');
      queryClient.invalidateQueries({ queryKey: ['review', id] });
    },
    onError: () => {},
  });

  return { postReviewMutate };
};

export const useGetReview = (id: number) => {
  const { data } = useQuery({
    queryKey: ['review', id],
    queryFn: () => getReview({ theaterRoomId: id }),
  });

  return { data };
};

export const useLikeReview = (theaterRoomId: number) => {
  const queryClient = useQueryClient();

  const { mutate: likeMutate } = useMutation({
    mutationFn: (reviewId: number) => likeReview({ reviewId }),
    onSuccess: (data) => {
      queryClient.invalidateQueries({
        queryKey: ['review', theaterRoomId],
      });
    },
  });

  return { likeMutate };
};
