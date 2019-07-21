import HttpService from "./HttpService";

export default class DashboardMealService {

    static baseURL() { return "http://localhost:4000"; }

    static createMeal(meal) {
        return new Promise((resolve, reject) => {
            HttpService.post(`${DashboardMealService.baseURL()}/dashboard/meals`,
                meal,
                function (data) {
                    resolve(data);
                }, function (textStatus) {
                    reject(textStatus);
                });
        });
    }

}
