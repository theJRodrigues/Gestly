import { envs } from "@shared/constants"
export class ValidateEnvVariables{
    static execute(){
        for(const [key, value] of Object.entries(envs)){
            if(!value){
                throw new Error(`A variável de ambiente ${key} não está definida`)
            }
        }
        return
    }

}