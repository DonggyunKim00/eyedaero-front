import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

const concertItems = [
  {
    title: '뮤지컬 <킹키부츠>',
    imgSrc: '/concert/001.gif', // 실제 이미지 경로로 변경
  },
  {
    title: 'SEVENTEEN in CARATLAND 2024',
    imgSrc: '/concert/002.gif', // 실제 이미지 경로로 변경
  },
  {
    title: '뮤지컬 <프랑켄슈타인>',
    imgSrc: '/concert/003.gif', // 실제 이미지 경로로 변경
  },
  {
    title: '뮤지컬 <영웅>',
    imgSrc: '/concert/004.gif', // 실제 이미지 경로로 변경
  },
  {
    title: '뮤지컬 <하데스 타운>',
    imgSrc: '/concert/005.gif', // 실제 이미지 경로로 변경
  },
  {
    title: '김태우와 하고 싶은 말',
    imgSrc: '/concert/006.gif', // 실제 이미지 경로로 변경
  },
  {
    title: '뮤지컬 <시카고>',
    imgSrc: '/concert/007.gif', // 실제 이미지 경로로 변경
  },
  {
    title: '뮤지컬 <베르사유의 장미>',
    imgSrc: '/concert/008.gif', // 실제 이미지 경로로 변경
  },
  {
    title: '뮤지컬 <맥베스>',
    imgSrc: '/concert/009.gif', // 실제 이미지 경로로 변경
  },
  {
    title: '2024 싸이 흠뻑쇼 <SUMMER SWAG> 2024 INCHEON',
    imgSrc: '/concert/010.gif', // 실제 이미지 경로로 변경
  },
];

const venues = [
  '고척스카이돔',
  '블루스퀘어 신한카드홀',
  '세종문화회관 대극장',
  '샤롯데씨어터',
  '충무아트센터 대극장',
  '국립극장 해오름극장',
  '성남아트센터 오페라하우스',
  '디큐브 링크아트센터',
  '인천 인스파이어아레나',
];

const getRandomVenue = () => {
  return venues[Math.floor(Math.random() * venues.length)];
};

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 16px;
`;

const Title = styled.div`
  display: flex;
  color: #666666;
  font-size: 18px;
  font-weight: 500;
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
  font-weight: 400;
  margin: 0;
  width: 126px;
  color: #666666;
  line-height: 1.3;
`;

const ConcertDetail = styled.p`
  text-align: left;
  width: 126px;
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
          {concertItems.map((item, index) => (
            <ConcertPoster key={index}>
              <ConcertImage src={item.imgSrc || ''}>
                {!item.imgSrc && <span>이미지 없음</span>}
              </ConcertImage>
              <ConcertTitle>{item.title}</ConcertTitle>
              <ConcertDetail>{getRandomVenue()}</ConcertDetail>
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
