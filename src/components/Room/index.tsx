import * as React from 'react'
import * as style from './style.css'

export namespace Room {
	export interface IProps {
		id: number
	}

	export interface IState { }
}

export class Room extends React.Component<Room.IProps, Room.IState> {

	render(): JSX.Element {
		return (
			<div className={style.number}>{this.props.id}</div>
		)
	}
}
