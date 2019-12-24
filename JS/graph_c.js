window.onload = function () {
var chart3 = new CanvasJS.Chart("chartContainer3", {
   animationEnabled: true,
   title:{
     text: "Centuries against teams"
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
     name: "Centuries",
     showInLegend: true,
     dataPoints: [
       { label: "Pakistan", y: g590 },
       { label: "England", y: g591 },
       { label: "South Africa", y: g592 },
       { label: "Bangladesh", y: g593 },
       { label: "Sri Lanka", y: g594 },
       { label: "Australia", y: g595 },
       { label: "West Indies", y: g596 },
       { label: "New Zealand ", y: g597 },
       { label: "Zimbabwe", y: g598 },
       { label: "Bermuda", y: g599 },
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


var chart = new CanvasJS.Chart("chartContainer4", {
 theme:"light2",
 animationEnabled: true,
 title:{
   text: "Centuries(year)"
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
   type: "spline",
   showInLegend: true,
   name: "Centuries",
   dataPoints: [
     { label: "1990", y: g490 },
       { label: "1991", y: g491 },
       { label: "1992", y: g492 },
       { label: "1993", y: g493 },
       { label: "1994", y: g494 },
       { label: "1995", y: g495 },
       { label: "1996", y: g496 },
       { label: "1997", y: g497 },
       { label: "1998", y: g498 },
       { label: "1999", y: g499 },
       { label: "2000", y: g400 },
       { label: "2001", y: g401 },
       { label: "2002", y: g402 },
       { label: "2003", y: g403 },
       { label: "2004", y: g404 },
       { label: "2005", y: g405 },
       { label: "2006", y: g406 },
       { label: "2007", y: g407 },
       { label: "2008", y: g408 },
       { label: "2009", y: g409 },
       { label: "2010", y: g410 },
       { label: "2011", y: g411 },
       { label: "2012", y: g412 },
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
