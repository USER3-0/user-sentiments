import { useState } from "react";
import styled from "styled-components";
import BASE_COLORS from "../assets/colors";
import { UiProps } from "../App";
import { RATING } from "../assets/constants";

type Props = UiProps & { max: number };
const Rating: React.FC<Props> = (props: Props) => {
  const { isShowing, max, onChangeStep } = props;
  const arr = Array.from(Array(max).keys());

  const [selectedRate, setSelectedRate] = useState<number | null>(null);

  const handleSubmit = (num: number) => {
    setSelectedRate(num);
    // show feedback
    onChangeStep({ stepTo: "feedback", stepFrom: "rating", delay: 1000 });
    // reset the value
    setSelectedRate(null);
  };

  if (!isShowing) {
    return null;
  }

  return (
    <Wrapper>
      <p id="user_rating_title">{RATING.TITLE}</p>
      <div className="ratingsWrapper" id="user_ratings_wrapper">
        {arr.map((num: number) => {
          return (
            <ItemWrapper
              className={selectedRate === num ? "selected" : ""}
              key={`satisfactionRate_${num}`}
              tabIndex={1}
              onClick={() => handleSubmit(num + 1)}
            >
              {num + 1}
            </ItemWrapper>
          );
        })}
      </div>
      <div className="satisfactionInfo" id="user_satisfaction_info">
        <span>{RATING.NOT_SATISFIED}</span>
        <span>{RATING.VERY_SATISFIED}</span>
      </div>
    </Wrapper>
  );
};

export default Rating;

const Wrapper = styled.div`
  position: fixed;
  bottom: 16px;
  right: 16px;
  width: 415px !important;
  height: 180px !important;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${BASE_COLORS.LIGHT_GREY};
  border-radius: 10px;

  & > #user_rating_title {
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
  }

  & > #user_ratings_wrapper {
    border-radius: 6px;
    border: 1px solid ${BASE_COLORS.BLACK};
    width: 379.9px !important;
    height: 64px !important;
    display: flex;
    align-items: center;
    justify-content: space-around;
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    margin: 10px 0;
  }

  & > #user_satisfaction_info {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    display: flex;
    justify-content: space-between;
    width: 100%;
  }
`;

const ItemWrapper = styled.span`
  cursor: pointer;
  flex: 1;
  text-align: center;
  display: inline-flex;
  height: 100%;
  align-items: center;
  justify-content: center;

  &:not(:last-of-type) {
    border-right: 1px solid ${BASE_COLORS.BLACK};
  }

  &:hover {
    background-color: ${BASE_COLORS.MEDIUM_DARK_GREY};
  }

  &.selected {
    background-color: ${BASE_COLORS.MEDIUM_DARK_GREY};
  }
`;
