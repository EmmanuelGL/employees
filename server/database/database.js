const mongoose = require('mongoose');
const URL = 'mongodb://localhost/serverAngular';
//si le quitas esto manda un warnin por la version ,{useNewUrlParser: true } es un analizador de conneccion
mongoose.connect(URL,{useNewUrlParser: true })
    .then(db => console.log('db is connected'))//promesas para coneccion 
    .catch(err => console.error(err));

module.exports = mongoose;