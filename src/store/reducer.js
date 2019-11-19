import names from "./actions";
import initialContent from "./content";
function reducer(state = { content: initialContent }, action) {
  switch (action.type) {
    case names.SetContent:
      return { ...state, content: action.content };
    default:
      return state;
  }
}
export default reducer;
