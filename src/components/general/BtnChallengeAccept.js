import { Link } from 'react-router-dom';

function BtnChallengeAccept(props) {
  const {next, text, addClass} = props;
  return (
    <Link to={next} className={"btn-bg hover:bg-primary-hover active:bg-primary-active " + (addClass? addClass:"")}>
      {text}
    </Link>
  );
}

export default BtnChallengeAccept;
