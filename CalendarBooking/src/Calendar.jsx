import {
  getDaysInMonth,
  segmentIntoWeeks,
  daysOfTheWeek,
  padWeekFront,
  padWeekBack,
} from "./Util.jsx";
import styled from "styled-components";
import moment from "moment";
import CalendarCell from "./CalendarCell.jsx";

export const CalendarControlsWrap = styled.div`
  height: 15%;
`;

export const CalendarControls = styled.div`
  margin: auto;
  max-width: 400px;
  text-align: center;

  button {
    width: 45%;
    margin: 0 2%;
  }
`;

export const CalendarTableWrap = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
`;

// height in 85% bec. the 15% is in CalendarControlsWrap
export const CalendarTable = styled.div`
  height: 85%;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const CalendarRow = styled.div`
  display: flex;
  flex: 1;
`;

export const CalendarHeading = styled.div`
  display: flex;
  flex-direction: row;
  padding: 10px;
`;

export const CalendarHeadingCell = styled.div`
  flex: 1;
  text-align: center;
`;

export const CalendarCellWrap = styled.div`
  padding: 0px;
  flex: 1;
`;

export const Calendar = ({
  onCellClicked,
  month,
  year,
  onPrev,
  onNext,
  getCellProps,
}) => {
  const currentMonthMoment = moment(`${month}${year}`, "MMYYYY");

  // collection of days in a month and its segmented
  const weeks = segmentIntoWeeks(getDaysInMonth(currentMonthMoment));

  return (
    <>
      <CalendarTableWrap>
        <CalendarControlsWrap>
          <CalendarControls>
            <h1 key='h1'>{currentMonthMoment.format("MMMM YYYY")}</h1>
            <button key='prev' onClick={onPrev}>Prev</button>
            <button key='next' onClick={onNext}>Next</button>
          </CalendarControls>
        </CalendarControlsWrap>
        <CalendarTable>
          <CalendarHeading>
            {daysOfTheWeek.map(day => <CalendarHeadingCell key={day}>{day}</CalendarHeadingCell> )}
          </CalendarHeading>
          {weeks.map((week, i) => {
            const displayWeek = i === 0 //if its 0, that means its the first day of the week
                ? padWeekFront(week)
                : i === weeks.length - 1 // checking if its the last day of the week
                    ? padWeekBack(week)
                    : week;

            return (
              <CalendarRow key={i}>
                {displayWeek.map((dayMoment, j) => {

                  return (
                    <CalendarCellWrap  key={`${i}${j}`}  onClick={() => onCellClicked(
                      dayMoment?.format("DD"),
                      dayMoment?.format("MM"),
                      dayMoment?.format("YYYY"),
                    )}>
                    {dayMoment 
                        ? <CalendarCell dateNumber={dayMoment.format("D")} {...getCellProps(dayMoment)} key={dayMoment.format('D')} />
                        : <CalendarCell key={`${i}${j}`} />}
                    </CalendarCellWrap>
                  )
                })}
              </CalendarRow>
            );
          })}
        </CalendarTable>
      </CalendarTableWrap>
    </>
  );
}