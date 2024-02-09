const {Router} = require('express');

const {getRoster} = require('../controllers/getControllers.js')
const {postCreate}  = require('../controllers/postController.js')
const getRouter = Router();

getRouter.get('/', getRoster)
getRouter.post('/', postCreate)
// getRouter.get('/service', getService)

module.exports = getRouter;