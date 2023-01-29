import { error } from '@sveltejs/kit';
import { fail } from '@sveltejs/kit';

// import connectToDatabase from '../../lib/db.js';

import {MongoClient} from 'mongodb'

import { config } from 'dotenv';

config();

export const actions = {
    
    default: async ({request}) => {
        
        // Get data from client
        const formData = await request.formData();
        const expense = formData.get("expense");
        const amount = formData.get("amount");
        const description = formData.get("description");
        const date = formData.get("date");
        
        // console.log({expense, amount, description, date})

        // Validate form inputs
        if (!expense) {
            return fail(400, {message: "Expense is required"}); // Why is this not working?
        }

        // Fetch connection string from dotenv file
        const mongodb_uri = String( process.env['MONGODB_URI']);

        if (!mongodb_uri) {

            throw new Error (
                'Please define the MONGODB_URI environment variable inside a dotenv file'
            )
            
        } else {

            console.log(mongodb_uri);

        }

        // Make Connection to Database
        console.log("Establish Connection to Database ...")

        // instantiate new MongoClient
        const client = new MongoClient(mongodb_uri)
        await client.connect()
        const db = client.db()
    
        // Declare database collection
        const collection = db.collection('myCollection')
    
        // Data to be inserted into myCollection
        const record = {
            itemName: expense,
            itemValue: amount,
            itemDescription: description,
            dateOfExpense: date,
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
            
        // Process Form Data
        
        // Return a Message & Data to Client
        return {
            message: "Form data submitted",
            data: {expense, amount, description, date},            
        }

    },
};