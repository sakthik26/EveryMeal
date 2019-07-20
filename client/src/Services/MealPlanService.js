// "use strict";

// import HttpService from "./HttpService";

// export default class MealPlanService {

//     constructor() {
//     }

//     static baseURL() {return "http://localhost:4000"; }

//     static getMealPlansList(firstname,lastname,email, password) {
//         return new Promise((resolve, reject) => {
//             HttpService.get(`${MealPlanService.baseURL()}/eat/subscribe`, function(data) {
//                 resolve(data);
//             }, function(textStatus) {
//                 reject(textStatus);
//             });
//         });
//     }
// }

"use strict";

import HttpService from "./HttpService";

export default class MealPlanService {

    constructor() {
    }

    static baseURL() {return "http://localhost:4000"; }

    static getMealPlansList(sess) {
        return new Promise((resolve, reject) => {
            HttpService.get(`${MealPlanService.baseURL()}/eat/subscribe?session=`+sess, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static getMealPlanInfo(id){
        return new Promise((resolve, reject) => {
            HttpService.get(`${MealPlanService.baseURL()}/subscription/details/`+id, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }
    
}