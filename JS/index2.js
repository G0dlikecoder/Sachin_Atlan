x = 0, y = 0, z = 0, a = 0, b = 0, c = 0, i =0,n=0;
// hightest score
for (n in stats) {

  if (typeof stats[n].batting_score == 'string' && stats[n].batting_score.includes("*")) {
    c = Math.max(parseInt(stats[n].batting_score.slice(0, -1)));
  }

}
document.getElementById("demo6").innerHTML = c;

//REMOVING * from all the "not out" matches
for(i in stats)
{
if (typeof stats[i].batting_score == 'string' && stats[i].batting_score.includes("*")) {
  stats[i].batting_score =  parseInt(stats[i].batting_score.slice(0, -1));
}
}

// Total Runs
for (i in stats) {
if (typeof stats[i].batting_score == 'number') {
  x += stats[i].batting_score;
}
}

document.getElementById("demo1").innerHTML = x;

//no. of catches
for (i in stats) {
if (typeof stats[i].catches == 'number') {
  z += stats[i].catches;
}
}
document.getElementById("demo3").innerHTML = z;

//Half centuries
for (n in stats) {
if (typeof stats[n].batting_score == 'number' && stats[n].batting_score >= 50 && stats[n].batting_score < 100) {
  a++;
}
}
document.getElementById("demo5").innerHTML = a;

//total matches Played
document.getElementById("demo7").innerHTML = stats.length;

//Centuries
for (n in stats) {
if (typeof stats[n].batting_score == 'number' && stats[n].batting_score >= 100) {
  b++;
}
}
document.getElementById("demo4").innerHTML = b;
