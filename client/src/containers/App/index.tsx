import * as React from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import { bindActionCreators } from 'redux'
import * as ChatActions from '../../actions/chat'
import { Homepage, Room } from '../../components'
import { IRootState } from '../../reducers'

export interface IProps extends RouteComponentProps<void> {
	actions: typeof ChatActions
	chat: ChatStoreState
}

@connect(mapStateToProps, mapDispatchToProps)
export class App extends React.Component<IProps, {}> {
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

function mapDispatchToProps(dispatch: any): { actions: object } {
	return {
		actions: bindActionCreators(ChatActions as any, dispatch)
	}
}
