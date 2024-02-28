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

const putUpdate = async (req, res) => {
  const _id = req.params._id
  const body = req.body

  try {
    const playerUpdate = await Roster.findByIdAndUpdate(_id, body, {useFindAndModify:false})

    if (playerUpdate) {
      res.json({
        state:true,
        message: 'It was modified correctly'
      })  
    } else {
      res.json({
        state:false,
        message: 'It was not modified correctly'
      })
    }

  } catch (error) {
    console.log('Update error', error)
  }
} 

module.exports = {
  postCreate,
  putUpdate
};
