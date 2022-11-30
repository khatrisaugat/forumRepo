const threadRoutes = (router) => {
  console.log("threadRoutes");
  const authControl = require("../controllers/authController");
  const threadControl = require("../controllers/threadController");
  router.post(
    "/threads",
    authControl.verify_token,
    threadControl.create_a_thread
  );
  router.get("/threads", threadControl.list_all_threads);
  router.get("/threads/:threadId", threadControl.read_a_thread);
  router.put("/threads/:threadId", threadControl.update_a_thread);
  router.delete("/threads/:threadId", threadControl.delete_a_thread);
};
module.exports = threadRoutes;
