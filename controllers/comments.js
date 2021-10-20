const Prop = require('../models/prop');

module.exports = {
    create,
    delete: deleteComment
};

function deleteComment(req, res) {
    const prop = Prop.findOne({'comments._id': req.params.id});
    const comment = prop.comments.id(req.params.id);
    comment.remove();
    prop.save();
    res.redirect(`/props/${prop._id}`);
}

function create(req, res) {
    Prop.findById(req.params.id, function(err, prop) {
        prop.comments.push(req.body);
        prop.save(function(err) {
            res.redirect(`/props/$(prop._id)`);
        })
    })
}