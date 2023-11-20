// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$( ".saveBtn" ).on( "click", function() {
  alert( "saved" );
} );

var today = dayjs();
var moment = dayjs();
$('#currentDay').text(today.format('MMM D, YYYY'))
$('#time-digits').text(moment.format('h:mm'));
$('#time-period').text(moment.format('a'));

hour = parseInt(moment.format('H'));
    var minutes = parseInt(moment.format('mm'));

    // timeblocks
    if (hour < 9){
        $('.time-block').removeClass("present past").addClass("future");
    }
    if (hour > 16){
        $('.time-block').removeClass("present future").addClass("past");
    }
    $( "div.time-block" ).each(function() {
        var timeblockNum = parseInt($( this ).data("value"));
        if (hour < timeblockNum){
            $( this ).removeClass("past present").addClass("future");
        }
        if (hour == timeblockNum){
            $( this ).removeClass("past future").addClass("present");
        }
        if (hour > timeblockNum){
            $( this ).removeClass("present future").addClass("past");
        }
        
    });

    var hour = {
      hour9: {
          time: "9AM - 10AM",
          title: "",
          description: ""
      },
      hour10: {
          time: "10AM - 11AM",
          title: "",
          description: ""
      },
      hour11: {
          time: "11AM - 12PM",
          title: "",
          description: ""
      },
      hour12: {
          time: "12PM - 1PM",
          title: "",
          description: ""
      },
      hour1: {
          time: "1PM - 2PM",
          title: "",
          description: ""
      },
      hour2: {
          time: "2PM - 3PM",
          title: "",
          description: ""
      },
      hour3: {
          time: "3PM - 4PM",
          title: "",
          description: ""
      },
      hour4: {
          time: "4PM - 5PM",
          title: "",
          description: ""
      }
  };
  
  
  // LOCAL STORAGE
  
  
  var storageKey = localStorage.getItem("storageKey");
  init();
  
  function renderBlocks(){
      $( "div.time-block" ).each(function() {
          var timeblockNum = $( this ).attr("data-value");
          console.log(timeblockNum);
          console.log(this);
          // clear old text (need when saving)
          // $( this ).empty();
          // add text to timeblocks
          $( this ).append($("<h4 class='title'>"+hour["hour"+timeblockNum].title+"</h4>"));
          $( this ).append($("<p class='description'>"+hour["hour"+timeblockNum].description+"</p>"));
          if (hour["hour"+timeblockNum].title!==""||hour["hour"+timeblockNum].description!==""){
              $( this ).removeClass("empty");
          }
      });
  };
  
  function init() {
      // check if local storage has been used else get data from local storage
      if(storageKey===null){
          console.log("nothing in storage");
      } else {
          blocks = JSON.parse(localStorage.getItem("storageKey"));
      }
      // Render event text
      renderBlocks();
  };
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
// });
