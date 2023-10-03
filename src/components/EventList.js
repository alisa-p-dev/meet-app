import Event from "./Event";
import { useState } from "react";

const EventList = ({ events }) => {
  const [colorIndex, setColorIndex] = useState(0);

  return (
    <ul id="event-list">
      {events
        ? events.map((event, index) => (
            <Event
              key={event.id}
              event={event}
              colorIndex={colorIndex + index}
            />
          ))
        : null}
    </ul>
  );
};

export default EventList;
