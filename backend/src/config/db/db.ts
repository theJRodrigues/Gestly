import mongoose from "mongoose"

const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const conect = async () => {
  try {
    const dbConect = await mongoose.connect(
      `mongodb+srv://${dbUser}:${dbPassword}@cluster0.pltat.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`
    );
    console.log("conectou");
    return dbConect;
  } catch (error) {
    console.log(error);
  }
};
