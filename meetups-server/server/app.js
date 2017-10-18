import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import morgan from "morgan";
import MeetupMiddlewares from './config/middlewares';
import cors from 'cors';

import { MeetupRoutes, GroupRoute } from './modules'

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/meetupsRN");

mongoose.connection
  .once("open", () => console.log("MondoDB Running"))
  .on("error", err => console.log(err));

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors()); 

//middlewares
MeetupMiddlewares(app);

//routes

app.use('/api', [ MeetupRoutes, GroupRoute ]);

app.listen(PORT, err => {
  if (!err) {
    console.log(`App running on port ${PORT}`) ;
  } else {
    console.log(err);
  }
});
