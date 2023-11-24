import { BrowserRouter } from "react-router-dom";
import { CalendarController } from "./CalendarController";
import "./App.css";
import { BaseApi } from "./BaseApi";


function App() {
  return (
    <BrowserRouter>
      <CalendarController />
    </BrowserRouter>
  );
}

export default App;