import { useSelector, useDispatch } from "react-redux";
import { useHistory, useLocation, useParams } from "react-router-dom";
import { useEffect } from "react";
import "./App.css";
import Bar from "./components/Bar";
import Main from "./components/Main";
import { getFetchItemsAction, getDomainFromButtonAction } from "./redux/action";

export default function App() {
  const history = useHistory();
  let state = useSelector((state) => state);
  let { activeDomain, inputBarValue } = state;
  let dispatch = useDispatch();
  window.history.pushState(
    null,
    null,
    `form=${inputBarValue}&&domain=${activeDomain}`
  );

  useEffect(() => {
    dispatch(getFetchItemsAction());
  }, []);
  return (
    <div className="App">
      <header className="header">
        <h1 className="header__h1">FILTERED LIST </h1>
      </header>
      <Bar />
      <Main />
    </div>
  );
}
