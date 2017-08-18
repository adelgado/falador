import * as React from 'react'
import * as ChatActions from '../../actions/chat'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import { IRootState } from '../../reducers'
import { Homepage, Room } from '../../components'

export namespace App {
	export interface IProps extends RouteComponentProps<void> {
		actions: typeof ChatActions
		chat: ChatStoreState
	}

	export interface IState { }
}

@connect(mapStateToProps, mapDispatchToProps)
export class App extends React.Component<App.IProps, App.IState> {
	render(): JSX.Element {
		const room = this.props.chat.room

		if (room === null) {
			return (
				<Homepage
					onCreateRoom={() => this.props.actions.createRoomAsync()}
				/>
			)
		} else {
			return <Room id={room.id} />
		}
	}
}

function mapStateToProps(state: IRootState): { chat: ChatStoreState } {
	return { chat: state.chat }
}

function mapDispatchToProps(dispatch: any): { actions: Object } {
	return {
		actions: bindActionCreators(ChatActions as any, dispatch)
	}
}
