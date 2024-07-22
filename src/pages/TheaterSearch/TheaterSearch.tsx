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
const theaters: { [key: string]: { id: string; name: string }[] } = {
  서울: [
    { id: '1', name: 'CGV 강남' },
    { id: '2', name: 'CGV 강북' },
  ],
  경기: [
    { id: '3', name: 'CGV 군자' },
    { id: '4', name: 'CGV 더 부티크 목동운영점' },
  ],
  인천: [
    { id: '5', name: 'CGV 홍대입구' },
    { id: '6', name: 'CGV 미국' },
  ],
  '대전/충남/세종': [
    { id: '7', name: 'CGV 목동' },
    { id: '8', name: 'CGV 브로드웨이(신사)' },
  ],
  '부산/대구/경상': [
    { id: '9', name: 'CGV 상봉' },
    { id: '10', name: 'CGV 상영발전관경기장' },
  ],
  '광주/전라': [{ id: '11', name: 'CGV 상수' }],
  강원: [
    { id: '12', name: 'CGV 강릉' },
    { id: '13', name: 'CGV 기린' },
    { id: '14', name: 'CGV 원통' },
    { id: '15', name: 'CGV 인제' },
    { id: '16', name: 'CGV 춘천' },
  ],
  제주: [{ id: '17', name: 'CGV 제주' }],
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
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedLocation, setSelectedLocation] =
    useState<SingleValue<LocationOption>>(null);
  const [searchResults, setSearchResults] = useState<{ id: string; name: string }[]>([]);
  const [showResults, setShowResults] = useState(false); // 결과 표시 여부

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const initialQuery = params.get('query');
    if (initialQuery) {
      // API 호출 등을 통해 초기 검색 결과를 설정합니다.
      setSearchResults(theaters[initialQuery] || []);
      setShowResults(true);
    }
  }, [location.search]);

  const handleLocationChange = (
    selectedOption: SingleValue<LocationOption>,
  ) => {
    setSelectedLocation(selectedOption);
    if (selectedOption) {
      setSearchResults(theaters[selectedOption.value] || []);
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

  const handleTheaterClick = (id: string) => {
    navigate(`/detail?id=${id}`);
  };

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
                  <TheaterLogo src="/path/to/logo.png" alt="로고" />
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
  background-color: #66666610;
  height: 300px;
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
