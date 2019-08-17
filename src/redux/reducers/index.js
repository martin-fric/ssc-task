import { ADD_RESULT } from '../constants/action-types.js'

const initialState = {
    results: []
};

function rootReducer(state = initialState, action) {
    const { results } = state;    
    const resultsCopy = [...results];
    if (action.type === ADD_RESULT) {
      resultsCopy.unshift(action.payload)
      return Object.assign({}, state, {
        results: resultsCopy
      });
    }
    return state;
};
export default rootReducer;