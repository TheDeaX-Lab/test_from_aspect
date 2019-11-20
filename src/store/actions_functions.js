import names from "./actions";

export default {
    [names.SetValueByPath]: dispatch => (path, value) =>
        dispatch({type: names.SetValueByPath, path, value})
};
