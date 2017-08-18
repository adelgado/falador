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
