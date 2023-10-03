import { useState } from "react";
import { format } from "date-fns";

const Event = ({ event, colorIndex }) => {
  const [showDetails, setShowDetails] = useState(false);

  const startDate = new Date(event.start.dateTime);
  // Format the date and time using date-fns
  const formattedStartDate = format(startDate, "dd/MM/yyyy,  HH:mm");

  //const colors = ["#2364aa", "#3da5d9", "#73bfb8", "#fec601", "#ea7317"];
  const colors = ["#34B5EE", "#27B08A", "#557D73", "#FA8F42", "#775BFB"];
  return (
    <li
      className="event"
      style={{
        backgroundColor: colors[colorIndex % colors.length],
      }}
    >
      <h3>{event.summary}</h3>
      <p>{formattedStartDate}</p>
      <p>{event.location}</p>
      <button
        className="details-btn"
        onClick={() => {
          setShowDetails(!showDetails);
        }}
      >
        {showDetails ? "Hide Details" : "Show Details"}
      </button>
      {showDetails ? (
        <div className="details">
          <h4>Event Details</h4>
          <p>Description: {event.description}</p>
          <br />
          <p>Event Status: {event.status}</p>
        </div>
      ) : null}
    </li>
  );
};

export default Event;
