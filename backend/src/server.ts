import express from "express";
import cors from "cors";
import Routes from "./routes/Router";
import { GetEnvVariables } from "@shared/services";
import { MongoDB } from "@infrastructure/database";

const { serverPort } = GetEnvVariables.variables();
const app = express();

app.use(cors({ credentials: true, origin: "htpp://localhost:5147" }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(Routes);

MongoDB.connect().then(() => {
  app.listen(serverPort, () => {
    console.log("Sucesso ao conectar no servidor na porta " + serverPort);
  });
});
