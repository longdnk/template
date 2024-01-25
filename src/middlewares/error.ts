import { Request, Response, NextFunction } from 'express';
import { ResponseStatus } from '../constant';
import { AxiosError } from 'axios';
import { logData } from './log';

export const errorHandler = (
    error: any,
    request: Request,
    response: Response,
    next: NextFunction
) => {
    console.error(error.stack);
    response.status(ResponseStatus.BAD_REQUEST).send(error.message);
    next();
}

export const errorLogger = (error: any, request: Request, response: Response) => {
    console.error(error.stack);

    const err = error as AxiosError;
    const statusCode = err.response?.status ?? ResponseStatus.BAD_REQUEST;
    const message = err.response?.data ?? err.message;

    const dataSend = {
        status: statusCode,
        response: message,
    }
    logData(dataSend)

    return response.status(statusCode).send(dataSend)
}