const express = require("express");
const {
  getCategories,
  getCategory,
  deleteCategory,
  updateCategory,
  createCategory,
} = require("../controller/categories");
const router = express.Router();
router.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    data: "All categories is here",
  });
});
// router.post("/", (req, res) => {
//   res.status(200).json({
//     success: true,
//     data: "ADD NEW CATEGORY",
//   });
// });
// router.put("/:id", (req, res) => {
//   res.status(200).json({
//     success: true,
//     data: `${req.params.id} - change category`,
//   });
// });
// router.delete("/:id", (req, res) => {
//   res.status(200).json({
//     success: true,
//     data: `${req.params.id} - delete this category`,
//   });
// });
// router.get("/:id", (req, res) => {
//   res.status(200).json({
//     success: true,
//     data: `${req.params.id} - read`,
//   });
// });
router.route("/").get(getCategories).post(createCategory);
router
  .route("/:id")
  .get(getCategory)
  .delete(deleteCategory)
  .put(updateCategory);

module.exports = router;
