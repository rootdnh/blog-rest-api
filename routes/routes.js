import userController from "../src/controllers/userController.js";
import authMiddleware from './middlewares/authMiddleware.js';

export default function Routes(app){
  app.use(authMiddleware)
 
  app.route('/').get(async (req, res)=>{
    const user = {
      name: "Djonata 2"
    }
   const response = await userController.CreateUser(user)
    res.send(response)
  });
  


}