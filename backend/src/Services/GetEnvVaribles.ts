import dotenv from "dotenv"

interface IEnvVariables{
    dbUser: string,
    dbPassword: string, 
    serverPort: number,
    jwtSecret: string,
}

export class GetEnvVariables{
    static  variables(): IEnvVariables{
        dotenv.config()

        const serverPort = Number(process.env.PORT) || 3000;
        const dbUser = process.env.DB_USER;
        const dbPassword = process.env.DB_PASSWORD;
        const jwtSecret = process.env.JWT_SECRET

        if(!serverPort || !dbUser || !dbPassword || !jwtSecret){
            throw new Error("Verificar as variáveis de ambiente")
        }
        
        return {serverPort, dbUser, dbPassword, jwtSecret}
    }

}