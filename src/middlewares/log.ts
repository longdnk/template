import { Request, Response, NextFunction } from 'express';
import { getCurrentHour, getToday } from '../helper';
import util from 'util';

export const logger = (request: Request, response: Response, next: NextFunction) => {

    const today = getToday();
    const currentHour = getCurrentHour();

    const logger =
        `${request.timestamp}-${today}-${currentHour} ${request.method}-${response.statusCode} ${request.ip} ${request.originalUrl}`

    console.log(logger);
    next();
}

export const logData = (data: unknown) => console.log(util.inspect(data, false, null, true /* enable colors */))