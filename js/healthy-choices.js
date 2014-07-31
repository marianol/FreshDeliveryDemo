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
                            updateProduct(link.parameters.product_name, link.parameters.total_supply, link.parameters.product_group, link.parameters.price, link.parameters.total_units_case);
                        }
                    }
                },
                error: function(err) {
                    console.log(err.message);
                }
            });
        }

        function initializeReports() {
            var master = '/public/Samples/Reports/HealthyChoiceProducts';

            masterReport = renderReportLink(master, '#healthy-choices', JRSClient);
            updateProduct('Ebony Red Pepper', '2', 'Fresh Vegetables', '2.88', '14');
        }
		
        // Update Slave report with the passed State Parameter
        function updateProduct(productName, supplyTotal, productGroup, productPrice, unitsCase) {

			var parameters = {};
			var productName2 = '';
			parameters['product'] = [ productName ];
            switch (productName) {
                    case 'Ebony Almonds':
                        productName2 = 'Almonds';
                        break;
                    case 'Ebony Asparagus':
                        productName2 = 'Asparagus';
                        break;
                    case 'Ebony Beets':
                        productName2 = 'Beets';
                        break;
					  case 'Ebony Broccoli':
                        productName2 = 'Broccoli';
                        break;
                    case 'Ebony Canned Peanuts':
                        productName2 = 'Peanuts';
                        break;
					  case 'Ebony Corn on the Cob':
                        productName2 = 'Corn on the Cob';
                        break;
                    case 'Ebony Fancy Plums':
                        productName2 = 'Fancy Plums';
                        break;
                    case 'Ebony Firm Tofu':
                        productName2 = 'Firm Tofu';
                        break;
					  case 'Ebony Honey Dew':
                        productName2 = 'Honey Dew';
                        break;
                    case 'Ebony Lettuce':
                        productName2 = 'Lettuce';
                        break;
					  case 'Ebony New Potatos':
                        productName2 = 'New Potatoes';
                        break;
                    case 'Ebony Onions':
                        productName2 = 'Onions';
                        break;
                    case 'Ebony Oranges':
                        productName2 = 'Oranges';
                        break;
					  case 'Ebony Party Nuts':
                        productName2 = 'Mixed Nuts';
                        break;
                    case 'Ebony Peaches':
                        productName2 = 'Peaches';
                        break;
					  case 'Ebony Plums':
                        productName2 = 'Plums';
                        break;
					  case 'Ebony Red Pepper':
                        productName2 = 'Red Pepper';
                        break;
                    case 'Ebony Shitake Mushrooms':
                        productName2 = 'Shitake Mushrooms';
                        break;
                    case 'Ebony Sweet Onion':
                        productName2 = 'Sweet Onion';
                        break;
					  case 'Ebony Sweet Peas':
                        productName2 = 'Sweet Peas';
                        break;
                    case 'Ebony Tomatos':
                        productName2 = 'Tomatoes';
                        break;
                    default:
                        productName2 = 'N/A';
            }
			
			var parameters = {};
			var availSupply = '';
			parameters['supply'] = [ supplyTotal ];
			
			 switch (supplyTotal) {
                    case '1':
                        availSupply = 'None';
                        break;
                    case '2':
                        availSupply = 'Limited';
                        break;
					  case '3':
                        availSupply = 'Good';
                        break;
                    case '4':
                        availSupply = 'High';
                        break;
                    default:
                        availSupply = 'N/A';
			 }
			 
            $('#ImageLink').html('<img src="img/products/' + (productName) + '.jpg">');
            $('#ProductName1').html(productName);
            $('#ProductNameSimple').html(productName2);
			 $('#Group').html(productGroup);
			 $('#AvailSupply').html(availSupply);
			 $('#Price').html('$ ' + Number(productPrice).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,'));
			 $('#UnitsCase').html(unitsCase);
        };
		
		$(window).load(function() {
			function preload(arrayOfImages) {
    			$(arrayOfImages).each(function(){
        		$('<img/>')[0].src = this;
        		// Alternatively you could use:
        		// (new Image()).src = this;
    			});
			}
			preload([
    			'img/products/Ebony Almonds.jpg',
    			'img/products/Ebony Sweet Onion.jpg',
				'img/products/Ebony Firm Tofu.jpg',
    			'img/products/Ebony Honey Dew.jpg',
				'img/products/Ebony New Potatos.jpg',
    			'img/products/Ebony Onions.jpg',
				'img/products/Ebony Fancy Plums.jpg',
    			'img/products/Ebony Peaches.jpg',
				'img/products/Ebony Corn on the Cob.jpg',
    			'img/products/Ebony Tomatos.jpg',
				'img/products/Ebony Shitake Mushrooms.jpg',
    			'img/products/Ebony Red Pepper.jpg',
				'img/products/Ebony Plums.jpg',
    			'img/products/Ebony Oranges.jpg',
				'img/products/Ebony Sweet Peas.jpg',
    			'img/products/Ebony Lettuce.jpg',
				'img/products/Ebony Canned Peanuts.jpg',
    			'img/products/Ebony Beets.jpg',
				'img/products/Ebony Broccoli.jpg',
    			'img/products/Ebony Party Nuts.jpg',
				'img/products/Ebony Asparagus.jpg'
			]);
		});