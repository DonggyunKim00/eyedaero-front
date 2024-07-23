import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

interface SliderItem {
  id: number;
  title: string;
  imgSrc: string;
  nowShowing: number;
}

interface CustomSliderProps {
  items: SliderItem[];
  location: string | null; // 위치 정보를 prop으로 받음
  onRequestLocation: () => void; // 위치 요청 콜백 함수
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 20px;
`;

const SliderItem = styled.div`
  display: flex !important;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: #fff;
  width: 127px;
  cursor: pointer; /* 클릭 가능하도록 커서 변경 */
`;

const SliderImage = styled.div<{ src?: string }>`
  width: 126px; /* 포스터 너비 */
  height: 183px; /* 포스터 높이 */
  margin-bottom: 10px;
  background-color: ${({ src }) => (src ? 'transparent' : '#999')};
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  ${({ src }) => src && `background-image: url(${src});`}
  background-size: cover;
  background-position: center;
  border-radius: 5px;
`;

const SliderTitle = styled.h2`
  text-align: left;
  font-size: 16px;
  margin: 0;
  color: #666666;
  line-height: 1.2; /* 행간 조절 */
`;

const SliderDetail = styled.p`
  text-align: left;
  font-size: 14px;
  margin: 5px 0 0 0;
  color: #26cc9d;
`;

const CustomSlider: React.FC<CustomSliderProps> = ({ items, location, onRequestLocation }) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3, // 2개는 완전히 보이고 3번째는 2/3만 보이게
    slidesToScroll: 1,
    centerMode: false,
  };

  const handleImageClick = (title: string) => {
    if (location) {
      console.log(`검색 요청: ${title}, 위치: ${location}`); // 검색 요청을 처리하는 로직 추가
      // 예를 들어, API 호출을 통해 검색 결과를 가져오는 로직을 추가할 수 있습니다.
    } else {
      onRequestLocation();
    }
  };

  return (
    <Container>
      <Wrapper>
        <Slider {...settings}>
          {items.map((item) => (
            <SliderItem key={item.id} onClick={() => handleImageClick(item.title)}>
              <SliderImage src={item.imgSrc || ''}>
                {!item.imgSrc && <span>이미지 없음</span>}
              </SliderImage>
              <SliderTitle>{item.title}</SliderTitle>
              <SliderDetail>상영 중: {item.nowShowing}관</SliderDetail>
            </SliderItem>
          ))}
        </Slider>
      </Wrapper>
    </Container>
  );
};

export default CustomSlider;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 413px;
  box-sizing: border-box;
  padding-left:20px;
`;
