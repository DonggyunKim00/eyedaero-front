import axios from 'axios';

export interface PostReviewType {
  theaterRoomId: number;
  contents: string;
  rate: number;
}
export const postReview = async ({ ...props }: PostReviewType) => {
  const res = axios.post(
    `${process.env.REACT_APP_API_KEY}/review/create`,
    {
      theaterRoomId: props.theaterRoomId,
      contents: props.contents,
      rate: props.rate,
    },
    {
      headers: { Authorization: sessionStorage.getItem('access') || '' },
    },
  );

  return res;
};

export const getReview = async ({
  theaterRoomId,
}: {
  theaterRoomId: number;
}) => {
  const res = axios.get(
    `${process.env.REACT_APP_API_KEY}/review/list/${theaterRoomId}`,
  );

  return res;
};

export const likeReview = async ({ reviewId }: { reviewId: number }) => {
  const res = axios.put(
    `${process.env.REACT_APP_API_KEY}/review/${reviewId}`,
    {},
    {
      headers: { Authorization: sessionStorage.getItem('access') || '' },
    },
  );

  return res;
};
