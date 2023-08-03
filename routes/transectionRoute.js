const express = require("express");
const {
  addTransection,
  getAllTransection,
  editTransection,
  deleteTransection,
} = require("../controllers/transectionCtrl");

// router object
const router = express.Router();

//Routes
// Add transection
router.post("/add-transection", addTransection);

// Edir transection
router.post("/edit-transection", editTransection);

// Delete transection
router.post("/delete-transection", deleteTransection);

// get transection
router.post("/get-transection", getAllTransection);
module.exports = router;