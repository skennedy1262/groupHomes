app.controller('ListingSearchController', function($scope, dataService, CONSTANTS, $window, $compile, $state, facilityService, userService) {

  $scope.user = userService.get();


  //get all listingView
  dataService.getAll('facility').then(function (response) {
    console.log(response);
    $scope.facilities=response.data;
    //testing search
    // var address = $scope.facilities[0].address + $scope.facilities[0].city + $scope.facilities[0].state + $scope.facilities[0].zip;
    // dataService.search('facility', address).then(function (response) {
    //   console.log(response)
    // })

    $scope.initMap()
  });

  $scope.selectFacility = function (facility) {
    // console.log(facility)
    if ($scope.user === undefined) {
      //if there is no user logged in, or logged in user is not admin role, go to login page
      $state.go('landingPage');
    // } else if ($scope.user.role === 'client') {
    //   $state.go('landingPage');
    } else {
      console.log(facility);
      facilityService.set(facility);
      $state.go('listingView');
    }
  };
//   $scope.mapOptions = {
//       zoom: 4,
//       center: new google.maps.LatLng(41.923, 12.513),
//       mapTypeId: google.maps.MapTypeId.TERRAIN
//   }
//
//   $scope.map = new google.maps.Map(document.getElementById('map'), $scope.mapOptions);
//
//   var cities = "Atlanta, USA";
//  var geocoder= new google.maps.Geocoder();
//
//  $scope.markers = [];
//
//  var createMarker = function (info){
//     var marker = new google.maps.Marker({
//         map: $scope.map,
//         position: new google.maps.LatLng(info.lat(), info.lng())
//     });
//  }
//
// geocoder.geocode( { 'address': cities }, function(results, status) {
//  if (status == google.maps.GeocoderStatus.OK) {
//     newAddress = results[0].geometry.location;
//     $scope.map.setCenter(newAddress);
//     createMarker(newAddress)
//  }
// });

  // this.init = function() {
  //       var options = {
  //           center: new google.maps.LatLng(40.7127837, -74.00594130000002),
  //           zoom: 13,
  //           disableDefaultUI: true
  //       }
  //       this.map = new google.maps.Map(
  //           document.getElementById("map"), options
  //       );
  //       this.places = new google.maps.places.PlacesService(this.map);
  //   }
        //

        var map;
        var marker;
        var layerHospital;
        var layerResidential;
        var layerPersonal;
        var layerDrugAlcohol;
        var layerADC;
        var layerDVPNSP;
        var layerDialysis;
        var layerOthers;
        var circle, circlemarker;
        var initLat = 36.1699; //36.13842925; //36.125541;
        var initLng = -115.1398; //-115.1717376708;
        var initDistance = 15;
        var FacilityAllTable = "1kkN0paFz4_KF_mMw0A1wSjr9CfiA5ohvBCgRQijY"; //"1tLrXcHFJSeBIQidORougpBuRF_HGiXbOJwsXH_YA"; //"1bAQPd8rlrO8jItgP07MhwqM3wX8Vg58OoHDpo02f";  //All Nevada Nursing Homes <-- Table Name
        var userKey = "AIzaSyDsWy4Qwn4FJ4iQ8Ufr-GM1FQssMxG1msY";  //"AIzaSyB9I2qkvtn821Tc7cGJ5v9JoX8AUiv6SUw";
        //var hospitalTable = "1tMnZ8T6L8jFhfxKoVoKYHV3M-j5P7oWmubpCCw-l";
        var Layer1 = "1zjYA7Xnf_a8cKLge6zZ5DEmgFxcvKCP_-Rvau_oX";
        var Layer2 = "1Uti6_8cBvHt5J29rK-OV88bQt7LzyaqqNJDS78K4";
        var Layer3 = "1P41LGCcnVmr42ZEx3QFDVSs857KwJQ7h6GCctLws";
        var Layer4 = "1cR3u3xfyE161GLziONUWgFeScQer4TRjvHpnwhdg";
        var Layer5 = "1gtklv0kmSQB4vZoWQTAWfNXcLAYOws65V9y-odCy";
        var Layer6 = "1LrXM4L55EuI0di2VSDiJQEpyYI8tksDXSR4LqQcR";
        var Layer7 = "1Luc7yAyvhmIKn8PLodIThRauY-13Exls4g7xaBho";
        var Layer8 = "1Fvpw0RKetEveZzOputgL_L-NJBrbADHNS6hSll30";
        var AutoComplete;

        $scope.initMap = function () {

          console.log('hello')
            var infowindow = new google.maps.InfoWindow();

            map = new google.maps.Map(document.getElementById('map'), {
                center: { lat: initLat, lng: initLng },
                zoom: 11
            });

            // var infowindow = new google.maps.InfoWindow;

            // var marker, i;
            //custom info box
            google.maps.event.addListener(infowindow, 'domready', function() {

            // Reference to the DIV that wraps the bottom of infowindow
               var iwOuter = $('.gm-style-iw');

               /* Since this div is in a position prior to .gm-div style-iw.
                * We use jQuery and create a iwBackground variable,
                * and took advantage of the existing reference .gm-style-iw for the previous div with .prev().
               */
               var iwBackground = iwOuter.prev();

               // Removes background shadow DIV
               iwBackground.children(':nth-child(2)').css({'display' : 'none'});

               // Removes white background DIV
               iwBackground.children(':nth-child(4)').css({'display' : 'none'});
               // Moves the infowindow 115px to the right.
               iwOuter.parent().parent().css({left: '115px'});

               // Moves the shadow of the arrow 76px to the left margin.
               iwBackground.children(':nth-child(1)').attr('style', function(i,s){ return s + 'left: 76px !important;'});

               // Moves the arrow 76px to the left margin.
               iwBackground.children(':nth-child(3)').attr('style', function(i,s){ return s + 'left: 76px !important;'});

               // Changes the desired tail shadow color.
               iwBackground.children(':nth-child(3)').find('div').children().css({'box-shadow': 'rgba(72, 181, 233, 0.6) 0px 1px 6px', 'z-index' : '1'});

               // Reference to the div that groups the close button elements.
               var iwCloseBtn = iwOuter.next();

               // Apply the desired effect to the close button
               iwCloseBtn.css({opacity: '1', right: '45px', top: '5px', border: '0px solid #48b5e9', 'border-radius': '13px', 'box-shadow': '0 0 5px #3990B9'});
               // If the content of infowindow not exceed the set maximum height, then the gradient is removed.
               if($('.iw-content').height() < 140){
                 $('.iw-bottom-gradient').css({display: 'none'});
               }
            })

            for (i = 0; i < $scope.facilities.length; i++) {
                marker = new google.maps.Marker({
                     position: new google.maps.LatLng($scope.facilities[i].lat, $scope.facilities[i].lng),
                     map: map
                });

                google.maps.event.addListener(marker, 'click', (function(marker, i) {
                     return function() {
                         var content = getInfoContent(i);
                         infowindow.setContent(content[0]);
                         infowindow.open(map, marker);
                     }
                })(marker, i));
            }
      }


      function getInfoContent(i) {
        console.log($scope.facilities[i])
          var facility = $scope.facilities[i]
          var content = '<div id="iw-container" ng-click="viewFacility(' + i + ')">' +
                   '<div class="iw-title">'+facility.name+'</div>' +
                   '<div class="iw-content">' +
                     '<img src="http://18.236.125.242/groupHomes/photos/' + facility.id + '/' + facility.smallPhoto + '" style="width:45%">' +
                     '<div class="iw-subTitle">'+facility.address+ ', ' +facility.city+', '+facility.state+', '+facility.zip+'</div>' +
                     '<div class="iw-subTitle">Total Beds: ' + facility.beds + '</div>' +

                     '<p>' + facility.specialHmFeature + '</p>' +
                     '<p>Level 1 Price: $' + facility.level1Price + '<br>'+
                     'Level 2 Price: $' + facility.level2Price + '</p>'+
                   '</div>' +
                   '<div class="iw-bottom-gradient"></div>' +
                 '</div>';
          var compiled = $compile(content)($scope);
          return compiled;
      }

      $scope.viewFacility=function (i) {
        console.log('view facility', $scope.facilities[i])
        facilityService.set($scope.facilities[i])
        $state.go('listingView')
      }



});
