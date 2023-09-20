// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
  // TODO: Add a listener for click events on the save button. This code should
  $('.saveBtn').on('click', function () { 
    var parentId = $(this).parent().attr('id');
    var sibling = $(this).prev();

    localStorage.setItem(parentId, sibling.val());
  })

  // TODO: Add code to apply the past, present, or future class to each time
  var currentHour = parseInt(dayjs().format('HH'));
  
  var timeBlocks = $('.time-block').toArray();

  $.each(timeBlocks, function (i, val) {
    var timeElId = $(val).attr('id');
    var hour = parseInt(timeElId.split('-')[1].trim());
    var event = getItemFromStorage(timeElId);

    if (event.length > 0) {
      $(val).children('.description').val(event);
    }
    
    if (hour < currentHour) {
      $(val).addClass('past');
    } else if (hour === currentHour) {
      $(val).addClass('present');
    } else {
      $(val).addClass('future');  
    }
  });

  // TODO: Add code to get any user input that was saved in localStorage and set
  function getItemFromStorage(key) {
    return localStorage.getItem(key) || '';
  }

  // TODO: Add code to display the current date in the header of the page.
  $('#currentDay').text(dayjs().format('dddd, MMMM D'));
});
