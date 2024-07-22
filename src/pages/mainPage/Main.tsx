import React from 'react';
import { Swipeable } from 'react-swipeable';
import Header from "../../components/common/Header";
import ResponsiveWrapper from "../../components/ResponsiveWrapper";

// 이미지 URL 배열
const images = [
  "image_url_1",
  "image_url_2",
  "image_url_3",
  "image_url_4"
];

function Main() {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handleSwipedLeft = () => {
    setCurrentIndex((prevIndex: number) => (prevIndex + 1) % images.length);
  };

  const handleSwipedRight = () => {
    setCurrentIndex((prevIndex: number) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <ResponsiveWrapper>
      <Header />
      <Swipeable onSwipedLeft={handleSwipedLeft} onSwipedRight={handleSwipedRight}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
          <img
            src={images[currentIndex]}
            alt={`slide-${currentIndex}`}
            style={{ width: '300px', height: 'auto' }}
          />
        </div>
      </Swipeable>
    </ResponsiveWrapper>
  );
}

export default Main;
