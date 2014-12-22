		var masterReport;

        var loggedInUser;

        var usersObject = {"users": [
            {"userName":"jasperadmin", "password":"jasperadmin", "roles":"Ext_User", "orgId":"organization_1", "expireTime":"blue", "region":"East", "level":"1"},
            {"userName":"CaliforniaUser", "password":"CaliforniaUser", "roles":"Ext_User", "orgId":"organization_1", "expireTime":"blue", "region":"West", "level":"2"},
            {"userName":"Sue", "password":"password", "roles":"Ext_Mgr", "orgId":"organization_1", "expireTime":"blue", "region":"North", "level":"3"},
            {"userName":"Beth", "password":"password", "roles":"Ext_Mgr", "orgId":"organization_1", "expireTime":"blue", "region":"South", "level":"4"},
            {"userName":"Pat", "password":"password", "roles":"Ext_User", "orgId":"organization_1", "expireTime":"blue", "region":"North", "level":"5"}
            ]
        };
		
        
        $( document ).ready(function() {
            console.log( "ready!" );

            $( "#login" ).click(function() {
                var un = $("#username").val();
                var pw = $("#password").val();

                $.each( usersObject, function( data ) {
                    $.each(this,function(index,user){

                        if (user.userName == un & user.password == pw ){
                            //alert("your in");
                            loggedInUser = user;

                            visualize({
                                auth: {
                                    name: user.userName,
                                    password: user.password
                                }
                            }, function (v) {

                                //render report from provided resource
                                v("#internal1").report({
                                    resource: "/public/Samples/FreshDelivery_Demo/FreshDelivery_Internal_Report",
                                    error: handleError
                                });
                                
                                //show error
                                function handleError(err){
                                    alert(err.message);
                                }

                                $("#logout").click(function () {
                                    v.logout().done(function () {
                                        //alert("Destroy session");
                                    });
                                });

                            });
                        }
                    })
                });
            });

            // visualize({
            // auth: {
            //     name: "jasperadmin",
            //     password: "jasperadmin",
            //     organization: "organization_1"
            // }
            // },function(v){
            //     JRSClient = v;
            //     initializeReports();

                

            // });
        });



        // Get my Client Object
        

        function renderReportLink(uri, container, v) {
			 
            return v.report({
                resource: uri,
                container: container,
				
				  linkOptions: {
                    events: {
                        "click"  : function(evt, link){
                            updateProduct(link.parameters.store_country, link.parameters.store_state);
                        }
                    }
                },
				  
                error: function(err) {
                    console.log(err.message);
                }
            });
        }

        function initializeReports() {
            var master = '/public/Samples/FreshDelivery_Demo/Internal1';

            masterReport = renderReportLink(master, '#internal1', JRSClient);
        }
		
        
			 
		
		