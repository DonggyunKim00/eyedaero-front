import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import { FaWheelchair } from 'react-icons/fa'; // Font Awesome 아이콘 사용
import { useNavigate } from 'react-router-dom';

interface HeaderProps {
  slideUp: boolean;
  hidden: boolean;
}

const dummyData = [
  { id: 1, name: '데드풀과 울버린' },
  { id: 2, name: '파일럿' },
  { id: 3, name: '슈퍼배드 4' },
  { id: 4, name: '명탐정 코난' },
  { id: 5, name: '탈주' },
  { id: 6, name: '리볼버' },
  { id: 7, name: '사랑의 하츄핑' },
  { id: 8, name: '인사이드 아웃 2' },
  { id: 9, name: '탈출' },
  { id: 10, name: '다시 만나는 날' },
];

const Header: React.FC<HeaderProps> = ({ hidden }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasMenuBeenToggled, setHasMenuBeenToggled] = useState(false);
  const [searchQuery, setSearchQuery] = useState(''); // 검색어 상태 추가
  const navigate = useNavigate();

  const handleMenuItemClick = () => {
    navigate('/auth');
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setHasMenuBeenToggled(true);
  };

  const handleSearch = () => {
    if (searchQuery.length > 0) {
      navigate(`/list?query=${encodeURIComponent(searchQuery)}`);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <Container hidden={hidden}>
      <HeaderContainer>
        <Box>
          <Title>함께, 보다 나은 극장 경험</Title>
          <Logo src="/image/logoo.png"></Logo>
        </Box>
        <Box2>
          <SearchBarContainer>
            <SearchBar 
              placeholder="어떤 작품을 보러 갈 예정이신가요?" 
              value={searchQuery} 
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyPress={handleKeyPress}
            />
            <IconContainer onClick={handleSearch}>
              <FaWheelchair />
            </IconContainer>
          </SearchBarContainer>
          <HamburgerIcon src="/image/h.png" onClick={toggleMenu} />
        </Box2>
      </HeaderContainer>
      <SideMenu isOpen={isMenuOpen} hasToggled={hasMenuBeenToggled}>
        <Box3>
          <Logo
            style={{ width: '48px', height: '48px', margin: 0 }}
            src="/image/logoo.png"
          />
          <CloseButton src="/image/x.png" onClick={toggleMenu} />
        </Box3>
        <MenuItem onClick={handleMenuItemClick}>로그인</MenuItem>
        <MenuItem onClick={handleMenuItemClick}>로그아웃</MenuItem>
      </SideMenu>
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

const Box3 = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  padding: 0 10px;
  overflow: hidden; /* 내부 요소가 넘치지 않도록 설정 */
  justify-content: space-between;
  margin: 20px 0;
`;

const HamburgerIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-left: 18px;
  cursor: pointer;
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
  cursor: pointer;
`;

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`;

const SideMenu = styled.div<{ isOpen: boolean; hasToggled: boolean }>`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 250px;
  background-color: rgba(38, 204, 157, 0.55); /* 반투명 배경 */
  backdrop-filter: blur(10px); /* 가우시안 블러 */
  box-shadow: -2px 0 5px rgba(0, 0, 0, 0.1);
  transform: translateX(${(props) => (props.isOpen ? '0' : '100%')});
  transition: transform 0.3s ease-in-out;
  z-index: 1000;
  ${({ isOpen, hasToggled }) =>
    hasToggled &&
    css`
      ${isOpen
        ? css`
            animation: ${slideIn} 0.3s forwards;
          `
        : css`
            animation: ${slideOut} 0.3s forwards;
          `}
    `}
`;

const CloseButton = styled.img`
  align-self: flex-end;
  font-size: 29px;
  width: 29px;
  padding: 10px;
  margin-right: 10px;
`;

const MenuItem = styled.div`
  padding: 15px 20px;
  color: #ffffff;
  cursor: pointer;
  &:hover {
    background-color: #f2f2f2;
  }
`;

const SearchResultsContainer = styled.div`
  position: absolute;
  top: 60px;
  left: 0;
  right: 0;
  background: white;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  padding: 10px;
`;

const SearchResultItem = styled.div`
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: #f2f2f2;
  }
`;
