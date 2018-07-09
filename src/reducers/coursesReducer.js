import { FETCH_COURSES } from '../actions/types';

export default function(state = [], actions) {
  switch (actions.type) {
    case FETCH_COURSES:
        console.log(actions.payload);
        return state;
      default:
        return state;
  }
}