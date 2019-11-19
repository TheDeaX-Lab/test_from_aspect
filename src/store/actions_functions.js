import names from "./actions";
export default {
  [names.SetContent]: dispatch => content =>
    dispatch({ type: names.SetContent, content })
};
