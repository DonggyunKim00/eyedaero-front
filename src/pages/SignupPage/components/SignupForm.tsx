import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { styled } from 'styled-components';
import { useLogin, useSignup } from '../../../hooks/query/useAuth';

const SignupForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [show1, setShow1] = useState<boolean>(false);
  const [show2, setShow2] = useState<boolean>(false);

  const { signupMutate } = useSignup();
  return (
    <Container
      onSubmit={handleSubmit((data) => {
        const email = data.email;
        const password = data.password;
        const pwcheck = data.passwordcheck;
        if (password === pwcheck) signupMutate({ email, password });
        else alert('비밀번호를 확인해주세요');
      })}
    >
      <Top>
        <span>이메일</span>
        <Row>
          <CustomInput {...register('email')} />
        </Row>

        <span>비밀번호</span>
        <Row>
          <CustomInput
            type={show1 ? 'text' : 'password'}
            {...register('password')}
          />
          <button type="button" onClick={() => setShow1((prev) => !prev)}>
            <img src={show1 ? '/svg/ShowEye.svg' : '/svg/Eye.svg'} />
          </button>
        </Row>

        <span>비밀번호 확인</span>
        <Row>
          <CustomInput
            type={show2 ? 'text' : 'password'}
            {...register('passwordcheck')}
          />
          <button type="button" onClick={() => setShow2((prev) => !prev)}>
            <img src={show2 ? '/svg/ShowEye.svg' : '/svg/Eye.svg'} />
          </button>
        </Row>
      </Top>

      <ButtonList>
        <SubmitButton type="submit">회원가입</SubmitButton>
      </ButtonList>
    </Container>
  );
};
export default SignupForm;

const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  gap: 17px;
  span {
    color: #66666699;
    font-size: 14px;
    position: relative;
    top: 15px;
  }
`;
const Top = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;
const CustomInput = styled.input`
  border: none;
  font-size: 16px;
  height: 17px;
  width: 100%;
  outline: none;
  color: #66666699;
`;
const Row = styled.div`
  display: flex;
  align-items: center;
  height: 46px;
  width: 100%;
  color: #66666699;
  border-bottom: 1px solid #66666699;
  span {
    font-size: 14px;
    min-width: 50px;
    padding: 16px 8px;
  }
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }
`;

const ButtonList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const SubmitButton = styled.button`
  color: #26cc9d;
  background-color: white;
  border: 1px solid #26cc9d;
  font-size: 16;
  padding: 17px 0px;
  width: 100%;
  border-radius: 30px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
`;
const InputWrapper = styled.div`
  display: flex;
`;
