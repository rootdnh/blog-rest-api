import  {UserSchema}  from "../db/schemas/userSchema.js";

export default new class UserRepository {
  
  async createUser(user){
  const response =  await UserSchema.create(user);
  return response;
  
  }
}