import * as React from 'react'
import * as TodoActions from '../../actions/todos'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import { IRootState } from '../../reducers'
import { Homepage } from '../../components'

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
		return <Homepage />
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
