// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  $('.saveBtn').on('click', function () { 
    var parentId = $(this).parent().attr('id');
    var sibling = $(this).prev();
asdjflkasdjf;lkasdjf
    localStorage.setItem(parentId, sibling.val());
  })
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
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
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  function getItemFromStorage(key) {
    return localStorage.getItem(key) || '';
  }

  // TODO: Add code to display the current date in the header of the page.
  $('#currentDay').text(dayjs().format('dddd, MMMM D'));
});
