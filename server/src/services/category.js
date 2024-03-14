import db from "../models";

//*get all category
export const getCategories = () =>
  new Promise(async (resolve, reject) => {
    try {
      const response = await db.Category.findAll({
        attributes: ["code", "value"],
      });
      resolve({
        err: response ? 0 : 1,
        msg: response ? "OK" : "Fail to get categories",
        response,
      });
    } catch (error) {
      reject(error);
    }
  });
