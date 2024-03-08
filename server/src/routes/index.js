import authRoute from "./auth.js";

const initRoutes = (app) => {
  app.use("/api/v1/auth", authRoute);

  return app.use("/", (req, res) => {
    res.send("server is running ...");
  });
};

export default initRoutes;
