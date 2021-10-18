require('dotenv').config();
require('./config/database');
// require('./config/passport');
const Prop = require('./models/prop');

let prop = new Prop({title: 'First Prop'});
prop.save()
.then(function(){
    process.exit();
})