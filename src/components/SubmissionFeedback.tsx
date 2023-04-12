import styled from "styled-components";
import { ReactComponent as SmileICon } from "../assets/icons/smile.svg";
import BASE_COLORS from "../assets/colors";
import { UiProps } from "../App";
import { SUBMISSION_FEEDBACK } from "../assets/constants";

type Props = UiProps & {};
const SubmissionFeedBack: React.FC<Props> = (props: Props) => {
  const { isShowing } = props;

  if (!isShowing) {
    return null;
  }
  return (
    <Wrapper>
      <SmileICon />
      <p>{SUBMISSION_FEEDBACK.THANK_YOU}</p>
    </Wrapper>
  );
};

export default SubmissionFeedBack;

const Wrapper = styled.div`
  position: fixed;
  bottom: 16px;
  right: 16px;
  background-color: ${BASE_COLORS.LIGHT_GREY};
  width: 415px;
  height: 150px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;

  & > svg {
    margin-right: 13.6px;
  }
`;
