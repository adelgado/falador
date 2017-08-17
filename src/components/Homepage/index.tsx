import * as React from 'react'
import * as style from './style.css'

export namespace Homepage {
	export interface IProps {
		/* empty */
	}

	export interface IState {
		/* empty */
	}
}

export class Homepage extends React.Component<Homepage.IProps, Homepage.IState> {

	constructor(props?: Homepage.IProps, context?: any) {
		super(props, context)
	}

	render(): JSX.Element {
		return (
			<div className={style.container}>
				<button className={style.button}>New room</button>
			</div>
		)
	}

}
