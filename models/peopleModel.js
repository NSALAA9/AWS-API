const dynamoose = require('dynamoose');

const peopleSchema = new dynamoose.Schema({
  id: {
    type: String,
    hashKey: true,
  },
  name: String,
  age: Number,
});

module.exports = dynamoose.model('People', peopleSchema);
