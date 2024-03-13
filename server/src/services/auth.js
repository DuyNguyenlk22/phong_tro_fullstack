import db from "../models"; // mặc định chạy vào file index đầu tiên
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import { v4 } from "uuid";
dotenv.config();

const hashPassword = (password) => bcrypt.hashSync(password, bcrypt.genSaltSync(12));

export const registerService = ({ name, phone, password }) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.User.findOrCreate({
        where: { phone },
        defaults: {
          id: v4(),
          phone,
          name,
          password: hashPassword(password),
        },
      });
      const token =
        response[1] &&
        jwt.sign({ id: response[0].id }, process.env.SECRET_KEY, { expiresIn: "2d" });
      resolve({
        err: token ? 0 : 2,
        msg: token ? "Successfully" : "Phone number has been used !",
        token: token || null,
      });
    } catch (error) {
      reject(error);
    }
  });

export const loginService = ({ phone, password }) =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.User.findOne({
        where: { phone },
        raw: true, //!nếu không có thì sẽ trả về 1 đối tượng sequelize
      });
      //TODO: Kiểm tra phone và hashPass
      //*Nếu đúng thì trả token
      const checkPassword = response && bcrypt.compareSync(password, response.password);
      const token =
        checkPassword && jwt.sign({ id: response.id }, process.env.SECRET_KEY, { expiresIn: "2d" });
      resolve({
        err: token ? 0 : 2,
        msg: token ? "Successfully" : response ? "Password incorrect" : "Phone number not found !",
        token: token || null,
      });
    } catch (error) {
      reject(error);
    }
  });
