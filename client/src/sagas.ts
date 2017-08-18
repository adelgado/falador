import { delay } from 'redux-saga'
import { all, ForkEffect, put, PutEffect, takeEvery } from 'redux-saga/effects'

import * as Actions from './actions/chat'
import * as Constants from './constants/actions'

export function* helloSaga(): IterableIterator<any> {
	console.log('Hello Sagas!')
}

// Our worker Saga: will perform the async increment task
export function* createRoomAsync(): IterableIterator<
	Promise<true> | PutEffect<{ type: string }>
> {
	yield delay(1000)
	yield put(Actions.createRoom())
}

// Our watcher Saga: spawn a new incrementAsync task on each INCREMENT_ASYNC
export function* watchCreateRoomAsync(): IterableIterator<ForkEffect> {
	yield takeEvery(Constants.CREATE_ROOM_ASYNC, createRoomAsync)
}

// single entry point to start all Sagas at once
export default function* rootSaga(): IterableIterator<any> {
	yield all([helloSaga(), watchCreateRoomAsync()])
}
