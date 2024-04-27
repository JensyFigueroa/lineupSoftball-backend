const {Roster, Login} = require("../models/schemas.js");

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
    console.log('Update error', {error: error.message})
  }
} 

const postLogin = async (req, res) => {
  const {userName, password} = req.body

  try {
    const user = await Login.findOne({userName})
    
    if (user.userName === userName && user.password === password) {
      return res.status(200).json(user);
    }else{
      return res.status(401).json({message: 'Incorrect credentials'})
    }
  } catch (error) {
    console.log('Login error', {error: error.message})
  }
  
}; 

const putAVG = async (req, res) => {
  const _id = req.params._id
  const body = req.body

  console.log('postAVG',_id)

  /* try {
    const playerUpdate = await Roster.findByIdAndUpdate(_id, body, {useFindAndModify:false})

    console.log(playerUpdate)

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
    console.log('Update error', {error: error.message})
  } */
}

module.exports = {
  postCreate,
  putUpdate,
  postLogin,
  putAVG
};
