app.controller('LandingPageController', function($scope, $state, dataService, userService) {

console.log('hello world');

  $scope.login=function () {
    var loginInfo = {
      userName: $scope.email,
      password: $scope.password
    };

    dataService.loginUser('loginUser', loginInfo).then(function (response) {
      console.log(response);
      if (response.data.length < 1) {
        alert("Error: Password or Email incorrect");
      } else if (response.data[0].role === 'admin') {
        userService.set(response.data[0]);
        $state.go('listingSearch')
      } else if (response.data[0].role === 'client') {
        userService.set(response.data[0]);
        $state.go('listingCreate');
      }
        //set student id
      //   var studentInfo = {
      //     KEYID: response.data[0].KEYID,
      //     studentid: response.data[0].studentid
      //   }
      //   studentService.set(studentInfo);
      //   $state.go('studentList');
      // } else if (response.data[0].role==="admin") {
      //   adminService.set(response.data[0].userid);
      //   $state.go('studentListAdmin');
      // } else if (response.data[0].role==="teacher") {
      //   teacherService.set(response.data[0].userid);
      //   $state.go('classList');
      // }
    });
  };

});
