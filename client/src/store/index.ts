import { applyMiddleware, createStore, Store } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { logger } from '../middleware'
import rootReducer, { IRootState } from '../reducers'

import rootSaga from '../sagas/index'

export function configureStore(initialState?: IRootState): Store<IRootState> {
	const create = window.devToolsExtension
		? window.devToolsExtension()(createStore)
		: createStore

	const sagaMiddleware = createSagaMiddleware()

	const store = create(
		rootReducer,
		initialState,
		applyMiddleware(sagaMiddleware, logger)
	) as Store<IRootState>

	sagaMiddleware.run(rootSaga)

	if (module.hot) {
		module.hot.accept('../reducers', () => {
			const nextReducer = require('../reducers')
			store.replaceReducer(nextReducer)
		})
	}

	return store
}
