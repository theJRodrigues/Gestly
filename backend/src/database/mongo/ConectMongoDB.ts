import mongoose from "mongoose";
import { GetEnvVariables } from "../../Services/GetEnvVaribles";

export class ConectMongoDB {
  static async connect(): Promise<void>{
    const {dbUser, dbPassword} = GetEnvVariables.variables()
    try {
      await mongoose.connect(
        `mongodb+srv://${dbUser}:${dbPassword}@gestly.qozhz.mongodb.net/Gestly?retryWrites=true&w=majority&appName=Gestly`
      );
      //Retirar no deploy
      console.log("Sucesso na conexão com banco de dados")
      return
    } catch (error) {
      throw new Error("Error connecting to database: " + error)
    }
  }
}

