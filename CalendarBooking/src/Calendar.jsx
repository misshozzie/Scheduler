import {
  getDaysInMonth,
  segmentIntoWeeks,
  daysOfTheWeek,
  padWeekFront,
  padWeekBack
} from "./Util";
import styled from "styled-components";
import moment from "moment";

const CalendarControlsWrap = styled.div`
  height: 15%;
`;

const CalendarControls = styled.div`
    margin: auto;
    max-width: 400px; 
    text-align: center;

    button {
        width: 45%;
        margin: 0 2%;
    }
`;

const CalendarTableWrap = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;

// height in 85% bec. the 15% is in CalendarControlsWrap
const CalendarTable = styled.div`
  height: 85%;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const CalendarRow = styled.div`
  display: flex;
  flex: 1;
`;

const CalendarHeading = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
`;

const CalendarHeadingCell = styled.div`
  flex: 1;
  text-align: center;
`;

const CalendarCellWrap = styled.div`
  padding: 0px;
  flex: 1;
`;

const CalendarCell = styled.div`
  border: 1px solid #eee;
  position: relative;
  height: 100%;

  &:hover {
    background-color: #eee;
  }
`;

export const Calendar = ({ onCellClicked, month, year, onPrev, onNext }) => {
  const currentMonthMoment = moment(`${month}${year}`, "MMYYYY");

  // collection of days in a month and its segmented
  const weeks = segmentIntoWeeks(getDaysInMonth(currentMonthMoment));

  return (
    <>
      <CalendarTableWrap>
        <CalendarControlsWrap>
          <CalendarControls>
            <h1>{currentMonthMoment.format("MMMM YYYY")}</h1>
            <button onClick={onPrev}>Prev</button>
            <button onClick={onNext}>Next</button>
          </CalendarControls>
        </CalendarControlsWrap>
        <CalendarTable>
          <CalendarHeading>
            {daysOfTheWeek.map(day => <CalendarHeadingCell key={day}>{day}</CalendarHeadingCell> )}
          </CalendarHeading>
          {weeks.map((week, i) => {
            const displayWeek = i === 0 //its its 0, that means its the first day of the week
                ? padWeekFront(week)
                : i === weeks.length - 1 // checking if its the last day of the week
                    ? padWeekBack(week)
                    : week;

            return (
              <CalendarRow key={i}>
                {displayWeek.map((dayMoment, j) => (
                  <CalendarCellWrap onClick={() => onCellClicked (
                    dayMoment.format("DD"),
                    dayMoment.format("MM"),
                    dayMoment.format("YYYY"))}>
                    {dayMoment 
                        ? <CalendarCell key={dayMoment.format('D')}>{dayMoment.format('D')}</CalendarCell>
                        : <CalendarCell key={`${i}${j}`}></CalendarCell>}
                  </CalendarCellWrap>
                ))}
              </CalendarRow>
            );
          })}
        </CalendarTable>
      </CalendarTableWrap>
    </>
  );
}
