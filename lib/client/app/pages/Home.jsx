import React from 'react'
import {Row, Col, Card} from 'react-materialize'
import {Animated} from 'react-animated-css'
import Dog from '../partials/Dog'
import '../styles/home.scss'

class Home extends React.Component {
	// Step 1
	// Setting the default state of our component
	constructor(props) {
		super(props)
		this.state = {
			animation: 'bounceIn', // Animation related state, ignore for now
			visibility: true, // Animation related state, ignore for now
			currentDog: null, // The current dog data to be presented
			dogs: [], // The data gotten from the backend, an empty list at the start
		}

		// Binding methods to "this"
		this.handleGetDogs = this.handleGetDogs.bind(this)
		this.handleLike = this.handleLike.bind(this)
		this.handleDislike = this.handleDislike.bind(this)
		this.nextDog = this.nextDog.bind(this)
	}

	// Step 2
	// Calling the method when the component is about to mount
	componentWillMount() {
		this.handleGetDogs()
	}

	// Step 3
	// Fetching the data from the API
	// This method will make a call to the backend and fetch all the dogs
	// It then saves all the data in our state
	async handleGetDogs() {
		const dogs = await fetch('api/dog')
		const json = await dogs.json()
		const currentDog = json.pop() // Get the last dog out of the array
		this.setState({dogs: json, currentDog}) // Update the state
	}

	// Step 4
	// Add a Like callback
	handleLike(id) {
		this.setState({animation: 'bounceOutLeft', visibility: false}) // Trigger the bounce out animation
		fetch(`api/dog/like/${id}`) // Tell the backend that the dog was liked
		setTimeout(() => this.nextDog(), 400) // Queue the next dog
	}

	// Step 5
	// Add a Dislike callback
	handleDislike() {
		this.setState({animation: 'bounceOutRight', visibility: false}) // Trigger the bounce out animation
		setTimeout(() => this.nextDog(), 400) // Queue the next dog
	}

	// Step 6
	// Add a method that shows the next dog
	nextDog() {
		const {dogs} = this.state // Get all the dogs from our state variable
		if (dogs && dogs.length > 0) { // Check if empty
			this.setState((prevState) => ({currentDog: prevState.dogs.pop()})) // Update the current dog
		} else {
			this.setState({currentDog: null})
		}
		setTimeout(() => this.setState({animation: 'bounceIn', visibility: true}), 1000) // Queue and trigger the bounce in animation
	}

	// Render method
	render() {
		const {animation, visibility, currentDog} = this.state
		return (
			<div id="matching">
				<Row>
					<Col s={12} m={5} className="offset-m4">
						<Animated animationIn={animation} animationOut={animation} isVisible={visibility}>
							{currentDog
								? <Dog dog={currentDog} onLike={this.handleLike} onDislike={this.handleDislike} />
								: <Card title="No dogs found :(" className="center">You have gone through the entire list already</Card>}
						</Animated>
					</Col>
				</Row>
			</div>
		)
	}
}

export default Home
