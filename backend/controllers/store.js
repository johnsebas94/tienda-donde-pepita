const { request } = require("express");
const Store = require("../models/store");

//Store registry
const registerStore = async (req, res) => {
  if (!req.body.name || !req.body.address || !req.body.city)
    return res.status(401).send("Failed: No complete store data");

  const existingStore = await Store.findOne({ name: req.body.name });
  if (existingStore)
    return res
      .status(401)
      .send("Process failed: Store has aleady been created");

  //Create JSON to send store models
  const store = new Store({
    name: req.body.name,
    address: req.body.address,
    city: req.body.city,
    dbStatus: true,
  });

  //Save in Mongodb
  const result = await store.save();
  if (!result) return res.status(401).send("There was a failed register store");
  return res.status(200).send({ store });
};

//Check List
const listStore = async (req, res) => {
  const store = await Store.find();
  if (!store) return res.status(401).send("No find Store");
  return res.status(200).send({ store });
};
//Export module
module.exports = { registerStore, listStore };
