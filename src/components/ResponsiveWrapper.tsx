import { ReactNode } from "react";
import styled from "styled-components";

function ResponsiveWrapper({ children }: { children: ReactNode }) {
  return <Wrapper>{children}</Wrapper>;
}

export default ResponsiveWrapper;

// 각 페이지들의 width 값을 동일하게 유지하기 위한 ResponsiveWrapper 컴포넌트
const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  box-sizing:border-box;
  /* border: 1px solid black; */
  @media screen and (min-width: 1280px) {
    width: 1280px;
    padding: 0 60px;
  }
  @media screen and (max-width: 1279px) and (min-width: 1024px) {
    width: 1024px;
    padding: 0 45px;
  }
  @media screen and (max-width: 1023px) {
    width: 393px;
    padding: 0 20px;
  }
`;
