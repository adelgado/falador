import { handleActions } from 'redux-actions'
import * as Actions from '../constants/actions'

const initialState: ChatStoreState = {
	room: null,
	loading: false
}

export default handleActions<ChatStoreState, ChatActionPayload>(
	{
		[Actions.CREATE_ROOM]: (state, action) => {
			const room: Room = { id: Math.random() }
			return { ...state, room }
		},
		[Actions.START_LOADING]: (state, action) => {
			return { ...state, loading: true }
		},
		[Actions.STOP_LOADING]: (state, action) => {
			return { ...state, loading: false }
		}
	},
	initialState
)
