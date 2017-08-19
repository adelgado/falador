import { handleActions } from 'redux-actions'
import * as Actions from '../constants/actions'
import { IRootState } from '../interfaces'
import initialState from './initialState'

type LoadingState = IRootState['loading']

export default handleActions<LoadingState>(
	{
		[Actions.START_LOADING]: (state, action): LoadingState => {
			return true
		},
		[Actions.STOP_LOADING]: (state, action): LoadingState => {
			return false
		}
	},
	initialState.loading
)
