angular
    .module("DroneCafeApp")
    .factory("DishService", function ($resource) {

        return $resource(config.apiUrl + '/api/dish/:_id/',
            {
                _id: '@_id'
            },
            {
                query: {
                    transformResponse: function (responseData) {
                        return angular.fromJson(responseData);
                    }
                }
            });

    });