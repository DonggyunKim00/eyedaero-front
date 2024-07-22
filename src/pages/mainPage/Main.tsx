import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

import Header from '../../components/common/Header';

import MovieSlider from '../../components/main/MovieSlider';
import ConcertSlider from '../../components/main/ConcertSlider';

const Main: React.FC = () => {
  const [hidden, setHidden] = useState(false);



  return (
    <Container>
      <Header hidden={hidden} slideUp={false} />
      <MovieSlider />
      <ConcertSlider />
    </Container>
  );
};

export default Main;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  box-sizing: border-box;
`;
