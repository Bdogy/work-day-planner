// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

//set current time to planner
var timeBlockClass = "";
var hour = dayjs().get("hour");
// var minute = dayjs().get("minute");
var minute = String(dayjs().get("minute"));
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

var doubleDigitMinute = function () {
  //fixes minute from return 12;1 to 12:01
  //turns minute into arr
  minute = minute.split("");
  if (minute.length === 1) {
    //adds 0 if arr length is = to 1
    minute.unshift("0");
  }
  return minute.join("");
};
//todays date and time
var todaysDate =
  dayjs().get("month") +
  "/" +
  dayjs().get("date") +
  "/" +
  dayjs().get("year") +
  " " +
  pmConverter() +
  ":" +
  doubleDigitMinute();

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
  var hour = dayjs().get("hour");
  //sets p element in header to current time
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
      console.log("this");
      //sets the time block class to future all element after if statement will be effected
      timeBlockClass = "future";
    }
  });
});
