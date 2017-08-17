import * as React from 'react'
import * as TodoActions from '../../actions/todos'
import * as style from './style.css'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import { IRootState } from '../../reducers'
import { Header, MainSection } from '../../components'

export namespace App {
	export interface IProps extends RouteComponentProps<void> {
		/* empty */
	}

	export interface IState {
		/* empty */
	}
}

@connect(mapStateToProps, mapDispatchToProps)
export class App extends React.Component<App.IProps, App.IState> {
	render(): JSX.Element {
		return (
			<div className={style.container}>
				<button className={style.button}>New room</button>
			</div>
		)
	}
}

function mapStateToProps(state: IRootState): IRootState {
	return state
}

function mapDispatchToProps(dispatch: any): { actions: Object } {
	return {
		actions: bindActionCreators(TodoActions as any, dispatch)
	}
}
