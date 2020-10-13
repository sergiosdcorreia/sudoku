import { createStore } from 'redux'
import { devToolsEnhancer } from 'redux-devtools-extension'

import reducer from 'reducers'

function configureStore(initialState = {}) {
  const store = createStore(reducer, initialState, devToolsEnhancer({}))
  return store
}

export default configureStore
