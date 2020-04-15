const initialState = {
  err: false,
  errMsg: "",
};

export default function (state = initialState, action) {
  switch (action.type) {
    case "GET_ERROR": {
      return {
        ...state,
      };
    }
    case "SET_ERROR": {
      return {
        err: true,
        errMsg: action.payload,
      };
    }
    case "CLEAR_ERROR": {
      return {
        err: false,
        errMsg: "",
      };
    }
    default:
      return state;
  }
}
