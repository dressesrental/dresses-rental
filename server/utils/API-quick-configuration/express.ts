import "dotenv/config";
import cors from "cors";
import bodyParser from "body-parser";
import express, { Application } from 'express';


function createBAsicAppWithExpress(port?: string): Application {
  const app: Application = express();
  app.use(cors());
  app.use(bodyParser.json());
  app.use(express.json());
  const PORT = port || process.env.PORT || "8080";
  app.listen(PORT);
 
  return app
};
export default createBAsicAppWithExpress;
