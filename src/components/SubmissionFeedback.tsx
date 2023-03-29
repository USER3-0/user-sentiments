import { ReactComponent as SmileICon } from "../assets/icons/smile.svg";

type Props = {};
const SubmissionFeedBack: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <SmileICon />
      <p>Thank you! Tell us more.</p>
    </div>
  );
};

export default SubmissionFeedBack;
