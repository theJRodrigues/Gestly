import express from "express";
import cookieParser from "cookie-parser"
import cors from "cors";
import Routes from "./routes/Router";
import { MongoDB } from "@infrastructure/MongoDB";
import { envs } from "@shared/constants";
import { ValidateEnvVariables } from "@shared/services";
import mongoSanitize from "express-mongo-sanitize";

const app = express();
class main {
  static async execute() {
    ValidateEnvVariables.execute()
    await MongoDB.connect()
    
    const { serverPort, origin } = envs;
    app.use(cors({ credentials: true, origin: origin }));
    app.use(express.json());
    app.use(cookieParser())
    app.use(express.urlencoded({ extended: false }));
    app.use(mongoSanitize())
    app.use(Routes);
    
    app.listen(serverPort, () => {
        console.log("Sucesso ao conectar no servidor na porta " + serverPort);
      });
  }
}
main.execute();