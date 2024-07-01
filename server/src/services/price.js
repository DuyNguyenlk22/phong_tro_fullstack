import db from '../models';

//*get all price
export const getPricesService = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Price.findAll({
        attributes: ['code', 'value', 'order'],
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? 'OK' : 'Fail to get prices',
        response,
      });
    } catch (error) {
      reject(error);
    }
  });
