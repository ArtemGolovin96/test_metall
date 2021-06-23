import { useSelector, useDispatch } from "react-redux";
import {
  getDomainFromButtonAction,
  onChangeNameInputBarAction,
} from "../redux/action";
import "./Bar.css";

export default function Bar() {
  let state = useSelector((state) => state);
  let dispatch = useDispatch();
  let timerID;
  clearTimeout(timerID);
  function onChangeBarInput(e) {
    timerID = setTimeout(() => {
      dispatch(onChangeNameInputBarAction(e.target.value));
    }, 1000);
  }

  return (
    <div className="Bar-global">
      <div className="Bar">
        <div className="Bar__section">
          <p className="section__p">Search</p>
          <input
            type="text"
            placeholder="Enter name"
            className="section__input-name"
            onChange={(e) => onChangeBarInput(e)}
          ></input>
        </div>
        <div className="Bar__section">
          <p className="section__p">Show only</p>
          <button
            className="section__button"
            value=".org"
            onClick={(e) => dispatch(getDomainFromButtonAction(e.target.value))}
          >
            .org
          </button>
          <button
            className="section__button"
            value=".com"
            onClick={(e) => dispatch(getDomainFromButtonAction(e.target.value))}
          >
            .com
          </button>
          <button
            className="section__button"
            value=".biz"
            onClick={(e) => dispatch(getDomainFromButtonAction(e.target.value))}
          >
            .biz
          </button>
        </div>
      </div>
    </div>
  );
}
