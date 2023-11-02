import {NextFunction, Request, Response} from "express";
import dotenv from "dotenv";

dotenv.config();
const token = process.env.TOKEN;
const auth = (req: Request, res: Response, next: NextFunction) => {
    const bearerToken = req.get('Authorization');

    if (!bearerToken || !bearerToken.startsWith('Bearer ')) {
        return res.status(401).json({message: 'Unauthorized'});
    }
    const tokenAuth = bearerToken.split(' ')[1];

    if (tokenAuth != token) {
        res.status(401).send({message: "Auth error"});
    }
    next();
}
export default auth;