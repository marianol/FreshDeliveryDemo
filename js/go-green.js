		var masterReport;
		var slaveReport;
		var mapReport;

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

            masterReport = renderReportLink(master, '#goGreenChart', JRSClient);
            slaveReport = renderReport(slave, '#goGreenTable', JRSClient);
			 mapReport = renderReportLink(map, '#GreenMap', JRSClient);
            updateTable('Produce');
        }

		// Update Slave report with the passed Department parameter
		function updateTable(departmentName) {
            var parameters = {};
            parameters['department'] = [ departmentName ];
            slaveReport.params(parameters).run();
 
            $('#DepartmentName').html(departmentName);
        };	