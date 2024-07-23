import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import { FaWheelchair } from 'react-icons/fa';

const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const movieItems = [
  {
    title: '데드풀과 울버린',
    nowShowing: getRandomNumber(300, 600),
    imgSrc: '/movie/001.jpeg', // 실제 이미지 경로로 변경
  },
  {
    title: '파일럿',
    nowShowing: getRandomNumber(300, 600),
    imgSrc: '/movie/002.jpeg', // 실제 이미지 경로로 변경
  },
  {
    title: '슈퍼배드 4',
    nowShowing: getRandomNumber(300, 600),
    imgSrc: '/movie/003.jpeg', // 실제 이미지 경로로 변경
  },
  {
    title: '명탐정 코난',
    nowShowing: getRandomNumber(300, 600),
    imgSrc: '/movie/004.jpeg', // 실제 이미지 경로로 변경
  },
  {
    title: '탈주',
    nowShowing: getRandomNumber(300, 600),
    imgSrc: '/movie/005.jpeg', // 실제 이미지 경로로 변경
  },
  {
    title: '리볼버',
    nowShowing: getRandomNumber(300, 600),
    imgSrc: '/movie/006.jpeg', // 실제 이미지 경로로 변경
  },
  {
    title: '사랑의 하츄핑',
    nowShowing: getRandomNumber(300, 600),
    imgSrc: '/movie/007.jpeg', // 실제 이미지 경로로 변경
  },
  {
    title: '인사이드 아웃 2',
    nowShowing: getRandomNumber(300, 600),
    imgSrc: '/movie/008.jpeg', // 실제 이미지 경로로 변경
  },
  {
    title: '탈출',
    nowShowing: getRandomNumber(300, 600),
    imgSrc: '/movie/009.jpeg', // 실제 이미지 경로로 변경
  },
  {
    title: '다시 만나는 날',
    nowShowing: getRandomNumber(300, 600),
    imgSrc: '/movie/010.jpeg', // 실제 이미지 경로로 변경
  },
];

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 16px;

`;

const Title = styled.div`
  display: flex;
  color: #666666;
  font-weight: 500;
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
  cursor: pointer; /* 커서 포인터로 변경 */
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
  font-weight: 400;
  margin: 0;
  color: #666666;
`;

const MovieDetail = styled.p`
  text-align: left;
  font-size: 14px;
  margin: 5px 0 0 0;
  color: #26cc9d;
`;

const MovieSlider: React.FC = () => {
  const settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2.8, // 2개는 완전히 보이고 3번째는 2/3만 보이게
    slidesToScroll: 1,
    centerMode: false,
  };

  const handleImageClick = async (title: string) => {
    try {
      const response = await fetch(`YOUR_API_ENDPOINT?query=${title}`);
      const data = await response.json();
      console.log(data); // 요청 결과를 콘솔에 출력하거나 필요한 로직을 추가하세요.
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <Container>
      <Title>실시간 인기 영화</Title>
      <Wrapper>
        <Slider {...settings}>
          {movieItems.map((item) => (
            <MoviePoster
              key={item.title}
              onClick={() => handleImageClick(item.title)}
            >
              <MovieImage src={item.imgSrc || ''}>
                {!item.imgSrc && <span>이미지 없음</span>}
              </MovieImage>
              <MovieTitle>{item.title}</MovieTitle>
              <MovieDetail>
                현재 {item.nowShowing}관
                <FaWheelchair
                  style={{
                    marginLeft: '5px',
                    fontSize: '13px',
                    top: '2.25px',
                    position: 'relative',
                  }}
                />
              </MovieDetail>
            </MoviePoster>
          ))}
        </Slider>
      </Wrapper>
    </Container>
  );
};

export default MovieSlider;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 393px;
  box-sizing: border-box;
  margin-bottom: 2px;
  margin-top: 2px;
`;
