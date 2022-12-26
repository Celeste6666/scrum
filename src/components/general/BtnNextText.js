import {Link} from "react-router-dom";

function BtnNextText(props) {
  const {next, addClass} = props;
  return (
    <Link to={next} className={"btn text-primary bottom-8 right-8 " + addClass}>
      <span className="inline-block align-middle">下一步</span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6 inline align-middle"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </Link>
  );
}

export default BtnNextText;
