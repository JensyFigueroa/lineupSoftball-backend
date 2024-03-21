const {Roster, Login} = require("../models/schemas.js");

const getRoster = async (req, res) => {
  // res.send('Here getRegularVerbs')
  try {
    const rosterDB = await Roster.find();
    //console.log(arrayRegularVerbsDB)
     res.send(rosterDB)

    // res.render("regularVerbs", {
    //   arrayRegularVerbs: arrayRegularVerbsDB
    // }); 
    
  } catch (error) {
    console.log(error);
  }
};

const getPlayerId = async (req, res) => {
  const _id = req.params._id

  try {
    const playerBD = await Roster.findOne({_id})
    console.log(playerBD)

    res.render('detailPlayer', {number:playerBD.number})

  } catch (error) {
    console.log(error)
    // res.render('detailPlayer', {
    //   firstName: playerBD.firstName,
    //   lastName: playerBD.lastName,
    //   error:true,
    //   message: 'Id not exists'
    // })
  }
}


// const getPets = async (req, res) => {
  
// }; 

/* const getRegularVerbs = (req, res) => {
  //   res.send('server started')
  res.render("index", { title: "Home" }); //Titlutlo dinamico
}; */

/* const getService = (req, res) => {
  //   res.send('Page service')
  res.render("service", { title: "Service" }); //Titlutlo dinamico
};

const getPets = async (req, res) => {
  try {
    const arrayPetsDB = await Pet.find();
    // console.log(arrayPetsDB)

    res.render("pets", {
      arrayPets: arrayPetsDB

      // arrayPets: [
      //   { id: 1, name: "Rex", description: "Description Rex" },
      //   { id: 2, name: "Floffy", description: "Description Floffy" },
      // ],
    }); //Titlutlo dinamico
  } catch (error) {
    console.log(error);
  }
};

const getCreate = (req, res) =>{
  res.render("create", {title:"Create new pet"})
}

const getPetId = async (req, res) => {
  const _id = req.params.id

  try {
    const petDB = await Pet.findOne({_id})
    // console.log(petDB)

    res.render('detailPet', {
      title: `Details ${petDB.name}`,
      pet: petDB,
      error: false
    })

  } catch (error) {
    // console.log(error)
    res.render('detailPet', {
      title:'Error',
      error:true,
      message: 'Id not exists'
    })
  }
}

const deletePet = async (req, res) => {
  const _id = req.params.id
  // console.log(_id)

  try {
    const petDelete = await Pet.findByIdAndDelete({_id})

    if (petDelete) {
      res.json({
        state:true,
        message: 'Pet deleted '
      })
    }else{
      res.json({
        state:false,
        message:'Cannot be delete'
      })
    }
  } catch (error) {
    console.log('Error delete', error)
  }
}


const updatePet = async (req, res) => {
  const _id = req.params.id
  const body = req.body

  try {
    const petUpdate = await Pet.findByIdAndUpdate(_id, body, {useFindAndModify:false})

    if (petUpdate) {
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
} */

module.exports = {
  getRoster,
  getPlayerId,
/*  getPets,
   getService,
  getPets,
  getCreate,
  getPetId,
  deletePet,
  updatePet */
};
