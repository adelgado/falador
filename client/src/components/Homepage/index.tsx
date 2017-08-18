import * as React from 'react'
import * as style from './style.css'

export interface IProps {
	onCreateRoom(): void
}

export class Homepage extends React.Component<IProps, {}> {
	constructor(props?: IProps, context?: any) {
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
