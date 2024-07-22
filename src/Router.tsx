import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Main from './pages/mainPage/Main';
import Header from './components/common/Header';
import TheaterSearch from './pages/TheaterSearch/TheaterSearch';
import SplashScreen from './pages/mainPage/SplashScreen';
import DetailPage from './pages/detailPage';
import AuthPage from './pages/authPage';

function Router() {
  return (
    <Layout>
      <BrowserRouter>
        {/* <HeaderWrapper /> */}
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="/main" element={<Main />} />
          <Route path="/list" element={<TheaterSearch />} />
          <Route path="/detail" element={<DetailPage />} />
          <Route path="/auth" element={<AuthPage />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

const HeaderWrapper: React.FC = () => {
  const location = useLocation();
  const [slideUp, setSlideUp] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    if (location.pathname === '/list') {
      const hideTimer = setTimeout(() => {
        setHidden(true);
      }, 1000); // 1초 후에 공간을 줄임
      return () => clearTimeout(hideTimer);
    } else {
      setSlideUp(false);
      setHidden(false);
    }
  }, [location.pathname]);

  return <Header slideUp={slideUp} hidden={hidden} />;
};

export default Router;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  box-sizing: border-box;
  @media screen and (min-width: 1280px) {
    min-width: 1280px;
  }
  @media screen and (max-width: 1279px) and (min-width: 1024px) {
    min-width: 1024px;
  }
  @media screen and (max-width: 1023px) and (min-width: 426px) {
    min-width: 425px;
  }
  @media screen and (max-width: 393px) {
    width: 393px;
  }
`;
