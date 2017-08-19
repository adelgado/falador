import * as React from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import { bindActionCreators } from 'redux'
import * as ChatActions from '../../actions/chat'
import { Error, Homepage, Loading, Room } from '../../components'
import { IRootState } from '../../interfaces'

export interface IProps extends RouteComponentProps<void> {
	actions: typeof ChatActions
	state: IRootState
}

@connect(mapStateToProps, mapDispatchToProps)
export class App extends React.Component<IProps, {}> {
	render(): JSX.Element {
		const { state } = this.props

		if (state.loading) {
			return <Loading />
		}

		if (state.error) {
			return (
				<Error
					message={state.error.message}
					onRetry={() => this.props.actions.resetError()}
				/>
			)
		}

		if (state.room) {
			return <Room id={state.room.id} />
		}

		return (
			<Homepage onCreateRoom={() => this.props.actions.createRoomAsync()} />
		)
	}
}

function mapStateToProps(state: IRootState): { state: IRootState } {
	return { state }
}

function mapDispatchToProps(dispatch: any): { actions: object } {
	return {
		actions: bindActionCreators(ChatActions as any, dispatch)
	}
}
