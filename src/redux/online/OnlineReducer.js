import { USER_ONLINE } from "./OnlineTypes";

const initialState = {
  online: false,
};

const OnlineReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_ONLINE:
      return {
        online: true,
      };
    default:
      return state;
  }
};

export default OnlineReducer;
