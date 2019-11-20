import names from "./actions";
import initialContent from "./content";
import {recurseSetValueByPath} from '../lib'

function reducer(state = {content: initialContent}, action) {
    switch (action.type) {
        case names.SetValueByPath:
            return recurseSetValueByPath(state, action.path, action.value);
        default:
            return state;
    }
}

export default reducer;
