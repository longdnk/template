import { Request, Response } from "express";
import { ResponseStatus } from "../../constant";
import { applyToken } from "../../helper";
import { errorHandler, errorLogger, logData } from "../../middlewares";
// export const loginController = async (request: Request<{}, {}, LoginInfo>, response: Response) => {

//     try {
//         const { data } = await loginApi(request.body) as AxiosResponse;

//         const result = data as LoginResponse;

//         const responseData = {
//             status: ResponseStatus.ACCEPTED,
//             message: result.message,
//             data: {
//                 id: result.data._id,
//                 name: result.data.name,
//                 email: result.data.email,
//                 portfolio: result.data.portfolio,
//                 token: result.meta.token,
//             }
//         }

//         logData(responseData);
//         return response.status(ResponseStatus.ACCEPTED).send(responseData);
//     }

//     catch (e) {
//         return errorLogger(e, request, response);
//     }
// }

// export const listInverterController = async (request: Request<{ plantId: string }, {}, {}>, response: Response) => {
//     try {

//          CACHE PROCESS
//         const cacheKey = geneRateCacheKey(request), check = isCached(request);

//         const dataItem = getCacheData(cacheKey); 

//         if (check) {
//             logData(dataItem);
//             return response.status(ResponseStatus.OK).send(dataItem);
//         }

//         const listQuery = {
//             plantId: request.params.plantId,
//             dataType: 'inverter_monitoring'
//         }

//         const performQuery = {
//             plantId: request.params.plantId,
//             dataType: 'gauges_monitoring'
//         }

//         const promiseList = [getInverterInfoApi(listQuery), getInverterInfoApi(performQuery)];

//         const [listCall, performCall] = await Promise.all(promiseList);

//         const { data: listResponse } = listCall as AxiosResponse;

//         const listData = listResponse as ListInverterResponse;

//         const { data: performResponse } = performCall as AxiosResponse;

//         const performData = performResponse as PerformanceResponse;

//         const dataResponse = {
//             message: 'Get success',
//             data: listData.data.inverters.map(element => {
//                 return {
//                     level: 2,
//                     ...element,
//                 }
//             }),
//             performmanceData: performData.data,
//         }
        
//         cacheData(cacheKey, dataResponse); // CACHE HEERE

//         logData(dataResponse);
//         return response.status(ResponseStatus.OK).send(dataResponse)
//     }
//     catch (e) {
//         return errorLogger(e, request, response);
//     }
// }

export const fetchController = async (request: Request, response: Response) => {

    try {

        const item = applyToken(request.headers.authorization);

        if (!item.headers.Authorization) {

            const dataSend = {
                status: ResponseStatus.BAD_REQUEST,
                message: "No Authoriaztion in header",
            }

            logData(dataSend);

            return response.status(ResponseStatus.BAD_REQUEST).send(dataSend);
        }

        const dataResponse = {
            status: ResponseStatus.OK,
            message: "Get data success",
        }

        logData(dataResponse);

        return response.status(ResponseStatus.OK).send(dataResponse);

    }
    catch (e) {
        return errorLogger(e, request, response);
    }
}
