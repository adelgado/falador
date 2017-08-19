import { applyMiddleware, createStore, Store, StoreCreator } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { IRootState } from '../interfaces'
import { logger } from '../middleware'
import rootReducer from '../reducers'

import rootSaga from '../sagas/index'

export function configureStore(initialState?: IRootState): Store<IRootState> {
	const create: StoreCreator = window.devToolsExtension
		? window.devToolsExtension()(createStore)
		: createStore

	const sagaMiddleware = createSagaMiddleware()

	let store: Store<IRootState>

	if (initialState) {
		store = create<IRootState>(
			rootReducer,
			initialState,
			applyMiddleware(sagaMiddleware, logger)
		)
	} else {
		store = create<IRootState>(
			rootReducer,
			applyMiddleware(sagaMiddleware, logger)
		)
	}

	sagaMiddleware.run(rootSaga)

	if (module.hot) {
		module.hot.accept('../reducers', () => {
			const nextReducer = require('../reducers')
			store.replaceReducer(nextReducer)
		})
	}

	return store
}
