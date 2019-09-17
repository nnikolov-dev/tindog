const express = require('express')

// Step 1
// Import the Mongo Driver
const {MongoClient, ObjectId} = require('mongodb')

const api = express.Router()

// Step 2
// Define some constants
const dbAddress = 'mongodb://localhost:27017'
const dbName = 'tindog'
const client = new MongoClient(
	dbAddress, {useNewUrlParser: true, useUnifiedTopology: true},
)

// Step 3
// Add a GET Route that lists all dogs currently in the database
api.get('/dog', async (req, res) => {
	try {
		const dogs = [] // A list that will hold all dogs
		await client.connect() // Connecting to the MongoDB Database
		const db = client.db(dbName) // Selecting the database we want to use - tindog in this case
		const col = db.collection('dogs') // Selecting the collection we want to use - dogs in this case
		const cursor = col.find() // Performing the find operation, which lists all dogs and returns an iteratable cursor
		cursor.sort({_id: -1}) // Sorting the objects in the cursror by descending id (newer first)
		await cursor.forEach((doc) => dogs.push(doc)) // Iterarting through the cursror and adding to our final list
		client.close() // Closing the connection to the database
		res.json(dogs) // Returns a json object based on our list containing all dogs (Status: 200)
	} catch (err) {
		res.status(400).json(err.stack) // Returns a json object containing the error (Status: 400)
	}
})

// Step 4
// Add a POST Route that adds a new dog to the database
api.post('/dog', async (req, res) => {
	try {
		await client.connect() // Connecting to the MongoDB Database
		const db = client.db(dbName) // Selecting the database we want to use - tindog in this case
		const col = db.collection('dogs') // Selecting the collection we want to use - dogs in this case
		await col.insertOne(req.body) // Inserting the dog  data in the collection as a new document
		client.close() // Closing the connection to the database
		res.json(req.body) // Returns a json object containing the dog that was added (Status: 200)
	} catch (err) {
		res.status(400).json(err.stack) // Returns a json object containing the error (Status: 400)
	}
})

// Step 5
// Add a GET Route that increments the like count of a scpecific dog, based on an id parameter
api.get('/dog/like/:id', async (req, res) => {
	const {id} = req.params // Getting the dog id from the request
	try {
		await client.connect() // Connecting to the MongoDB Database
		const db = client.db(dbName) // Selecting the database we want to use - tindog in this case
		const col = db.collection('dogs') // Selecting the collection we want to use - dogs in this case
		const dog = await col.findOneAndUpdate({_id: ObjectId(id)}, {$inc: {likes: 1}}) // Increments the likes by 1 for a specific document based on id
		client.close() // Closing the connection to the database
		res.json(dog) // Returns a json object containing the dog that was updated (Status: 200)
	} catch (err) {
		res.status(400).json(err.stack) // Returns a json object containing the error (Status: 400)
	}
})

// ToDo
// Add a GET Route that finds a dog with a specific id and deletes it

// ToDo
// Add validation when adding a new dog
// Try to throw Exceptions when a field is invalid

module.exports = api
