const Thread = require("../models/threadModel");
//crud in thread
exports.create_a_thread = function (req, res) {
  req.body = JSON.parse(JSON.stringify(req.body));
  console.log("request", req.body);
  const new_thread = new Thread(req.body);
  new_thread.user = req.user._id;
  new_thread.save(function (err, thread) {
    if (err) {
      res.send(err);
    }
    res.json(thread);
  });
};

exports.read_a_thread = function (req, res) {
  Thread.findById(req.params.threadId, function (err, thread) {
    if (err) {
      res.send(err);
    }
    res.json(thread);
  });
};

exports.update_a_thread = function (req, res) {
  Thread.findOneAndUpdate(
    { _id: req.params.threadId },
    req.body,
    { new: true },
    function (err, thread) {
      if (err) {
        res.send(err);
      }
      res.json(thread);
    }
  );
};

exports.delete_a_thread = function (req, res) {
  Thread.remove(
    {
      _id: req.params.threadId,
    },
    function (err, thread) {
      if (err) {
        res.send(err);
      }
      res.json({ message: "Thread successfully deleted" });
    }
  );
};

exports.list_all_threads = function (req, res) {
  Thread.find({}, function (err, thread) {
    if (err) {
      res.send(err);
    }
    res.json(thread);
  });
};

exports.list_all_threads_by_user = function (req, res) {
  Thread.find({ user: req.params.userId }, function (err, thread) {
    if (err) {
      res.send(err);
    }
    res.json(thread);
  });
};
