import styled from "styled-components";

type Props = { max: number };
const Rating: React.FC<Props> = (props: Props) => {
  const { max } = props;
  const arr = Array.from(Array(max).keys());

  return (
    <Wrapper>
      <p id="user_rating_title">Rate your experinece</p>
      <div className="ratingsWrapper" id="user_ratings_wrapper">
        {arr.map((num: number) => {
          return (
            <ItemWrapper key={`satisfactionRate_${num}`} tabIndex={1}>
              {num + 1}
            </ItemWrapper>
          );
        })}
      </div>
      <div className="satisfactionInfo" id="user_satisfaction_info">
        <span>NOT SATISFIED</span>
        <span>VERY SATISFIED</span>
      </div>
    </Wrapper>
  );
};

export default Rating;

const Wrapper = styled.div`
  position: fixed;
  bottom: 16px;
  right: 16px;
  width: 415px;
  height: 180px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f7f8f9;
  border-radius: 10px;

  & > #user_rating_title {
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
  }

  & > #user_ratings_wrapper {
    border-radius: 6px;
    border: 1px solid #000000;
    width: 379.9px;
    height: 64px;
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
`;
