import {
  FETCH_COURSES, 
  TOGGLE_ENROLLED
} from '../actions/types';

export default function(state = [], actions) {
  switch (actions.type) {
    case FETCH_COURSES:
        
        return [
          ...state,
          ...actions.payload
        ]
        case TOGGLE_ENROLLED:
          console.log(actions.payload)
          return state
      default:
        return state;
  }
}