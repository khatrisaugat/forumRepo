const postRoutes = (router) => {
  const authControl = require("../controllers/authController");
  const postControl = require("../controllers/postController");
  router.post("/posts", authControl.verify_token, postControl.create_a_post);
  router.get("/posts", postControl.list_all_posts);
  router.get("/posts/:postId", postControl.read_a_post);
  router.put("/posts/:postId", postControl.update_a_post);
  router.delete("/posts/:postId", postControl.delete_a_post);
  router.get("/posts/user/:userId", postControl.list_all_posts_by_user);
  router.get("/posts/thread/:threadId", postControl.list_all_posts_by_thread);
  router.get(
    "/posts/user/:userId/thread/:threadId",
    postControl.list_all_posts_by_user_and_thread
  );
};
module.exports = postRoutes;
