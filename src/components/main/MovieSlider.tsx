import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';

const movieItems = [
  {
    title: '데드풀과 울버린',
    detail: '615관',
    imgSrc: '', // 실제 이미지 경로로 변경 또는 비워둠
  },
  {
    title: '파일럿',
    detail: '570관',
    imgSrc: '', // 실제 이미지 경로로 변경 또는 비워둠
  },
  {
    title: '슈퍼배드 4',
    detail: '511관',
    imgSrc: '', // 실제 이미지 경로로 변경 또는 비워둠
  },
  // 필요한 만큼 영화 객체를 추가
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
      <Title>실시간 인기영화</Title>
      <Wrapper>
        <Slider {...settings}>
          {movieItems.map((item) => (
            <MoviePoster key={item.title} onClick={() => handleImageClick(item.title)}>
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

export default MovieSlider;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 393px;
  box-sizing: border-box;
`;
