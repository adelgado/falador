import { combineReducers } from 'redux'
import { IRootState } from '../interfaces'
import error from './error'
import loading from './loading'
import room from './room'

export default combineReducers<IRootState>({
	error,
	loading,
	room
})
