import { Request, Response, NextFunction } from "express";

export const addTimestamp = (request: Request, response: Response, next: NextFunction) => { 
    request.timestamp = Date.now();
    next();
}