"use strict";

import HttpService from "./HttpService";

export default class UserService {

    constructor() {
    }

    static baseURL() {return "http://localhost:4000"; }

    static register(firstname,lastname,email, password) {
        return new Promise((resolve, reject) => {
            HttpService.post(`${UserService.baseURL()}/user/signup`, {
                firstname: firstname,
                lastname: lastname,
                email: email,
                password: password
            }, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static login(email, password) {
        return new Promise((resolve, reject) => {
            HttpService.post(`${UserService.baseURL()}/user/login`, {
                email: email,
                password: password
            }, function(data) {
                resolve(data);
            }, function(textStatus) {
                reject(textStatus);
            });
        });
    }

    static logout(){
        return new Promise((resolve, reject) => {
            HttpService.post(`${UserService.baseURL()}/user/logout`, {},
            function(data){
                window.localStorage.removeItem('jwtToken');
                resolve(data)
            },
            function(textStatus){
                reject(textStatus);
            }
        )})
    }

    // static getCurrentUser() {
    //     let token = window.localStorage['jwtToken'];
    //     if (!token) return {};

    //     let base64Url = token.split('.')[1];
    //     let base64 = base64Url.replace('-', '+').replace('_', '/');
    //     return {
    //         id : JSON.parse(window.atob(base64)).id,
    //         username: JSON.parse(window.atob(base64)).username
    //     };
    // }

    // static isAuthenticated() {
    //     return !!window.localStorage['jwtToken'];
    // }
}