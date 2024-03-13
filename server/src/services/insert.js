import db from "../models"; // mặc định chạy vào file index đầu tiên
import bcrypt from "bcryptjs";
import dotenv from "dotenv";
import nhachothue from "../../data/nhachothue.json";
import generateCode from "../ultis/generateCode";
import { v4 } from "uuid";
dotenv.config();

const dataBody = nhachothue.body;

const hashPassword = (password) => bcrypt.hashSync(password, bcrypt.genSaltSync(12));

export const insertService = () =>
  new Promise(async (resolve, reject) => {
    try {
      dataBody.forEach(async (item) => {
        let labelCode = generateCode(4);
        let attributeId = v4();
        let userId = v4();
        let overviewId = v4();
        let imagesId = v4();
        let postId = v4();
        //* table Post
        await db.Post.create({
          id: postId,
          title: item?.header?.title,
          star: item?.header?.star,
          labelCode,
          address: item?.header?.address,
          attributeId,
          categoryCode: "NCT",
          description: JSON.stringify(item?.mainContent?.content),
          userId,
          overviewId,
          imagesId,
        });
        //* tabel attribute

        await db.Attribute.create({
          id: attributeId,
          price: item?.header?.attributes?.price,
          acreage: item?.header?.attributes?.acreage,
          published: item?.header?.attributes?.published,
          hashtag: item?.header?.attributes?.hashtag,
        });
        //* table images
        await db.Images.create({
          id: imagesId,
          images: JSON.stringify(item?.images),
        });
        //* table label
        await db.Label.create({
          code: labelCode,
          value: item?.header?.class?.classType,
        });
        //* table overview
        await db.Overview.create({
          id: overviewId,
          code: item?.overview?.content.find((i) => i.name === "Mã tin:")?.content,
          area: item?.overview?.content.find((i) => i.name === "Khu vực")?.content,
          type: item?.overview?.content.find((i) => i.name === "Loại tin rao:")?.content,
          target: item?.overview?.content.find((i) => i.name === "Đối tượng thuê:")?.content,
          created: item?.overview?.content.find((i) => i.name === "Ngày đăng:")?.content,
          expire: item?.overview?.content.find((i) => i.name === "Ngày hết hạn:")?.content,
          bonus: item?.overview?.content.find((i) => i.name === "Gói tin:")?.content,
        });
        //*table user
        await db.User.create({
          id: userId,
          name: item?.contact?.content.find((i) => i.name === "Liên hệ:")?.content,
          password: hashPassword("123456"),
          phone: item?.contact?.content.find((i) => i.name === "Điện thoại:")?.content,
          zalo: item?.contact?.content.find((i) => i.name === "Zalo")?.content,
        });
      });
      resolve("Done");
    } catch (error) {
      reject(error);
    }
  });
