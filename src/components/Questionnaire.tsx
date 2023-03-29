type Props = {};
const Questionnaire: React.FC<Props> = (props: Props) => {
  return (
    <div>
      <div>Tell us more</div>
      <div>
        <div>
          <p>What did you like most?</p>
          <input type="text" name="" id="" />
        </div>
        <div>
          <p>What did you like least?</p>
          <input type="text" name="" id="" />
        </div>
        <div>
          <p>Your email</p>
          <input type="email" name="" id="" />
        </div>
      </div>
      <button>SUBMIT</button>
    </div>
  );
};

export default Questionnaire;
