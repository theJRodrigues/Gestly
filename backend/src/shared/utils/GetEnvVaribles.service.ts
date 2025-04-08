import { envs } from "@shared/constants"
import dotenv from "dotenv"
dotenv.config()



export class ValidateEnvVariables{
    static async execute(): Promise<void>{
        for(const [key, value] of Object.entries(envs)){
            if(!value){
                throw new Error(`A variável de ambiente ${key} não está definida`)
            }
        }
        return
    }

}