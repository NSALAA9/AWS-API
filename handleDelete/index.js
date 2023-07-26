'use strict';
const PeopleModel = require('../models/peopleModel');

exports.handler = async (event) => {
  try {
    const { id } = event.pathParameters;

    await PeopleModel.delete({ id });

    return {
      statusCode: 204,
      body: JSON.stringify({})
    };
  } catch (error) {
    console.error('Error deleting person:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Error deleting person' })
    };
  }
};
