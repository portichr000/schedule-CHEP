import { FETCH_COURSES } from '../actions/types';

export default function(state = [], actions) {
  switch (actions.type) {
    case FETCH_COURSES:
        
        return [
          ...state,
          ...actions.payload
        ];
      default:
        return state;
  }
}