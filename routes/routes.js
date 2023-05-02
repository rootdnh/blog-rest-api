import userController from "../src/controllers/userController.js";
import authMiddleware from './middlewares/authMiddleware.js';

export default function Routes(app){
  app.use(authMiddleware)
 


  app.route('/create-user').post(async (req, res)=>{
   
   const {name, pass} = req.body;
    
    res.status(200).json({name, message: 'Successfully created'})
    //res.status(200).json(user)
    //const response = await userController.CreateUser(user)
   // res.send(response)
  });



}