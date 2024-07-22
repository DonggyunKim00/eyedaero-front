import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

interface SliderItem {
  title: string;
  detail: string; // 영화에서는 theaters, 공연에서는 상영관 이름
  imgSrc: string;
}

interface SliderProps {
  title: string;
  items: SliderItem[];
}

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 20px;

`;

const Title = styled.div`
  display: flex;
  color: #666666;
  font-size: 18px;
  margin-top: 20px;
  padding: 0 10px;
`;

const MoviePoster = styled.div`
  display: flex !important;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: #fff;
  width: 127px;
`;

const MovieImage = styled.div<{ src?: string }>`
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

const MovieTitle = styled.h2`
  text-align: left;
  font-size: 16px;
  margin: 0;
  color: #666666;
`;

const MovieDetail = styled.p`
  text-align: left;
  font-size: 14px;
  margin: 5px 0 0 0;
  color: #26cc9d;
`;

const CustomSlider: React.FC<SliderProps> = ({ title, items }) => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2.8, // 2개는 완전히 보이고 3번째는 2/3만 보이게
    slidesToScroll: 1,
    centerMode: false,
  };

  return (
    <Container>
      {title && <Title>{title}</Title>}
      <Wrapper>
        <Slider {...settings}>
          {items.map((item) => (
            <MoviePoster key={item.title}>
              <MovieImage src={item.imgSrc || ''}>
                {!item.imgSrc && <span>이미지 없음</span>}
              </MovieImage>
              <MovieTitle>{item.title}</MovieTitle>
              <MovieDetail>{item.detail}</MovieDetail>
            </MoviePoster>
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
  width: 393px;
  box-sizing: border-box;
`;
