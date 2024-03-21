const {Router} = require('express');

const {getRoster, getPlayerId} = require('../controllers/getControllers.js')
const {postCreate, putUpdate, postLogin}  = require('../controllers/postController.js')
const getRouter = Router();
// getRouter.get('/:_id', getPlayerId)
getRouter.put('/:_id', putUpdate)
getRouter.get('/', getRoster)
getRouter.post('/', postCreate)
getRouter.post('/manager', postLogin)
// getRouter.get('/service', getService)

module.exports = getRouter;