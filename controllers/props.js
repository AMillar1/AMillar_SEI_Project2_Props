const Prop = require('../models/prop');

module.exports = {
    index,
    show,
    new: newProp, 
    create,
}

function index(req, res) {
    Prop.find({}, function (err, props) {
        res.render('props/index', { title: 'All Props', props });
    });
}

function show(req, res) {
    const prop = Prop.findById(req.params.id);
    // if (prop === null) res.redirect('/');
    res.render('props/show', { title: 'Prop Detail', prop }) ;
}

function newProp(req, res) {
    res.render('props/new', { title: 'New Prop'});
}

function create(req, res) {
    const prop = new Prop(req.body);
    prop.save(function(err){
        console.log(err); //null means it worked! 
        res.redirect('/props');
    });
}