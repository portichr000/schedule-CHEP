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
          const newCourses =state.map(course => {
              if (course.id == actions.payload) {
                course.enrolled =!course.enrolled
              }
              return course
          })
          return [
              ...newCourses  
          ]
      default:
        return state;
  }
}