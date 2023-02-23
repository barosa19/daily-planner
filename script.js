$(function () {
  var today = dayjs()
  var currentHour = today.format("hA")

  // Added an event listener for the save button in each hour
  var saveBtn = $('.saveBtn')
  
  saveBtn.on('click', function(event){
    var txtEl = $(this).prev()
    var eventEl = txtEl.val()
    var parentEl = $(this).parent()
    var divEl = parentEl[0]
    // ?? Explain $ and how it interacts with regualr js and when to use it and when not to
    var hourIdEl = divEl.getAttribute('id') //divEl.id worked
    localStorage.setItem(hourIdEl, eventEl)
  })
  
  // Changes class depending on current time
  var hourClass = $('.hour')
  hourClass.each(function () {
    var currentClasstext = $(this).text()
    var currentParent = $(this).parent()
    var parentId = currentParent[0]
    hourId = parentId.getAttribute('id')
    hourEl =hourId.split('-')[1]
    var CCdayjs = dayjs().hour(hourEl)

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