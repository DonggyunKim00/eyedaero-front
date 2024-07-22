import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

const concertItems = [
  {
    title: '공연1',
    detail: '상영관 이름1',
    imgSrc: '', // 실제 이미지 경로로 변경 또는 비워둠
  },
  {
    title: '공연2',
    detail: '상영관 이름2',
    imgSrc: '', // 실제 이미지 경로로 변경 또는 비워둠
  },
  {
    title: '공연3',
    detail: '상영관 이름3',
    imgSrc: '', // 실제 이미지 경로로 변경 또는 비워둠
  },
  // 필요한 만큼 공연 객체를 추가
];

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

const ConcertPoster = styled.div`
  display: flex !important;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  background-color: #fff;
  width: 127px;
`;

const ConcertImage = styled.div<{ src?: string }>`
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

const ConcertTitle = styled.h2`
  text-align: left;
  font-size: 16px;
  margin: 0;
  color: #666666;
`;

const ConcertDetail = styled.p`
  text-align: left;
  font-size: 14px;
  margin: 5px 0 0 0;
  color: #26cc9d;
`;

const ConcertSlider: React.FC = () => {
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
      <Title>실시간 인기 공연</Title>
      <Wrapper>
        <Slider {...settings}>
          {concertItems.map((item) => (
            <ConcertPoster key={item.title}>
              <ConcertImage src={item.imgSrc || ''}>
                {!item.imgSrc && <span>이미지 없음</span>}
              </ConcertImage>
              <ConcertTitle>{item.title}</ConcertTitle>
              <ConcertDetail>{item.detail}</ConcertDetail>
            </ConcertPoster>
          ))}
        </Slider>
      </Wrapper>
    </Container>
  );
};

export default ConcertSlider;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 393px;
  box-sizing: border-box;
`;
