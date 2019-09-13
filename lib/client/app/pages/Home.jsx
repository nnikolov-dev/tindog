import React from 'react'
import {Row, Col} from 'react-materialize'
import {Animated} from 'react-animated-css'
import Profile from './Profile'
import '../styles/home.scss'
import profilesData from '../data/profiles'

class Home extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			animation: 'bounceIn',
			visibility: true,
			profiles: profilesData,
			currentProfile: 0,
		}
		this.handleLike = this.handleLike.bind(this)
		this.handleDislike = this.handleDislike.bind(this)
		this.nextProfile = this.nextProfile.bind(this)
	}

	handleLike() {
		this.setState({animation: 'bounceOutLeft', visibility: false})
		this.nextProfile()
	}

	handleDislike() {
		this.setState({animation: 'bounceOutRight', visibility: false})
		this.nextProfile()
	}

	nextProfile() {
		this.setState((prevState) => ({currentProfile: prevState.currentProfile + 1}))
		setTimeout(() => {
			this.setState({animation: 'bounceIn', visibility: true})
		}, 1000)
	}

	render() {
		const {animation, visibility, profiles, currentProfile} = this.state
		return (
			<Row>
				<Col s={12} m={5} className="offset-m4">
					<Animated animationIn={animation} animationOut={animation} isVisible={visibility}>
						<Profile profile={profiles[currentProfile]} onLike={this.handleLike} onDislike={this.handleDislike} />
					</Animated>
				</Col>
			</Row>
		)
	}
}

export default Home
