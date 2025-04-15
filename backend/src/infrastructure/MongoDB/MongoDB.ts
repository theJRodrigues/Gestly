import { envs } from "@shared/constants";
import mongoose from "mongoose";

export class MongoDB {
  static async connect(): Promise<void> {
    const { dbUser, dbPassword } = envs;
    try {
      await mongoose.connect(
        `mongodb+srv://${dbUser}:${dbPassword}@gestly.qozhz.mongodb.net/Gestly?retryWrites=true&w=majority&appName=Gestly`
      );
      //TODO Retirar no deploy
      console.log("Conexão com o banco de dados feita com sucesso");
      return;
    } catch (error) {
      throw new Error(
        "Ocorreu um erro ao tentar conectar no banco de dados" + error
      );
    }
  }
}
