import { UiProps } from "../App";
import styled from "styled-components";
import BASE_COLORS from "../assets/colors";
import { MENU } from "../assets/constants";

type Props = UiProps & {};

const FloatingMenu: React.FC<Props> = (props: Props) => {
  const { isShowing, onChangeStep, currentStep } = props;

  const handleClick = () => {
    if (currentStep === "rating") return;
    onChangeStep({ stepTo: "rating", stepFrom: "menu" });
  };

  if (!isShowing) return null;

  return (
    <>
      <Wrapper
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        {MENU}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  position: fixed;
  bottom: 0px;
  right: 16px;
  padding: 0.5rem 1rem;
  min-width: 200px !important;
  background-color: ${BASE_COLORS.LIGHT_GREY};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-self: center;
  border-radius: 5px;
`;

export default FloatingMenu;
