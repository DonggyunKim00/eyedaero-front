import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { login, signup } from '../../api/auth';

export const useLogin = () => {
  const navigate = useNavigate();
  const { mutate: loginMutate } = useMutation({
    mutationFn: (data: { email: string; password: string }) => login(data),
    onSuccess: (data) => {
      alert('로그인에 성공 하였습니다!');
      sessionStorage.setItem('access', data.headers.authorization);
      navigate('/');
    },
    onError: () => {
      alert('로그인에 실패 하였습니다!');
    },
  });

  return { loginMutate };
};

export const useSignup = () => {
  const navigate = useNavigate();
  const { mutate: signupMutate } = useMutation({
    mutationFn: (data: { email: string; password: string }) => signup(data),
    onSuccess: () => {
      alert('회원가입에 성공 하였습니다!');
      navigate('/login');
    },
    onError: () => {
      alert('로그인에 실패 하였습니다!');
    },
  });

  return { signupMutate };
};
