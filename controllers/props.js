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
    Prop.find({}, function (err, props) {
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
    const prop = new Prop(req.body);
    prop.save(function(err){
        console.log(err); //null means it worked! 
        res.redirect('/props');
    });
}

function deleteProp(req, res) {
        Prop.findByIdAndDelete(req.params.id, function (err) {
            res.redirect('/props') ;
        });
    }

function edit(req, res) {
    Prop.findById(req.params.id, function (err, prop) {
        res.render('props/edit', { title: 'Edit Prop', prop}); //find all props and pass them to the view. 
    });
}

function update(req, res) {
    Prop.findByIdAndUpdate(req.params.id, req.body, function(err, prop) {
        res.redirect('/props');
    })
}