import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';
import routes from './routes/routes.js';
import helmet from "helmet";
import connect from './src/db/connection.js';
const app = express();
dotenv.config({path: "./config/.env.dev"});
const PORT = process.env.PORT;

app.use(bodyParser.urlencoded({extended: true}));
app.use("*", cors());
app.use(helmet());

routes(app);

app.listen(PORT, ()=>{
  console.log("running", PORT)
});