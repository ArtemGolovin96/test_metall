import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
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

  function onCLickButtonDomian(e) {
    dispatch(getDomainFromButtonAction(e.target.value));
  }

  return (
    <div className="Bar-global">
      <div className="Bar">
        <div className="Bar__section">
          <p className="section__p">Search</p>
          <input
            type="text"
            placeholder="Enter Name"
            className="section__input-name"
            onChange={(e) => onChangeBarInput(e)}
          ></input>
        </div>
        <div className="Bar__section">
          <p className="section__p">Show only</p>
          <button
            className={"section__button"}
            value=".org"
            onClick={(e) => onCLickButtonDomian(e)}
          >
            .org
          </button>
          <button
            className={"section__button"}
            value=".com"
            onClick={(e) => onCLickButtonDomian(e)}
          >
            .com
          </button>
          <button
            className={"section__button"}
            value=".biz"
            onClick={(e) => onCLickButtonDomian(e)}
          >
            .biz
          </button>
        </div>
      </div>
    </div>
  );
}
