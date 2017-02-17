angular.module('app.controllers', [])

.controller('pageCtrl', ['$scope', '$stateParams', '$ionicHistory', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams, $ionicHistory) {


        $ionicHistory.nextViewOptions({
            disableAnimate: true,
            disableBack: false
        })
    }
])

.controller('menuCtrl', ['$scope', '$stateParams', '$ionicHistory', '$http','$ionicModal','$ionicLoading', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams, $ionicHistory, $http,$ionicModal,$ionicLoading) {

        $ionicHistory.nextViewOptions({
            disableAnimate: true,
            disableBack: false
        })

        $scope.products = [];
        $scope.data = {};
        $scope.loggedin_userid = sessionStorage.getItem('loggedin_userid');



        loaddata();

          
        $scope.addItem = function(data) {

            str = "http://localhost/server2/todo.php?data=" + $scope.data.addMe + "&id=" + $scope.loggedin_userid;
            console.log(str);
            console.log('add item func');

            $http.get(str)


            .success(function(response) { // if login request is Accepted

                // records is the 'server response array' variable name.
                // $scope.products.push(data);
                //$scope.addMe = ""; 
                if (response != "error1" || response != "error2")
                    $scope.products[response] = $scope.data.addMe;
                loaddata();

               


            }).error(function() { //if login failed
                var alertPopup = $ionicPopup.alert({
                    title: 'Oops!',
                    template: 'Sorry :('
                });
            });




        }



        function loaddata() {
            $scope.products = [];
            str = "http://localhost/server2/tododisplay.php?id=" + $scope.loggedin_userid;
            console.log(str);
            console.log('add item func');

    $scope.show = function() {
    $ionicLoading.show({
      template: '<ion-spinner icon="spiral"></ion-spinner>',
      duration: 3000
    })
}

            $http.get(str)


            .success(function(response) { // if login request is Accepted

                // records is the 'server response array' variable name.
                $scope.list = response.records;
                for (var i = 0; i < $scope.list.length; i++) {

                    console.log($scope.list[i].todo_id);
                }


                angular.forEach($scope.list, function(value, key) {
                    $scope.products.push(value.description);





                });


 $scope.hide = function(){
    $ionicLoading.hide().then(function(){
       console.log("The loading indicator is now hidden");
    });
  };    


            }).error(function() { //if login failed
                var alertPopup = $ionicPopup.alert({
                    title: 'oooooOops!',
                    template: 'Sorry :('
                });
            });





        }

        $scope.removeItem = function(x) {

            $scope.del = x;

            console.log($scope.del);
            str = "http://localhost/server2/tododelete.php?id=" + $scope.del;
            console.log(str);
            console.log('del item func');

            $http.get(str)


            .success(function(response) { // if login request is Accepted

                // records is the 'server response array' variable name.
                loaddata();
                $scope.errortext = "";
                $scope.products.splice(x, 1);

            }).error(function() { //if login failed
                var alertPopup = $ionicPopup.alert({
                    title: 'oooooOops!',
                    template: 'Sorry :('
                });
            });

        }

        $ionicModal.fromTemplateUrl('modal.html', {
    scope: $scope,
    animation: 'slide-in-up'
  }).then(function(modal) {
    $scope.modal = modal;
  });
  
  $scope.openModal = function() {
    $scope.modal.show();
  };
  $scope.closeModal = function() {
    $scope.modal.hide();
  };



    }

])



.controller('loginCtrl', ['$scope', '$stateParams', '$http', '$ionicPopup', '$state', '$ionicHistory', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $stateParams, $http, $ionicPopup, $state, $ionicHistory) {
        $scope.user = {};

        $scope.$on("$ionicView.afterEnter", function() {
            $scope.user.name = "";
            $scope.user.password = "";


        });


        $scope.login = function() {
            str = "http://localhost/server2/login.php?e=" + $scope.user.name + "&p=" + $scope.user.password;
            console.log(str);
            $http.get(str)

            .success(function(response) { // if login request is Accepted

                // records is the 'server response array' variable name.
                $scope.user_details = response.records; // copy response values to user-details object.

                //stores the data in the session. if the user is logged in, then there is no need to show login again.
                sessionStorage.setItem('loggedin_userid', $scope.user_details.user_id);
                sessionStorage.setItem('loggedin_fname', $scope.user_details.first_name);
                sessionStorage.setItem('loggedin_lname', $scope.user_details.last_name);
                sessionStorage.setItem('loggedin_uname', $scope.user_details.username);
                sessionStorage.setItem('loggedin_ctcode', $scope.user_details.code);
                sessionStorage.setItem('loggedin_ph', $scope.user_details.phone);
                sessionStorage.setItem('loggedin_mail', $scope.user_details.email);
                sessionStorage.setItem('loggedin_dobd', $scope.user_details.dob);

                // remove the instance of login page, when user moves to profile page.
                // if you dont use it, you can get to login page, even if you are already logged in .
                $ionicHistory.nextViewOptions({
                    disableAnimate: true,
                    disableBack: true
                });

                 var alertPopup = $ionicPopup.alert({
                    title: 'Login success!',
                    template: 'Log u r time!'
                });
                //in my FoodKart App, it checks the page from where the user logs in.
                //if it is from the check out, then after login, the check out page will be shown.
                //else normal profile page will be shown

                lastView = $ionicHistory.backView();
                if (lastView && lastView.stateId == "checkOut") { $state.go('checkOut', {}, { location: "replace", reload: true }); } else { $state.go('tab.menu', {}, { location: "replace", reload: true }); }



            }).error(function() { //if login failed
                var alertPopup = $ionicPopup.alert({
                    title: 'Login failed!',
                    template: 'Please check your credentials!'
                });
            });
        };


    }
])



.controller('signupCtrl', ['$scope', '$http', '$ionicPopup', '$state', '$ionicHistory', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $http, $ionicPopup, $state, $ionicHistory) {
        $scope.data = {};
        $scope.signup = function() {
            str = "http://localhost/server2/signup.php?fname=" + $scope.data.first_name + "&lname=" + $scope.data.last_name + "&uname=" + $scope.data.username + "&pswd=" + $scope.data.password + "&mail=" + $scope.data.email + "&code=" + $scope.data.countrycode + "&ph=" + $scope.data.phone + "&dob=" + $scope.data.dob;
            console.log(str);
            $http.get(str)
                .success(function(response) {
                    console.log(response);
                    //          $scope.usr_records = response.status;



                    //alert popup success
                    var alertPopup = $ionicPopup.alert({
                        title: 'Signup sucess!',
                        template: 'Thanks for signing up.Cheers !'
                    });

                    $state.go('login', {}, { location: "replace", reload: true });

                }).error(function() { //if alert popup signup fail

                    var alertPopup = $ionicPopup.alert({
                        title: 'Signup failed!',
                        template: 'Please check your credentials!'
                    });
                });




        };


    }
])


.controller('profileCtrl', function($scope, $rootScope, $ionicHistory, $state, $timeout) {

    // loads value from the loggin session
    $scope.loggedin_userid = sessionStorage.getItem('loggedin_userid');
    $scope.loggedin_fname = sessionStorage.getItem('loggedin_fname');
    $scope.loggedin_lname = sessionStorage.getItem('loggedin_lname');
    $scope.loggedin_uname = sessionStorage.getItem('loggedin_uname');
    $scope.loggedin_ctcode = sessionStorage.getItem('loggedin_ctcode');
    $scope.loggedin_ph = sessionStorage.getItem('loggedin_ph');
    $scope.loggedin_mail = sessionStorage.getItem('loggedin_mail');
    $scope.loggedin_dobd = sessionStorage.getItem('loggedin_dobd');

    //logout function
    $scope.logout = function() {

        //delete all the sessions 
        delete sessionStorage.loggedin_fname;
        delete sessionStorage.loggedin_lname;
        delete sessionStorage.loggedin_uname;
        delete sessionStorage.loggedin_ctcode;
        delete sessionStorage.loggedin_ph;
        delete sessionStorage.loggedin_mail;
        delete sessionStorage.loggedin_dobd;
        delete sessionStorage.loggedin_userid;

        // remove the profile page backlink after logout.
        $ionicHistory.nextViewOptions({
            disableAnimate: true,
            disableBack: true
        });


        // After logout you will be redirected to the menu page,with no backlink
        $state.go('login', {}, { location: "replace", reload: true });


    };
})



.controller('editCtrl', ['$scope', '$http', '$state', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
    // You can include any angular dependencies as parameters for this function
    // TIP: Access Route Parameters for your page via $stateParams.parameterName
    function($scope, $http, $state, $stateParams) {


        $scope.first_name = sessionStorage.getItem('loggedin_fname');
        $scope.userid = sessionStorage.getItem('loggedin_userid');
        $scope.last_name = sessionStorage.getItem('loggedin_lname');
        $scope.uname = sessionStorage.getItem('loggedin_uname');
        $scope.countrycode = sessionStorage.getItem('loggedin_ctcode');
        $scope.phone = sessionStorage.getItem('loggedin_ph');
        $scope.email = sessionStorage.getItem('loggedin_mail');
        $scope.dob = sessionStorage.getItem('loggedin_dobd');



        console.log($http);
        $scope.editUser = function(fname, lname, uname, ccode, mob, email, dob, userid) {
            console.log($http);


            str = "http://localhost/server2/edit.php?fname=" + fname + "&lname=" + lname + "&mail=" + email + "&code=" + ccode + "&ph=" + mob + "&dob=" + dob + "&userid=" + userid;
            console.log(str);
            $http.get(str)
                .success(function(response) {
                    console.log(response);

                    $state.go('tab.profile', {}, { location: "replace", reload: true });

                }).error(function() { //if alert popup signup fail

                    var alertPopup = $ionicPopup.alert({
                        title: 'Signup failed!',
                        template: 'Please check your credentials!'
                    });
                });




        }

    }
]);
