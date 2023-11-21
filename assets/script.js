// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$( '.saveBtn' ).on( 'click', function() {
  event.preventDefault ();
  alert( 'saved' );
  // console.log('click')
  var SaveBtnValue = $(this).val();
  var textarea = document.getElementsByClassName('description').value;
  localStorage.setItem('.savebtn',  JSON.stringify(textarea));
  console.log(localStorage.getItem('.savebtn', JSON.stringify(textarea)))
} );




// date time hour
var today = dayjs();
var moment = dayjs();
$('#currentDay').text(today.format('MMM D, YYYY'))
$('#time-digits').text(moment.format('h:mm'));
$('#time-period').text(moment.format('a'));

hour = parseInt(moment.format('H'));
    var minutes = parseInt(moment.format('mm'));

    // color coded timeblocks
    if (hour < 19){
        $('.time-block').removeClass('present past').addClass('future');
    }
    if (hour > 5){
        $('.time-block').removeClass('present future').addClass('past');
    }
    $( 'div.time-block' ).each(function() {
        var timeblockNum = parseInt($( this ).data('value'));
        if (hour < timeblockNum){
            $( this ).removeClass('past present').addClass('future');
        }
        if (hour == timeblockNum){
            $( this ).removeClass('past future').addClass('present');
        }
        if (hour > timeblockNum){
            $( this ).removeClass('present future').addClass('past');
        }
        
    });

   



// The get stroed notes function that gets the stored notes and loads them when the page is loaded.

  

  // T
  //
  //
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  //