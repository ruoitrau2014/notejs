import { HttpException } from "@core/exceptions";
import { Logger } from "@core/utils";
import { NextFunction, Request, Response } from "express";

function errorMiddleware(error: HttpException, req: Request, res: Response, next: NextFunction) {
    const status:number=error.status || 500;
    const message:string=error.message || "something when wrong";
    Logger.error('[ERROR] - status: ${status} - msg: ${message}');
    res.status(status).json({message:message});
};
export default errorMiddleware;

