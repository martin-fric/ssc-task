import { ADD_RESULT } from '../constants/action-types.js'

const initialState = {
    results: []
};

function rootReducer(state = initialState, action) {
    const { results } = state;    
    if (action.type === ADD_RESULT) {
      return Object.assign({}, state, {
        results: results.concat(action.payload)
      });
    }
    return state;
};
export default rootReducer;