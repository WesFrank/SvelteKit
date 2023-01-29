import {MongoClient} from 'mongodb'

import { config } from 'dotenv';

config();

// Fetch connection string from dotenv file
const mongodb_uri = String( process.env.MONGODB_URI);

if (!mongodb_uri) {

    throw new Error (
        'Please define the MONGODB_URI environment variable inside a dotenv file'
    )
    
} else {

    console.log(mongodb_uri);

}

async function connectToDatabase() {
    
    console.log("Establish Connection to Database ...")

    // instantiate new MongoClient
    const client = new MongoClient(mongodb_uri)
    await client.connect()
    const db = client.db()

    // Declare database collection
    const collection = db.collection('myCollection')

    // Data to be inserted into myCollection
    const record = {
        itemName: "Item 1",
        itemValue: 1000,
        itemDescription: "Description 1",
        dateOfExpense: "20223/01/30",
        lastUpdated: new Date().getTime(),
    }

    // Inserting new record into 
    const query = {
        itemName: "Item 1 New"
    }

    const options = { upsert: true }
    const result = await collection.replaceOne(query, record, options)
    console.log(result);

    console.log("Data Captured");

    // Close the database connection
    client.close();
    
}

export default connectToDatabase;