import { handleActions } from 'redux-actions'
import * as Actions from '../constants/actions'
import { IRootState } from '../interfaces'
import initialState from './initialState'

type ErrorState = IRootState['error']

export default handleActions<ErrorState, Error>(
	{
		[Actions.SET_ERROR]: (state, action): ErrorState => {
			if (action.payload) {
				return action.payload
			} else {
				return state
			}
		},
		[Actions.RESET_ERROR]: (state, action): ErrorState => {
			return null
		}
	},
	initialState.error
)
