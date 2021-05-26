/*let requestURL = 'http://ddragon.leagueoflegends.com/cdn/11.11.1/data/en_US/champion.json';
let request = new XMLHttpRequest();

request.open('GET', requestURL);
request.send();

request.onload = function() {
    const champions = request.response;
    console.log(JSON.parse(champions));
  }*/


  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "http://ddragon.leagueoflegends.com/cdn/11.11.1/data/en_US/champion.json",
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
     
     
     $.each(index, function (i){
        championsID.push(response.data[index[i]].id);
     });
     
     for (var i = 0; i < index.length;  i++){

        var img = document.createElement("img");
        var div = document.createElement("div");
        
        div.setAttribute("id", [i]);
        div.setAttribute("class", "slider-item");
        div.setAttribute("height", "120");
        div.setAttribute("width", "120");
        img.setAttribute("padding", "0");
        img.setAttribute("margin", "0");


        img.setAttribute("src", "https://ddragon.leagueoflegends.com/cdn/11.11.1/img/champion/" + response.data[index[i]].id +".png");
        img.setAttribute("height", "120");
        img.setAttribute("width", "120");
        document.getElementById("roulette").appendChild(div);
        document.getElementById([i]).appendChild(img);

        
    };

    var slider = tns({
        container: '.my-slider',
        items: 7,
        //fixedWidth:120,
        //controls:false,
        //nav:false,
        

    });
    console.log(slider.getInfo());
    slider.play();
});