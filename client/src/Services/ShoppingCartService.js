"use strict";

import HttpService from "./HttpService";

export default class ShoppingCart {

    constructor() {
    }

    static baseURL() {return "http://localhost:4000"; }

    static getShoppingList(sess) {
        return new Promise((resolve, reject) => {
            HttpService.get(`${ShoppingCartService.baseURL()}/eat/cart/`, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static getShoppingInfo(id){
        return new Promise((resolve, reject) => {
            HttpService.get(`${ShoppingCartService.baseURL()}/eat/cart/`+id, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }
}