//controller ==> MVC ==> Model View Controller
const category = require("../models/category");
const Category = require("../models/category");
exports.getCategories = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: "All categories is here",
  });
};
exports.getCategory = (req, res, next) => {
  res.status(200).json({
    success: true,
    data: `${req.params.id} -tai useriin data`,
  });
};
exports.createCategory = async (req, res, next) => {
  var category = await Category.create(req.body);
  try {
    res.status(200).json({
      success: true,
      data: category,
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      error: err,
    });
  }
};
exports.deleteCategory = (req, res, next) => {
  res.status(500).json({
    success: false,
    err: "Permission denied",
  });
};
exports.updateCategory = (req, res, next) => {
  res.status(500).json({
    success: false,
    err: "Permission denied",
  });
};
