import NodeCache from 'node-cache';
import { logData } from '../middlewares';
import { getCurrentHour, getToday } from '../helper';
import { ONE_MINUTE } from '../constant';
import { Request } from 'express';

const cache = new NodeCache();

setInterval(() => {
    const toDay = getToday();
    const hour = getCurrentHour();
    logData(`${toDay}-${hour} Clear Cached`);
    return clearCache()
}, ONE_MINUTE);

export const geneRateCacheKey = (request: Request) => request.baseUrl + request.url;

export const cacheData = (key: string, data: unknown) => cache.set(key, data);

export const isCached = (request: Request) => {
    const key = request.baseUrl + request.url;
    return !!cache.get(key);
}

export const getCacheData = (key: string) => cache.get(key);

export const clearCache = () => cache.flushAll();