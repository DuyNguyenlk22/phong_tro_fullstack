import db from '../models'; // mặc định chạy vào file index đầu tiên
import bcrypt from 'bcryptjs';
import dotenv from 'dotenv';
import chothuecanho from '../../data/chothuecanho.json';
import generateCode from '../ultis/generateCode';
import { v4 } from 'uuid';
import { dataAcreage, dataPrice } from '../ultis/data';
import { getNumberFromString } from '../ultis/common';
dotenv.config();

const dataBody = chothuecanho.body;

const hashPassword = (password) => bcrypt.hashSync(password, bcrypt.genSaltSync(12));

export const insertService = () =>
  new Promise(async (resolve, reject) => {
    try {
      dataBody.forEach(async (item) => {
        let labelCode = generateCode(item?.header?.class?.classType);
        let curAcreage = getNumberFromString(item.header?.attributes?.acreage);
        let curPrice = getNumberFromString(item.header?.attributes?.price);
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
          categoryCode: 'NCT',
          description: JSON.stringify(item?.mainContent?.content),
          userId,
          overviewId,
          imagesId,
          acreageCode: dataAcreage.find((area) => area.max >= curAcreage && area.min <= curAcreage)
            ?.code,
          priceCode: dataPrice.find((price) => price.max >= curPrice && price.min <= curPrice)
            ?.code,
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
        await db.Label.findOrCreate({
          where: { code: labelCode },
          defaults: {
            code: labelCode,
            value: item?.header?.class?.classType,
          },
        });
        //* table overview
        await db.Overview.create({
          id: overviewId,
          code: item?.overview?.content.find((i) => i.name === 'Mã tin:')?.content,
          area: item?.overview?.content.find((i) => i.name === 'Khu vực')?.content,
          type: item?.overview?.content.find((i) => i.name === 'Loại tin rao:')?.content,
          target: item?.overview?.content.find((i) => i.name === 'Đối tượng thuê:')?.content,
          created: item?.overview?.content.find((i) => i.name === 'Ngày đăng:')?.content,
          expire: item?.overview?.content.find((i) => i.name === 'Ngày hết hạn:')?.content,
          bonus: item?.overview?.content.find((i) => i.name === 'Gói tin:')?.content,
        });
        //*table user
        await db.User.create({
          id: userId,
          name: item?.contact?.content.find((i) => i.name === 'Liên hệ:')?.content,
          password: hashPassword('123456'),
          phone: item?.contact?.content.find((i) => i.name === 'Điện thoại:')?.content,
          zalo: item?.contact?.content.find((i) => i.name === 'Zalo')?.content,
        });
      });
      resolve('Done');
    } catch (error) {
      reject(error);
    }
  });

export const createPricesAndAreas = () =>
  new Promise((resolve, reject) => {
    try {
      dataPrice.forEach(async (item, index) => {
        await db.Price.create({
          code: item.code,
          value: item.value,
          order: index + 1,
        });
      });
      dataAcreage.forEach(async (item, index) => {
        await db.Acreage.create({
          code: item.code,
          value: item.value,
          order: index + 1,
        });
      });
      resolve('OK');
    } catch (error) {
      reject(error);
    }
  });
