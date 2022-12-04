import express from 'express';
import cors from 'cors';
import mongoose  from 'mongoose';
const app =express();

import router from './routes/route.js';
import {Connection} from './database/db.js'

app.use(cors());
app.use(express.json());
app.use('/',router);


const URL=`mongodb+srv://user:testpass@test.ohrdu4c.mongodb.net/TEST2?retryWrites=true&w=majority`

const PORT=8000;
Connection(URL);

app.listen(PORT,()=>{console.log(`Running on port: ${PORT}`)});

