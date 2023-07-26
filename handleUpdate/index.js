'use strict';
const PeopleModel = require('../models/peopleModel');

exports.handler = async (event) => {
  try {
    const { id } = event.pathParameters;
    const requestBody = JSON.parse(event.body);

    const person = await PeopleModel.update({ id }, requestBody);

    return {
      statusCode: 200,
      body: JSON.stringify(person)
    };
  } catch (error) {
    console.error('Error updating person:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error updating person' })
    };
  }
};
