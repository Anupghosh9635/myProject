
    var programmingTutorial = angular.module('myModuleProgram', ['ngRoute', 'ngSanitize']);


////////////// *************  Routing  ****************************** ////////////////////

    programmingTutorial.config(function ($routeProvider) {

        $routeProvider
            .when('/signUp', {
                templateUrl: 'template/signUp.html',
                controller: 'signUpCtrl'
            })
            .when('/login', {
                templateUrl: 'template/login.html',
                controller: 'loginCtrl'
            })
            .when('/forgetPassword', {
                templateUrl: 'template/forgetPassword.html'
            })

            .when('/home', {
                templateUrl: 'template/home.html',
                controller: 'homeCtrl'
            }).when('/test', {
                templateUrl: 'template/test.html',
                controller: 'testCtrl'
            })


    /////////  *************  starting cor java  routing  *************  ////////////
    
            .when('/', {
                templateUrl: 'template/overview.html',
                controller: 'overviewCtrl'
            }).when('/basicProgram', {
                templateUrl: 'template/basicProgram.html',
                controller: 'basicPCtrl'
            }).when('/constructor', {
                templateUrl: 'template/constructor.html',
                controller: 'constructorCtrl'
            }).when('/starPattern', {
                templateUrl: 'template/starPattern.html',
                controller: 'starPatternCtrl'
            }).when('/oppConcept', {
                templateUrl: 'template/oppConcept.html',
                controller: 'oppsCtrl'
            }).when('/array', {
                templateUrl: 'template/array.html',
                controller: 'arrayCtrl'
            }).when('/string', {
                templateUrl: 'template/string.html',
                controller: 'stringCtrl'
            }).when('/exceptionHendaling', {
                templateUrl: 'template/exceptionHendaling.html',
                controller: 'exceptionHendalingCtrl'
            }).when('/collection', {
                templateUrl: 'template/collection.html',
                controller: 'collectionCtrl'
            }).when('/multiThrading', {
                templateUrl: 'template/multiThrading.html',
                controller: 'multiThradingCtrl'
            }).when('/date', {
                templateUrl: 'template/date.html',
                controller: 'dateCtrl'
            }).when('/overloading', {
                templateUrl: 'template/overLoading.html',
                controller: 'overloadingCtrl'
            }).when('/overriding', {
                templateUrl: 'template/overriding.html',
                controller: 'overridingCtrl'
            })

    ///////// *************  starting J2EEE  routing  ************* ///////////

            .when('/jdbcConnection', {
                templateUrl: 'template/jdbcConnection.html',
                controller: 'jdbcConnectionCtrl'
            }).when('/servlet', {
                templateUrl: 'template/servlet.html',
                controller: 'servletCtrl'
            }).when('/jsp', {
                templateUrl: 'template/jsp.html',
                controller: 'jspCtrl'
            })


    ///// ************* starting UNIX  routing ****************** /////

            .when('/basicLinux', {
                templateUrl: 'template/basicLinux.html',
                controller: 'basicLinuxCtrl'
            }).when('/linuxCommand', {
                templateUrl: 'template/linuxCommand.html',
                controller: 'linuxCommandCtrl'
            })


    /////  ************* starting MISCELLANEOUS  routing  ************* /////

            .when('/questionPaper', {
                templateUrl: 'template/questionPaper.html',
                controller: 'questionPaperCtrl'
            }).when('/suggetionPaper', {
                templateUrl: 'template/suggetionPaper.html',
                controller: 'suggetionPaperCtrl'
            }).when('/quiz', {
                templateUrl: 'template/quiz.html',
                controller: 'quizCtrl'
            }).when('/askQuestion', {
                templateUrl: 'template/askQuestion.html',
                controller: 'askQuestionCtrl'
            })

    ///// *************  starting java code test  routing  ************* /////

            .when('/codeTest', {
                templateUrl: 'template/codeTest.html',
                controller: 'codeTestCtrl'
            })


    ///// *************  starting Google Map  routing  ************* /////

            .when('/googleMap', {
                templateUrl: 'template/googleMap.html',
                controller: 'googleMapCtrl'
            });

    });








/////////////////////////////////////////////////////////////////////////



    ////////// ************* base URL Setting  ************* ///////////
        
        var baseUrl = "http://localhost:8084/MyProgram/";
        //  var baseUrl ="/MyProgram/";

        //  var baseUrl ="http://192.168.201.50:8084/MyProgram/";

        getIPs(function (ip) {
            baseUrl = "http://" + ip + ":8084/MyProgram/";
            console.log("getIPs -" + ip);
        });



    ///// ************* getting IP addresses  ************* /////


        //get the IP addresses associated with an account
        function getIPs(callback) {
            var ip_dups = {};

            //compatibility for firefox and chrome
            var RTCPeerConnection = window.RTCPeerConnection
                    || window.mozRTCPeerConnection
                    || window.webkitRTCPeerConnection;
            var useWebKit = !!window.webkitRTCPeerConnection;

            //bypass naive webrtc blocking using an iframe
            if (!RTCPeerConnection) {
                //NOTE: you need to have an iframe in the page right above the script tag
                //
                //<iframe id="iframe" sandbox="allow-same-origin" style="display: none"></iframe>
                //<script>...getIPs called in here...
                //
                var win = iframe.contentWindow;
                RTCPeerConnection = win.RTCPeerConnection
                        || win.mozRTCPeerConnection
                        || win.webkitRTCPeerConnection;
                useWebKit = !!win.webkitRTCPeerConnection;
            }

            //minimal requirements for data connection
            var mediaConstraints = {
                optional: [{RtpDataChannels: true}]
            };

            var servers = {iceServers: [{urls: "stun:stun.services.mozilla.com"}]};

            //construct a new RTCPeerConnection
            var pc = new RTCPeerConnection(servers, mediaConstraints);

            function handleCandidate(candidate) {
                //match just the IP address
                var ip_regex = /([0-9]{1,3}(\.[0-9]{1,3}){3}|[a-f0-9]{1,4}(:[a-f0-9]{1,4}){7})/ ;
                var ip_addr = ip_regex.exec(candidate)[1];

                //remove duplicates
                if (ip_dups[ip_addr] === undefined)
                    callback(ip_addr);

                ip_dups[ip_addr] = true;
            }

            //listen for candidate events
            pc.onicecandidate = function (ice) {

                //skip non-candidate events
                if (ice.candidate)
                    handleCandidate(ice.candidate.candidate);
            };

            //create a bogus data channel
            pc.createDataChannel("");

            //create an offer sdp
            pc.createOffer(function (result) {

                //trigger the stun server request
                pc.setLocalDescription(result, function () {}, function () {});

            }, function () {});

            //wait for a while to let everything done
            setTimeout(function () {
                //read candidate info from local description
                var lines = pc.localDescription.sdp.split('\n');

                lines.forEach(function (line) {
                    if (line.indexOf('a=candidate:') === 0)
                        handleCandidate(line);
                });
            }, 1000);
        }

       

    ////////////////// ************** View Centric Controllers *************************** ///////////////////


        programmingTutorial.run(function ($rootScope, $location, $anchorScroll, $routeParams, $http,$route) {

            $rootScope.isMobile = false;
            $rootScope.isMobileNot = true;
            $rootScope.isFirstTime =true ;
            var width = $(window).width();
            if (width < 550) {
                $rootScope.isMobile = true;
                $rootScope.isMobileNot = false;
            }

            $rootScope.$on('$routeChangeSuccess', function (newRoute, oldRoute) {
                 $rootScope.actualLocation = $location.path();
                //    console.log("$routeParams.scrollTo "+$routeParams.scrollTo)
                // $location.hash($routeParams.scrollTo);
                var width = $(window).width();
                if (width < 751) {
                    
                  //  $location.hash('NaviGeatPage');
                  //  $anchorScroll();
                  $('html,body').animate({
                    scrollTop: $("#NaviGeatPage").offset().top},
                //    scrollTop: $("#testNaviMenu").offset().top },
                    'fast');
                    
//                    $('html, body').animate({
//                        'scrollTop' : $("#NaviGeatPage").position().top
//                    });
                        //    $("#NaviGeatPage").scrollTop();
                         //   window.location.hash = '#NaviGeatPage';
                    }

                });
                
                
//                document.addEventListener("deviceready", function() {
//                    console.log("deviceready");
//                    document.addEventListener("backbutton", onBackKeyDown, false);
//                        function onBackKeyDown() {
//                          //  e.preventDefault();
//                            if ($location.path() === "/" || $location.path() === "/home") {
//                                var r=confirm("exit");
//                                    if(r==true){
//                                        alert("Exeit...");
//                                        console.log("not exit");
//                                        navigator.app.exitApp();
//                                    }else {
//                                 navigator.app.goBack();
//                            }
//                            }else {
//                                /* $ionicHistory.goBack(); */
//                                window.history.back();
//                                navigator.app.goBack();
//                            }
//                        }
//                });
            
            
            $rootScope.$watch(function () {return $location.path();},
                function (newLocation, oldLocation) {
                    if($rootScope.actualLocation === newLocation) {
                            if ($location.path() === "" || $location.path() === "/" || $location.path() === "/home") {
                                if(!$rootScope.isFirstTime){
                                    var r=confirm("exit");
                                        if(r==true){
                                            navigator.app.exitApp();
                                        }else {
                                            navigator.app.goBack();
                                        }
                                }else{
                                    $rootScope.isFirstTime = false ;
                                }
                            }
                        //alert('Why did you use history back?');
                    }
            });
            
        });


//        window.onhashchange = function (e) {
//            if (window.location.hash === "#" || window.location.hash === "") {
//                alert("testttt");
////                document.getElementById("dialog").style.display = "none";
////                document.getElementById("showDialog").style.display = "";
//            } else if (window.location.hash.lastIndexOf("#NaviGeatPage") != -1) {
//                alert("NaviGeatPage");
////                document.getElementById("dialog").style.display = "";
////                document.getElementById("showDialog").style.display = "none";
//            }else{
//                alert("elsssssss");
//            }
//        };

        if(!window.HashChangeEvent)(function(){
	var lastURL=document.URL;
        console.log("lastURL--------"+lastURL);
	window.addEventListener("hashchange",function(event){
		Object.defineProperty(event,"oldURL",{enumerable:true,configurable:true,value:lastURL});
		Object.defineProperty(event,"newURL",{enumerable:true,configurable:true,value:document.URL});
		lastURL=document.URL;
                console.log("HashChangeEvent--------");
            });
        }());

        programmingTutorial.config(['$httpProvider' ,'$locationProvider', function($httpProvider, $locationProvider) {
                //$locationProvider.html5Mode(true).hashPrefix('*');
                $httpProvider.defaults.useXDomain = true;
                $httpProvider.defaults.headers.common = 'Content-Type: application/json ,application/x-www-form-urlencoded; charset=UTF-8';
                delete $httpProvider.defaults.headers.common['X-Requested-With'];
            }
        ]);



//        programmingTutorial.controller('historyCtrl', function ($scope, $http, $rootScope) {
//            $rootScope.hideMenuBarButt = false;
//            $rootScope.isLogin = false;
//            $scope.goToForrword = function () {
//                console.log("inside goToForrword");
//               // window.history.go(1);
//                window.history.forward();
//                
//            };
//            $scope.goToBackword = function () {
//                console.log("inside goToBackword");
//              //  window.history.go(-1);
//                window.history.back();
//            };
//        });


        programmingTutorial.controller('codeTestCtrl', function ($scope, $http, $rootScope) {
            $rootScope.hideMenuBarButt = false;
            $rootScope.isLogin = false;


            $scope.javaCodeTest = function () {
                //            alert("test");
                //                var data = {
                //                    "script" : $scope.getRawValue ,
                //                    "args": "",
                //                    "stdin": "",
                //                    "language": "java",
                //                    "libs": ""
                //                }
                //               
                //        	$http.post("https://www.jdoodle.com/api/execute", data)
                //                var encodetxt=encodeURIComponent( $scope.getRawValue );
                //                 
                //                var requestData = "code="+encodetxt+"&passargs=&respond=respond";
                //                alert("data -"+requestData);
                //        	$http.post("https://www.compilejava.net/", requestData, {
                //                        headers: { 'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8' }
                //                        //'Access-Control-Allow-Origin': '*'
                //                }) 


                var data = {
                    "script": $scope.getRawValue,
                    "args": "",
                    "stdin": "",
                    "language": "java",
                    "libs": ""
                };

                $http.post(baseUrl + 'codeTest', data)

                        .success(function (response) {
                            //   alert("sucessfully......."+JSON.stringify(response));
                            var respData = response.output.replace(/\n/g, "<br/>");
                            respData = respData.replace(/ /g, ' &nbsp; ');
                            respData = '<br/>Result : <br/><br/>' + respData + '<br/><br/>';
                            console.log("data - " + respData);
                            $scope.resultValue = respData;
                            $scope.resultExecuteTime = response.executeTime;
                            $scope.resultStatusCode = response.statusCode;
                            //                     var ip = location.hostname;
                            //                    alert(ip);
                            // alert("sucessfully......."+JSON.stringify(response));// Sets the employee object in $scope

                        }).error(function (data, status, headers, config, response) {
                            
                            $scope.resultValue = "unable to process the data";
                    console.log(JSON.stringify(config) + " response- " + response);
                    //alert("Failure please check your Internate Connection or may be server Problem - ");
                });

            
//                var rawData ="lang=java&code=import+java.util.Date%3B%0D%0Apublic+class+DateDemo+%7B%0D%0A%0D%0A+++public+static+void+main(String+args%5B%5D)+%7B%0D%0A++++++%2F%2F+Instantiate+a+Date+object%0D%0A++++++Date+date+%3D+new+Date()%3B%0D%0A++%0D%0A++++++%2F%2F+display+time+and+date%0D%0A++++++System.out.printf(%22%251%24s+%252%24tB+%252%24td%2C+%252%24tY%22%2C+%22Due+date%3A%22%2C+date)%3B%0D%0A+++%7D%0D%0A%7D&support=&util=&extra=&script=compile_new&inputs=&filename=&process=1503038214_39030&root=%2Fweb%2Fcom%2F1503038214_39030";
//                var raw ='val=public class Simple{public static void main(String args[]){System.out.println("hello javatpoint");}}&filename=Simple&args=&classname=" ';
//                $http( { 
//                    method: 'POST',
//                    url: 'https://tools.tutorialspoint.com/compile_new.php',
//                    data: rawData,
//               //     url: 'https://compiler.javatpoint.com/opr/run.jsp',
//                 //   data:raw,
//                    
//                    headers: {
//                            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
//                      //      'Access-Control-Allow-Origin' :'https://www.tutorialspoint.com',
//                       //     'Access-Control-Allow-Methods': 'POST',
//                            
//                            'Access-Control-Allow-Headers':'X-Requested-With,Accept,Content-Type, Origin',
//                            'Access-Control-Allow-Headers':'Content-Type',
//                            'Access-Control-Allow-Methods':'POST, GET, OPTIONS',
//                            'Access-Control-Allow-Methods':'GET, POST, OPTIONS, PUT, DELETE',
//                            'Access-Control-Allow-Origin':'https://www.tutorialspoint.com'
//                    }
//                 })
//                 .success(function (response) {
//                            console.log("data - " + JSON.stringify(response));
//                            $scope.resultValue = response;
//                        }).error(function (data, status, headers, config, response) {
//                        console.log(JSON.stringify(config) + " response- " + response);
//                        alert("Failure please check your Internate Connection or may be server Problem - ");
//                });



                //                .then(function (response) {
                //                    alert("sucessfully......."+JSON.stringify(res));// Sets the employee object in $scope
                //                // This function handles success
                //                }, function (response) {
                //                // this function handles error
                //                alert("failure");
                //                });




                //            .success(function(data, status, headers, config,response) {
                //              
                //               //  $scope.employee = data; 
                //                 alert("sucessfully......."+JSON.stringify(data));// Sets the employee object in $scope
                //             })
                //           .error(function(data, status, headers, config) {
                //               alert("failure");
                //             });
            };

        });

        //	programmingTutorial.controller('NaviBarCtrl', function($scope,$rootScope,$location, $anchorScroll) {
        //            
        //            $rootScope.hideMenuBarButt = false;
        //            $rootScope.isLogin = false;
        //            
        //            $scope.goToupPage =function () {
        //                console.log("tessssss");
        //                window.scrollTo(0,0);
        //            /*    $location.hash('goToUp');
        //                $anchorScroll(); */
        //           };
        //           
        //           
        //           window.onscroll = function() {scrollFunction()};

        /*        function scrollFunction() {
         if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
         document.getElementById("myBtn").style.display = "block";
         } else {
         document.getElementById("myBtn").style.display = "none";
         }
         }
         function topFunction() {
         //document.body.scrollTop = 0;
         //document.documentElement.scrollTop = 0;
         if (document.body.scrollTop!=0 || document.documentElement.scrollTop!=0){
         window.scrollBy(0,-80);
         timeOut=setTimeout('topFunction()',3);
         }
         else clearTimeout(timeOut);
         }*/

        //	    
        //	});
        //	

        programmingTutorial.controller('menuBar', function ($scope, $rootScope) {
            //             $scope.bodyHight = $('body').outerWidth();
            //             $scope.Hight = $('.container-fluid').outerWidth();
            //             console.log($scope.bodyHight+"$scope.bodyHight"+$scope.Hight);
            $rootScope.hideMenuBarButt = false;
            $rootScope.isLogin = false;

            $scope.menuBarCoreJava = true;
            $scope.menuBarJ2ee = true;
            $scope.menuBarUnix = true;
            $scope.menuBarMic = true;
            $scope.menuBarExt = true;
            $scope.menuBarAll = true;

            $scope.toggle = function () {
                $scope.menuBarCoreJava = !$scope.menuBarCoreJava;
            };

            $scope.toggle1 = function () {
                $scope.menuBarJ2ee = !$scope.menuBarJ2ee;
            };

            $scope.toggle2 = function () {
                $scope.menuBarUnix = !$scope.menuBarUnix;
            };

            $scope.toggle3 = function () {
                $scope.menuBarMic = !$scope.menuBarMic;
            };
            $scope.toggle4 = function () {
                $scope.menuBarExt = !$scope.menuBarExt; //not now
            };
            $scope.toggle5 = function () {
                $scope.menuBarAll = !$scope.menuBarAll; //not now
            };
        });

        programmingTutorial.controller('loginCtrl', function ($scope, $http, $rootScope) {
            $rootScope.hideMenuBarButt = false;
            $rootScope.isLogin = false;

            $scope.isLogin = function () {
                //            alert("test");
                var data = {
                    'mailid': $scope.mailid,
                    'password': $scope.password
                };
                alert("inside login..." + $scope.mailid + " " + $scope.password);
                $http.post(baseUrl + "login", data)
                    .success(function (data, status, headers, config, response) {
                        $rootScope.isLogin = true;
                        //  $scope.employee = data; 
                        alert("sucessfully......." + JSON.stringify(data));// Sets the employee object in $scope
                    })
                    .error(function (data, status, headers, config) {
                        alert("failure");
                    });
            };

        });

        programmingTutorial.controller('homeCtrl', function ($scope, $rootScope) {
            $rootScope.hideMenuBarButt = false;

            $scope.imageInBigScreen = true;
            $scope.imageInSmallScreen = false;
            
            $scope.firstImage = "img/technology1.jpg";
            $scope.secondImage = "img/technology2.jpg";
            $scope.thirdImage = "img/technology4.jpg";
            $scope.fourthImage = "img/technology5.jpg";
    
            if($rootScope.isMobile){
                $scope.firstImage = "img/technology1Small.jpg";
                $scope.secondImage = "img/technology2Small.jpg";
                $scope.thirdImage = "img/technology4Small.jpg" ;
                $scope.fourthImage = "img/technology5Small.jpg";
            }
            var imageInBigScreenHtml = '<div id="sliderFrame" class="pagePaddingBottom" ><div id="slider" style="width : 100%"><img src="D:\netbeen_8\Create project\MyProgram\WebContent\img\technology1Small.jpg" /> <img src="img/technology2.jpg" />  <img src="img/technology4.jpg" /> <img src="img/technology5.jpg" />  </div> </div> ';
            //            var imageInBigScreenHtml = "<div id=\"sliderFrame\" class=\"pagePaddingBottom\" >\n" +
            //                                        "            <div id=\"slider\" style=\"width : 100%\">\n" +
            //                                        "                <img src=\"img/technology1.jpg\" />\n" +
            //                                        "                <img src=\"img/technology2.jpg\" />\n" +
            //                                        "                <img src=\"img/technology4.jpg\" />\n" +
            //                                        "                <img src=\"img/technology5.jpg\" />\n" +
            //                                        "            </div>\n" +
            //                                        "        </div>" ;

            var imageInSmallScreenHtml = '<div id="sliderFrame"> <div id="slider" style="width : 100%">      <img src="img/technology1Small.jpg"  />     <img src="img/technology2Small.jpg" />     <img src="img/technology4Small.jpg"  />  <img src="img/technology5Small.jpg" /> </div> </div>';
            //                    " <div id=\"sliderFrame\" class=\"pagePaddingBottom\"  >\n" +
            //                                        "            <div id=\"slider\" style=\"width : 100%\"> \n" +
            //                                        "                <img src=\"img/technology1Small.jpg\"  />\n" +
            //                                        "                <img src=\"img/technology2Small.jpg\" />\n" +
            //                                        "                <img src=\"img/technology4Small.jpg\"  />\n" +
            //                                        "                <img src=\"img/technology5Small.jpg\"  />\n" +
            //                                        "            </div>\n" +
            //                                        "        </div>";
            //            
            $scope.imageScreen;
            var width = $(window).width();
            console.log("******* width " + width);
            if (width < 700) {
                console.log("******* width inside  width < 700");
                $scope.imageInBigScreen = false;
                $scope.imageInSmallScreen = true;
                $scope.imageScreen = imageInSmallScreenHtml;
            } else {

                $scope.imageScreen = imageInBigScreenHtml;
            }
            //            // initializing the time Interval
            //                    $scope.myInterval = 1000;
            //                    // Initializing  slide rray  
            //                    $scope.slides = [
            //                        {image: 'http://www.wetwebmedia.com/fwsubwebindex/Cyprinodontiform%20PIX/Platy%20PIX/Xiphophorus%20maculatusAQ%20Neon%20female.jpg', text: 'Cute Fish'},
            //                        {image: 'http://www.wetwebmedia.com/fwsubwebindex/Cyprinodontiform%20PIX/Platy%20PIX/Xiphophorus%20maculatusAQ%20Neon%20female.jpg', text: 'Image2'},
            //                        {image: 'http://www.wetwebmedia.com/fwsubwebindex/Cyprinodontiform%20PIX/Swordtail%20PIX/Xiphophorus%20helleriAQ%20Hifin%20Black%20males.jpg', text: 'Image3'},
            //                        {image: 'http://www.wetwebmedia.com/fwsubwebindex/Cyprinodontiform%20PIX/Platy%20PIX/Xiphophorus%20maculatusAQ%20Neon%20female.jpg', text: 'Image4'}
            //                    ];
            //                    var slides = $scope.slides;
            //                    console.log(slides);

        });

        programmingTutorial.controller('testCtrl', function ($scope, $rootScope) {
            $scope.carouselTimer = 5000;
            $scope.slides = [
                {
                    image: 'http://7818-presscdn-0-76.pagely.netdna-cdn.com/wp-content/uploads/2015/10/sports-car.jpg',
                    cap: 'Caption goes here'
                },
                {
                    image: 'http://7818-presscdn-0-76.pagely.netdna-cdn.com/wp-content/uploads/2015/10/sports-car.jpg',
                    cap: 'Caption goes here'
                },
                {
                    image: 'http://7818-presscdn-0-76.pagely.netdna-cdn.com/wp-content/uploads/2015/10/sports-car.jpg',
                    cap: 'Caption goes here'
                },
                {
                    image: 'http://7818-presscdn-0-76.pagely.netdna-cdn.com/wp-content/uploads/2015/10/sports-car.jpg',
                    cap: 'Caption goes here'
                }
            ];

        });


        programmingTutorial.controller('signUpCtrl', function ($scope, $http, $location, $rootScope) {

            $rootScope.hideMenuBarButt = true;
            //		alert($scope.hideMenuBarButt);

            $scope.isSignUp = function () {
                //	 alert("inside sign up");
                alert($scope.fname + " ## " + $scope.lname + " ## " + $scope.phNumb);
                $http({
                    method: 'POST',
                    url: baseUrl + 'signUp',
                    data: {
                        'fName': $scope.fname,
                        'lName': $scope.lname,
                        'phNumber': $scope.phNumb,
                        'mailid': $scope.mailid,
                        'password': $scope.password
                    }
                }).success(function (status, data) {
                    alert("sucessfully......." + JSON.stringify(data));
                    /*$scope.person = response.data;
                     alert("fail  n Rael"+status)*/
                }).error(function (response, status, headers, config) {
                    /*if(response==null)
                     {
                     alert("sucessfull  ");
                     $location.path('/basicProgram')
                     }else{
                     alert("failur......."+status);
                     }*/
                    alert("Errorrrrrr.......");

                });

            };
        });


        //        var cities = [ {
        //                  city : 'India',
        //                  desc : 'This is the best country in the world!',
        //                  lat : 23.200000,
        //                  long : 79.225487
        //              }];
        //        programmingTutorial.controller('googleMapCtrl', function($scope,$rootScope) {
        //                $rootScope.hideMenuBarButt = false;
        //                
        //              var mapOptions = {
        //                  zoom: 4,
        //                  center: new google.maps.LatLng(25,80),
        //                  mapTypeId: google.maps.MapTypeId.TERRAIN
        //              }
        //
        //              $scope.map = new google.maps.Map(document.getElementById('map'), mapOptions);
        //
        //              $scope.markers = [];
        //              
        //              var infoWindow = new google.maps.InfoWindow();
        //              
        //              var createMarker = function (info){
        //                  
        //                  var marker = new google.maps.Marker({
        //                      map: $scope.map,
        //                      position: new google.maps.LatLng(info.lat, info.long),
        //                      title: info.city
        //                  });
        //                  marker.content = '<div class="infoWindowContent">' + info.desc + '</div>';
        //                  
        //                  google.maps.event.addListener(marker, 'click', function(){
        //                      infoWindow.setContent('<h2>' + marker.title + '</h2>' + marker.content);
        //                      infoWindow.open($scope.map, marker);
        //                  });
        //                  
        //                  $scope.markers.push(marker);
        //                  
        //              }  
        //              
        //              for (i = 0; i < cities.length; i++){
        //                  createMarker(cities[i]);
        //              }
        //
        //              $scope.openInfoWindow = function(e, selectedMarker){
        //                  e.preventDefault();
        //                  google.maps.event.trigger(selectedMarker, 'click');
        //              }
        //              
        //        });
        //        


        programmingTutorial.service('Map', function ($q) {

            this.init = function () {
                var options = {
                    center: new google.maps.LatLng(20.593684, 78.96288000000004),
                    zoom: 4,
                    disableDefaultUI: false
                }
                this.map = new google.maps.Map(
                        document.getElementById("map"), options
                        );
                this.places = new google.maps.places.PlacesService(this.map);
            };

            this.search = function (str) {
                var d = $q.defer();
                this.places.textSearch({query: str}, function (results, status) {
                    if (status == 'OK') {
                        d.resolve(results[0]);
                    } else
                        d.reject(status);
                });
                return d.promise;
            };

            this.addMarker = function (res) {
                if (this.marker)
                    this.marker.setMap(null);
                this.marker = new google.maps.Marker({
                    map: this.map,
                    position: res.geometry.location,
                    animation: google.maps.Animation.DROP
                });
                this.map.setCenter(res.geometry.location);
            };

        });


        programmingTutorial.controller('googleMapCtrl', function ($scope, Map) {

            $scope.place = {
                name: 'India',
                desc: 'This is the best country in the world!',
                lat: 23.200000,
                lng: 79.225487};

            $scope.search = function () {
                $scope.apiError = false;
                Map.search($scope.searchPlace)
                    .then(
                        function (res) { // success
                            Map.addMarker(res);
                            $scope.place.name = res.name;
                            $scope.place.lat = res.geometry.location.lat();
                            $scope.place.lng = res.geometry.location.lng();
                        },
                        function (status) { // error
                            $scope.apiError = true;
                            $scope.apiStatus = status;
                        }
                    );
            };

            $scope.send = function () {
                alert($scope.place.name + ' : ' + $scope.place.lat + ', ' + $scope.place.lng);
            };

            Map.init();
        });



        programmingTutorial.controller('overviewCtrl', function ($scope, $rootScope) {
            $rootScope.hideMenuBarButt = false;

            $scope.overview = false;
            $scope.overview1 = false;
            $scope.overview2 = false;
            $scope.overview3 = false;
            $scope.overview4 = false;
            $scope.overview5 = false;
            $scope.overview6 = false;
            $scope.overview7 = false;
            $scope.overview8 = false;
            $scope.overview9 = false;
            $scope.overview10 = false;
            $scope.overview11 = false;
            $scope.overview12 = false;
            $scope.overview13 = false;
            $scope.overview14 = false;
            $scope.overview15 = false;

            $scope.toggle = function () {
                $scope.overview = !$scope.overview;
            };

            $scope.toggle1 = function () {
                $scope.overview1 = !$scope.overview1;
            };
            $scope.toggle2 = function () {
                $scope.overview2 = !$scope.overview2;
            };
            $scope.toggle3 = function () {
                $scope.overview3 = !$scope.overview3;
            };
            $scope.toggle4 = function () {
                $scope.overview4 = !$scope.overview4;
            };
            $scope.toggle5 = function () {
                $scope.overview5 = !$scope.overview5;
            };
            $scope.toggle6 = function () {
                $scope.overview6 = !$scope.overview6;
            };
            $scope.toggle7 = function () {
                $scope.overview7 = !$scope.overview7;
            };
            $scope.toggle8 = function () {
                $scope.overview8 = !$scope.overview8;
            };
            $scope.toggle9 = function () {
                $scope.overview9 = !$scope.overview9;
            };
            $scope.toggle10 = function () {
                $scope.overview10 = !$scope.overview10;
            };
            $scope.toggle11 = function () {
                $scope.overview11 = !$scope.overview11;
            };
            $scope.toggle12 = function () {
                $scope.overview12 = !$scope.overview12;
            };
            $scope.toggle13 = function () {
                $scope.overview13 = !$scope.overview13;
            };
            $scope.toggle14 = function () {
                $scope.overview14 = !$scope.overview14;
            };
            $scope.toggle15 = function () {
                $scope.overview15 = !$scope.overview15;
            };

        });



        programmingTutorial.controller('basicPCtrl', function ($scope, $rootScope) {
            $rootScope.hideMenuBarButt = false;
            var a = screen.width;
            $scope.basicPro16 = a;
            console.log("screen.width - " + screen.width);
            $scope.basicPro = false;
            $scope.basicPro1 = false;
            $scope.basicPro2 = false;
            $scope.basicPro3 = false;
            $scope.basicPro4 = false;
            $scope.basicPro5 = false;
            $scope.basicPro6 = false;
            $scope.basicPro7 = false;
            $scope.basicPro8 = false;
            $scope.basicPro9 = false;
            $scope.basicPro10 = false;
            $scope.basicPro11 = false;
            $scope.basicPro12 = false;
            $scope.basicPro13 = false;
            $scope.basicPro14 = false;
            $scope.basicPro15 = false;
            
            $scope.toggle = function () {
                $scope.basicPro = !$scope.basicPro;
            };

            $scope.toggle1 = function () {
                $scope.basicPro1 = !$scope.basicPro1;
            };
            $scope.toggle2 = function () {
                $scope.basicPro2 = !$scope.basicPro2;
            };
            $scope.toggle3 = function () {
                $scope.basicPro3 = !$scope.basicPro3;
            };
            $scope.toggle4 = function () {
                $scope.basicPro4 = !$scope.basicPro4;
            };
            $scope.toggle5 = function () {
                $scope.basicPro5 = !$scope.basicPro5;
            };
            $scope.toggle6 = function () {
                $scope.basicPro6 = !$scope.basicPro6;
            };
            $scope.toggle7 = function () {
                $scope.basicPro7 = !$scope.basicPro7;
            };

            $scope.toggle8 = function () {
                $scope.basicPro8 = !$scope.basicPro8;
            };
            $scope.toggle9 = function () {
                $scope.basicPro9 = !$scope.basicPro9;
            };
            $scope.toggle10 = function () {
                $scope.basicPro10 = !$scope.basicPro10;
            };
            $scope.toggle11 = function () {
                $scope.basicPro11 = !$scope.basicPro11;
            };
            $scope.toggle12 = function () {
                $scope.basicPro12 = !$scope.basicPro12;
            };
            $scope.toggle13 = function () {
                $scope.basicPro13 = !$scope.basicPro13;
            };
            $scope.toggle14 = function () {
                $scope.basicPro14 = !$scope.basicPro14;
            };
            $scope.toggle15 = function () {
                $scope.basicPro15 = !$scope.basicPro15;
            };

        });


        programmingTutorial.controller('constructorCtrl', function ($scope, $rootScope) {
            $rootScope.hideMenuBarButt = false;

            $scope.constructor = false;
            $scope.constructor1 = false;
            $scope.constructor2 = false;
            $scope.constructor3 = false;
            $scope.constructor4 = false;
            $scope.constructor5 = false;
            $scope.constructor6 = false;
            $scope.constructor7 = false;

            $scope.toggle = function () {
                $scope.constructor = !$scope.constructor;
            };

            $scope.toggle1 = function () {
                $scope.constructor1 = !$scope.constructor1;
            };
            $scope.toggle2 = function () {
                $scope.constructor2 = !$scope.constructor2;
            };
            $scope.toggle3 = function () {
                $scope.constructor3 = !$scope.constructor3;
            };
            $scope.toggle4 = function () {
                $scope.constructor4 = !$scope.constructor4;
            };
            $scope.toggle5 = function () {
                $scope.constructor5 = !$scope.constructor5;
            };
            $scope.toggle6 = function () {
                $scope.constructor6 = !$scope.constructor6;
            };
            $scope.toggle7 = function () {
                $scope.constructor7 = !$scope.constructor7;
            };

        });


        programmingTutorial.controller('starPatternCtrl', function ($scope, $rootScope) {
            $rootScope.hideMenuBarButt = false;

            $scope.starPattern = false;
            $scope.starPattern1 = false;
            $scope.starPattern2 = false;
            $scope.starPattern3 = false;
            $scope.starPattern4 = false;
            $scope.starPattern5 = false;
            $scope.starPattern6 = false;
            $scope.starPattern7 = false;

            $scope.toggle = function () {
                $scope.starPattern = !$scope.starPattern;
            };

            $scope.toggle1 = function () {
                $scope.starPattern1 = !$scope.starPattern1;
            };
            $scope.toggle2 = function () {
                $scope.starPattern2 = !$scope.starPattern2;
            };
            $scope.toggle3 = function () {
                $scope.starPattern3 = !$scope.starPattern3;
            };
            $scope.toggle4 = function () {
                $scope.starPattern4 = !$scope.starPattern4;
            };
            $scope.toggle5 = function () {
                $scope.starPattern5 = !$scope.starPattern5;
            };
            $scope.toggle6 = function () {
                $scope.starPattern6 = !$scope.starPattern6;
            };
            $scope.toggle7 = function () {
                $scope.starPattern7 = !$scope.starPattern7;
            };

        });




        programmingTutorial.controller('oppsCtrl', function ($scope, $rootScope) {
            $rootScope.hideMenuBarButt = false;

            $scope.opps = false;
            $scope.opps1 = false;
            $scope.opps2 = false;
            $scope.opps3 = false;
            $scope.opps5 = false;
            $scope.opps6 = false;
            $scope.opps7 = false;

            //                    $scope.isMobile = false;
            //		    if($rootScope.scrWidth < 700){
            //                        $scope.isMobile = false;
            //                    }

            $scope.toggle = function () {
                $scope.opps = !$scope.opps;
            };
            $scope.toggle1 = function () {
                $scope.opps1 = !$scope.opps1;
            };
            $scope.toggle2 = function () {
                $scope.opps2 = !$scope.opps2;
            };
            $scope.toggle3 = function () {
                $scope.opps3 = !$scope.opps3;
            };
            $scope.toggle4 = function () {
                $scope.opps4 = !$scope.opps4;
            };
            $scope.toggle5 = function () {
                $scope.opps5 = !$scope.opps5;
            };
            $scope.toggle6 = function () {
                $scope.opps6 = !$scope.opps6;
            };
            $scope.toggle7 = function () {
                $scope.opps7 = !$scope.opps7;
            };
        });


        programmingTutorial.controller('arrayCtrl', function ($scope, $rootScope) {
            $rootScope.hideMenuBarButt = false;

            $scope.array = false;
            $scope.array1 = false;
            $scope.array2 = false;
            $scope.array3 = false;
            $scope.array4 = false;
            $scope.array5 = false;
            $scope.array6 = false;
            $scope.array7 = false;
            $scope.array8 = false;
            $scope.array9 = false;
            $scope.array10 = false;
            $scope.array11 = false;
            $scope.array12 = false;
            $scope.array13 = false;
            $scope.array14 = false;
            $scope.array15 = false;

            $scope.toggle = function () {
                $scope.array = !$scope.array;
            };

            $scope.toggle1 = function () {
                $scope.array1 = !$scope.array1;
            };
            $scope.toggle2 = function () {
                $scope.array2 = !$scope.array2;
            };
            $scope.toggle3 = function () {
                $scope.array3 = !$scope.array3;
            };
            $scope.toggle4 = function () {
                $scope.array4 = !$scope.array4;
            };
            $scope.toggle5 = function () {
                $scope.array5 = !$scope.array5;
            };
            $scope.toggle6 = function () {
                $scope.array6 = !$scope.array6;
            };
            $scope.toggle7 = function () {
                $scope.array7 = !$scope.array7;
            };
            $scope.toggle8 = function () {
                $scope.array8 = !$scope.array8;
            };
            $scope.toggle9 = function () {
                $scope.array9 = !$scope.array9;
            };
            $scope.toggle10 = function () {
                $scope.array10 = !$scope.array10;
            };
            $scope.toggle11 = function () {
                $scope.array11 = !$scope.array11;
            };
            $scope.toggle12 = function () {
                $scope.array12 = !$scope.array12;
            };
            $scope.toggle13 = function () {
                $scope.array13 = !$scope.array13;
            };
            $scope.toggle14 = function () {
                $scope.array14 = !$scope.array14;
            };
            $scope.toggle15 = function () {
                $scope.array15 = !$scope.array15;
            };

        });



        programmingTutorial.controller('stringCtrl', function ($scope, $rootScope) {
            $rootScope.hideMenuBarButt = false;

            $scope.string = false;
            $scope.string1 = false;
            $scope.string2 = false;
            $scope.string3 = false;
            $scope.string4 = false;
            $scope.string5 = false;
            $scope.string6 = false;
            $scope.string7 = false;
            $scope.string8 = false;
            $scope.string9 = false;
            $scope.string10 = false;
            $scope.string11 = false;
            $scope.string12 = false;
            $scope.string13 = false;
            $scope.string14 = false;
            $scope.string15 = false;

            $scope.toggle = function () {
                $scope.string = !$scope.string;
            };

            $scope.toggle1 = function () {
                $scope.string1 = !$scope.string1;
            };
            $scope.toggle2 = function () {
                $scope.string2 = !$scope.string2;
            };
            $scope.toggle3 = function () {
                $scope.string3 = !$scope.string3;
            };
            $scope.toggle4 = function () {
                $scope.string4 = !$scope.string4;
            };
            $scope.toggle5 = function () {
                $scope.string5 = !$scope.string5;
            };
            $scope.toggle6 = function () {
                $scope.string6 = !$scope.string6;
            };
            $scope.toggle7 = function () {
                $scope.string7 = !$scope.string7;
            };
            $scope.toggle8 = function () {
                $scope.string8 = !$scope.string8;
            };
            $scope.toggle9 = function () {
                $scope.string9 = !$scope.string9;
            };
            $scope.toggle10 = function () {
                $scope.string10 = !$scope.string10;
            };
            $scope.toggle11 = function () {
                $scope.string11 = !$scope.string11;
            };
            $scope.toggle12 = function () {
                $scope.string12 = !$scope.string12;
            };
            $scope.toggle13 = function () {
                $scope.string13 = !$scope.string13;
            };
            $scope.toggle14 = function () {
                $scope.string14 = !$scope.string14;
            };
            $scope.toggle15 = function () {
                $scope.string15 = !$scope.string15;
            };

        });



        programmingTutorial.controller('exceptionHendalingCtrl', function ($scope, $rootScope) {
            $rootScope.hideMenuBarButt = false;

            $scope.exceptionHendaling = false;
            $scope.exceptionHendaling1 = false;
            $scope.exceptionHendaling2 = false;
            $scope.exceptionHendaling3 = false;
            $scope.exceptionHendaling4 = false;
            $scope.exceptionHendaling5 = false;
            $scope.exceptionHendaling6 = false;
            $scope.exceptionHendaling7 = false;
            $scope.exceptionHendaling8 = false;
            $scope.exceptionHendaling9 = false;
            $scope.exceptionHendaling10 = false;
            $scope.exceptionHendaling11 = false;
            $scope.exceptionHendaling12 = false;
            $scope.exceptionHendaling13 = false;
            $scope.exceptionHendaling14 = false;
            $scope.exceptionHendaling15 = false;


            $scope.toggle = function () {
                $scope.exceptionHendaling = !$scope.exceptionHendaling;
            };
            $scope.toggle1 = function () {
                $scope.exceptionHendaling1 = !$scope.exceptionHendaling1;
            };
            $scope.toggle2 = function () {
                $scope.exceptionHendaling2 = !$scope.exceptionHendaling2;
            };
            $scope.toggle3 = function () {
                $scope.exceptionHendaling3 = !$scope.exceptionHendaling3;
            };
            $scope.toggle4 = function () {
                $scope.exceptionHendaling4 = !$scope.exceptionHendaling4;
            };
            $scope.toggle5 = function () {
                $scope.exceptionHendaling5 = !$scope.exceptionHendaling5;
            };
            $scope.toggle6 = function () {
                $scope.exceptionHendaling6 = !$scope.exceptionHendaling6;
            };
            $scope.toggle7 = function () {
                $scope.exceptionHendaling7 = !$scope.exceptionHendaling7;
            };
            $scope.toggle8 = function () {
                $scope.exceptionHendaling8 = !$scope.exceptionHendaling8;
            };
            $scope.toggle9 = function () {
                $scope.exceptionHendaling9 = !$scope.exceptionHendaling9;
            };
            $scope.toggle10 = function () {
                $scope.exceptionHendaling10 = !$scope.exceptionHendaling10;
            };
            $scope.toggle11 = function () {
                $scope.exceptionHendaling11 = !$scope.exceptionHendaling11;
            };
            $scope.toggle12 = function () {
                $scope.exceptionHendaling12 = !$scope.exceptionHendaling12;
            };
            $scope.toggle13 = function () {
                $scope.exceptionHendaling13 = !$scope.exceptionHendaling13;
            };
            $scope.toggle14 = function () {
                $scope.exceptionHendaling14 = !$scope.exceptionHendaling14;
            };
            $scope.toggle15 = function () {
                $scope.exceptionHendaling15 = !$scope.exceptionHendaling15;
            };

        });



        programmingTutorial.controller('collectionCtrl', function ($scope, $rootScope) {
            $rootScope.hideMenuBarButt = false;

            $scope.collection = false;
            $scope.collection1 = false;
            $scope.collection2 = false;
            $scope.collection3 = false;
            $scope.collection4 = false;
            $scope.collection5 = false;
            $scope.collection6 = false;
            $scope.collection7 = false;
            $scope.collection8 = false;
            $scope.collection9 = false;
            $scope.collection10 = false;
            $scope.collection11 = false;
            $scope.collection12 = false;
            $scope.collection13 = false;
            $scope.collection14 = false;
            $scope.collection15 = false;

            $scope.toggle = function () {
                $scope.collection = !$scope.collection;
            };

            $scope.toggle1 = function () {
                $scope.collection1 = !$scope.collection1;
            };
            $scope.toggle2 = function () {
                $scope.collection2 = !$scope.collection2;
            };
            $scope.toggle3 = function () {
                $scope.collection3 = !$scope.collection3;
            };
            $scope.toggle4 = function () {
                $scope.collection4 = !$scope.collection4;
            };
            $scope.toggle5 = function () {
                $scope.collection5 = !$scope.collection5;
            };
            $scope.toggle6 = function () {
                $scope.collection6 = !$scope.collection6;
            };
            $scope.toggle7 = function () {
                $scope.collection7 = !$scope.collection7;
            };
            $scope.toggle8 = function () {
                $scope.collection8 = !$scope.collection8;
            };
            $scope.toggle9 = function () {
                $scope.collection9 = !$scope.collection9;
            };
            $scope.toggle10 = function () {
                $scope.collection10 = !$scope.collection10;
            };
            $scope.toggle11 = function () {
                $scope.collection11 = !$scope.collection11;
            };
            $scope.toggle12 = function () {
                $scope.collection12 = !$scope.collection12;
            };
            $scope.toggle13 = function () {
                $scope.collection13 = !$scope.collection13;
            };
            $scope.toggle14 = function () {
                $scope.collection14 = !$scope.collection14;
            };
            $scope.toggle15 = function () {
                $scope.collection15 = !$scope.collection15;
            };

        });



        programmingTutorial.controller('multiThradingCtrl', function ($scope, $rootScope) {
            $rootScope.hideMenuBarButt = false;

            $scope.multiThrading = false;
            $scope.multiThrading1 = false;
            $scope.multiThrading2 = false;
            $scope.multiThrading3 = false;
            $scope.multiThrading4 = false;
            $scope.multiThrading5 = false;
            $scope.multiThrading6 = false;
            $scope.multiThrading7 = false;
            $scope.multiThrading8 = false;
            $scope.multiThrading9 = false;
            $scope.multiThrading10 = false;
            $scope.multiThrading11 = false;
            $scope.multiThrading12 = false;
            $scope.multiThrading13 = false;
            $scope.multiThrading14 = false;
            $scope.multiThrading15 = false;

            $scope.toggle = function () {
                $scope.multiThrading = !$scope.multiThrading;
            };

            $scope.toggle1 = function () {
                $scope.multiThrading1 = !$scope.multiThrading1;
            };
            $scope.toggle2 = function () {
                $scope.multiThrading2 = !$scope.multiThrading2;
            };
            $scope.toggle3 = function () {
                $scope.multiThrading3 = !$scope.multiThrading3;
            };
            $scope.toggle4 = function () {
                $scope.multiThrading4 = !$scope.multiThrading4;
            };
            $scope.toggle5 = function () {
                $scope.multiThrading5 = !$scope.multiThrading5;
            };
            $scope.toggle6 = function () {
                $scope.multiThrading6 = !$scope.multiThrading6;
            };
            $scope.toggle7 = function () {
                $scope.multiThrading7 = !$scope.multiThrading7;
            };
            $scope.toggle8 = function () {
                $scope.multiThrading8 = !$scope.multiThrading8;
            };
            $scope.toggle9 = function () {
                $scope.multiThrading9 = !$scope.multiThrading9;
            };
            $scope.toggle10 = function () {
                $scope.multiThrading10 = !$scope.multiThrading10;
            };
            $scope.toggle11 = function () {
                $scope.multiThrading11 = !$scope.multiThrading11;
            };
            $scope.toggle12 = function () {
                $scope.multiThrading12 = !$scope.multiThrading12;
            };
            $scope.toggle13 = function () {
                $scope.multiThrading13 = !$scope.multiThrading13;
            };
            $scope.toggle14 = function () {
                $scope.multiThrading14 = !$scope.multiThrading14;
            };
            $scope.toggle15 = function () {
                $scope.multiThrading15 = !$scope.multiThrading15;
            };
            
        });



        programmingTutorial.controller('dateCtrl', function ($scope, $rootScope) {
            $rootScope.hideMenuBarButt = false;

            $scope.date = false;
            $scope.date1 = false;
            $scope.date2 = false;
            $scope.date3 = false;
            $scope.date4 = false;
            $scope.date5 = false;
            $scope.date6 = false;
            $scope.date7 = false;

            $scope.toggle = function () {
                $scope.date = !$scope.date;
            };

            $scope.toggle1 = function () {
                $scope.date1 = !$scope.date1;
            };
            $scope.toggle2 = function () {
                $scope.date2 = !$scope.date2;
            };
            $scope.toggle3 = function () {
                $scope.date3 = !$scope.date3;
            };
            $scope.toggle4 = function () {
                $scope.date4 = !$scope.date4;
            };
            $scope.toggle5 = function () {
                $scope.date5 = !$scope.date5;
            };
            $scope.toggle6 = function () {
                $scope.date6 = !$scope.date6;
            };
            $scope.toggle7 = function () {
                $scope.date7 = !$scope.date7;
            };

        });



        programmingTutorial.controller('jdbcConnectionCtrl', function ($scope, $rootScope) {
            $rootScope.hideMenuBarButt = false;

            $scope.jdbcConnection = false;
            $scope.jdbcConnection1 = false;
            $scope.jdbcConnection2 = false;
            $scope.jdbcConnection3 = false;
            $scope.jdbcConnection4 = false;
            $scope.jdbcConnection5 = false;
            $scope.jdbcConnection6 = false;
            $scope.jdbcConnection7 = false;

            $scope.toggle = function () {
                $scope.jdbcConnection = !$scope.jdbcConnection;
            };

            $scope.toggle1 = function () {
                $scope.jdbcConnection1 = !$scope.jdbcConnection1;
            };
            $scope.toggle2 = function () {
                $scope.jdbcConnection2 = !$scope.jdbcConnection2;
            };
            $scope.toggle3 = function () {
                $scope.jdbcConnection3 = !$scope.jdbcConnection3;
            };
            $scope.toggle4 = function () {
                $scope.jdbcConnection4 = !$scope.jdbcConnection4;
            };
            $scope.toggle5 = function () {
                $scope.jdbcConnection5 = !$scope.jdbcConnection5;
            };
            $scope.toggle6 = function () {
                $scope.jdbcConnection6 = !$scope.jdbcConnection6;
            };
            $scope.toggle7 = function () {
                $scope.jdbcConnection7 = !$scope.jdbcConnection7;
            };

        });



        programmingTutorial.controller('questionPaperCtrl', function ($scope, $rootScope) {
            $rootScope.hideMenuBarButt = false;

            $scope.questionPaper = false;
            $scope.questionPaper1 = false;
            $scope.questionPaper2 = false;
            $scope.questionPaper3 = false;
            $scope.questionPaper4 = false;
            $scope.questionPaper5 = false;
            $scope.questionPaper6 = false;
            $scope.questionPaper7 = false;

            $scope.toggle = function () {
                $scope.questionPaper = !$scope.questionPaper;
            };

            $scope.toggle1 = function () {
                $scope.questionPaper1 = !$scope.questionPaper1;
            };
            $scope.toggle2 = function () {
                $scope.questionPaper2 = !$scope.questionPaper2;
            };
            $scope.toggle3 = function () {
                $scope.questionPaper3 = !$scope.questionPaper3;
            };
            $scope.toggle4 = function () {
                $scope.questionPaper4 = !$scope.questionPaper4;
            };
            $scope.toggle5 = function () {
                $scope.questionPaper5 = !$scope.questionPaper5;
            };
            $scope.toggle6 = function () {
                $scope.questionPaper6 = !$scope.questionPaper6;
            };
            $scope.toggle7 = function () {
                $scope.questionPaper7 = !$scope.questionPaper7;
            };

        });



        programmingTutorial.controller('suggetionPaperCtrl', function ($scope, $rootScope) {
            $rootScope.hideMenuBarButt = false;

            $scope.suggetionPaper = false;
            $scope.suggetionPaper1 = false;
            $scope.suggetionPaper2 = false;
            $scope.suggetionPaper3 = false;
            $scope.suggetionPaper4 = false;
            $scope.suggetionPaper5 = false;
            $scope.suggetionPaper6 = false;
            $scope.suggetionPaper7 = false;

            $scope.toggle = function () {
                $scope.suggetionPaper = !$scope.suggetionPaper;
            };

            $scope.toggle1 = function () {
                $scope.suggetionPaper1 = !$scope.suggetionPaper1;
            };
            $scope.toggle2 = function () {
                $scope.suggetionPaper2 = !$scope.suggetionPaper2;
            };
            $scope.toggle3 = function () {
                $scope.suggetionPaper3 = !$scope.suggetionPaper3;
            };
            $scope.toggle4 = function () {
                $scope.suggetionPaper4 = !$scope.suggetionPaper4;
            };
            $scope.toggle5 = function () {
                $scope.suggetionPaper5 = !$scope.suggetionPaper5;
            };
            $scope.toggle6 = function () {
                $scope.suggetionPaper6 = !$scope.suggetionPaper6;
            };
            $scope.toggle7 = function () {
                $scope.suggetionPaper7 = !$scope.suggetionPaper7;
            };

        });



        programmingTutorial.controller('quizCtrl', function ($scope, $rootScope) {
            $rootScope.hideMenuBarButt = false;

            $scope.quiz = false;
            $scope.quiz1 = false;
            $scope.quiz2 = false;
            $scope.quiz3 = false;
            $scope.quiz4 = false;
            $scope.quiz5 = false;
            $scope.quiz6 = false;
            $scope.quiz7 = false;

            $scope.toggle = function () {
                $scope.quiz = !$scope.quiz;
            };

            $scope.toggle1 = function () {
                $scope.quiz1 = !$scope.quiz1;
            };
            $scope.toggle2 = function () {
                $scope.quiz2 = !$scope.quiz2;
            };
            $scope.toggle3 = function () {
                $scope.quiz3 = !$scope.quiz3;
            };
            $scope.toggle4 = function () {
                $scope.quiz4 = !$scope.quiz4;
            };
            $scope.toggle5 = function () {
                $scope.quiz5 = !$scope.quiz5;
            };
            $scope.toggle6 = function () {
                $scope.quiz6 = !$scope.quiz6;
            };
            $scope.toggle7 = function () {
                $scope.quiz7 = !$scope.quiz7;
            };

        });



        programmingTutorial.controller('askQuestionCtrl', function ($scope, $rootScope) {
            $rootScope.hideMenuBarButt = false;

            $scope.askQuestion = false;
            $scope.askQuestion1 = false;
            $scope.askQuestion2 = false;
            $scope.askQuestion3 = false;
            $scope.askQuestion4 = false;
            $scope.askQuestion5 = false;
            $scope.askQuestion6 = false;
            $scope.askQuestion7 = false;

            $scope.toggle = function () {
                $scope.askQuestion = !$scope.askQuestion;
            };

            $scope.toggle1 = function () {
                $scope.askQuestion1 = !$scope.askQuestion1;
            };
            $scope.toggle2 = function () {
                $scope.askQuestion2 = !$scope.askQuestion2;
            };
            $scope.toggle3 = function () {
                $scope.askQuestion3 = !$scope.askQuestion3;
            };
            $scope.toggle4 = function () {
                $scope.askQuestion4 = !$scope.askQuestion4;
            };
            $scope.toggle5 = function () {
                $scope.askQuestion5 = !$scope.askQuestion5;
            };
            $scope.toggle6 = function () {
                $scope.askQuestion6 = !$scope.askQuestion6;
            };
            $scope.toggle7 = function () {
                $scope.askQuestion7 = !$scope.askQuestion7;
            };

        });



        programmingTutorial.controller('overloadingCtrl', function ($scope, $rootScope) {
            $rootScope.hideMenuBarButt = false;

            $scope.overloading = false;
            $scope.overloading1 = false;
            $scope.overloading2 = false;
            $scope.overloading3 = false;
            $scope.overloading4 = false;
            $scope.overloading5 = false;
            $scope.overloading6 = false;
            $scope.overloading7 = false;
            $scope.overloading8 = false;
            $scope.overloading9 = false;
            $scope.overloading10 = false;
            $scope.overloading11 = false;
            $scope.overloading12 = false;
            $scope.overloading13 = false;
            $scope.overloading14 = false;
            $scope.overloading15 = false;

            $scope.toggle = function () {
                $scope.overloading = !$scope.overloading;
            };
            $scope.toggle1 = function () {
                $scope.overloading1 = !$scope.overloading1;
            };
            $scope.toggle2 = function () {
                $scope.overloading2 = !$scope.overloading2;
            };
            $scope.toggle3 = function () {
                $scope.overloading3 = !$scope.overloading3;
            };
            $scope.toggle4 = function () {
                $scope.overloading4 = !$scope.overloading4;
            };
            $scope.toggle5 = function () {
                $scope.overloading5 = !$scope.overloading5;
            };
            $scope.toggle6 = function () {
                $scope.overloading6 = !$scope.overloading6;
            };
            $scope.toggle7 = function () {
                $scope.overloading7 = !$scope.overloading7;
            };
            $scope.toggle8 = function () {
                $scope.overloading8 = !$scope.overloading8;
            };
            $scope.toggle9 = function () {
                $scope.overloading9 = !$scope.overloading9;
            };
            $scope.toggle10 = function () {
                $scope.overloading10 = !$scope.overloading10;
            };
            $scope.toggle11 = function () {
                $scope.overloading11 = !$scope.overloading11;
            };
            $scope.toggle12 = function () {
                $scope.overloading12 = !$scope.overloading12;
            };
            $scope.toggle13 = function () {
                $scope.overloading13 = !$scope.overloading13;
            };
            $scope.toggle14 = function () {
                $scope.overloading14 = !$scope.overloading14;
            };
            $scope.toggle15 = function () {
                $scope.overloading15 = !$scope.overloading15;
            };

        });



        programmingTutorial.controller('overridingCtrl', function ($scope, $rootScope) {
            $rootScope.hideMenuBarButt = false;

            $scope.overriding = false;
            $scope.overriding1 = false;
            $scope.overriding2 = false;
            $scope.overriding3 = false;
            $scope.overriding4 = false;
            $scope.overriding5 = false;
            $scope.overriding6 = false;
            $scope.overriding7 = false;
            $scope.overriding8 = false;
            $scope.overriding9 = false;
            $scope.overriding10 = false;
            $scope.overriding11 = false;
            $scope.overriding12 = false;
            $scope.overriding13 = false;
            $scope.overriding14 = false;
            $scope.overriding15 = false;

            $scope.toggle = function () {
                $scope.overriding = !$scope.overriding;
            };
            $scope.toggle1 = function () {
                $scope.overriding1 = !$scope.overriding1;
            };
            $scope.toggle2 = function () {
                $scope.overriding2 = !$scope.overriding2;
            };
            $scope.toggle3 = function () {
                $scope.overriding3 = !$scope.overriding3;
            };
            $scope.toggle4 = function () {
                $scope.overriding4 = !$scope.overriding4;
            };
            $scope.toggle5 = function () {
                $scope.overriding5 = !$scope.overriding5;
            };
            $scope.toggle6 = function () {
                $scope.overriding6 = !$scope.overriding6;
            };
            $scope.toggle7 = function () {
                $scope.overriding7 = !$scope.overriding7;
            };
            $scope.toggle8 = function () {
                $scope.overriding8 = !$scope.overriding8;
            };
            $scope.toggle9 = function () {
                $scope.overriding9 = !$scope.overriding9;
            };
            $scope.toggle10 = function () {
                $scope.overriding10 = !$scope.overriding10;
            };
            $scope.toggle11 = function () {
                $scope.overriding11 = !$scope.overriding11;
            };
            $scope.toggle12 = function () {
                $scope.overriding12 = !$scope.overriding12;
            };
            $scope.toggle13 = function () {
                $scope.overriding13 = !$scope.overriding13;
            };
            $scope.toggle14 = function () {
                $scope.overriding14 = !$scope.overriding14;
            };
            $scope.toggle15 = function () {
                $scope.overriding15 = !$scope.overriding15;
            };

        });


        programmingTutorial.controller('jspCtrl', function ($scope, $rootScope) {
            $rootScope.hideMenuBarButt = false;

            $scope.jsp = false;
            $scope.jsp1 = false;
            $scope.jsp2 = false;
            $scope.jsp3 = false;
            $scope.jsp4 = false;
            $scope.jsp5 = false;
            $scope.jsp6 = false;
            $scope.jsp7 = false;
            $scope.jsp8 = false;
            $scope.jsp9 = false;
            $scope.jsp10 = false;
            $scope.jsp11 = false;
            $scope.jsp12 = false;
            $scope.jsp13 = false;
            $scope.jsp14 = false;
            $scope.jsp15 = false;

            $scope.toggle = function () {
                $scope.jsp = !$scope.jsp;
            };
            $scope.toggle1 = function () {
                $scope.jsp1 = !$scope.jsp1;
            };
            $scope.toggle2 = function () {
                $scope.jsp2 = !$scope.jsp2;
            };
            $scope.toggle3 = function () {
                $scope.jsp3 = !$scope.jsp3;
            };
            $scope.toggle4 = function () {
                $scope.jsp4 = !$scope.jsp4;
            };
            $scope.toggle5 = function () {
                $scope.jsp5 = !$scope.jsp5;
            };
            $scope.toggle6 = function () {
                $scope.jsp6 = !$scope.jsp6;
            };
            $scope.toggle7 = function () {
                $scope.jsp7 = !$scope.jsp7;
            };
            $scope.toggle8 = function () {
                $scope.jsp8 = !$scope.jsp8;
            };
            $scope.toggle9 = function () {
                $scope.jsp9 = !$scope.jsp9;
            };
            $scope.toggle10 = function () {
                $scope.jsp10 = !$scope.jsp10;
            };
            $scope.toggle11 = function () {
                $scope.jsp11 = !$scope.jsp11;
            };
            $scope.toggle12 = function () {
                $scope.jsp12 = !$scope.jsp12;
            };
            $scope.toggle13 = function () {
                $scope.jsp13 = !$scope.jsp13;
            };
            $scope.toggle14 = function () {
                $scope.jsp14 = !$scope.jsp14;
            };
            $scope.toggle15 = function () {
                $scope.jsp15 = !$scope.jsp15;
            };

        });


        programmingTutorial.controller('servletCtrl', function ($scope, $rootScope) {
            $rootScope.hideMenuBarButt = false;

            $scope.servlet = false;
            $scope.servlet1 = false;
            $scope.servlet2 = false;
            $scope.servlet3 = false;
            $scope.servlet4 = false;
            $scope.servlet5 = false;
            $scope.servlet6 = false;
            $scope.servlet7 = false;
            $scope.servlet8 = false;
            $scope.servlet9 = false;
            $scope.servlet10 = false;
            $scope.servlet11 = false;
            $scope.servlet12 = false;
            $scope.servlet13 = false;
            $scope.servlet14 = false;
            $scope.servlet15 = false;

            $scope.toggle = function () {
                $scope.servlet = !$scope.servlet;
            };
            $scope.toggle1 = function () {
                $scope.servlet1 = !$scope.servlet1;
            };
            $scope.toggle2 = function () {
                $scope.servlet2 = !$scope.servlet2;
            };
            $scope.toggle3 = function () {
                $scope.servlet3 = !$scope.servlet3;
            };
            $scope.toggle4 = function () {
                $scope.servlet4 = !$scope.servlet4;
            };
            $scope.toggle5 = function () {
                $scope.servlet5 = !$scope.servlet5;
            };
            $scope.toggle6 = function () {
                $scope.servlet6 = !$scope.servlet6;
            };
            $scope.toggle7 = function () {
                $scope.servlet7 = !$scope.servlet7;
            };
            $scope.toggle8 = function () {
                $scope.servlet8 = !$scope.servlet8;
            };
            $scope.toggle9 = function () {
                $scope.servlet9 = !$scope.servlet9;
            };
            $scope.toggle10 = function () {
                $scope.servlet10 = !$scope.servlet10;
            };
            $scope.toggle11 = function () {
                $scope.servlet11 = !$scope.servlet11;
            };
            $scope.toggle12 = function () {
                $scope.servlet12 = !$scope.servlet12;
            };
            $scope.toggle13 = function () {
                $scope.servlet13 = !$scope.servlet13;
            };
            $scope.toggle14 = function () {
                $scope.servlet14 = !$scope.servlet14;
            };
            $scope.toggle15 = function () {
                $scope.servlet15 = !$scope.servlet15;
            };

        });




        programmingTutorial.controller('basicLinuxCtrl', function ($scope, $rootScope) {
            $rootScope.hideMenuBarButt = false;

            $scope.basicLinux = false;
            $scope.basicLinux1 = false;
            $scope.basicLinux2 = false;
            $scope.basicLinux3 = false;
            $scope.basicLinux4 = false;
            $scope.basicLinux5 = false;
            $scope.basicLinux6 = false;
            $scope.basicLinux7 = false;
            $scope.basicLinux8 = false;
            $scope.basicLinux9 = false;
            $scope.basicLinux10 = false;
            $scope.basicLinux11 = false;
            $scope.basicLinux12 = false;
            $scope.basicLinux13 = false;
            $scope.basicLinux14 = false;
            $scope.basicLinux15 = false;

            $scope.toggle = function () {
                $scope.basicLinux = !$scope.basicLinux;
            };
            $scope.toggle1 = function () {
                $scope.basicLinux1 = !$scope.basicLinux1;
            };
            $scope.toggle2 = function () {
                $scope.basicLinux2 = !$scope.basicLinux2;
            };
            $scope.toggle3 = function () {
                $scope.basicLinux3 = !$scope.basicLinux3;
            };
            $scope.toggle4 = function () {
                $scope.basicLinux4 = !$scope.basicLinux4;
            };
            $scope.toggle5 = function () {
                $scope.basicLinux5 = !$scope.basicLinux5;
            };
            $scope.toggle6 = function () {
                $scope.basicLinux6 = !$scope.basicLinux6;
            };
            $scope.toggle7 = function () {
                $scope.basicLinux7 = !$scope.basicLinux7;
            };
            $scope.toggle8 = function () {
                $scope.basicLinux8 = !$scope.basicLinux8;
            };
            $scope.toggle9 = function () {
                $scope.basicLinux9 = !$scope.basicLinux9;
            };
            $scope.toggle10 = function () {
                $scope.basicLinux10 = !$scope.basicLinux10;
            };
            $scope.toggle11 = function () {
                $scope.basicLinux11 = !$scope.basicLinux11;
            };
            $scope.toggle12 = function () {
                $scope.basicLinux12 = !$scope.basicLinux12;
            };
            $scope.toggle13 = function () {
                $scope.basicLinux13 = !$scope.basicLinux13;
            };
            $scope.toggle14 = function () {
                $scope.basicLinux14 = !$scope.basicLinux14;
            };
            $scope.toggle15 = function () {
                $scope.basicLinux15 = !$scope.basicLinux15;
            };

        });






        programmingTutorial.controller('linuxCommandCtrl', function ($scope, $rootScope) {
            $rootScope.hideMenuBarButt = false;

            $scope.linuxCommand = false;
            $scope.linuxCommand1 = false;
            $scope.linuxCommand2 = false;
            $scope.linuxCommand3 = false;
            $scope.linuxCommand4 = false;
            $scope.linuxCommand5 = false;
            $scope.linuxCommand6 = false;
            $scope.linuxCommand7 = false;
            $scope.linuxCommand8 = false;
            $scope.linuxCommand9 = false;
            $scope.linuxCommand10 = false;
            $scope.linuxCommand11 = false;
            $scope.linuxCommand12 = false;
            $scope.linuxCommand13 = false;
            $scope.linuxCommand14 = false;
            $scope.linuxCommand15 = false;

            $scope.toggle = function () {
                $scope.linuxCommand = !$scope.linuxCommand;
            };
            $scope.toggle1 = function () {
                $scope.linuxCommand1 = !$scope.linuxCommand1;
            };
            $scope.toggle2 = function () {
                $scope.linuxCommand2 = !$scope.linuxCommand2;
            };
            $scope.toggle3 = function () {
                $scope.linuxCommand3 = !$scope.linuxCommand3;
            };
            $scope.toggle4 = function () {
                $scope.linuxCommand4 = !$scope.linuxCommand4;
            };
            $scope.toggle5 = function () {
                $scope.linuxCommand5 = !$scope.linuxCommand5;
            };
            $scope.toggle6 = function () {
                $scope.linuxCommand6 = !$scope.linuxCommand6;
            };
            $scope.toggle7 = function () {
                $scope.linuxCommand7 = !$scope.linuxCommand7;
            };
            $scope.toggle8 = function () {
                $scope.linuxCommand8 = !$scope.linuxCommand8;
            };
            $scope.toggle9 = function () {
                $scope.linuxCommand9 = !$scope.linuxCommand9;
            };
            $scope.toggle10 = function () {
                $scope.linuxCommand10 = !$scope.linuxCommand10;
            };
            $scope.toggle11 = function () {
                $scope.linuxCommand11 = !$scope.linuxCommand11;
            };
            $scope.toggle12 = function () {
                $scope.linuxCommand12 = !$scope.linuxCommand12;
            };
            $scope.toggle13 = function () {
                $scope.linuxCommand13 = !$scope.linuxCommand13;
            };
            $scope.toggle14 = function () {
                $scope.linuxCommand14 = !$scope.linuxCommand14;
            };
            $scope.toggle15 = function () {
                $scope.linuxCommand15 = !$scope.linuxCommand15;
            };

        });