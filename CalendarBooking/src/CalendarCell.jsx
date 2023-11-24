import styled from "styled-components";
import {Event} from "./Event.jsx";

const Cell = styled.div`
  border: 1px solid #eee;
  position: relative;
  height: 100%;

  &:hover {
    background-color: rgba(255, 235, 220, 0.8);
  }
`;

export const CalendarCell = ({ dateNumber = "", events = []}) => {
  return (
      <Cell>
          {dateNumber}
          {events.map(event => <Event key={event.name} name={event.name}time={event.time} />)}
      </Cell>
  )
}

export default CalendarCell;