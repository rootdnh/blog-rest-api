import express from 'express';
import dotenv from 'dotenv';
dotenv.config({path: "./config/.env.dev"});
const app = express();
const PORT = process.env.PORT;

app.listen(PORT, ()=>{
  console.log("running", PORT)
});

app.get('/', (req, resp)=>{
  resp.send({"name": 'djonata'})
 })