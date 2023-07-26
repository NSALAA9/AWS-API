'use strict';
const PeopleModel = require('../models/peopleModel');

exports.handler = async (event) => {
  try {
    const { id } = event.pathParameters;

    if (id) {
      const person = await PeopleModel.get(id);
      return {
        statusCode: 200,
        body: JSON.stringify(person)
      };
    } else {
      const people = await PeopleModel.scan().exec();
      return {
        statusCode: 200,
        body: JSON.stringify(people)
      };
    }
  } catch (error) {
    console.error('Error reading person:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error reading person' })
    };
  }
};
