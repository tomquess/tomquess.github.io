
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

var settings = {
  "async": true,
  "crossDomain": true,
  "url": "https://ddragon.leagueoflegends.com/cdn/11.11.1/data/en_US/champion.json",
  "method": "GET"
}


var index = [];
var championsID = [];
$.ajax(settings).done(function (response) {
  for (var x in response.data) {
    index.push(x);
  }

  index.sort(function (a, b) {
    return a == b ? 0 : (a > b ? 1 : -1);
  });


  $.each(index, function (i) {
    championsID.push(response.data[index[i]].id);
  });

  for (var i = 0; i < index.length; i++) {

    var img = document.createElement("img");
    var div = document.createElement("div");

    div.setAttribute("id", [i]);
    div.setAttribute("class", "slider-item");
    div.setAttribute("height", "120");
    div.setAttribute("width", "120");
    img.setAttribute("padding", "0");
    img.setAttribute("margin", "0");


    img.setAttribute("src", "https://ddragon.leagueoflegends.com/cdn/11.11.1/img/champion/" + response.data[index[i]].id + ".png");
    img.setAttribute("height", "120");
    img.setAttribute("width", "120");
    document.getElementById("roulette").appendChild(div);
    document.getElementById([i]).appendChild(img);


  };

  for (var i = 0; i < index.length; i++) {

    var img = document.createElement("img");
    var div = document.createElement("div");

    div.setAttribute("id", [i] + "-instant");
    div.setAttribute("class", "slider-item");
    div.setAttribute("height", "120");
    div.setAttribute("width", "120");
    img.setAttribute("padding", "0");
    img.setAttribute("margin", "0");


    img.setAttribute("src", "https://ddragon.leagueoflegends.com/cdn/11.11.1/img/champion/" + response.data[index[i]].id + ".png");
    img.setAttribute("height", "120");
    img.setAttribute("width", "120");
    document.getElementById("rouletteInstant").appendChild(div);
    document.getElementById([i] + "-instant").appendChild(img);


  };

  var slider = tns({
    container: '.my-slider',
    items: 7,
    speed: 15000,
    //fixedWidth:120,
    controls: false,
    nav: false,
    preventActionWhenRunning: true,
  });

  var sliderInstant = tns({
    container: '.my-slider-instant',
    items: 3,
    speed: 1000,
    //fixedWidth:120,
    controls: false,
    nav: false,
    preventActionWhenRunning: true,
  });

  document.querySelector('#randButton').onclick = function () {
    slider.goTo(getRandomInt(index.length));
  };

  document.querySelector('#randButtonInstant').onclick = function () {
    sliderInstant.goTo(getRandomInt(index.length));
  };



});

