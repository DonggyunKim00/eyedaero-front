import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { css, keyframes } from 'styled-components';

const SplashScreen: React.FC = () => {
  const navigate = useNavigate();
  const images = ['/image/back1.png', '/image/back2.png', '/image/back3.png'];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3500); // Change image every 2 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const handleTextClick = () => {
    navigate('/main');
  };

  return (
    <Container>
      <LogoImage src='/image/miniLogo.png' alt="logo" />
      <ImagesWrapper>
        {[...images, ...images].map((image, index) => (
          <BackgroundImage 
            key={index} 
            src={image} 
            alt={`Background ${index + 1}`} 
            style={{
              opacity: index % images.length === currentImageIndex ? 1 : 0,
              transition: 'opacity 1s ease-in-out',
            }}
          />
        ))}
      </ImagesWrapper>
      <TextImage src='/image/text.png' alt="text" onClick={handleTextClick} />
      <Content></Content>
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

const ImagesWrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
`;

const BackgroundImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const LogoImage = styled.img`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 45px;
  height: auto;
  z-index: 1;
`;

const TextImage = styled.img`
  position: absolute;
  bottom: 72px;
  left: 33px;
  width: 200px;
  height: auto;
  cursor: pointer;
  z-index: 1;
`;

const Content = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
  color: white;
`;