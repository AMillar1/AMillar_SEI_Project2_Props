const Prop = require('../models/prop');

module.exports = {
    create,
    delete: deleteComment
};

function deleteComment(req, res) {
    Prop.findOne({'comments._id': req.params.id}, function(err, prop){
        prop.comments.remove(req.params.id);
        prop.save(function(err){
            res.redirect(`/props/${prop._id}`); 
        });
    });
}

function create(req, res) {
    Prop.findById(req.params.id, function(err, prop) {
        prop.comments.push(req.body);
        prop.save(function(err) {
            res.redirect(`/props/${prop._id}`);
        })
    })
}