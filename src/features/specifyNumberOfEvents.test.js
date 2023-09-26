import { loadFeature, defineFeature } from "jest-cucumber";
import { render } from "@testing-library/react";
import { waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";
import { getEvents } from "../api";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  test("When user hasn't specified a number, 32 is the default number", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    let eventList;
    given("the user hasn’t specified a number of events", () => {
      AppComponent = render(<App />);
    });

    when("the user sees the list of all upcoming events", async () => {
      const AppDOM = AppComponent.container.firstChild;
      await waitFor(() => {
        eventList = within(AppDOM).queryAllByRole("listitem");
        expect(eventList[0]).toBeTruthy();
      });
    });

    then("the user should see 32 events", () => {
      expect(eventList.length).toEqual(32);
    });
  });

  test("User can change the number of events they want to see", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    given("the user has specified a number of events", async () => {
      AppComponent = render(<App />);
      const AppDOM = AppComponent.container.firstChild;
      await waitFor(() => {
        const eventList = within(AppDOM).queryAllByRole("listitem");
        expect(eventList[0]).toBeTruthy();
      });
    });

    when("the user sees the list of all upcoming events", async () => {
      const button = AppComponent.queryByTestId("numberOfEventsInput");

      await userEvent.type(button, "{backspace}{backspace}10");
    });

    then("the user should see the number of events they specified", () => {
      const AppDOM = AppComponent.container.firstChild;
      const eventList = within(AppDOM).queryAllByRole("listitem");
      expect(eventList.length).toEqual(10);
    });
  });
});
