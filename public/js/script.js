$(document).ready(function() {
  console.log('Loaded');


    $.ajax({
      url: '/hike',
      method: 'get',
      dataType: 'json',
      success: function(data) {
        data.forEach(function(trail) {
          console.log(data);
          if (trail.Prop_ID.charAt(0) === "X"  ) {
          let $li=  $("<li>").text(trail.Park_Name +" " +trail.Prop_ID );
          let $ul = $(".bronx-locat")
          console.log(trail.Park_Name);
          $ul.append($li);
          }
          if (trail.Prop_ID.charAt(0) === "R" ) {
            let $li=  $("<li>").text(trail.Park_Name +" " +trail.Prop_ID );
            let $ul = $(".si-locat")
            console.log(trail.Park_Name);
            $ul.append($li);
          }
           if (trail.Prop_ID.charAt(0) === "Q" ){
            let $li=  $("<li>").text(trail.Park_Name +" " +trail.Prop_ID );
            let $ul = $(".queens-locat");
            console.log(trail.Park_Name);
            $ul.append($li);
          }
           if (trail.Prop_ID.charAt(0) === "M" ) {
            let $li=  $("<li>").text(trail.Park_Name +" " +trail.Prop_ID );
            let $ul = $(".manh-locat");
            console.log(trail.Park_Name);
            $ul.append($li);
          }
            if (trail.Prop_ID.charAt(0) === "B" ) {
            let $li=  $("<li>").text(trail.Park_Name +" " +trail.Prop_ID );
            let $ul = $(".brook-locat")
            console.log(trail.Park_Name);
            $ul.append($li);
          }
        });
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
