import accountRoute from "./accountRoutes.js";
import singerRoute from "./singerRoutes.js";

const routes = (app) => {
  app.use("/api/accounts", accountRoute);
  app.use("/api/singers", singerRoute);
};

export default routes;