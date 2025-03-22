import dotenv from "dotenv"

interface IEnvVariables{
    dbUser: string,
    dbPassword: string, 
    serverPort: number
}

export class GetEnvVariables{
    static  variables(): IEnvVariables{
        dotenv.config()

        const serverPort = Number(process.env.PORT) || 3000;
        const dbUser = process.env.DB_USER;
        const dbPassword = process.env.DB_PASSWORD;

        if(!serverPort || !dbUser || !dbPassword){
            throw new Error("Please, verify environment variables")
        }
        
        return {serverPort, dbUser, dbPassword}
    }

}