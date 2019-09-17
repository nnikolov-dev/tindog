import React from 'react'
import PropTypes from 'prop-types'
import {Icon} from 'react-materialize'
import '../styles/profile.scss'

// Profile Functional Component
// Step 1
// Create a simple functional component, which displays a dog profile
const Dog = ({dog, onLike, onDislike}) => (
	<div className="card z-depth-5" id="profile">
		<div className="card-image">
			{/* Displaying the profile image */}
			<img src={dog.image} alt="test" />
			{/* Displaying the profile name */}
			<span className="card-title" id="profile-name">
				{dog.name}
			</span>
		</div>
		{/* Displaying the profile description */}
		<div className="card-content">
			<p>{dog.description}</p>
		</div>
		{/* Displaying the profile actions */}
		<div className="card-action">
			<a href="#!" onClick={() => onLike(dog._id)} className="red-text"><Icon left>sentiment_very_satisfied</Icon> Like</a>
			<a href="#!" onClick={onDislike} className="right indigo-text"><Icon right>sentiment_very_dissatisfied</Icon> Pass</a>
		</div>
	</div>
)

// Step 2
// Set up proptypes
Dog.propTypes = {
	dog: PropTypes.shape({
		_id: PropTypes.string,
		image: PropTypes.string,
		name: PropTypes.string,
		description: PropTypes.string,
	}).isRequired,
	onLike: PropTypes.func,
	onDislike: PropTypes.func,
}

// Step 4
// Add defaults
Dog.defaultProps = {
	onLike: null,
	onDislike: null,
}

export default Dog
