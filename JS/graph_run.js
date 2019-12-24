//ploting graphs with CanvasJS
window.onload = function () {

  var chart1 = new CanvasJS.Chart("chartContainer1", {
    animationEnabled: true,
    title: {
      text: "Total runs scored"
    },
    data: [{
      type: "column",
      dataPoints: [
        { label: "England", y: d },
        { label: "South Africa", y: e },
        { label: "Pakistan", y: f },
        { label: "Bangladesh", y: g },
        { label: "Sri Lanka", y: h },
        { label: "Australia", y: r },
        { label: "West Indies", y: j },
        { label: "Netherlands", y: k },
        { label: "New Zealand ", y: l },
        { label: "Kenya", y: q },
        { label: "Bermuda", y: o },
        { label: "Zimbabwe", y: s }
      ]
    }]
  });
  var chart2 = new CanvasJS.Chart("chartContainer2", {
    animationEnabled: true,
    title: {
      text: "Total runs scored"
    },
    data: [{
      type: "column",
      dataPoints: [
        { label: "1990", y: y90 },
        { label: "1991", y: y91 },
        { label: "1992", y: y92 },
        { label: "1993", y: y93 },
        { label: "1994", y: y94 },
        { label: "1995", y: y95 },
        { label: "1996", y: y96 },
        { label: "1997", y: y97 },
        { label: "1998", y: y98 },
        { label: "1999", y: y99 },
        { label: "2000", y: y2k },
        { label: "2001", y: y2k1 },
        { label: "2001", y: y2k2 },
        { label: "2002", y: y2k2 },
        { label: "2003", y: y2k3 },
        { label: "2004", y: y2k4 },
        { label: "2005", y: y2k5 },
        { label: "2006", y: y2k6 },
        { label: "2007", y: y2k7 },
        { label: "2008", y: y2k8 },
        { label: "2009", y: y2k9 },
        { label: "2010", y: y2k10 },
        { label: "2011", y: y2k11 },
        { label: "2012", y: y2k12 },

      ]
    }]
  });

  chart1.render();
  chart2.render();


}
