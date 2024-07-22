import React from 'react';
import { styled } from 'styled-components';
import ResponsiveWrapper from '../../components/ResponsiveWrapper';
import LoginForm from './components/LoginForm';

const AuthPage = () => {
  return (
    <ResponsiveWrapper>
      <Container>
        <Header>
          <img src="/svg/Back.svg" />
          <span>로그인</span>
        </Header>
        <Content>
          <LoginForm />
        </Content>
      </Container>
    </ResponsiveWrapper>
  );
};

export default AuthPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
const Header = styled.div`
  padding: 0px 11px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  gap: 12px;
  width: 100%;
  height: 110px;
  background-color: #26cc9d;
  color: white;
  font-weight: 700;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
  padding: 0px 21px 44px;
`;
