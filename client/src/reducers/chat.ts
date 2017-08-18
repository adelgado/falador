import { handleActions } from 'redux-actions'
import * as Actions from '../constants/actions'

const initialState: ChatStoreState = {
	room: null
}

export default handleActions<ChatStoreState, ChatActionPayload>({
	[Actions.CREATE_ROOM]: (state, action) => {
		const room: Room  = { id: Math.random() }
		return {...state, room }
	},

}, initialState)
