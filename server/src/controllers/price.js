import * as pricesService from '../services/price.js';

export const getListPrice = async (req, res) => {
  try {
    let response = await pricesService.getPricesService();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: 'Fail at category controller' + error,
    });
  }
};
