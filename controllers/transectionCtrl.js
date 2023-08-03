const transectionModel = require("../models/transectionModel");

const getAllTransection = async (req, res) => {
  try {
    const transections = await transectionModel.find({
      userid: req.body.userid,
    });
    res.status(200).json(transections);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const editTransection = async (req, res) => {
  try {
    await transectionModel.findOneAndUpdate(
      { _id: req.body.transectionId },
      req.body.payload
    );
    res.status(200).send("Edit Succesfully");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const deleteTransection = async (req, res) => {
  try {
    await transectionModel.findByIdAndDelete({ _id: req.body.transectionId });
    res.status(200).send("Transection Deleted");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

const addTransection = async (req, res) => {
  try {
    const newTransection = new transectionModel(req.body);
    await newTransection.save();
    res.status(201).send("Transection created");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

module.exports = {
  getAllTransection,
  addTransection,
  editTransection,
  deleteTransection,
};
