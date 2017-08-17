import * as React from 'react'
import * as style from './style.css'

export namespace Homepage {
	export interface IProps {
		onCreateRoom(): void
	}
	export interface IState { }
}

export class Homepage extends React.Component<Homepage.IProps, Homepage.IState> {

	constructor(props?: Homepage.IProps, context?: any) {
		super(props, context)
	}

	handleCreateRoom(): void {
		this.props.onCreateRoom()
	}

	render(): JSX.Element {
		return (
			<div className={style.container}>
				<button
					className={style.button}
					onClick={this.handleCreateRoom.bind(this)}
				>
					New room
				</button>
			</div>
		)
	}

}
