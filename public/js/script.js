$(document).ready(function() {
  console.log('Loaded');

    $.ajax({
      url: '/hike',
      method: 'get',
      dataType: 'json',
      success: function(data) {

        data.forEach(function(trail) {
          // console.log(data);

          if (trail.Prop_ID.charAt(0) === "X"  ) {
          let $li=  $("<li>").text(trail.Park_Name + " a.k.a. " + trail.Name)
                .addClass('li-color').attr({"data-park-name":trail.Park_Name,"data-trail-name":trail.Name, "data-accessible":trail.Accessible, "data-length":trail.Length, "data-location":trail.Location, "data-difficulty":trail.Difficulty, "data-other-details":trail.Other_Details});
          let $ul = $(".bronx-locat")
          console.log(trail.Park_Name);
          $ul.append($li);
          }
          if (trail.Prop_ID.charAt(0) === "R" ) {
              let $li=  $("<li>").text(trail.Park_Name + " a.k.a. " + trail.Name)
                    .addClass('li-color').attr({"data-park-name":trail.Park_Name,"data-trail-name":trail.Name, "data-accessible":trail.Accessible, "data-length":trail.Length, "data-location":trail.Location, "data-difficulty":trail.Difficulty, "data-other-details":trail.Other_Details});
              let $ul = $(".si-locat");
              console.log(trail.Park_Name);
              $ul.append($li);

            }
            if (trail.Prop_ID.charAt(0) === "Q" ){
                let $li=  $("<li>").text(trail.Park_Name + " a.k.a. " + trail.Name)
                    .addClass('li-color').attr({"data-park-name":trail.Park_Name,"data-trail-name":trail.Name, "data-accessible":trail.Accessible, "data-length":trail.Length, "data-location":trail.Location, "data-difficulty":trail.Difficulty, "data-other-details":trail.Other_Details});
              let $ul = $(".queens-locat");
               console.log(trail.Park_Name);
               $ul.append($li);

            }
            if (trail.Prop_ID.charAt(0) === "M" ) {
                let $li=  $("<li>").text(trail.Park_Name + " a.k.a. " + trail.Name)
                    .addClass('li-color').attr({"data-park-name":trail.Park_Name,"data-trail-name":trail.Name, "data-accessible":trail.Accessible, "data-length":trail.Length, "data-location":trail.Location, "data-difficulty":trail.Difficulty, "data-other-details":trail.Other_Details});
                let $ul = $(".manh-locat");
                console.log(trail.Park_Name);
                $ul.append($li);

            }
            if (trail.Prop_ID.charAt(0) === "B" ) {
              let $li=  $("<li>").text(trail.Park_Name + " a.k.a. " + trail.Name)
                    .addClass('li-color').attr({"data-park-name":trail.Park_Name,"data-trail-name":trail.Name, "data-accessible":trail.Accessible, "data-length":trail.Length, "data-location":trail.Location, "data-difficulty":trail.Difficulty, "data-other-details":trail.Other_Details});
                let $ul = $(".brook-locat");
                console.log(trail.Park_Name);
                $ul.append($li);
            }
        });

          // ADDING EVENT LISTENER TO LI TAGS
          $('.bronx-locat li').off().on('click',function(event) {
          // event.preventDefault();
          const $trail = $(this);
          let $parkName=  $("<li>").text("Park: " + $trail.attr('data-park-name')).addClass('li-color');
          let $trailName=  $("<li>").text("Trail Name: " + $trail.attr('data-trail-name')).addClass('li-color');
          let $location=  $("<li>").text("Location: " + $trail.attr('data-location')).addClass('li-color');
          let $accessible=  $("<li>").text("Accessible: " + $trail.attr('data-accessible')).addClass('li-color');
          let $length=  $("<li>").text("Length: " + $trail.attr('data-length')).addClass('li-color');
          let $difficulty=  $("<li>").text("Difficulty: " +$trail.attr('data-difficulty')).addClass('li-color');
          let $otherDets = $("<li>").text("Details " + $trail.attr('data-other-details') ).addClass('li-color');

          // APPENDING
          let rightDiv = $('.right-align');
          // let $ul = $("<ul>");
          rightDiv.append($parkName, $trailName, $location, $accessible, $length,$difficulty, $otherDets)
          // rightDiv.append($ul);
          console.log($(this).text());
        })

          $('.si-locat li').off().on('click',function(event) {
          // event.preventDefault();
          const $trail = $(this);
          let $parkName=  $("<li>").text("Park: " + $trail.attr('data-park-name')).addClass('li-color');
          let $trailName=  $("<li>").text("Trail Name: " + $trail.attr('data-trail-name')).addClass('li-color');
          let $location=  $("<li>").text("Location: " + $trail.attr('data-location')).addClass('li-color');
          let $accessible=  $("<li>").text("Accessible: " + $trail.attr('data-accessible')).addClass('li-color');
          let $length=  $("<li>").text("Length: " + $trail.attr('data-length')).addClass('li-color');
          let $difficulty=  $("<li>").text("Difficulty: " +$trail.attr('data-difficulty')).addClass('li-color');
          let $otherDets = $("<li>").text("Details " + $trail.attr('data-other-details') ).addClass('li-color');

          // APPENDING
          let rightDiv = $('.right-align');
          // let $ul = $(".brook-locat");
          rightDiv.append($parkName, $trailName, $location, $accessible, $length,$difficulty, $otherDets)
          // rightDiv.append($ul);
          console.log($(this).text());
        })

          $('.queens-locat li').off().on('click',function(event) {
          // event.preventDefault();
          const $trail = $(this);
          let $parkName=  $("<li>").text("Park: " + $trail.attr('data-park-name')).addClass('li-color');
          let $trailName=  $("<li>").text("Trail Name: " + $trail.attr('data-trail-name')).addClass('li-color');
          let $location=  $("<li>").text("Location: " + $trail.attr('data-location')).addClass('li-color');
          let $accessible=  $("<li>").text("Accessible: " + $trail.attr('data-accessible')).addClass('li-color');
          let $length=  $("<li>").text("Length: " + $trail.attr('data-length')).addClass('li-color');
          let $difficulty=  $("<li>").text("Difficulty: " +$trail.attr('data-difficulty')).addClass('li-color');
          let $otherDets = $("<li>").text("Details " + $trail.attr('data-other-details') ).addClass('li-color');

          // APPENDING
          let rightDiv = $('.right-align');
          // let $ul = $(".brook-locat");
          rightDiv.append($parkName, $trailName, $location, $accessible, $length,$difficulty, $otherDets)
          // rightDiv.append($ul);
          console.log($(this).text());
        })

        $('.manh-locat li').off().on('click',function(event) {
          // event.preventDefault();
          const $trail = $(this);
          let $parkName=  $("<li>").text("Park: " + $trail.attr('data-park-name')).addClass('li-color');
          let $trailName=  $("<li>").text("Trail Name: " + $trail.attr('data-trail-name')).addClass('li-color');
          let $location=  $("<li>").text("Location: " + $trail.attr('data-location')).addClass('li-color');
          let $accessible=  $("<li>").text("Accessible: " + $trail.attr('data-accessible')).addClass('li-color');
          let $length=  $("<li>").text("Length: " + $trail.attr('data-length')).addClass('li-color');
          let $difficulty=  $("<li>").text("Difficulty: " +$trail.attr('data-difficulty')).addClass('li-color');
          let $otherDets = $("<li>").text("Details " + $trail.attr('data-other-details') ).addClass('li-color');

          // APPENDING
          let rightDiv = $('.right-align');
          // let $ul = $(".brook-locat");
          rightDiv.append($parkName, $trailName, $location, $accessible, $length,$difficulty, $otherDets)
          // rightDiv.append($ul);
          console.log($(this).text());
        })

        $('.brook-locat li').off().on('click',function(event) {
          // event.preventDefault();
          const $trail = $(this);
          let $parkName=  $("<li>").text("Park: " + $trail.attr('data-park-name')).addClass('li-color');
          let $trailName=  $("<li>").text("Trail Name: " + $trail.attr('data-trail-name')).addClass('li-color');
          let $location=  $("<li>").text("Location: " + $trail.attr('data-location')).addClass('li-color');
          let $accessible=  $("<li>").text("Accessible: " + $trail.attr('data-accessible')).addClass('li-color');
          let $length=  $("<li>").text("Length: " + $trail.attr('data-length')).addClass('li-color');
          let $difficulty=  $("<li>").text("Difficulty: " +$trail.attr('data-difficulty')).addClass('li-color');
          let $otherDets = $("<li>").text("Details " + $trail.attr('data-other-details') ).addClass('li-color');

          // APPENDING
          let rightDiv = $('.right-align');
          // let $ul = $(".brook-locat");
          rightDiv.append($parkName, $trailName, $location, $accessible, $length,$difficulty, $otherDets)
          // rightDiv.append($ul);
          console.log($(this).text());
        })




      }, fail: function(err) {
        console.log('conncection failed!');
          }
      });






// $('.trails-btn').hover(function() {
//   // let trailsKeys = $dropdown.val();
//   // let $dropdown = $(this);


//     $.ajax({
//       url: '/hike',
//       method: 'get',
//       dataType: 'json',
//       success: function(data) {
//         data.forEach(function(trail) {
//           if (trail.Prop_ID.charAt(0) === "X"  ) {
//           let $li=  $("<li>").text(trail.Park_Name +" " +trail.Prop_ID );
//           let $ul = $(".bronx-locat")
//           console.log(trail.Park_Name);
//           $ul.append($li);
//           }
//           if (trail.Prop_ID.charAt(0) === "R" ) {
//             let $li=  $("<li>").text(trail.Park_Name +" " +trail.Prop_ID );
//             let $ul = $(".si-locat")
//             console.log(trail.Park_Name);
//             $ul.append($li);
//           }
//            if (trail.Prop_ID.charAt(0) === "Q" ){
//             let $li=  $("<li>").text(trail.Park_Name +" " +trail.Prop_ID );
//             let $ul = $(".queens-locat");
//             console.log(trail.Park_Name);
//             $ul.append($li);
//           }
//            if (trail.Prop_ID.charAt(0) === "M" ) {
//             let $li=  $("<li>").text(trail.Park_Name +" " +trail.Prop_ID );
//             let $ul = $(".manh-locat");
//             console.log(trail.Park_Name);
//           }
//             if (trail.Prop_ID.charAt(0) === "B" ) {
//             let $li=  $("<li>").text(trail.Park_Name +" " +trail.Prop_ID );
//             let $ul = $(".brook-locat")
//             console.log(trail.Park_Name);
//           }
//         });
//       }, fail: function(err) {
//         console.log('conncection failed!');
//           }
//       });


// })









})
// THE END

 // $.ajax({
 //      url: '/hike',
 //      method: 'get',
 //      dataType: 'json',
 //      success: function(data) {
 //        data.forEach(function(trail) {
 //          let $select = $("#first-choice");
 //          let $div = $(".trails-contents");
 //          let $opt = $("<option>");
 //          // console.log(trail.Park_Name);
 //          console.log(data)
 //          $opt = $opt.text(trail.Park_Name);

 //          $select.append($opt);
 //          $div.append($select);
 //        });
 //      }, fail: function(err) {
 //        console.log('conncection failed!');
 //          }
 //      });
