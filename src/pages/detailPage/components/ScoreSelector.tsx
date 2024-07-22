import React, { useState } from 'react';
import styled from 'styled-components';

interface props {
  data: number;
  readonly: boolean;
}

const ReviewScore = ({ ...props }: props) => {
  const [score, setScore] = useState<number>(0);

  const handleClick = (value: number) => {
    if (!props.readonly) {
      setScore(value);
    }
  };

  if (props.readonly) {
    return (
      <StarContainer>
        {[...Array(5)].map((_, index) =>
          props.data - index >= 1 ? (
            <IconWrap key={index} readOnly={props.readonly}>
              <IconHalfWrap
                readOnly={props.readonly}
                key={`half${index}`}
                onClick={() => handleClick(index + 0.5)}
              />
              <IconFullWrap
                readOnly={props.readonly}
                key={`full${index}`}
                onClick={() => handleClick(index + 1)}
              />
              <img src="/svg/ScoreStar.svg" width={43} height={43} />
            </IconWrap>
          ) : props.data - index === 0.5 ? (
            <IconWrap key={index} readOnly={props.readonly}>
              <IconHalfWrap
                readOnly={props.readonly}
                key={`half${index}`}
                onClick={() => handleClick(index + 0.5)}
              >
                <img src="/svg/ScoreStarHalf.svg" width={21.5} height={43} />
              </IconHalfWrap>
              <IconFullWrap
                readOnly={props.readonly}
                key={`full${index}`}
                onClick={() => handleClick(index + 1)}
              />
              <img src="/svg/ScoreStarEmpty.svg" width={43} height={43} />
            </IconWrap>
          ) : (
            <IconWrap key={index} readOnly={props.readonly}>
              <IconHalfWrap
                readOnly={props.readonly}
                key={`half${index}`}
                onClick={() => handleClick(index + 0.5)}
              />
              <img src="/svg/ScoreStarEmpty.svg" width={43} height={43} />
              <IconFullWrap
                readOnly={props.readonly}
                key={`full${index}`}
                onClick={() => handleClick(index + 1)}
              />
            </IconWrap>
          ),
        )}
      </StarContainer>
    );
  } else
    return (
      <StarContainer>
        {[...Array(5)].map((_, index) =>
          score - index >= 1 ? (
            <IconWrap key={index} readOnly={props.readonly}>
              <IconHalfWrap
                readOnly={props.readonly}
                key={`half${index}`}
                onClick={() => handleClick(index + 0.5)}
              />
              <IconFullWrap
                readOnly={props.readonly}
                key={`full${index}`}
                onClick={() => handleClick(index + 1)}
              />
              <img src="/svg/ScoreStar.svg" width={30} height={30} />
            </IconWrap>
          ) : score - index === 0.5 ? (
            <IconWrap key={index} readOnly={props.readonly}>
              <IconHalfWrap
                readOnly={props.readonly}
                key={`half${index}`}
                onClick={() => handleClick(index + 0.5)}
              >
                <img src="/svg/ScoreStarHalf.svg" width={15} height={30} />
              </IconHalfWrap>
              <IconFullWrap
                readOnly={props.readonly}
                key={`full${index}`}
                onClick={() => handleClick(index + 1)}
              />
              <img src="/svg/ScoreStarEmpty.svg" width={30} height={30} />
            </IconWrap>
          ) : (
            <IconWrap key={index} readOnly={props.readonly}>
              <IconHalfWrap
                readOnly={props.readonly}
                key={`half${index}`}
                onClick={() => handleClick(index + 0.5)}
              />
              <img src="/svg/ScoreStarEmpty.svg" width={30} height={30} />
              <IconFullWrap
                readOnly={props.readonly}
                key={`full${index}`}
                onClick={() => handleClick(index + 1)}
              />
            </IconWrap>
          ),
        )}
      </StarContainer>
    );
};

export default ReviewScore;

const StarContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 6px;
  justify-content: center;
`;

const IconWrap = styled.div<{ readOnly: boolean }>`
  width: ${({ readOnly }) => (readOnly ? '43px' : '30px')};
  height: ${({ readOnly }) => (readOnly ? '43px' : '30px')};
  position: relative;
`;

const IconHalfWrap = styled.div<{ readOnly: boolean }>`
  width: ${({ readOnly }) => (readOnly ? '21.5px' : '15px')};
  height: ${({ readOnly }) => (readOnly ? '43px' : '30px')};
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  cursor: ${({ readOnly }) => !readOnly && 'pointer'};
`;
const IconFullWrap = styled.div<{ readOnly: boolean }>`
  width: ${({ readOnly }) => (readOnly ? '21.5px' : '15px')};
  height: ${({ readOnly }) => (readOnly ? '43px' : '30px')};
  position: absolute;
  top: 0;
  right: 0;
  z-index: 10;
  cursor: ${({ readOnly }) => !readOnly && 'pointer'};
`;
