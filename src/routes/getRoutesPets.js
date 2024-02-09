const {Router} = require('express');

const {getPets,} = require('../controllers/getControllers.js')
// const {postCreate} = require('../controllers/postController.js')                       
const getRouter = Router();

getRouter.get('/', getPets)
/* getRouter.get('/create', getCreate)
getRouter.post('/', postCreate)
getRouter.get('/:id', getPetId)
getRouter.delete('/:id', deletePet)
getRouter.put('/:id', updatePet) */

module.exports = getRouter;
