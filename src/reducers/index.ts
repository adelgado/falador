import { combineReducers } from 'redux'
import todos from './todos'

export interface IRootState {
	todos: TodoStoreState
}

export default combineReducers<IRootState>({
	todos
})
