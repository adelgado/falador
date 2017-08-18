import { createAction } from 'redux-actions'
import * as Actions from '../constants/actions'

export const createRoom = createAction(Actions.CREATE_ROOM)
export const createRoomAsync = createAction(Actions.CREATE_ROOM_ASYNC)
