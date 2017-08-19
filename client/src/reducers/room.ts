import { handleActions } from 'redux-actions'
import * as Actions from '../constants/actions'
import { IRoom, IRootState } from '../interfaces'
import initialState from './initialState'

export default handleActions<IRootState['room'], IRoom>(
	{
		[Actions.SET_ROOM]: (state, action): IRootState['room'] => {
			if (action.payload) {
				return action.payload
			} else {
				return null
			}
		}
	},
	initialState.room
)
