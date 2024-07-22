import React from 'react';
import styled from 'styled-components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './pages/mainPage/Main';
import Header from './components/common/Header';

function Router() {
  return (
    <Layout>
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/detail" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  );
}

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
  @media screen and (max-width: 425px) {
    width: 425px;
  }
`;
