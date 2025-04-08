import express from "express";
import cors from "cors";
import Routes from "./routes/Router";
import { MongoDB } from "@infrastructure/MongoDB";
import { envs } from "@shared/constants";
import { ValidateEnvVariables } from "@shared/utils";
const app = express();
class main {
  static async execute() {
    ValidateEnvVariables.execute()
    await MongoDB.connect()
    
    const { serverPort, origin } = envs;
    app.use(cors({ credentials: true, origin: origin }));
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));
    app.use(Routes);

    app.listen(serverPort, () => {
        console.log("Sucesso ao conectar no servidor na porta " + serverPort);
      });
  }
}
main.execute();