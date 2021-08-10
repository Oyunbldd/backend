//controller ==> MVC ==> Model View Controller

const category = require("../models/category");
const Category = require("../models/category");
const MyError = require("../utils/myError");

const asyncHandler = require("express-async-handler");

exports.getCategories = asyncHandler(async (req, res, next) => {
  var categories = await Category.find();
  res.status(200).json({
    success: true,
    data: categories,
  });
});

exports.getCategory = asyncHandler(async (req, res, next) => {
  var category = await Category.findById(req.params.id);
  if (!category) {
    throw new MyError(req.params.id + "Id tei category baihgui", 400);
  }
  res.status(200).json({
    success: true,
    data: categories,
  });
});

exports.createCategory = asyncHandler(async (req, res, next) => {
  var category = await Category.create(req.body);
  res.status(200).json({
    success: true,
    data: category,
  });
});

exports.deleteCategory = asyncHandler(async (req, res, next) => {
  const category = await Category.findByIdAndDelete(req.params.id);
  if (!category) {
    throw new MyError(req.params.id + "Id tai category baihgui baina", 400);
  }
  res.status(200).json({
    success: true,
    data: category,
  });
});

exports.updateCategory = asyncHandler(async (req, res, next) => {
  const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  if (!category) {
    throw new MyError(req.params.id + "Id tei category baihgui baina.", 400);
  }
  res.status(200).json({
    success: true,
    data: category,
  });
});
