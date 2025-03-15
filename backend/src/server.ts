import express from 'express'
import path from "path"
import cors from "cors"
import bodyParser from "body-parser"
import routes from "./routes/Router"
import dotenv from 'dotenv'
import "./config/db/db"

dotenv.config()
const port = process.env.PORT || 3000;


const app = express();
app.use('/uploads', express.static(path.join(__dirname, '/uploads')))
app.use(cors({credentials: true, origin: "htpp://localhost:5147"}))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(routes);

app.listen(port, () => {
  console.log("teste")
});
