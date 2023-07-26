'use strict';

const { v4: uuidv4 } = require('uuid');
const PeopleModel = require('../models/peopleModel');

exports.handler = async (event) => {
  try {
    const requestBody = JSON.parse(event.body);
    const newPerson = {
      id: uuidv4(), // Generate a unique ID for the new person
      name: requestBody.name,
      age: requestBody.age
    };

    const person = new PeopleModel(newPerson);
    await person.save();

    return {
      statusCode: 201,
      body: JSON.stringify(person)
    };
  } catch (error) {
    console.error('Error creating person:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error creating person' })
    };
  }
};
