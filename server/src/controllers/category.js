import * as categoryService from "../services/category.js";

export const getListCategory = async (req, res) => {
  try {
    let response = await categoryService.getCategories();
    return res.status(200).json(response);
  } catch (error) {
    return res.status(500).json({
      err: -1,
      msg: "Fail at category controller" + error,
    });
  }
};
