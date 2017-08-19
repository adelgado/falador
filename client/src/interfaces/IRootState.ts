import { IRoom } from './IRoom'

export interface IRootState {
	error: Error | null
	loading: boolean
	room: IRoom | null
}
