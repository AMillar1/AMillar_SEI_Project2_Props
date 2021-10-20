const Prop = require('../models/prop');

module.exports = {
    index,
    show,
    new: newProp, 
    create,
    delete: deleteProp,
    edit,
    update,
}

function index(req, res) {
    Prop.find({user: req.user._id}, function (err, props) {
        res.render('props/index', { title: 'All Props', props });
    });
}

function show(req, res) {
    Prop.findById(req.params.id, function (err, prop){
        res.render('props/show', { title: 'Prop Detail', prop }) ;
    });
}
    // if (prop === null) res.redirect('/');

function newProp(req, res) {
    res.render('props/new', { title: 'New Prop'}); //find all props and pass them to the view. 
}

function create(req, res) {
    req.body.user = req.user._id;
    const prop = new Prop(req.body);
    prop.save(function(err){
        console.log(err); //null means it worked! 
        res.redirect('/props');
    });
}

function deleteProp(req, res) {
    Prop.findOneAndDelete({_id: req.params.id, user: req.user._id}, function (err) {
        res.redirect('/props') ;
    });
}

function edit(req, res) {
    Prop.findById(req.params.id, function (err, prop) {
        res.render('props/edit', { title: 'Edit Prop', prop}); //find all props and pass them to the view. 
    });
}

function update(req, res) {
    Prop.findOneAndUpdate({_id: req.params.id, user: req.user._id}, req.body, function(err, prop) {
        res.redirect('/props');
    });
}