import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Select, { SingleValue } from 'react-select';
import { useLocation, useNavigate } from 'react-router-dom'; // React Router 훅을 가져옵니다.

import CustomSlider from '../../components/main/Slider'; // CustomSlider 컴포넌트를 가져옴
import Header from '../../components/common/Header';

interface LocationOption {
  label: string;
  value: string;
}

interface MovieData {
  id: number;
  name: string;
  imgSrc: string;
  nowShowing: number;
}

const getRandomNumber = (min: number, max: number) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const dummyData: MovieData[] = [
  { id: 1, name: '데드풀과 울버린', imgSrc: '/movie/001.jpeg', nowShowing: getRandomNumber(300, 600) },
  { id: 2, name: '파일럿', imgSrc: '/movie/002.jpeg', nowShowing: getRandomNumber(300, 600) },
  { id: 3, name: '슈퍼배드 4', imgSrc: '/movie/003.jpeg', nowShowing: getRandomNumber(300, 600) },
  { id: 4, name: '명탐정 코난', imgSrc: '/movie/004.jpeg', nowShowing: getRandomNumber(300, 600) },
  { id: 5, name: '탈주', imgSrc: '/movie/005.jpeg', nowShowing: getRandomNumber(300, 600) },
  { id: 6, name: '리볼버', imgSrc: '/movie/006.jpeg', nowShowing: getRandomNumber(300, 600) },
  { id: 7, name: '사랑의 하츄핑', imgSrc: '/movie/007.jpeg', nowShowing: getRandomNumber(300, 600) },
  { id: 8, name: '인사이드 아웃 2', imgSrc: '/movie/008.jpeg', nowShowing: getRandomNumber(300, 600) },
  { id: 9, name: '탈출', imgSrc: '/movie/009.jpeg', nowShowing: getRandomNumber(300, 600) },
  { id: 10, name: '다시 만나는 날', imgSrc: '/movie/010.jpeg', nowShowing: getRandomNumber(300, 600) },
];

const locations: LocationOption[] = [
  { label: '서울', value: '서울' },
  { label: '경기', value: '경기' },
  { label: '인천', value: '인천' },
  { label: '대전/충남/세종', value: '대전/충남/세종' },
  { label: '부산/대구/경상', value: '부산/대구/경상' },
  { label: '광주/전라', value: '광주/전라' },
  { label: '강원', value: '강원' },
  { label: '제주', value: '제주' },
];

const theaters: { [key: string]: MovieData[] } = {
  서울: [
    { id: 1, name: 'CGV 강남', imgSrc: '/movie/001.jpeg', nowShowing: getRandomNumber(300, 600) },
    { id: 2, name: 'CGV 강북', imgSrc: '/movie/002.jpeg', nowShowing: getRandomNumber(300, 600) },
  ],
  경기: [
    { id: 3, name: 'CGV 군자', imgSrc: '/movie/003.jpeg', nowShowing: getRandomNumber(300, 600) },
    { id: 4, name: 'CGV 더 부티크 목동운영점', imgSrc: '/movie/004.jpeg', nowShowing: getRandomNumber(300, 600) },
  ],
  인천: [
    { id: 5, name: 'CGV 홍대입구', imgSrc: '/movie/005.jpeg', nowShowing: getRandomNumber(300, 600) },
    { id: 6, name: 'CGV 미국', imgSrc: '/movie/006.jpeg', nowShowing: getRandomNumber(300, 600) },
  ],
  '대전/충남/세종': [
    { id: 7, name: 'CGV 목동', imgSrc: '/movie/007.jpeg', nowShowing: getRandomNumber(300, 600) },
    { id: 8, name: 'CGV 브로드웨이(신사)', imgSrc: '/movie/008.jpeg', nowShowing: getRandomNumber(300, 600) },
  ],
  '부산/대구/경상': [
    { id: 9, name: 'CGV 상봉', imgSrc: '/movie/009.jpeg', nowShowing: getRandomNumber(300, 600) },
    { id: 10, name: 'CGV 상영발전관경기장', imgSrc: '/movie/010.jpeg', nowShowing: getRandomNumber(300, 600) },
  ],
  '광주/전라': [
    { id: 11, name: 'CGV 상수', imgSrc: '/movie/001.jpeg', nowShowing: getRandomNumber(300, 600) },
  ],
  강원: [
    { id: 12, name: 'CGV 강릉', imgSrc: '/movie/002.jpeg', nowShowing: getRandomNumber(300, 600) },
    { id: 13, name: 'CGV 기린', imgSrc: '/movie/003.jpeg', nowShowing: getRandomNumber(300, 600) },
    { id: 14, name: 'CGV 원통', imgSrc: '/movie/004.jpeg', nowShowing: getRandomNumber(300, 600) },
    { id: 15, name: 'CGV 인제', imgSrc: '/movie/005.jpeg', nowShowing: getRandomNumber(300, 600) },
    { id: 16, name: 'CGV 춘천', imgSrc: '/movie/006.jpeg', nowShowing: getRandomNumber(300, 600) },
  ],
  제주: [
    { id: 17, name: 'CGV 제주', imgSrc: '/movie/007.jpeg', nowShowing: getRandomNumber(300, 600) },
  ],
};

const customSelectStyles = {
  control: (provided: any) => ({
    ...provided,
    borderRadius: '20px',
    border: 'none',
    boxShadow: 'none',
    '&:hover': {
      borderColor: '#aaa',
    },
  }),
  menu: (provided: any) => ({
    ...provided,
    borderRadius: '20px',
  }),
  singleValue: (provided: any) => ({
    ...provided,
    color: '#333',
  }),
};

const TheaterSearch: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedLocation, setSelectedLocation] = useState<SingleValue<LocationOption>>(null);
  const [searchResults, setSearchResults] = useState<MovieData[]>([]);
  const [showResults, setShowResults] = useState(false); // 결과 표시 여부

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get('query');
    if (query) {
      const results = dummyData.filter(item =>
        item.name.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(results);
      setShowResults(true);
    }
  }, [location.search]);

  const handleLocationChange = (selectedOption: SingleValue<LocationOption>) => {
    setSelectedLocation(selectedOption);
    if (selectedOption) {
      const results = theaters[selectedOption.value];
      setSearchResults(results);
      const params = new URLSearchParams(location.search);
      params.set('query', selectedOption.value);
      navigate({ search: params.toString() });
    } else {
      setSearchResults([]);
    }
  };

  const handleRequestLocation = () => {
    setShowResults(true); // 이미지 클릭 시 결과 표시
  };

  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const hideTimer = setTimeout(() => {
      setHidden(true);
    }, 1200); // 1.2초 후에 공간을 줄임

    return () => clearTimeout(hideTimer);
  }, []);

  const handleTheaterClick = (id: number) => {
    navigate(`/detail?id=${id}`);
  };

  // searchResults를 SliderItem 형식으로 변환
  const sliderItems = searchResults.map(item => ({
    id: item.id,
    title: item.name,
    imgSrc: item.imgSrc,
    nowShowing: item.nowShowing
  }));

  return (
    <Container>
      <Header hidden={hidden} slideUp={false} />
      <CustomSlider
        items={sliderItems}
        location={selectedLocation ? selectedLocation.value : null}
        onRequestLocation={handleRequestLocation}
      />
      {showResults && (
        <AnimatedResultsContainer>
          <Title>극장 목록</Title>
          <SelectContainer>
            <Select
              options={locations}
              value={selectedLocation}
              onChange={handleLocationChange}
              placeholder="지역을 선택하세요"
              styles={customSelectStyles} // 커스텀 스타일 적용
            />
          </SelectContainer>
          <TheaterGrid>
            {searchResults.length > 0 ? (
              searchResults.map((theater) => (
                <TheaterItem
                  key={theater.id}
                  onClick={() => handleTheaterClick(theater.id)}
                >
                  <TheaterLogo src={theater.imgSrc} alt="로고" />
                  <TheaterName>{theater.name}</TheaterName>
                </TheaterItem>
              ))
            ) : (
              <NoResults>검색 결과가 없습니다.</NoResults>
            )}
          </TheaterGrid>
        </AnimatedResultsContainer>
      )}
    </Container>
  );
};

export default TheaterSearch;





const slideUp = keyframes`
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const Container = styled.div`
  width: 100%;
  max-width: 600px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SelectContainer = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 20px 0;
`;

const ResultsContainer = styled.div`
  width: 100%;
  max-width: 400px;
  background-color: #f7f7f7;
  height: 300px;
  padding: 20px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  margin-top: 20px;
  box-shadow: 0px -1px 5px rgba(0, 0, 0, 0.1);

`;

const AnimatedResultsContainer = styled(ResultsContainer)`
  animation: ${slideUp} 0.5s ease-out;
`;

const Title = styled.h2`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #666666;
`;

const TheaterGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

const TheaterItem = styled.div`
  width: 80px;
  height: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 10px;
`;

const TheaterLogo = styled.img`
  width: 60px;
  height: 60px;
  padding: 20px;

  background-color: #d2d2d259;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
`;

const TheaterName = styled.div`
  margin-top: 10px;
  font-size: 14px;
  color: #333;
  text-align: center;
`;

const ResultItem = styled.div`
  padding: 10px;
  border-bottom: 1px solid #ddd;
`;

const NoResults = styled.div`
  padding: 10px;
  color: #999;
  text-align: center;
`;
