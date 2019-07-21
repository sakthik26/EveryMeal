
import HttpService from "./HttpService";

export default class OrderService {

    constructor() {
    }

    static baseURL() {return "http://localhost:4000"; }

    static registerOrder(userId, orderDetails) {
        return new Promise((resolve, reject) => {
            HttpService.post(`${OrderService.baseURL()}/eat/order`, {
                userid: userId,
                ordertype: orderDetails.ordertype,
                productid:orderDetails.productid,
                timeslot:orderDetails.timeslot,
                address:orderDetails.address,
                startingdate:orderDetails.startingdate,
                total:orderDetails.total,
                quantity:orderDetails.mealquantity,
                portionsize: orderDetails.portionsize,
                additionalcomments: orderDetails.additionalcomments
            }, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }
    
}