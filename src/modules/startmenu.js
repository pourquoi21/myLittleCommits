const START_MENU = "startmenu/START_MENU";

export const startMenu = () => ({ type: START_MENU, counter: 0 });

const initialState = { counter: 0 };

export default function changeMenu(state = initialState, action) {
  switch (action.type) {
    case START_MENU:
      return { ...state, counter: state.counter + 1 };
    default:
      return state;
  }
}
