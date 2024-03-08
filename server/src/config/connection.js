import { Sequelize } from "sequelize";
import dotenv from "dotenv";

dotenv.config();

let config = {
  database: process.env.DATABASE,
  user: process.env.DB_NAME,
  pass: process.env.PASSWORD,
  host: process.env.HOST,
  port: process.env.DB_PORT,
};

const { database, user, pass, host, port } = config;

const sequelize = new Sequelize(database, user, pass, {
  host,
  port,
  dialect: "mysql",
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

export default connectDB;
