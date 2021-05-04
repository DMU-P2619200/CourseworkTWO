
var writeRandomQuote = function () {
  var quotes = new Array();
  quotes[0] = "She says, babe, you look so cool";
  quotes[1] = "Well I know when you're around cause I know the sound of your heart";
  quotes[2] = "Oh fuck your feelings, truth is only heresay we're just left to decay modernity has failed us";
  quotes[3] = "The economys a goner, republics a banana, ignore it if you wanna";
  var rand = Math.floor(Math.random()*quotes.length);
  var s = quotes[rand];
  document.getElementById("quote").innerHTML = s;
}

writeRandomQuote();

setInterval(function(){
  writeRandomQuote();
},5000)
