const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost/aval_db', { useNewUrlParser: true });

const db = mongoose.connection;

db.on('error', (err) => console.error(`error: ${err}`));

db.once('open', () => console.info('connected to db'));

module.exports = mongoose;