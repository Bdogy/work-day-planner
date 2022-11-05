// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

//set current time to planner
// var hour = dayjs().get("hour");
var timeBlockClass = "";
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
  localStorage.setItem(
    JSON.stringify(savedClick.parent().attr("id")),
    JSON.stringify(store)
  );
});
//runs immediately
$(function () {
  currentDay.text(todaysDate);
  timeBlock.each(function (index) {
    $(this).addClass(timeBlockClass);
    //checks local storage and adds to page
    //Parses the returned value and stringifies the ID
    var savedContent = JSON.parse(
      localStorage.getItem(JSON.stringify($(this).attr("id")))
    );
    //transverses to document and sets text to save content
    $(this).children("textarea").text(savedContent);

    //loops through time blocks
    //11 is a place holder for var hour
    if (hour === index + 9) {
      $(this).addClass("present");
      //sets the time block class to future all element after if statement will be effected
      timeBlockClass = "future";
    }
  });
});
