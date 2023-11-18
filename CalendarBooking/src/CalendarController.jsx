import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import moment from "moment";
import { Calendar } from "./Calendar";
import { Modal } from "./Modal";
import { NewEventForm } from "./NewEventForm";

export const CalendarController = () => {
  const [events, setEvents] = useState([]);
  const [showNewEventModal, setShowNewEventModal] = useState(false);
  const [ selectedDate, setSelectedDate] = useState(null); // the date that the user will click on

  const { search } = useLocation();
  const navigate = useNavigate();
  const month = new URLSearchParams(search).get("m");
  const year = new URLSearchParams(search).get("y");

  const today = moment();
  const [currentMonthMoment, setCurrentMonthMoment] = useState(
    (month && year) 
      ? moment(`${month}${year}`, "MMYYYY") 
      : today //default date
  );

  const incrementMonth = () => {
    const newMonth = moment(currentMonthMoment.add(1, "month"));
    navigate(`?m=${newMonth.format("MM")}&y=${newMonth.format("YYYY")}`);
    setCurrentMonthMoment(newMonth);
  }

  const decrementMonth = () => {
    const newMonth = moment(currentMonthMoment.subtract(1, "month"));
    navigate(`?m=${newMonth.format("MM")}&y=${newMonth.format("YYYY")}`);
    setCurrentMonthMoment(newMonth);
  }

  const createNewEvent = name => {
    setEvents(events.concat({ name, date: selectedDate }));
    setShowNewEventModal(false); // hidding the modal after creating an event
    setSelectedDate(null);
  }

  const displayModal = (date, month, year) => {
    console.log({date, month, year});
    setSelectedDate(moment(`${date}${month}${year}`, 'DDMMYYYY'));
    setShowNewEventModal(true); //show the modal
  }

  return (
    <>
    <Modal shouldShow={showNewEventModal} onRequestClose={() => {
        setShowNewEventModal(false);
    }}>
        <h3>New Event for {selectedDate && selectedDate.format("MM/DD/YYYY")}</h3>
        <NewEventForm onSubmit={createNewEvent} />
    </Modal>
    <Calendar
      events={events}
      onCellClicked={displayModal}
      month={currentMonthMoment.format("MM")}
      year={currentMonthMoment.format("YYYY")}
      onPrev={decrementMonth}
      onNext={incrementMonth} />
    </>
  );
  
}
