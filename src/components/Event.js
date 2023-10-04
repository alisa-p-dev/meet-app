import { useState } from "react";
import { format } from "date-fns";

const Event = ({ event, colorIndex }) => {
  const [showDetails, setShowDetails] = useState(false);

  const startDate = new Date(event.start.dateTime);
  // Format the date and time using date-fns
  const formattedStartDate = format(startDate, "dd/MM/yyyy,  HH:mm");

  const colors = ["#34B5EE", "#27B08A", "#FA8F42", "#775BFB", "#E9B824"];
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
