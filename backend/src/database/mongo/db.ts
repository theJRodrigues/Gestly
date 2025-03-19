import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const dbName = process.env.DB_NAME;

if (!dbUser || !dbPassword || !dbName) {
  throw new Error("Alguma variável de ambiente do banco de dados não está definida.");
}

const conectMongo = async () => {
  try {
    const dbConect = await mongoose.connect(
      `mongodb+srv://${dbUser}:${dbPassword}@gestly.qozhz.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=Gestly`
    );
    console.log("Deu boa")
    return dbConect
  } catch (error) {
    console.log(error);
  }
};

export default conectMongo;
