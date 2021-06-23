export function getFetchItemsAction() {
  return (dispatch) => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((data) => dispatch(getDataFromFetchAction(data)))
      .catch((err) => dispatch(funcErr(err)));
  };
}

function getDataFromFetchAction(data) {
  return {
    type: "SUCCESS",
    payload: {
      data,
    },
  };
}

function funcErr(err) {
  return {
    type: "ERR",
    payload: {
      err,
    },
  };
}

export function getDomainFromButtonAction(val) {
  return {
    type: "CLICK_ON_BUTTON_DOMAIN",
    payload: {
      val,
    },
  };
}

export function onChangeNameInputBarAction(text) {
  return {
    type: "ON_CHANGE_BAR_INPUT",
    payload: {
      text,
    },
  };
}
