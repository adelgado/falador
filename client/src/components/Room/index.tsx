import * as React from 'react'
import * as style from './style.css'

export interface IProps {
	id: number
}

export class Room extends React.Component<IProps, {}> {
	render(): JSX.Element {
		return (
			<div className={style.number}>
				Welcome to room {this.props.id}
			</div>
		)
	}
}
