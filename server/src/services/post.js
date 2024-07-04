import db from '../models';
import { Op } from 'sequelize';

export const getPosts = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Post.findAll({
        raw: true,
        nest: true,
        attributes: ['id', 'title', 'star', 'address', 'description'],
        include: [
          { model: db.Images, as: 'imagesArr', attributes: ['images'] },
          {
            model: db.Attribute,
            as: 'attributes',
            attributes: { exclude: ['id', 'createdAt', 'updatedAt'] },
          },
          {
            model: db.User,
            as: 'user',
            attributes: ['name', 'zalo', 'phone'],
          },
        ],
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? 'OK' : 'Fail to get post',
        response,
      });
    } catch (error) {
      reject(error);
    }
  });
export const getPostsLimit = (page, query) =>
  new Promise(async (resolve, reject) => {
    try {
      let offset = !page || +page <= 1 ? 0 : +page - 1;
      const response = await db.Post.findAndCountAll({
        where: query,
        raw: true,
        nest: true,
        offset: offset * +process.env.LIMIT,
        limit: +process.env.LIMIT,
        attributes: ['id', 'title', 'star', 'address', 'description'],
        include: [
          { model: db.Images, as: 'imagesArr', attributes: ['images'] },
          {
            model: db.Attribute,
            as: 'attributes',
            attributes: { exclude: ['id', 'createdAt', 'updatedAt'] },
          },
          {
            model: db.User,
            as: 'user',
            attributes: ['name', 'zalo', 'phone'],
          },
        ],
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? 'OK' : 'Fail to get post',
        response,
      });
    } catch (error) {
      reject(error);
    }
  });
