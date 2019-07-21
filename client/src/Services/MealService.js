"use strict";

import HttpService from "./HttpService";

export default class MealService {

    constructor() {
    }

    static baseURL() {return "http://localhost:4000"; }

    static getMealsList(sess) {
        return new Promise((resolve, reject) => {
            HttpService.get(`${MealService.baseURL()}/eat/eatnow?session=`+sess, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }
    

    static getMealInfo(id){
        return new Promise((resolve, reject) => {
            HttpService.get(`${MealService.baseURL()}/eat/eatnow/mealpage/`+id, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }


}