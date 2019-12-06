$(document).ready(function() {
    var apiKey = "fe46ce431974a70581655adf24c0c112" // Enter your API Key here
    console.log(`state_info is: ${state_info}`) // Notice the templating here, use that when you form your url


    // TODO
    // Iterate over the state_info array and call the api for each state_name to get the current temperature
    // Example to call the api using state_name
    // This should be done inside the for loop

    var i = 0;
    for (var key in state_info){
      var state_obj = (state_info[key]);
      var latitude = state_obj.lat;
      var longitude = state_obj.lng;
      var color = "#808080";

      var url ='https://api.darksky.net/forecast/'+ apiKey + '/' + latitude +  ',' + longitude

      $.ajax({url:url,key:key, dataType:"jsonp"}).then(function(data) {

          var temperature = data.currently.apparentTemperature;

          //console.log(state_name[i],temperature,latitude, longitude)
          key = this.key;

          if(temperature <= 10){
            color = "#6495ED";
          }
          else if(temperature >= 11 && temperature <=20){
            color = "#7FFFD4";
          }
          else if(temperature >= 21 && temperature <=30){
            color = "#0000FF";
          }
          else if(temperature >= 31 && temperature <=40){
            color = "#008B8B";
          }
          else if(temperature >= 41 && temperature <=50){
            color = "#00BFFF";
          }
          else if(temperature >= 51 && temperature <=60){
            color = "#F08080";
          }
          else if(temperature >= 61 && temperature <=70){
            color = "#CD5C5C";
          }
          else if(temperature >= 71 && temperature <=80){
            color = "#8B0000";
          }
          else if(temperature >= 81 && temperature <=90){
            color = "#B22222";
          }
          else if(temperature >90){
            color = "#FF0000";
          }
          //console.log(color);

          //TODO
          // Default color gray
          // Create a series of if else blocks to set the color for the state based on the temperature
          // Less than equal to 10 should be blue
          // Between 11 and 30 should be cyan
          // Between 31 and 50 should be green
          // Between 51 and 80 should be orange
          // Greater than 80 should be red



          //console.log(color);
          $('#' + key).css('fill', color);
          i++;
      })

    };

});
