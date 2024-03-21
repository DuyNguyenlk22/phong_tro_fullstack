import db from '../models';

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
