import * as acreageService from '../services/acreage.js';

export const getListAcreage = async (req, res) => {
  try {
    let response = await acreageService.getAcreagesService();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: 'Fail at category controller' + error,
    });
  }
};
