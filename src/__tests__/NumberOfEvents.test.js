import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NumberOfEvents from "../components/NumberOfEvents";

describe("<NumberOfEvents /> component", () => {
  let NumberOfEventsComponent;

  beforeEach(() => {
    const NumberOfEventsComponent = render(
      <NumberOfEvents setCurrentNOE={() => {}} />
    );
  });

  test("renders a text box", () => {
    const numberTextBox = screen.queryByRole("textbox");
    expect(numberTextBox).toBeInTheDocument();
    expect(numberTextBox).toHaveClass("textbox");
  });

  test("default number of events is 32", () => {
    const input = NumberOfEventsComponent.queryByRole("textbox");
    expect(input).toHaveValue("32");
  });

  test("updates the event number when the user types a new value", async () => {
    const input = NumberOfEventsComponent.queryByRole("textbox");
    await userEvent.type(input, "{backspace}{backspace}10");
    expect(input).toHaveValue("10");
  });
});
