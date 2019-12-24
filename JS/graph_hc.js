window.onload = function () {
var chart3 = new CanvasJS.Chart("chartContainer5", {
   animationEnabled: true,
   title:{
     text: "Half Centuries against teams"
   },

   toolTip: {
     shared: true
   },
   legend:{
     cursor:"pointer",
     itemclick: toggleDataSeries
   },
   data: [{
     type: "column",
     name: "Half Centuries",
     showInLegend: true,
     dataPoints: [
       { label: "Pakistan", y: g500 },
       { label: "England", y: g501 },
       { label: "South Africa", y: g502 },
       { label: "Bangladesh", y: g503 },
       { label: "Sri Lanka", y: g504 },
       { label: "Australia", y: g505 },
       { label: "West Indies", y: g506 },
       { label: "New Zealand ", y: g507 },
       { label: "Zimbabwe", y: g508 },
       { label: "Bermuda", y: g509 },
     ]
   }]
 });

 chart3.render();

 function toggleDataSeries(e) {
   if(typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
     e.dataSeries.visible = false;
   }
   else {
     e.dataSeries.visible = true;
   }
   chart3.render();
 }


var chart = new CanvasJS.Chart("chartContainer6", {
 theme:"light2",
 animationEnabled: true,
 title:{
   text: "Half Centuries(year)"
 },
 axisY :{
   includeZero: false,
   title: "Number of Viewers",
   suffix: "mn"
 },
 toolTip: {
   shared: "true"
 },
 legend:{
   cursor:"pointer",
   itemclick : toggleDataSeries
 },
 data: [
 {
   type: "line",
   showInLegend: true,
   name: "Half Centuries",
   dataPoints: [
     { label: "1990", y: g390 },
       { label: "1991", y: g391 },
       { label: "1992", y: g392 },
       { label: "1993", y: g393 },
       { label: "1994", y: g394 },
       { label: "1995", y: g395 },
       { label: "1996", y: g396 },
       { label: "1997", y: g397 },
       { label: "1998", y: g398 },
       { label: "1999", y: g399 },
       { label: "2000", y: g300 },
       { label: "2001", y: g301 },
       { label: "2002", y: g302 },
       { label: "2003", y: g303 },
       { label: "2004", y: g304 },
       { label: "2005", y: g305 },
       { label: "2006", y: g306 },
       { label: "2007", y: g307 },
       { label: "2008", y: g308 },
       { label: "2009", y: g309 },
       { label: "2010", y: g310 },
       { label: "2011", y: g311 },
       { label: "2012", y: g312 },
   ]
 }
 ]
});
chart.render();

function toggleDataSeries(e) {
 if (typeof(e.dataSeries.visible) === "undefined" || e.dataSeries.visible ){
   e.dataSeries.visible = false;
 } else {
   e.dataSeries.visible = true;
 }
 chart.render();
}
}
