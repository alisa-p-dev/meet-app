import EventList from "./components/EventList";
import CitySearch from "./components/CitySearch";
import NumberOfEvents from "./components/NumberOfEvents";
import CityEventsChart from "./components/CityEventsChart";
import { useState, useEffect } from "react";
import { extractLocations, getEvents } from "./api";
import { ErrorAlert, InfoAlert, WarningAlert } from "./components/Alert";
import "./App.css";

const App = () => {
  const [events, setEvents] = useState([]);
  const [allLocations, setAllLocations] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [currentNOE, setCurrentNOE] = useState(32);
  const [currentCity, setCurrentCity] = useState("See all cities");
  const [infoAlert, setInfoAlert] = useState("");
  const [errorAlert, setErrorAlert] = useState("");
  const [warningAlert, setWarningAlert] = useState("");

  const fetchData = async () => {
    const allEvents = await getEvents();
    let filteredEvents;
    // currentCity === "See all cities"
    //   ? allEvents
    //   : allEvents.filter((event) => event.location === currentCity);
    if (currentCity === "See all cities") {
      // If the current city is "See all cities," don't filter any events
      filteredEvents = allEvents;
    } else {
      // Filter out events from the "Excluded City"
      filteredEvents = allEvents.filter(
        (event) => event.location !== "Moscow, Russia"
      );
    }
    setEvents(filteredEvents.slice(0, currentNOE));
    setAllLocations(extractLocations(allEvents));
  };

  useEffect(() => {
    if (navigator.onLine) {
      // set the warning alert message to an empty string ""
      setWarningAlert("");
    } else {
      // set the warning alert message to a non-empty string
      setWarningAlert(
        "You are currently offline. Events displayed may not be up to date."
      );
    }
    fetchData();
  }, [currentCity, currentNOE]);

  return (
    <div className="App">
      <div className="alerts-container">
        {infoAlert.length ? <InfoAlert text={infoAlert} /> : null}
        {errorAlert.length ? <ErrorAlert text={errorAlert} /> : null}
        {warningAlert.length ? <WarningAlert text={warningAlert} /> : null}
      </div>
      <NumberOfEvents
        setCurrentNOE={setCurrentNOE}
        setErrorAlert={setErrorAlert}
      ></NumberOfEvents>
      <CitySearch
        allLocations={allLocations}
        setCurrentCity={setCurrentCity}
        setInfoAlert={setInfoAlert}
      ></CitySearch>
      <CityEventsChart allLocations={allLocations} events={events} />
      <EventList events={events}></EventList>
    </div>
  );
};

export default App;
