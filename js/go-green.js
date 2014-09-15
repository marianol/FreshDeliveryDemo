/*
 * ========================================================================
 * go-green.js : v0.8.0
 *
 * ========================================================================
 * Copyright 2014
 * Author: Mariano Luna, Daniel Petzold
 *
 * Unless you have purchased a commercial license agreement from Jaspersoft Inc., the following license terms apply:
 *
 * This program is free software: you can redistribute it and/or modify it under the terms of the
 * GNU Affero General Public License as published by the Free Software Foundation, either version 3
 * of the License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY;
 * without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public
 * License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program. If not, see http://www.gnu.org/licenses/.
 * ========================================================================
 */

var mapReport;
var masterReport;
var slaveReport;
var defCity = 'San Diego';
var defDepartment = 'Produce';
var master = '/public/Samples/FreshDelivery_Demo/21.5GoGreenChart';
var slave = '/public/Samples/FreshDelivery_Demo/21.6GoGreenTable';
var map = '/public/Samples/FreshDelivery_Demo/21.7GoGreenMap';


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

	function exportReport(format) { 
		var parameters = {};
		parameters['export'] = [true];
		parameters['department'] = [ defDepartment ];
		parameters['city_name'] = [defCity];
		var myReport =  JRSClient.report({
            		resource: slave,
            		container: "#hiddenExport",
			params: parameters,
            		events: {
            			reportCompleted: function(status) {
                		myReport
					.export({outputFormat : format
					})
            			}
			},
			error: function(err) {
                		console.log(err.message);
            		}
        	});	
		//myReport
      	    	//	.export({ outputFormat: format
		//})
		.done(function (link) {
            		window.open(link.href); //open new window to download report
        	})
        	.fail(function (err) {
            		alert(err.message);
        	});
	}

    function initializeReports() {
                $('#DepartmentName').html(defDepartment);
        $('#CityName1').html(defCity);
        $('#CityName2').html(defCity);
        mapReport = renderMapReportLink(map, '#GreenMap', JRSClient);
        masterReport = renderReportLink(master, '#goGreenChart', JRSClient);
        slaveReport = renderReport(slave, '#goGreenTable', JRSClient);
        // updateTable('Produce');
        // changeChartCity('San Diego');
    }

    // Update Slave report with the passed Department parameter
    function updateTable(departmentName) {
        var parameters = {};
        defDepartment = departmentName;
	parameters['department'] = [ departmentName ];
	//parameters['export'] = [true];
        slaveReport.params(parameters).run();

        $('#DepartmentName').html(departmentName);
    };

    // Update Slave report with the passed Department parameter
    function changeChartCity(cityName) {
        var parameters = {};
	defCity = cityName;
        parameters['city_name'] = [ cityName ];
        masterReport.params(parameters).run();

         $('#CityName1').html(cityName);
         $('#CityName2').html(cityName);
    };
