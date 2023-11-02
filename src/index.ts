import * as functions from 'firebase-functions';
import express, {NextFunction, Response, Request} from 'express';
import dotenv from 'dotenv';
import routes from './routes.fuctions'

const app = express();
dotenv.config();
app.use(express.json())
app.use(routes)

// start the server
export const MyFunctions = functions.https.onRequest(app);