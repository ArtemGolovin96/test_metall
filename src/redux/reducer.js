let globalState = {
  globalArray: [],
  selectedArray: [],
  activeDomain: "",
};

export default function reducer(state = globalState, action) {
  switch (action.type) {
    case "SUCCESS":
      let dataReducers = action.payload.data;
      return {
        ...state,
        globalArray: dataReducers,
        selectedArray: dataReducers,
      };

    case "ERR":
      alert("Ошибка загрузки страницы, обратитесь к администратору");
      return state;
    case "CLICK_ON_BUTTON_DOMAIN":
      let allArr = [...state.globalArray];
      let value = action.payload.val;
      let res = allArr.filter((el) => {
        if (el.email.endsWith(value)) {
          return el;
        }
      });
      return { ...state, selectedArray: res };

    case "ON_CHANGE_BAR_INPUT":
      let allArrToChange = [...state.globalArray];
      let text = action.payload.text;
      let resFromInputArr = allArrToChange.filter((el) => {
        if (el.name.includes(text)) {
          return el;
        }
      });
      return { ...state, selectedArray: resFromInputArr };
    default:
      return state;
  }
}
