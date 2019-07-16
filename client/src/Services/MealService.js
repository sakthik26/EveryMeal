"use strict";

import HttpService from "./HttpService";

export default class MealService {

    constructor() {
    }

    static baseURL() {return "http://localhost:4000"; }

    static getMealsList(firstname,lastname,email, password) {
        return new Promise((resolve, reject) => {
            HttpService.get(`${MealService.baseURL()}/eat/eatnow`, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }
}