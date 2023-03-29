import { ChangeEvent, FormEvent, useRef, useState } from "react";
import styled from "styled-components";
import BASE_COLORS from "../assets/colors";

type Props = {};
const Questionnaire: React.FC<Props> = (props: Props) => {
  const [likeContentValue, setContentLikeValue] = useState<string>("");
  const [leastlikeContentValue, setLeastContentLikeValue] =
    useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleInputValueChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const target = e.target;
    const id = target.id;
    const value = target.value;

    if (id.includes("least_like")) setLeastContentLikeValue(value);
    else if (id.includes("_like")) setContentLikeValue(value);
    else if (id.includes("email")) setEmail(value);
  };

  const checkValueIsEmpty = (values: string[]) => {
    let isEmpty = true;
    values.forEach((value) => {
      if (!value) isEmpty = false;
      if (value) isEmpty = true;
    });
    return isEmpty;
  };

  const handleSumbit = async (e: FormEvent) => {
    e.preventDefault();
    // console.log({ likeContentValue, leastlikeContentValue, email });

    if (!checkValueIsEmpty([likeContentValue, leastlikeContentValue, email])) {
      console.log("nothing to send");
      return;
    }
  };

  return (
    <Wrapper>
      <HeaderWapper id="user_questionnaire_header">Tell us more</HeaderWapper>
      <BodyWrapper onSubmit={handleSumbit}>
        <div>
          <label className="questionnaireSubTitle">
            What did you like most?
            <textarea
              id="user_questionnaire_like_textarea"
              placeholder="Tell us your experience (optional)"
              onChange={handleInputValueChange}
              value={likeContentValue}
            />
          </label>
        </div>
        <div>
          <label className="questionnaireSubTitle">
            What did you like least?
            <textarea
              id="user_questionnaire_least_like_textarea"
              placeholder="Tell us know how we can improve (optional)"
              onChange={handleInputValueChange}
              value={leastlikeContentValue}
            />
          </label>
        </div>
        <div>
          <label className="questionnaireSubTitle">
            Your email
            <input
              type="email"
              name=""
              id="user_questionnaire_email"
              placeholder="Your email address (optional)"
              onChange={handleInputValueChange}
              value={email}
            />
          </label>
        </div>
        <ButtonWrapper>SUBMIT</ButtonWrapper>
      </BodyWrapper>
    </Wrapper>
  );
};

export default Questionnaire;

const Wrapper = styled.div`
  position: fixed;
  bottom: 16px;
  right: 16px;
  width: 420px;
  height: 600px;
  background-color: ${BASE_COLORS.LIGHT_GREY};
`;

const HeaderWapper = styled.div`
  background-color: ${BASE_COLORS.BLACK};
  color: ${BASE_COLORS.WHITE};
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  width: 420px;
  height: 70px;
  border-radius: 10px 10px 0px 0px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
`;

const BodyWrapper = styled.form`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  padding: 30px;

  > div:not(:first-of-type) {
    margin-top: 20px;
  }

  & > div > .questionnaireSubTitle {
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    color: ${BASE_COLORS.BLACK};
  }

  & > div > label > textarea {
    width: 100%;
    min-height: 80px;
    border-radius: 10px;
    background-color: ${BASE_COLORS.WHITE};
    border: none;
    outline: none;
    padding: 10px;
    margin-top: 20px;
  }
  & > div > label > input {
    width: 100%;
    height: 50px;
    border-radius: 10px;
    background-color: ${BASE_COLORS.WHITE};
    border: none;
    outline: none;
    padding: 10px;
    margin-top: 20px;
  }
`;

const ButtonWrapper = styled.button`
  background-color: ${BASE_COLORS.MEDIUM_GREY};
  color: ${BASE_COLORS.WHITE};
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  border-radius: 6px;
  width: 120px;
  height: 50px;
  outline: none;
  border: none;
  margin-left: auto;
  margin-top: 20px;
  cursor: pointer;
`;
