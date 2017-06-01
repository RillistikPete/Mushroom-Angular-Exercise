"use strict";

app.factory("ShroomFactory", function($q, $http) {

            let getShrooms = () => {
                return $q((resolve, reject) => {
                    $http.get("https://mushrooms-cb89d.firebaseio.com/.json")
                        .then((data) => {
                        	console.log(data);
                            resolve(data.data.mushrooms);
                        })
                        .catch((error) => {
                            reject(error);
                        });
                });
            };
        return { getShrooms };
      });


