// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

//set current time to planner
// var hour = dayjs().get("hour");
var hour = dayjs().get("hour");
var timeBlock = $(".time-block");
var saveButton = $(".saveBtn");
var currentDay = $("#currentDay");
var main = $("main");

var pmConverter = function () {
  if (hour > 12) {
    hour -= 12;
  }
  return hour;
};
//todays date and time
var todaysDate =
  dayjs().get("date") +
  "/" +
  dayjs().get("month") +
  "/" +
  dayjs().get("year") +
  " " +
  pmConverter() +
  ":" +
  dayjs().get("minute");

saveButton.click(function () {
  var savedClick = $(event.target);
  var store = savedClick.parent().children("textarea").val();
  console.log(savedClick.parent().attr("id"));
  console.log(store);
  localStorage.setItem(
    JSON.stringify(savedClick.parent().attr("id")),
    JSON.stringify(store)
  );
});

$(function () {
  timeBlock.each(function (index) {
    console.log(index);
    //loops through time blocks
    //11 is a place holder for var hour
    if (11 === index + 9) {
      $(this).addClass("present");
    }
  });
  //sets time to header of app
  //loop 9 times for each time section then check if the current count is = to the current hour. if so apply current time. for ever time till 17 thats above thr current time apply future class to those elements
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
});
