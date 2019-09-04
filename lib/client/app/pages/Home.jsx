import React, {useState, useEffect} from 'react'
import '../styles/home.scss'

function Home() {
	const [date, setDate] = useState(new Date())
	useEffect(() => {
		setTimeout(() => setDate(new Date()), 1000)
	})
	return (
		<div>
			<h1>Hello, world</h1>
			<p>The time is: {date.toLocaleTimeString()}</p>
		</div>
	)
}

export default Home
