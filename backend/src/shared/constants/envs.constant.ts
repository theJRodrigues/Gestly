import dotenv from "dotenv"
dotenv.config()

export const envs = {
    serverPort: process.env.PORT || 3000,
    dbUser: process.env.DB_USER,
    dbPassword: process.env.DB_PASSWORD,
    jwtSecret: process.env.JWT_SECRET,
    origin: process.env.ORIGIN
}