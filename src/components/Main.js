import { useSelector, useDispatch } from "react-redux";
import "./Main.css";

export default function Main() {
  let state = useSelector((state) => state);
  let { globalArray, selectedArray } = state;
  return (
    <div className="Main">
      {selectedArray.map((el) => {
        return (
          <div className="Main__element-container" key={el.id}>
            <h3 className="element-container__name">{el.name}</h3>
            <p className="element-container__email">{el.email}</p>
            <span className="element-container__body">{el.body}</span>
          </div>
        );
      })}
    </div>
  );
}
