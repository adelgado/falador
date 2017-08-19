import Room from '../models/Room'

export default class RoomFactory {
	static makeRoom(): Room {
		const value = Math.random()
		// Mock
		if (value > 0.5) {
			throw new Error("Couldn't frob the fleeb")
		}

		return new Room(value)
	}
}
