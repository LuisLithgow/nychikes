$(document).ready(function() {
  // SETTING GEOLACTION
  const setLocation = function({coords:{latitude,longitude},timestamp}){
      loc = {latitude,longitude,timestamp}
      }
        // if the navigator is available, watch our position
         navigator.geolocation && navigator.geolocation.watchPosition && navigator.geolocation.watchPosition( setLocation );

  $.ajax({
      url: "https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20weather.forecast%20where%20woeid%3D2459115&format=json&diagnostics=true&callback=",
      type: 'GET',
      datatype:'json',
      success:function(data) {
          let $weathIcons = $('.weath-icons');
          let $weathInfo = $('.weath-info');
          let $midDiv = $('.mid-div');
          let $btmDiv = $(".bttm-main");

          let condition= data.query.results.channel.item.condition;
          let temp = data.query.results.channel.item.condition.temp;
          let city = data.query.results.channel.location.city;
          let state = data.query.results.channel.location.region;
          let text= data.query.results.channel.item.condition.text;

            if (text === "Cloudy") {
              $weathIcons.append(temp + "&#xb0; ")
                          .append(text + "&#x2601; ");
              $weathInfo.append(city + ", ")
                        .append(state + " ");
              $midDiv.append($weathInfo);
              $btmDiv.append($midDiv);
            }else if(text === "Partly Cloudy") {
              $weathIcons.append(temp + "&#xb0; ")
                          .append(text + "&#x2601; ");
              $weathInfo.append(city + ", ")
                        .append(state + " ");
              $midDiv.append($weathInfo);
              $btmDiv.append($midDiv);
             }else if (text === "Sunny") {
              $weathIcons.append(temp + "&#xb0;")
                          .append(text + "&#x2600;  ");
              $weathInfo.append(city + ", ")
                        .append(state + " ");
              $midDiv.append($weathInfo);
              $btmDiv.append($midDiv);
            } else if(text === "Snow") {
              $weathIcons.append(temp + "&#xb0;")
                          .append(text + "&#x2746; ");
              $weathInfo.append(city + ", ")
                        .append(state + " ");
              $midDiv.append($weathInfo);
              $btmDiv.append($midDiv);
            }else if (text === "Mostly Sunny") {
              $weathIcons.append(temp + "&#xb0;")
                          .append(text + "&#x2600;  ");
              $weathInfo.append(city + ", ")
                        .append(state + " ");
              $midDiv.append($weathInfo);
              $btmDiv.append($midDiv);
            } else {
              $weathInfo.append(temp + "&#xb0; ")
                        .append(city + ", ")
                        .append(state + " ")
                        .append(text + " ");
              $midDiv.append($weathInfo);
              $btmDiv.append($midDiv);
            }

            console.log(temp);
            console.log(city);
            console.log(state);
            console.log(text);
            console.log(condition);
       }
    })
    .fail(function() {
      console.log("There's an error!");
    })






});
