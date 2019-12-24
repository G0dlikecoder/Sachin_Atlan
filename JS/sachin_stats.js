var stats, i=0,  d = 0, e = 0, f = 0, g = 0, h = 0, i = 0, j = 0, k = 0, l = 0, m, n, o = 0, p, q = 0, r = 0, s = 0, t = 0, y90 = 0, y91 = 0, y92 = 0,
  y93 = 0,x2=0, y94 = 0, y95 = 0, y96 = 0, y97 = 0, y98 = 0, y99 = 0, y2k = 0, y2k1 = 0, y2k2 = 0, y2k3 = 0, y2k4 = 0, y2k5 = 0, y2k6 = 0, y2k7 = 0, y2k8 = 0, y2k9 = 0, y2k10 = 0, y2k11 = 0, y2k12 = 0;


  // var goku = (function(){
  //     var my_var = 10; //shared variable available only inside your module
  //     return {
  //         a_func: function() {
  //             return my_var; // this function can access my_var
  //         }
  //     };
  //
  // })();

  //
  // document.getElementById("demo9").innerHTML = num4;
  // // document.getElementById("demo9").innerHTML = goku.a_func();

  //REMOVING * from all the "not out" matches
  for(i in stats)
  {
  if (typeof stats[i].batting_score == 'string' && stats[i].batting_score.includes("*")) {
    stats[i].batting_score =  parseInt(stats[i].batting_score.slice(0, -1));
  }
  }

for (p in stats) {
  //run scored against England
  if (stats[p].opposition == 'v England') {
    if (typeof stats[p].batting_score == 'number') {
      d += stats[p].batting_score;
    }
  }
  //run scored against South Africa
  if (stats[p].opposition == 'v South Africa') {
    if (typeof stats[p].batting_score == 'number') {
      e += stats[p].batting_score;
    }
  }
  //run scored against Pakistan
  if (stats[p].opposition == 'v Pakistan') {
    if (typeof stats[p].batting_score == 'number') {
      f += stats[p].batting_score;
    }
  }
  //run scored against Bangladesh
  if (stats[p].opposition == 'v Bangladesh') {
    if (typeof stats[p].batting_score == 'number') {
      g += stats[p].batting_score;
    }
  }
  //run scored against Sri Lanka
  if (stats[p].opposition == 'v Sri Lanka') {
    if (typeof stats[p].batting_score == 'number') {
      h += stats[p].batting_score;
    }
  }
  //run scored against Australia
  if (stats[p].opposition == 'v Australia') {
    if (typeof stats[p].batting_score == 'number') {
      r += stats[p].batting_score;
    }
  }
  //run scored against West Indies
  if (stats[p].opposition == 'v West Indies') {
    if (typeof stats[p].batting_score == 'number') {
      j += stats[p].batting_score;
    }
  }
  //run scored against Netherlands
  if (stats[p].opposition == 'v Netherlands') {
    if (typeof stats[p].batting_score == 'number') {
      k += stats[p].batting_score;
    }
  }
  //run scored against New Zealand
  if (stats[p].opposition == 'v New Zealand') {
    if (typeof stats[p].batting_score == 'number') {
      l += stats[p].batting_score;
    }
  }
  //run scored against Bermuda
  if (stats[p].opposition == 'v Bermuda') {
    if (typeof stats[p].batting_score == 'number') {
      o += stats[p].batting_score;
    }
  }
  // run scored against Kenya
  if (stats[p].opposition == 'v Kenya') {
    if (typeof stats[p].batting_score == 'number') {
      q += stats[p].batting_score;
    }
  }
  // run scored against Zimbabwe
  if (stats[p].opposition == 'v Zimbabwe') {
    if (typeof stats[p].batting_score == 'number') {
      s += stats[p].batting_score;
    }
  }
}

// run scored in different years
for (p in stats) {
  // run scored in 1990
  if (stats[p].date.includes("90")) {
    if (typeof stats[p].batting_score == 'number') {
      y90 += stats[p].batting_score;
    }
  }
  // run scored in 1991
  if (stats[p].date.includes("91")) {

    if (typeof stats[p].batting_score == 'number') {
      y91 += stats[p].batting_score;
    }
  }
  // run scored in 1992
  if (stats[p].date.includes("92")) {
    if (typeof stats[p].batting_score == 'number') {
      y92 += stats[p].batting_score;
    }
  }
  // run scored in 1993
  if (stats[p].date.includes("93")) {
    if (typeof stats[p].batting_score == 'number') {
      y93 += stats[p].batting_score;
    }
  }
  // run scored in 1994
  if (stats[p].date.includes("94")) {
    if (typeof stats[p].batting_score == 'number') {
      y94 += stats[p].batting_score;
    }
  }
  // run scored in 1995
  if (stats[p].date.includes("95")) {
    if (typeof stats[p].batting_score == 'number') {
      y95 += stats[p].batting_score;
    }
  }
  // run scored in 1996
  if (stats[p].date.includes("96")) {
    if (typeof stats[p].batting_score == 'number') {
      y96 += stats[p].batting_score;
    }
  }
  // run scored in 1997
  if (stats[p].date.includes("97")) {
    if (typeof stats[p].batting_score == 'number') {
      y97 += stats[p].batting_score;
    }
  }
  // run scored in 1998
  if (stats[p].date.includes("98")) {
    if (typeof stats[p].batting_score == 'number') {
      y98 += stats[p].batting_score;
    }
  }
  // run scored in 1999
  if (stats[p].date.includes("99")) {
    if (typeof stats[p].batting_score == 'number') {
      y99 += stats[p].batting_score;
    }
  }
  // run scored in 2000
  if (stats[p].date.includes("-00")) {
    if (typeof stats[p].batting_score == 'number') {
      y2k += stats[p].batting_score;
    }
  }
  // run scored in 2001
  if (stats[p].date.includes("-01")) {
    if (typeof stats[p].batting_score == 'number') {
      y2k1 += stats[p].batting_score;
    }
  }
  // run scored in 2002
  if (stats[p].date.includes("-02")) {
    if (typeof stats[p].batting_score == 'number') {
      y2k2 += stats[p].batting_score;
    }
  }
  // run scored in 2003
  if (stats[p].date.includes("-03")) {
    if (typeof stats[p].batting_score == 'number') {
      y2k3 += stats[p].batting_score;
    }
  }
  // run scored in 2004
  if (stats[p].date.includes("-04")) {
    if (typeof stats[p].batting_score == 'number') {
      y2k4 += stats[p].batting_score;
    }
  }
  // run scored in 2005
  if (stats[p].date.includes("-05")) {
    if (typeof stats[p].batting_score == 'number') {
      y2k5 += stats[p].batting_score;
    }
  }
  // run scored in 2006
  if (stats[p].date.includes("-06")) {
    if (typeof stats[p].batting_score == 'number') {
      y2k6 += stats[p].batting_score;
    }
  }
  // run scored in 2007
  if (stats[p].date.includes("-07")) {
    if (typeof stats[p].batting_score == 'number') {
      y2k7 += stats[p].batting_score;
    }
  }
  // run scored in 2008
  if (stats[p].date.includes("-08")) {
    if (typeof stats[p].batting_score == 'number') {
      y2k8 += stats[p].batting_score;
    }
  }
  // run scored in 2009
  if (stats[p].date.includes("-09")) {
    if (typeof stats[p].batting_score == 'number') {
      y2k9 += stats[p].batting_score;
    }
  }
  // run scored in 2010
  if (stats[p].date.includes("-10")) {
    if (typeof stats[p].batting_score == 'number') {
      y2k10 += stats[p].batting_score;
    }
  }
  // run scored in 2011
  if (stats[p].date.includes("-11")) {
    if (typeof stats[p].batting_score == 'number') {
      y2k11 += stats[p].batting_score;
    }
  }
  // run scored in 2012
  if (stats[p].date.includes("-12")) {
    if (typeof stats[p].batting_score == 'number') {
      y2k12 += stats[p].batting_score;
    }
  }
}

g498 = 0, g494 = 0, g492 = 0, g491=0, g493=0,g495=0,g497=0,g496=0,g499=0,g490 = 0,g400=0,g401=0,g402=0,g403=0,g404=0,g405=0,g406=0,g407=0,g408=0,g409=0,g410=0,g411=0,g412=0;
//Centuries in different years
for (p in stats) {
  //Centuries in 1990
  if (stats[p].date.includes("-90")) {
    if (typeof stats[p].batting_score == 'number' && stats[p].batting_score >= 100) {
      g490++
    }
  }
  //Centuries in 1991
  if (stats[p].date.includes("-91")) {
    if (typeof stats[p].batting_score == 'number' && stats[p].batting_score >= 100) {
      g491++
    }
  }
  //Centuries in 1992
  if (stats[p].date.includes("-92")) {
    if (typeof stats[p].batting_score == 'number' && stats[p].batting_score >= 100) {
      g492++
    }
  }
  //Centuries in 1993
  if (stats[p].date.includes("-93")) {
    if (typeof stats[p].batting_score == 'number' && stats[p].batting_score >= 100) {
      g493++
    }
  }
  //Centuries in 1994
  if (stats[p].date.includes("-94")) {
    if (typeof stats[p].batting_score == 'number' && stats[p].batting_score >= 100) {
      g494++
    }
  }
  //Centuries in 1995
  if (stats[p].date.includes("-95")) {
    if (typeof stats[p].batting_score == 'number' && stats[p].batting_score >= 100) {
      g495++
    }
  }
  //Centuries in 1996
  if (stats[p].date.includes("-96")) {
    if (typeof stats[p].batting_score == 'number' && stats[p].batting_score >= 100) {
      g496++
    }
  }
  //Centuries in 1997
  if (stats[p].date.includes("-97")) {
    if (typeof stats[p].batting_score == 'number' && stats[p].batting_score >= 100) {
      g497++
    }
  }
  //Centuries in 1998
  if (stats[p].date.includes("-98")) {
    if (typeof stats[p].batting_score == 'number' && stats[p].batting_score >= 100) {
      g498++
    }
  }
  //Centuries in 1999
  if (stats[p].date.includes("-99")) {
    if (typeof stats[p].batting_score == 'number' && stats[p].batting_score >= 100) {
      g499++
    }
  }
  //Centuries in 1900
  if (stats[p].date.includes("-00")) {
    if (typeof stats[p].batting_score == 'number' && stats[p].batting_score >= 100) {
      g400++
    }
  }
  //Centuries in 1901
  if (stats[p].date.includes("-01")) {
    if (typeof stats[p].batting_score == 'number' && stats[p].batting_score >= 100) {
      g401++
    }
  }
  //Centuries in 1902
  if (stats[p].date.includes("-02")) {
    if (typeof stats[p].batting_score == 'number' && stats[p].batting_score >= 100) {
      g402++
    }
  }
  //Centuries in 1903
  if (stats[p].date.includes("-03")) {
    if (typeof stats[p].batting_score == 'number' && stats[p].batting_score >= 100) {
      g403++
    }
  }
  //Centuries in 1904
  if (stats[p].date.includes("-04")) {
    if (typeof stats[p].batting_score == 'number' && stats[p].batting_score >= 100) {
      g404++
    }
  }
  //Centuries in 1905
  if (stats[p].date.includes("-05")) {
    if (typeof stats[p].batting_score == 'number' && stats[p].batting_score >= 100) {
      g405++
    }
  }
  //Centuries in 1906
  if (stats[p].date.includes("-06")) {
    if (typeof stats[p].batting_score == 'number' && stats[p].batting_score >= 100) {
      g406++
    }
  }
  //Centuries in 1907
  if (stats[p].date.includes("-07")) {
    if (typeof stats[p].batting_score == 'number' && stats[p].batting_score >= 100) {
      g407++
    }
  }
  //Centuries in 1908
  if (stats[p].date.includes("-08")) {
    if (typeof stats[p].batting_score == 'number' && stats[p].batting_score >= 100) {
      g408++
    }
  }
  //Centuries in 1909
  if (stats[p].date.includes("-09")) {
    if (typeof stats[p].batting_score == 'number' && stats[p].batting_score >= 100) {
      g409++
    }
  }
  //Centuries in 1910
  if (stats[p].date.includes("-10")) {
    if (typeof stats[p].batting_score == 'number' && stats[p].batting_score >= 100) {
      g410++
    }
  }
  //Centuries in 1911
  if (stats[p].date.includes("-11")) {
    if (typeof stats[p].batting_score == 'number' && stats[p].batting_score >= 100) {
      g411++
    }
  }
  //Centuries in 1912
  if (stats[p].date.includes("-12")) {
    if (typeof stats[p].batting_score == 'number' && stats[p].batting_score >= 100) {
      g412++
    }
  }
}

g398 = 0,g394 = 0, g392 = 0, g391=0, g393=0,g395=0,g397=0,g396=0,g399=0,g390 = 0,g300=0,g301=0,g302=0,g303=0,g304=0,g305=0,g306=0,g307=0,g308=0,g309=0,g310=0,g311=0,g312=0;
//Half Centuries in 1990
for (p in stats) {
  if (stats[p].date.includes("-90")) {
    if (typeof stats[p].batting_score == 'number' && stats[p].batting_score >= 50 && stats[p].batting_score < 100) {
      g390++
    }
  }
}
//Half Centuries in 1991
for (p in stats) {
  if (stats[p].date.includes("-91")) {
    if (typeof stats[p].batting_score == 'number' && stats[p].batting_score >= 50 && stats[p].batting_score < 100) {
      g391++
    }
  }
}
//Half Centuries in 1992
for (p in stats) {
  if (stats[p].date.includes("-92")) {
    if (typeof stats[p].batting_score == 'number' && stats[p].batting_score >= 50 && stats[p].batting_score < 100) {
      g392++;
    }
  }
}
//Half Centuries in 1993
for (p in stats) {
  if (stats[p].date.includes("-93")) {
    if (typeof stats[p].batting_score == 'number' && stats[p].batting_score >= 50 && stats[p].batting_score < 100) {
      g393++
    }
  }
}
//Half Centuries in 1994
for (p in stats) {
  if (stats[p].date.includes("-94")) {
    if (typeof stats[p].batting_score == 'number' && stats[p].batting_score >= 50 && stats[p].batting_score < 100) {
      g394++
    }
  }
}
//Half Centuries in 1995
for (p in stats) {
  if (stats[p].date.includes("-95")) {
    if (typeof stats[p].batting_score == 'number' && stats[p].batting_score >= 50 && stats[p].batting_score < 100) {
      g395++
    }
  }
}
//Half Centuries in 1996
for (p in stats) {
  if (stats[p].date.includes("-96")) {
    if (typeof stats[p].batting_score == 'number' && stats[p].batting_score >= 50 && stats[p].batting_score < 100) {
      g396++
    }
  }
}
//Half Centuries in 1997
for (p in stats) {
  if (stats[p].date.includes("-97")) {
    if (typeof stats[p].batting_score == 'number' && stats[p].batting_score >= 50 && stats[p].batting_score < 100) {
      g397++
    }
  }
}
//Half Centuries in 1998
for (p in stats) {
  if (stats[p].date.includes("-98")) {
    if (typeof stats[p].batting_score == 'number' && stats[p].batting_score >= 50 && stats[p].batting_score < 100) {
      g398++
    }
  }
}
//Half Centuries in 1999
for (p in stats) {
  if (stats[p].date.includes("-99")) {
    if (typeof stats[p].batting_score == 'number' && stats[p].batting_score >= 50 && stats[p].batting_score < 100) {
      g399++
    }
  }
}
//Half Centuries in 1900
for (p in stats) {
  if (stats[p].date.includes("-00")) {
    if (typeof stats[p].batting_score == 'number' && stats[p].batting_score >= 50 && stats[p].batting_score < 100) {
      g300++
    }
  }
}
//Half Centuries in 1901
for (p in stats) {
  if (stats[p].date.includes("-01")) {
    if (typeof stats[p].batting_score == 'number' && stats[p].batting_score >= 50 && stats[p].batting_score < 100) {
      g301++
    }
  }
}
//Half Centuries in 1902
for (p in stats) {
  if (stats[p].date.includes("-02")) {
    if (typeof stats[p].batting_score == 'number' && stats[p].batting_score >= 50 && stats[p].batting_score < 100) {
      g302++
    }
  }
}
//Half Centuries in 1903
for (p in stats) {
  if (stats[p].date.includes("-03")) {
    if (typeof stats[p].batting_score == 'number' && stats[p].batting_score >= 50 && stats[p].batting_score < 100) {
      g303++
    }
  }
}
//Half Centuries in 1904
for (p in stats) {
  if (stats[p].date.includes("-04")) {
    if (typeof stats[p].batting_score == 'number' && stats[p].batting_score >= 50 && stats[p].batting_score < 100) {
      g304++
    }
  }
}
//Half Centuries in 1905
for (p in stats) {
  if (stats[p].date.includes("-05")) {
    if (typeof stats[p].batting_score == 'number' && stats[p].batting_score >= 50 && stats[p].batting_score < 100) {
      g305++
    }
  }
}
//Half Centuries in 1906
for (p in stats) {
  if (stats[p].date.includes("-06")) {
    if (typeof stats[p].batting_score == 'number' && stats[p].batting_score >= 50 && stats[p].batting_score < 100) {
      g306++
    }
  }
}
//Half Centuries in 1907
for (p in stats) {
  if (stats[p].date.includes("-07")) {
    if (typeof stats[p].batting_score == 'number' && stats[p].batting_score >= 50 && stats[p].batting_score < 100) {
      g307++
    }
  }
}
//Half Centuries in 1908
for (p in stats) {
  if (stats[p].date.includes("-08")) {
    if (typeof stats[p].batting_score == 'number' && stats[p].batting_score >= 50 && stats[p].batting_score < 100) {
      g308++
    }
  }
}
//Half Centuries in 1909
for (p in stats) {
  if (stats[p].date.includes("-09")) {
    if (typeof stats[p].batting_score == 'number' && stats[p].batting_score >= 50 && stats[p].batting_score < 100) {
      g309++
    }
  }
}
//Half Centuries in 1910
for (p in stats) {
  if (stats[p].date.includes("-10")) {
    if (typeof stats[p].batting_score == 'number' && stats[p].batting_score >= 50 && stats[p].batting_score < 100) {
      g310++
    }
  }
}
//Half Centuries in 1911
for (p in stats) {
  if (stats[p].date.includes("-11")) {
    if (typeof stats[p].batting_score == 'number' && stats[p].batting_score >= 50 && stats[p].batting_score < 100) {
      g311++
    }
  }
}
//Half Centuries in 1912
for (p in stats) {
  if (stats[p].date.includes("-12")) {
    if (typeof stats[p].batting_score == 'number' && stats[p].batting_score >= 50 && stats[p].batting_score < 100) {
      g312++
    }
  }
}

g598 = 0,g594 = 0, g592 = 0, g591=0, g593=0,g595=0,g597=0,g596=0,g599=0,g590 = 0,g500=0,g501=0,g502=0,g503=0,g504=0,g505=0,g506=0,g507=0,g508=0,g509=0,g510=0,g511=0,g512=0;
//Centuries against Teams
for (p in stats) {
  if (stats[p].opposition == 'v Pakistan') {
    if (typeof stats[p].batting_score == 'number' && stats[p].batting_score >= 100) {
      g590++;
    }
  }
  if (stats[p].opposition == 'v England') {
    if (typeof stats[p].batting_score == 'number' && stats[p].batting_score >= 100) {
      g591++;
    }
  }
  if (stats[p].opposition == 'v South Africa') {
    if (typeof stats[p].batting_score == 'number' && stats[p].batting_score >= 100) {
      g592++;
    }
  }
  if (stats[p].opposition == 'v Bangladesh') {
    if (typeof stats[p].batting_score == 'number' && stats[p].batting_score >= 100) {
      g593++;
    }
  }
  if (stats[p].opposition == 'v Sri Lanka') {
    if (typeof stats[p].batting_score == 'number' && stats[p].batting_score >= 100) {
      g594++;
    }
  }
  if (stats[p].opposition == 'v Australia') {
    if (typeof stats[p].batting_score == 'number' && stats[p].batting_score >= 100) {
      g595++;
    }
  }
  if (stats[p].opposition == 'v West Indies') {
    if (typeof stats[p].batting_score == 'number' && stats[p].batting_score >= 100) {
      g596++;
    }
  }
  if (stats[p].opposition == 'v New Zealand') {
    if (typeof stats[p].batting_score == 'number' && stats[p].batting_score >= 100) {
      g597++;
    }
  }
  if (stats[p].opposition == 'v Zimbabwe') {
    if (typeof stats[p].batting_score == 'number' && stats[p].batting_score >= 100) {
      g598++;
    }
  }
  if (stats[p].opposition == 'v Bermuda') {
    if (typeof stats[p].batting_score == 'number' && stats[p].batting_score >= 100) {
      g599++;
    }
  }
}

//Half Centuries against teams
for (p in stats) {
  if (stats[p].opposition == 'v Pakistan') {
    if (typeof stats[p].batting_score == 'number' && stats[p].batting_score >= 50 && stats[p].batting_score < 100) {
      g500++;
    }
  }
  if (stats[p].opposition == 'v England') {
    if (typeof stats[p].batting_score == 'number' && stats[p].batting_score >= 50 && stats[p].batting_score < 100) {
      g501++;
    }
  }
  if (stats[p].opposition == 'v South Africa') {
    if (typeof stats[p].batting_score == 'number' && stats[p].batting_score >= 50 && stats[p].batting_score < 100) {
      g502++;
    }
  }
  if (stats[p].opposition == 'v Bangladesh') {
    if (typeof stats[p].batting_score == 'number' && stats[p].batting_score >= 50 && stats[p].batting_score < 100) {
      g503++;
    }
  }
  if (stats[p].opposition == 'v Sri Lanka') {
    if (typeof stats[p].batting_score == 'number' && stats[p].batting_score >= 50 && stats[p].batting_score < 100) {
      g504++;
    }
  }
  if (stats[p].opposition == 'v Australia') {
    if (typeof stats[p].batting_score == 'number' && stats[p].batting_score >= 50 && stats[p].batting_score < 100) {
      g505++;
    }
  }
  if (stats[p].opposition == 'v West Indies') {
    if (typeof stats[p].batting_score == 'number' && stats[p].batting_score >= 50 && stats[p].batting_score < 100) {
      g506++;
    }
  }
  if (stats[p].opposition == 'v New Zealand') {
    if (typeof stats[p].batting_score == 'number' && stats[p].batting_score >= 50 && stats[p].batting_score < 100) {
      g507++;
    }
  }
  if (stats[p].opposition == 'v Zimbabwe') {
    if (typeof stats[p].batting_score == 'number' && stats[p].batting_score >= 50 && stats[p].batting_score < 100) {
      g508++;
    }
  }
  if (stats[p].opposition == 'v Bermuda') {
    if (typeof stats[p].batting_score == 'number' && stats[p].batting_score >= 50 && stats[p].batting_score < 100) {
      g509++;
    }
  }
}
// var box1 = []; //run scored against teams
// for (p in stats) {
//   if (stats[p].opposition == 'v Pakistan') {
//     if (typeof stats[p].batting_score == 'number') {
//       var newStr4 = stats[p].batting_score;
//       box1.push(newStr4);
//     }
//   }
// }
// var box2 = [];
//Total run scored against each teams
// //Cumulative runs scored
// for (p in stats) {
//   if (typeof stats[p].batting_score == 'number') {
//     var newStr4 = stats[p].batting_score;
//     box2.push(newStr4);
//   }
// }
