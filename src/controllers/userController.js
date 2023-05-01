import UserRepository from "../repositories/userRepository.js"

export default new class UserController {
 
 async CreateUser(params){

   const newUser = await UserRepository.createUser(params);
   return newUser;
 }

  finAllUser(req, res){
   res.send ({
      name: 'djonata'
    })
  }

}