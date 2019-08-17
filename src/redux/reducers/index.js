import { ADD_RESULT } from '../constants/action-types.js'

const initialState = {
    results: []
};

function rootReducer(state = initialState, action) {
    const { results } = state;    
    const resultsCopy = [...results];
    resultsCopy.unshift(action.payload)
    if (action.type === ADD_RESULT) {
      return Object.assign({}, state, {
        results: resultsCopy
      });
    }
    return state;
};
export default rootReducer;