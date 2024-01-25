import express, { Request, Response, NextFunction } from 'express';
import { addTimestamp, logger } from './middlewares';
import { serviceRouter } from './routes';

// ADD .ENV
require('dotenv').config();

// INIT APP
const app = express();
// LOAD PORT
const port = process.env.APP_PORT ?? 9000;

// CACHING
app.use((request: Request, response: Response, next: NextFunction) => {
    if (!('JSONResponse' in response)) {
        return next();
    }
    response.set('Cache-Control', 'public, max-age=31557600'); // 1 YEAR CACHE
    response.json(response.JSONResponse);
})

// APPLY JSON
app.use(express.json());
// ADD TIMESTAMP
app.use(addTimestamp);
// TOOL LOGGER
app.use(logger);

app.use('/service', serviceRouter);

// LISTEN PORT
app.listen(port, () => {
    console.log(`App is listening at port ${port}`);
});