const SET_START = "onandoffs/SET_START";
const SET_CRT = "onandoffs/SET_CRT";
const SET_SHUTDOWN = "onandoffs/SET_SHUTDOWN";

export const setStart = () => ({ type: SET_START });
export const setCrt = () => ({ type: SET_CRT });
export const setShutDown = () => ({ type: SET_SHUTDOWN });

const initialState = {
  start: false,
  crt: true,
  shut: false,
};

console.log(initialState);

export default function onandoffs(state = initialState, action) {
  switch (action.type) {
    case SET_START:
      return {
        ...state,
        start: !state.start,
      };
    case SET_CRT:
      return {
        ...state,
        crt: !state.crt,
      };
    case SET_SHUTDOWN:
      return {
        ...state,
        shut: !state.shut,
      };
    default:
      return state;
  }
}
