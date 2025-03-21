import express from "express";
import cors from "cors";
import Routes from "./routes/Router";
import { config } from "dotenv";
import conectMongo from "./database/mongo/db";

config();
const port = process.env.PORT || 3000;
const app = express();

app.use(cors({ credentials: true, origin: "htpp://localhost:5147" }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(Routes);

conectMongo()
  .then(() => {
    app.listen(port, () => {
      console.log("teste");
    });
  })
  .catch((error) => {
    console.error("Erro ao tentar conectar no banco de dados " + error);
  });
