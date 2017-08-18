/** TodoMVC model definitions **/

interface TodoItemData {
	id?: TodoItemId
	text?: string
	completed?: boolean
}

declare type TodoItemId = number

declare type TodoFilterType = 'SHOW_ALL' | 'SHOW_ACTIVE' | 'SHOW_COMPLETED'

declare type ChatStoreState = {
	room: Room | null
	loading: boolean
}

declare type ChatActionPayload =
	| {
			type: string
			payload: any
		}
	| undefined

declare type Room = {
	id: number
}
