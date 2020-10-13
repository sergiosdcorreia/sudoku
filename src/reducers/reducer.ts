import { AnyAction } from 'redux'

import { IReducer } from 'reducers'

const initialState = {}

function reducer(state = initialState, action: AnyAction) {
  switch (action.type) {
    default:
      return state
  }
}

export default reducer
