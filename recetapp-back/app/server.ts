import * as express from "express";
import * as bodyParser from "body-parser";
import {routes} from "./api/routes";
import * as http from "http";
import * as cors from "cors";

export const init = (port, db): http.Server => {
  const app = express();

  app.use("/api", bodyParser.json());
  app.use(cors());
  app.use("/api", bodyParser.urlencoded({extended: true}));
  app.use("/api", routes(db));

  return app.listen(port, () => {
    console.log(`Server listening at port ${port}`);
  });
};
