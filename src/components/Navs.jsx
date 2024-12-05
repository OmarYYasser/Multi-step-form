import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { prev as prevFun } from "./stepFormSlice";

function Navs({ prev, next, text, onClick }) {
  const dispatch = useDispatch();
  return (
    <div className="nav">
      {prev && (
        <Link
          onClick={() => dispatch(prevFun())}
          className={`prev cta`}
          to={prev}
        >
          {text?.prev ? text?.prev : "Go Back"}
        </Link>
      )}
      {next && (
        <Link onClick={onClick} className={`next cta`} to={next}>
          {text?.next ? text?.next : "Next Step"}
        </Link>
      )}
    </div>
  );
}

export default Navs;
