import React, { useState } from 'react';
import { css, styled } from 'styled-components';
import PortalWrapper from '../../../components/common/PortalWrapper';
import useReviewModalState from '../../../store/modal/review';
import ScoreSelector from './ScoreSelector';

const ReviewModal = () => {
  const { close } = useReviewModalState();
  const [isActive, setIsActive] = useState<boolean>(false);

  return (
    <PortalWrapper>
      <Container>
        <Head>
          <CloseButton onClick={close}>
            <img src="/svg/Close.svg" />
          </CloseButton>
        </Head>

        <SelectRating>
          <ScoreSelector data={4.0} readonly={true} />
          <Info>
            <ReadRate>4.0</ReadRate>
            <TotalReview>(43개)</TotalReview>
          </Info>
          <TheaterInfo>CGV 인제 2관</TheaterInfo>
        </SelectRating>

        <ModalBottom>
          {isActive ? (
            <GrowForm>
              <ScoreSelector data={0} readonly={false} />
              <FormBottom>
                <textarea placeholder="글을 작성해주세요." />
                <Buttons>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      setIsActive(false);
                    }}
                  >
                    취소
                  </button>
                  <button type="submit">확인</button>
                </Buttons>
              </FormBottom>
            </GrowForm>
          ) : (
            <ReviewAddButton onClick={() => setIsActive(true)}>
              <img src="/svg/Plus.svg" />
              <span>작성하기</span>
            </ReviewAddButton>
          )}

          <ReviewList>
            <Review />
          </ReviewList>
        </ModalBottom>
      </Container>
    </PortalWrapper>
  );
};

export default ReviewModal;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 353px;
  min-height: 470px;
  max-height: 581px;
  background-color: white;
  border-radius: 15px;
  padding: 23px;
  box-sizing: border-box;
`;

const CloseButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 25px;
  height: 25px;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

const Head = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

const SelectRating = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  width: 100%;
  margin: 20px 0px 33px;
`;
const Info = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;
const ReadRate = styled.span`
  font-size: 18px;
  font-weight: 500;
  color: #26cc9d;
  margin: 12px 0px 20px;
`;
const TotalReview = styled.span`
  font-size: 12px;
  color: #66666666;
  position: absolute;
  top: 15px;
  left: 30px;
  width: 50px;
`;
const TheaterInfo = styled.span`
  color: #666666bf;
`;

const ReviewAddButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  width: 100%;
  padding: 14.5px 0px;
  border: none;
  border-radius: 15px;
  font-weight: 600;
  font-size: 18px;
  color: #26cc9d;
  background-color: #26cc9d1a;
  cursor: pointer;
  span {
    line-height: 26px;
  }
`;
const ModalBottom = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const GrowForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 100%;
  background-color: #26cc9d1a;
  padding: 25px 18px 15px;
  box-sizing: border-box;
  textarea {
    width: 100%;
    min-height: 80px;
    border: none;
    background-color: white;
    border-radius: 10px;
    padding: 10px;
    box-sizing: border-box;
  }
  button {
    width: 48px;
    height: 28px;
    color: #26cc9d;
    background-color: white;
    border: none;
    border-radius: 50px;
  }
`;
const FormBottom = styled.div`
  display: flex;
  flex-direction: column;
`;
const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 5px;
  margin-top: 10px;
`;

const ReviewList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

const Review = styled.div``;
