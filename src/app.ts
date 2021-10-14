import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as cors from 'cors';
import * as logger from 'morgan';
import { connectServerDb } from './config/db';
import { routerUser } from './routes/User';
import { routerPet } from './routes/Pet';
import { routerRelease } from './routes/Release';

export const app = express();

app.use(cors());

app.use(bodyParser.json());

app.use(logger('dev'));

connectServerDb();

app.use("/user", routerUser);
app.use("/pet", routerPet);
app.use("/release", routerRelease);
app.use("/", (req, res) => res.json("Api Pets"))

