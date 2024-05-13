const BASEURL = 'http://localhost:5000/api/v1/';

export const RestaurantsAPI = {
    get: function (id: number) {
        return fetch(BASEURL + `restaurants/${id}`)
            .then((res) => res.json())
            .then((d) => d.data.restaurant);
    },
    getAll: function () {
        return fetch(BASEURL + 'restaurants')
            .then((res) => res.json())
            .then((d) => d.data.restaurants);
    },
};
