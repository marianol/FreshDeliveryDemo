	var mapReport;
	var masterReport;
	var slaveReport;

        // Get my Client Object
        visualize(function(v){
            JRSClient = v;
            initializeReports();
        });

	function renderMapReportLink(uri, container, v) {
            return v.report({
                resource: uri,
                container: container,
                linkOptions: {
                    events: {
                        "click"  : function(evt, link){
                            changeChartCity(link.parameters.store_city);
                        }
                    }
                },
                error: function(err) {
                    console.log(err.message);
                }
            });
        }

        function renderReportLink(uri, container, v) {
            return v.report({
                resource: uri,
                container: container,
                linkOptions: {
                    events: {
                        "click"  : function(evt, link){
                            updateTable(link.parameters.department_name);
                        }
                    }
                },
                error: function(err) {
                    console.log(err.message);
                }
            });
        }

        function initializeReports() {
            var master = '/public/Samples/Reports/21.5GoGreenChart';
            var slave = '/public/Samples/Reports/21.6GoGreenTable';
			 var map = '/public/Samples/Reports/21.7GoGreenMap';

            mapReport = renderMapReportLink(map, '#GreenMap', JRSClient);
            masterReport = renderReportLink(master, '#goGreenChart', JRSClient);
            slaveReport = renderReport(slave, '#goGreenTable', JRSClient);
            updateTable('Produce');
			 changeChartCity('San Diego');
        }

		// Update Slave report with the passed Department parameter
		function updateTable(departmentName) {
            var parameters = {};
            parameters['department'] = [ departmentName ];
            slaveReport.params(parameters).run();
 
            $('#DepartmentName').html(departmentName);
        };	
		
		// Update Slave report with the passed Department parameter
		function changeChartCity(cityName) {
            var parameters = {};
            parameters['city_name'] = [ cityName ];
            masterReport.params(parameters).run();
			
			 $('#CityName1').html(cityName);
			 $('#CityName2').html(cityName);
        };	
