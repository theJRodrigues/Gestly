import { GetEnvVariables } from "@shared/services/GetEnvVaribles";
import mongoose from "mongoose";

export class MongoDB {
  static async connect(): Promise<void> {
    const { dbUser, dbPassword } = GetEnvVariables.variables();
    try {
      await mongoose.connect(
        `mongodb+srv://${dbUser}:${dbPassword}@gestly.qozhz.mongodb.net/Gestly?retryWrites=true&w=majority&appName=Gestly`
      );
      //Retirar no deploy
      console.log("Conexão com o banco de dados feita com sucesso");
      return;
    } catch (error) {
      throw new Error("Erro ao conectar com o banco de dados" + error);
    }
  }
}
