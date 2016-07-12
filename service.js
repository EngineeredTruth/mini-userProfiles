angular.module('userProfiles')
.service('userService',function($http){

  var data = [
    {
        "id": 1,
        "first_name": "george",
        "last_name": "bluth",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/calebogden/128.jpg",
        "isFavorite": false
    },
    {
        "id": 2,
        "first_name": "lucille",
        "last_name": "bluth",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/josephstein/128.jpg",
        "isFavorite": false
    },
    {
        "id": 3,
        "first_name": "oscar",
        "last_name": "bluth",
        "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/olegpogodaev/128.jpg",
        "isFavorite": false
    }
  ];

//     this.getUsers = function(callback) {
// var data =$http.get('data.json')
//           .then(callback);
//         return data;
//     };

this.getData = function(){
  return data;
};

    this.toggleFavorite = function(index) {
      data[index].isFavorite = !data[index].isFavorite;
      console.log(index + ' ' + data[index].isFavorite);

    }

});
