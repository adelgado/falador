import { combineReducers } from 'redux'
import chat from './chat'

export interface IRootState {
	chat: ChatStoreState
}

export default combineReducers<IRootState>({
	chat
})
