import React, { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import Select, { SingleValue } from 'react-select';

import CustomSlider from '../../components/main/Slider'; // CustomSlider 컴포넌트를 가져옴
import Header from '../../components/common/Header';

interface LocationOption {
  label: string;
  value: string;
}

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

const theaters: { [key: string]: string[] } = {
  서울: ['CGV 강남', 'CGV 강북'],
  경기: ['CGV 군자', 'CGV 더 부티크 목동운영점'],
  인천: ['CGV 홍대입구', 'CGV 미국'],
  '대전/충남/세종': ['CGV 목동', 'CGV 브로드웨이(신사)'],
  '부산/대구/경상': ['CGV 상봉', 'CGV 상영발전관경기장'],
  '광주/전라': ['CGV 상수'],
  강원: ['CGV 강릉', 'CGV 기린', 'CGV 원통', 'CGV 인제', 'CGV 춘천'],
  제주: ['CGV 제주'],
};

const sliderItems = [
  {
    title: '아이템1',
    detail: '디테일1',
    imgSrc: '', // 실제 이미지 경로로 변경 또는 비워둠
  },
  {
    title: '아이템2',
    detail: '디테일2',
    imgSrc: '', // 실제 이미지 경로로 변경 또는 비워둠
  },
  {
    title: '아이템3',
    detail: '디테일3',
    imgSrc: '', // 실제 이미지 경로로 변경 또는 비워둠
  },
  // 필요한 만큼 객체를 추가
];

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
  const [selectedLocation, setSelectedLocation] = useState<SingleValue<LocationOption>>(null);
  const [searchResults, setSearchResults] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false); // 결과 표시 여부

  const handleLocationChange = (selectedOption: SingleValue<LocationOption>) => {
    setSelectedLocation(selectedOption);
    if (selectedOption) {
      setSearchResults(theaters[selectedOption.value]);
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
              searchResults.map((theater, index) => (
                <TheaterItem key={index}>
                  <TheaterLogo src="/path/to/logo.png" alt="로고" /> {/* 실제 로고 경로로 변경 */}
                  <TheaterName>{theater}</TheaterName>
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
  background-color: #66666610;
  height: 100%;
  padding: 20px;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  margin-top: 20px;
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
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 10px;
`;

const TheaterLogo = styled.img`
  width: 40px;
  height: 40px;
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
