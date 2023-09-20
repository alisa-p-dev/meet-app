import { render, within, waitFor } from "@testing-library/react";
import { getEvents } from "../api";
import EventList from "../components/EventList";
import App from "../App";

//Unit tests
describe("<EventList /> component", () => {
  test('has an element with "list" role', () => {
    const EventListComponent = render(<EventList />);
    expect(EventListComponent.queryByRole("list")).toBeInTheDocument();
  });

  test("renders correct number of events", async () => {
    const allEvents = await getEvents();
    const EventListComponent = render(<EventList events={allEvents} />); // Define EventListComponent here
    expect(EventListComponent.getAllByRole("listitem")).toHaveLength(
      allEvents.length
    );
  });
});

//Integration tests
describe("<EventList /> integration", () => {
  test("renders a list of 32 events when the app is mounted and rendered", async () => {
    const AppComponent = render(<App />);
    const AppDOM = AppComponent.container.firstChild;
    const EventListDOM = AppDOM.querySelector("#event-list");
    await waitFor(() => {
      const EventListItems = within(EventListDOM).queryAllByRole("listitem");
      expect(EventListItems.length).toBeGreaterThan(0);
    });
  });
});
