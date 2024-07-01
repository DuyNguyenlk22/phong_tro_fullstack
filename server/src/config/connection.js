import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const { DATABASE, DB_NAME, PASSWORD, HOST, DB_PORT } = process.env;

const config = {
  database: DATABASE,
  user: DB_NAME,
  pass: PASSWORD,
  host: HOST,
  port: DB_PORT,
};

const { database, user, pass, host, port } = config;

const sequelize = new Sequelize(database, user, pass, {
  host,
  port,
  dialect: 'mysql',
  logging: false,
});

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

export default connectDB;
