const Roster = require("../models/roster.js");

const postCreate = async (req, res) => {
  const body = req.body;
  // console.log(body)
  // res.redirect('/pets');

  try {
      res.redirect('/addplayers');
      // const petDB = new Pet(body); // 1era Metodo
      // await petDB.save(); // 1era Metodo
    await Roster.create(body) //2do Metodo
  } catch (error) {
    console.log('error', error);
  }
};

module.exports = {
  postCreate,
};
