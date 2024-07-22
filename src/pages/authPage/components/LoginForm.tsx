import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { styled } from 'styled-components';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [show, setShow] = useState<boolean>(false);
  return (
    <Container onSubmit={handleSubmit((data) => console.log(data))}>
      <Top>
        <Row>
          <span>이메일</span>
          <CustomInput {...register('email')} />
        </Row>
        <Row>
          <span>비밀번호</span>
          <CustomInput
            type={show ? 'text' : 'password'}
            {...register('password')}
          />
          <button type="button" onClick={() => setShow((prev) => !prev)}>
            <img src={show ? '/svg/ShowEye.svg' : '/svg/Eye.svg'} />
          </button>
        </Row>
      </Top>

      <ButtonList>
        <LoginButton type="submit">로그인</LoginButton>
        <SignupButton>회원가입</SignupButton>
      </ButtonList>
    </Container>
  );
};
export default LoginForm;

const Container = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  gap: 17px;
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
  border-bottom: 1px solid #66666699;
  color: #66666699;
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

const LoginButton = styled.button`
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

const SignupButton = styled.button`
  display: flex;
  justify-content: center;
  background-color: transparent;
  color: #26cc9d;
  border: none;
  font-size: 16px;
  font-weight: 500;
  width: 100%;
`;
