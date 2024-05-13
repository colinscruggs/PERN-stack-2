const BASEURL = 'http://localhost:5000/api/v1/';

export const RestaurantAPI = {
    get: function (id: number) {
        return fetch(BASEURL + `restaurants/${id}`)
            .then((res) => res.json())
            .then((data) => data.data.restaurant);
    },
    getAll: function () {
        return fetch(BASEURL + 'restaurants')
            .then((res) => res.json())
            .then((data) => data.data.restaurants);
    },
};
