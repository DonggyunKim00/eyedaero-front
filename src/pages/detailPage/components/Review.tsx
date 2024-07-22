import React from 'react';
import { styled } from 'styled-components';

const Review = ({ ...props }) => {
  const { name, rate, time, content, likenum } = props;
  return (
    <Container>
      <ProfileDiv>
        <img src="/svg/Profile.svg" />
      </ProfileDiv>
      <Right>
        <Top>
          <Left>
            <Name>{name}</Name>
            <Rating>★ {rate}</Rating>
          </Left>
          <Time>{time}</Time>
        </Top>
        <Bottom>
          <Content>{content}</Content>
          <LikeDiv>
            <img src="/svg/Like.svg" />
            <span>{likenum}</span>
          </LikeDiv>
        </Bottom>
      </Right>
    </Container>
  );
};

export default Review;

const Container = styled.div`
  display: flex;
  background-color: #6666660d;
  width: 100%;
  min-height: 140px;
  padding: 19px 12px;
  box-sizing: border-box;
  border-radius: 15px;
`;
const Top = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;
const Left = styled.div`
  display: flex;
  gap: 4px;
  margin: 4px 0px;
`;
const Right = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;
const ProfileDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
`;
const Name = styled.span`
  font-size: 14px;
  color: #666666bf;
  font-weight: 600;
`;
const Rating = styled.span`
  font-size: 10px;
  color: #26cc9d;
`;
const Time = styled.span`
  font-size: 10px;
  color: #66666666;
`;
const Content = styled.p`
  color: #666666bf;
  margin: 0px;
  font-size: 14px;
`;
const LikeDiv = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  span {
    font-size: 10px;
    color: #66666666;
    margin-bottom: 2px;
  }
`;
const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`;
