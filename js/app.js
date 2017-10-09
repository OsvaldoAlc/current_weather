$(document).ready(function(){
    const key = "b922525bd9d460b06f3ab87bfa1cc59e";
    var latitude;
    var longitude;
    var changeTemp = true;
    

    if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(function(position) {
      latitude = position.coords.latitude;
      longitude =  position.coords.longitude;
      var api = "https://cors-anywhere.herokuapp.com/https://api.darksky.net/forecast/"+key+"/"+latitude+","+longitude;

      $.getJSON(api, function(data){
          var icon = data.currently.icon;
          var weatherType = data.currently.summary;
          var temperature = Math.round(data.currently.temperature);
          var celsius = Math.round((temperature - 32)*5/9);
          var timezone = data.timezone;
          var indexOFSlash = timezone.indexOf("/");
          var city = timezone.slice(indexOFSlash +1, timezone.length);

          //$("#icon").html(icon);
          $("#weather").html(weatherType);
          $("#temperature").html(celsius + " &#8451;");
          $("#temperature").click(function(){
              if(changeTemp === false) {
                  $("#temperature").html(celsius + " &#8451;");
                  changeTemp=true;
              } else{
                  $("#temperature").html(temperature + " &#8457;");
                  changeTemp=false;
              }
          });

          $("#city").html(city.split("_").join(" "));
          if(icon === "clear-day") {
              $("img").attr("src", "img/clear-day.png");
          } else if (icon === "partly-cloudy-day"){
              $("img").attr("src", "img/partly-cloudy-day.png");
              
          } else if (icon === "clear-night"){
              $("img").attr("src", "img/clear-night.png");
              
          } else if (icon === "partly-cloudy-night"){
              $("img").attr("src", "img/partly-cloudy-night.png");

          } else if (icon === "cloudy"){
              $("img").attr("src", "img/cloudy.png");
              
          } else if (icon === "rain"){
              $("img").attr("src", "img/rain.png");
              
          } else if (icon === "sleet"){
              $("img").attr("src", "img/sleet.png");

          } else if (icon === "snow"){
              $("img").attr("src", "img/snow.png");
              
          } else {
              $("img").attr("src", "img/fog.png");
              
          }


      });
      
  });
}  
  
        
});

