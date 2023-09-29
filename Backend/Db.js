const mongoose = require('mongoose');

const url = `mongodb+srv://sameersc62:${encodeURIComponent(
  'sameerkch@A1'
)}@cluster0.suk65ai.mongodb.net/mydatabase?retryWrites=true&w=majority`;

const connectionParams = {
  useNewUrlParser: true,
};

const mongoDB = () => {
  mongoose
    .connect(url, connectionParams)
    .then(() => {
      console.log('MongoDb is Connected');
     //logic




    })
    .catch((err) => {
      console.error(`Error connecting to the database. ${err}`);
    });
};

module.exports = mongoDB;