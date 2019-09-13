import React from 'react'
import PropTypes from 'prop-types'
import {Icon} from 'react-materialize'
import '../styles/profile.scss'

const Profile = ({profile, onLike, onDislike}) => (
	<div className="card z-depth-5" id="profile">
		<div className="card-image">
			<img src={profile.image} alt="test" />
			<span className="card-title" id="profile-name">
				{profile.name}
			</span>
		</div>
		<div className="card-content">
			<p>{profile.description}</p>
		</div>
		<div className="card-action">
			<a href="#!" onClick={onLike} className="red-text"><Icon left>sentiment_very_satisfied</Icon> Like</a>
			<a href="#!" onClick={onDislike} className="right indigo-text"><Icon right>sentiment_very_dissatisfied</Icon> Pass</a>
		</div>
	</div>
)

Profile.propTypes = {
	profile: PropTypes.shape({
		image: PropTypes.string,
		name: PropTypes.string,
		description: PropTypes.string,
	}).isRequired,
	onLike: PropTypes.func,
	onDislike: PropTypes.func,
}

Profile.defaultProps = {
	onLike: null,
	onDislike: null,
}

export default Profile
