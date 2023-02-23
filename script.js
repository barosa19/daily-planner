// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  var today = dayjs()
  var currentHour = today.format("hA")

  // TODO: Add a listener for click events on the save button. This code should
  var saveBtn = $('.saveBtn')
  saveBtn.on('click', function(event){
    console.log($(this).parent())
  })
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  
  // Changes class depending on current time
  var hourClass = $('.hour')
  hourClass.each(function () {
    var currentClasstext = $(this).text()

    var currentClassNum = currentClasstext.slice(0,currentClasstext.length-2)
    if (currentClassNum < 8){
      currentClassNum = +currentClassNum + 12
    }
    
    var CCdayjs = dayjs().hour(currentClassNum)
    var currentParent = $(this).parent()

    if (currentClasstext == currentHour) {
      currentParent.removeClass("past present future")
      currentParent.addClass("present")
    }
    else if(CCdayjs.isAfter(today)) {
      currentParent.removeClass(" past present future")
      currentParent.addClass("future")
    }
    else {
      currentParent.removeClass(" past present future")
      currentParent.addClass("past")
    }
  })
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  
  // displays current time to header
  $('#currentDay').text(today.format('dddd, MMMM Do'))
});

//.on('click', function())