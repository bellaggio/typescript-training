import {Router} from 'express';
import routesAuditAddress from "./infra/routes/routes.audit.address";
import routesMultiply from "./infra/routes/routes.multiply.numbers";
import routesCounty from "./infra/routes/routes.internal.integration";

const routes = Router();
import auth from "./infra/middleware/auth";

routes.use(auth);

routes.use(routesAuditAddress);
routes.use(routesCounty);
routes.use(routesMultiply);

export default routes;