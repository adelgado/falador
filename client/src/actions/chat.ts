import { createAction } from 'redux-actions'
import * as Actions from '../constants/actions'
import { IRoom } from '../interfaces'

export const createRoom = createAction(Actions.CREATE_ROOM)
export const createRoomAsync = createAction(Actions.CREATE_ROOM_ASYNC)
export const setRoom = createAction<IRoom>(Actions.SET_ROOM)
export const startLoading = createAction(Actions.START_LOADING)
export const stopLoading = createAction(Actions.STOP_LOADING)
export const setError = createAction<Error>(Actions.SET_ERROR)
export const resetError = createAction(Actions.RESET_ERROR)
