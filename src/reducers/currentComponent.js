import { CURRENT_COMPONENT } from "./types";

const initialState = {
  currentComponent: "About",
  sideBarMenuItemKey: "1",
};

export default function currentComponent (state = initialState, action) {
  switch (action.type) {
    case CURRENT_COMPONENT:
      return {
        ...state,
        currentComponent: action.payload.component,
        sideBarMenuItemKey: action.payload.sideBarMenuKey,
      };
    default:
      return state;
  }
}
