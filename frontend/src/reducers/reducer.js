import {RECEIVED_USER_PROFILE} from '../actions/action.js'

const initialState = {
  "user": {
    profilePicture: '',
    stats:{
      esteemCount: null,
      averageEsteem: null,
      lastChange: null
    },
    leaderboard: []
  }
}


function esteemApp(state = initialState, action) {
  switch (action.type) {
    case RECEIVED_USER_PROFILE:
      return Object.assign(
        {},
        state,
        { user: action.user }
    )
    default:
      return state
  }
}

export default esteemApp;
