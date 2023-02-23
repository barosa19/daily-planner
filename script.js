$(function () {
  var today = dayjs()
  var currentHour = today.format("hA")

  // Added an event listener for the save button in each hour
  var saveBtn = $('.saveBtn')
  saveBtn.on('click', function(event){
    var txtEl = $(this).prev()
    var parentEl = $(this).parent()[0]
    localStorage.setItem(parentEl.getAttribute("id"), txtEl.val())
  })
  
  // Changes class depending on current time and gets item from local storage
  var hourClass = $('.hour')
  hourClass.each(function () {
    var currentClasstext = $(this).text()
    var currentParent = $(this).parent()
    var parentId = currentParent[0]
    hourId = parentId.id
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

    if(localStorage.getItem(hourId)){
      $(this).next().text(localStorage.getItem(hourId))
    }

  })
  //
  // displays current time to header
  $('#currentDay').text(today.format('dddd, MMMM Do'))
});