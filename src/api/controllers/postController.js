const Post = require("../models/postModel");
//crud in post
exports.create_a_post = function (req, res) {
  req.body = JSON.parse(JSON.stringify(req.body));
  const new_post = new Post(req.body);
  new_post.thread = req.body.threadId;
  new_post.user = req.user._id;
  new_post.save(function (err, post) {
    if (err) {
      res.send(err);
    }
    res.json(post);
  });
};
exports.read_a_post = function (req, res) {
  Post.findById(req.params.postId, function (err, post) {
    if (err) {
      res.send(err);
    }
    res.json(post);
  });
};
exports.update_a_post = function (req, res) {
  Post.findOneAndUpdate(
    { _id: req.params.postId },
    req.body,
    { new: true },
    function (err, post) {
      if (err) {
        res.send(err);
      }
      res.json(post);
    }
  );
};

exports.delete_a_post = function (req, res) {
  Post.remove(
    {
      _id: req.params.postId,
    },
    function (err, post) {
      if (err) {
        res.send(err);
      }
      res.json({ message: "Post successfully deleted" });
    }
  );
};
exports.list_all_posts = function (req, res) {
  Post.find({}, function (err, post) {
    if (err) {
      res.send(err);
    }
    res.json(post);
  });
};

exports.list_all_posts_by_user = function (req, res) {
  Post.find({ user: req.params.userId }, function (err, post) {
    if (err) {
      res.send(err);
    }
    res.json(post);
  });
};

exports.list_all_posts_by_thread = function (req, res) {
  Post.find({ thread: req.params.threadId }, function (err, post) {
    if (err) {
      res.send(err);
    }
    res.json(post);
  });
};

exports.list_all_posts_by_user_and_thread = function (req, res) {
  Post.find(
    { thread: req.params.threadId, user: req.params.userId },
    function (err, post) {
      if (err) {
        res.send(err);
      }
      res.json(post);
    }
  );
};
