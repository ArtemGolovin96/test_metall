import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import "./App.css";
import Bar from "./components/Bar";
import Main from "./components/Main";
import { getFetchItemsAction } from "./redux/action";

export default function App() {
  let state = useSelector((state) => state);
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFetchItemsAction());
  }, []);
  return (
    <div className="App">
      <header className="header">
        <h1 className="header__h1">FILTERED LIST</h1>
      </header>
      <Bar />
      <Main />
    </div>
  );
}
