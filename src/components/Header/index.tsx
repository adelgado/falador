import * as React from 'react'
import { TodoTextInput } from '../TodoTextInput'

export namespace Header {
	export interface IProps {
		addTodo: (todo: TodoItemData) => any
	}

	export interface IState {
		/* empty */
	}
}

export class Header extends React.Component<Header.IProps, Header.IState> {

	constructor(props?: Header.IProps, context?: any) {
		super(props, context)
		this.handleSave = this.handleSave.bind(this)
	}

	handleSave(text: string): void {
		if (text.length) {
			this.props.addTodo({ text })
		}
	}

	render(): JSX.Element {
		return (
			<header>
				<h1>Todos</h1>
				<TodoTextInput
					newTodo
					onSave={this.handleSave}
					placeholder='What needs to be done?' />
			</header>
		)
	}
}
