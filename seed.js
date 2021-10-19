require('dotenv').config();
require('./config/database');
// require('./config/passport');
const Prop = require('./models/prop');

let prop = new Prop({title: 'First Prop', dependencies: 'None'});
prop.save()
.then(function(){
    process.exit();
})