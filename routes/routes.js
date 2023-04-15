import userController from "../src/controllers/userController.js";
import authMiddleware from './middlewares/authMiddleware.js';

export default function Routes(app){
  app.use(authMiddleware)
  app.route('/').get(userController.finAllUser)


}