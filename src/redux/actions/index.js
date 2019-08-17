import { ADD_RESULT } from '../constants/action-types.js'

export function addResult(payload) {
    return { type: ADD_RESULT, payload }
};