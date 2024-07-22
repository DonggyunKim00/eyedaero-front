import styled from 'styled-components';
import ResponsiveWrapper from '../ResponsiveWrapper';

function Header() {
  return (
    <ResponsiveWrapper>
      <HeaderContainer>ㅇㅇㄷㄹ</HeaderContainer>
    </ResponsiveWrapper>
  );
}

export default Header;

const HeaderContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: red;
`;
