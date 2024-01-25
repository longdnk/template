"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fetchController = void 0;
const constant_1 = require("../../constant");
const helper_1 = require("../../helper");
const middlewares_1 = require("../../middlewares");
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
const fetchController = async (request, response) => {
    try {
        const item = (0, helper_1.applyToken)(request.headers.authorization);
        if (!item.headers.Authorization) {
            const dataSend = {
                status: constant_1.ResponseStatus.BAD_REQUEST,
                message: "No Authoriaztion in header",
            };
            (0, middlewares_1.logData)(dataSend);
            return response.status(constant_1.ResponseStatus.BAD_REQUEST).send(dataSend);
        }
        const dataResponse = {
            status: constant_1.ResponseStatus.OK,
            message: "Get data success",
        };
        (0, middlewares_1.logData)(dataResponse);
        return response.status(constant_1.ResponseStatus.OK).send(dataResponse);
    }
    catch (e) {
        return (0, middlewares_1.errorLogger)(e, request, response);
    }
};
exports.fetchController = fetchController;
