//this is to get all the days of the month
export const getDaysInMonth = (monthMoment) => {
  const monthCopy = monthMoment.clone();
  monthCopy.startOf("month");

  let days = [];

  //incrementing the monthCopt moment one day at a time
  //untill no longer in the same month
  while (monthCopy.month() === monthMoment.month()) {
    days.push(monthCopy.clone());
    monthCopy.add(1, "days");
  } 
  // looking through all the days in the month
  // pushing new moment for each date onto days array (line: 11)

  return days;
};

// segment the full month in to weeks.
// arrays of days in a week.
// push the days on to new array whenever we reach into end of the week e.g saturday.
export const segmentIntoWeeks = dayMoments => {
  let weeks = []; // empty array of days
  let currentWeek = []; //this is current array to be pushed

  for (let day of dayMoments) {
    currentWeek.push(day.clone());
    //cloning that day here. dont want to go creating these hidden references backend
    //with this argument(dayMoment) that is being passed in

    //this is to check if its the last day of the week.
    if (day.format("dddd") === "Saturday") {
      weeks.push(currentWeek);
      currentWeek = []; //to reset the week after pushing.
    }
  }
  // flushing out all/any remaining days that didnt get to pushed on
  // to the week's array inside this forLoops
  if (currentWeek.length > 0) {
    weeks.push(currentWeek);
  }

  return weeks;
}
// take a week and agrument w/c is padWidth to determine what value can put into that array
//set null first for that argument
export const padWeekFront = (week, padWidth = null) => {
  return [...Array(7 - week.length).fill(padWidth), ...week];
}// inserting this padWidth thing over and over until the length of the
// total array is 7.

export const padWeekBack = (week, padWidth = null) => {
  return [...week, ...Array(7 - week.length).fill(padWidth)];
}

export const daysOfTheWeek = [
  "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"
]
