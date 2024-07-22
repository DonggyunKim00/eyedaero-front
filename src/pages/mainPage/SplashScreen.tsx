import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import ResponsiveWrapper from '../../components/ResponsiveWrapper';
const SplashScreen: React.FC = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/main');
  };

  return (
    <Container>
      <BackgroundImage src='/image/splash.png' alt="Background" />

      <Content onClick={handleButtonClick}></Content>
    </Container>
  );
};

export default SplashScreen;

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

const BackgroundImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: contain;
  z-index: -2;
`;

const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  z-index: -1;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  color: white;
  cursor: pointer;
`;

const Title = styled.div`
  font-size: 24px;
  margin-bottom: 40px;
`;

const Button = styled.button`
  background-color: white;
  color: #26cc9d;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  display: flex;
  align-items: center;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

// 아이콘 import
