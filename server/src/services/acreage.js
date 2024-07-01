import db from '../models';

//*get all acreage
export const getAcreagesService = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Acreage.findAll({
        attributes: ['code', 'value', 'order'],
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? 'OK' : 'Fail to get acreages',
        response,
      });
    } catch (error) {
      reject(error);
    }
  });
