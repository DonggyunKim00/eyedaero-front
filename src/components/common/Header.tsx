import React from 'react';
import styled, { keyframes, css } from 'styled-components';
import { FaWheelchair } from 'react-icons/fa'; // Font Awesome 아이콘 사용


interface HeaderProps {
  slideUp: boolean;
  hidden: boolean;
}

const Header: React.FC<HeaderProps> = ({ hidden }) => {
  return (
    <Container hidden={hidden}>
      <HeaderContainer>
        <Box>
          <Title>함께, 보다 나은 극장 경험</Title>
          <Logo src="/image/logoo.png"></Logo>
        </Box>
        <Box2>
          <SearchBarContainer>
            <SearchBar placeholder="어떤 작품을 보러 갈 예정이신가요?" />
            <IconContainer>
              <FaWheelchair />
            </IconContainer>
          </SearchBarContainer>
          <Icon src='/image/h.png' />
        </Box2>
      </HeaderContainer>
    </Container>
  );
};

export default Header;

const Container = styled.div<{ hidden: boolean }>`
  width: 100%;
  display: flex;
  justify-content: center;
  transition: margin-top 1s ease-in-out;
  ${({ hidden }) =>
    hidden &&
    css`
      margin-top: -180px; /* 헤더 높이를 감안한 값 */
    `}
`;

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 600px; /* 최대 너비를 설정하여 중앙에 정렬 */
  background-color: #26cc9d; /* 상단 배경색 */
  height: 260px;
  padding: 20px;
  align-items: center;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  box-sizing: border-box;
  transition: transform 1s ease-in-out;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 0 10px;
  overflow: hidden; /* 내부 요소가 넘치지 않도록 설정 */
`;

const Box2 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 0 10px;
  overflow: hidden; /* 내부 요소가 넘치지 않도록 설정 */
`;

const Icon = styled.img`
  width: 18px;
  height: 18px;
  margin-left:18px;
`;

const Title = styled.div`
  font-size: 16px;
  color: white;
  margin-bottom: 20px;
  margin-top: 32px;
  text-align: center;
  margin-left: 10px;
`;

const Logo = styled.img`
  font-size: 48px;
  color: white;
  margin-bottom: 20px;
  text-align: center;
  width: 90px;
  height: 90px;
`;

const SearchBarContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  overflow: hidden; /* 내부 요소가 넘치지 않도록 설정 */
`;

const SearchBar = styled.input`
  width: 100%;
  padding: 10px 15px;
  border: none;
  font-size: 14px;
  outline: none;
`;

const IconContainer = styled.div`
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #26cc9d;
`;
