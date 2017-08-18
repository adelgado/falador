import * as React from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import { bindActionCreators } from 'redux'
import * as ChatActions from '../../actions/chat'
import { Homepage, Loading, Room } from '../../components'
import { IRootState } from '../../reducers'

export interface IProps extends RouteComponentProps<void> {
	actions: typeof ChatActions
	chat: ChatStoreState
}

@connect(mapStateToProps, mapDispatchToProps)
export class App extends React.Component<IProps, {}> {
	render(): JSX.Element {
		const { chat } = this.props

		if (chat.loading) {
			return <Loading />
		}

		if (chat.room) {
			return <Room id={chat.room.id} />
		}

		return (
			<Homepage onCreateRoom={() => this.props.actions.createRoomAsync()} />
		)
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
