FreshDeliveryDemo
=================

Embedded JasperServer Demo with Visualize.js

Image thumbnails will be viewable once functions (for the Highcharts API) are enabled by doing the following.
- Open the following file
/Applications/jasperreports-server-5.6/apache-tomcat/webapps/jasperserver-pro/WEB-INF/classes/jasperreports.properties
- Place this line of code at the bottom of this properties file:
com.jaspersoft.jasperreports.highcharts.function.properties.allowed=true

How to turn off the chart selector icon for specific charts: (this is optional)
- In JSS go to the main properties panel and on the Property Expressions select the “…” button.
- Select Add and for the Property Name use: com.jaspersoft.jasperreports.highcharts.interactive
- Do NOT select “use an Expression”. Use a value of: true
- Use the following in your CSS style sheet: #products .show_chartTypeSelector_wrapper {display: none;}
- You would replace “products” with the div id that you are using to display your report in the HTML.



