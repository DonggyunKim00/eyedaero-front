import axios from 'axios';

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const res = axios.post(`${process.env.REACT_APP_API_KEY}/user/login`, {
    email,
    password,
  });

  return res;
};

export const signup = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const res = axios.post(`${process.env.REACT_APP_API_KEY}/user/register`, {
    email,
    password,
  });

  return res;
};
