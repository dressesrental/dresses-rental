import "dotenv/config";
import cors from "cors";
import bodyParser from "body-parser";
import express, { Application } from 'express';
import {router} from '../../routes/Route';

function createBAsicAppWithExpress(port?: string): Application {
  const app: Application = express();
  app.use(cors());
  app.use(bodyParser.json());
  app.use(express.json());
  app.get('/', (req, res) => {
    res.send("App run")
  })

  const PORT = port || process.env.PORT || "8000";
  app.listen(PORT, () => {
    console.log(`app run on http://localhost:${PORT}`);
  });

  
  app.use("", router);
  
  return app
};
export default createBAsicAppWithExpress;
