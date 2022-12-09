const commentRoutes = (router) => {
  const authControl = require("../controllers/authController");
  const commentControl = require("../controllers/commentController");
  router.post(
    "/comments",
    authControl.verify_token,
    commentControl.create_a_comment
  );
  router.get("/comments/:commentId", commentControl.read_a_comment);
  router.put("/comments/:commentId", commentControl.update_a_comment);
  router.delete("/comments/:commentId", commentControl.delete_a_comment);
  router.get(
    "/comments/post/:postId",
    commentControl.list_all_comments_by_post
  );
};

module.exports = commentRoutes;
