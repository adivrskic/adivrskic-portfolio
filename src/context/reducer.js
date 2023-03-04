export const reducer = (state, action) => {
  switch (action.type) {
    case "TOGGLE_MENU":
      return {
        ...state,
        showMenu: !state.showMenu,
      };
    default:
      return state;
  }
};

export const initialState = {
  showMenu: false,
};
