		var masterReport;
		
        // Get my Client Object
        visualize(function(v){
            JRSClient = v;
            initializeReports();
        });

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
		
        
			 
		
		