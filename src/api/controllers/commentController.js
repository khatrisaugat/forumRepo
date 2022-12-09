const Comment = require("../models/commentModel");
//crud in comment
exports.create_a_comment = function (req, res) {
  req.body = JSON.parse(JSON.stringify(req.body));
  console.log(req.body);
  const new_comment = new Comment(req.body);
  new_comment.user = req.user._id;
  new_comment.post = req.body.postId;
  console.log(new_comment);
  new_comment.save(function (err, comment) {
    if (err) {
      res.send(err);
    }
    res.json(comment);
  });
};
exports.read_a_comment = function (req, res) {
  Comment.findById(req.params.commentId, function (err, comment) {
    if (err) {
      res.send(err);
    }
    res.json(comment);
  });
};
exports.update_a_comment = function (req, res) {
  Comment.findOneAndUpdate(
    { _id: req.params.commentId },
    req.body,
    { new: true },
    function (err, comment) {
      if (err) {
        res.send(err);
      }
      res.json(comment);
    }
  );
};

exports.delete_a_comment = function (req, res) {
  Comment.remove(
    {
      _id: req.params.commentId,
    },
    function (err, comment) {
      if (err) {
        res.send(err);
      }
      res.json({ message: "Comment successfully deleted" });
    }
  );
};
exports.list_all_comments_by_post = function (req, res) {
  Comment.find({ post: req.params.postId }, function (err, comment) {
    if (err) {
      res.send(err);
    }
    res.json(comment);
  });
};
