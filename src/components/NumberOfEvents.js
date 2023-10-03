const NumberOfEvents = ({ setCurrentNOE, setErrorAlert }) => {
  const handleInputChanged = (event) => {
    const value = event.target.value;

    if (isNaN(value)) {
      setErrorAlert("Please enter a number");
    } else if (value > 50) {
      setErrorAlert("Maximum number of events is 50");
    } else if (value <= 0) {
      setErrorAlert("Only positive numbers allowed");
    } else {
      setErrorAlert("");
      setCurrentNOE(value);
    }
  };

  return (
    <div id="number-of-events">
      <label htmlFor="numberOfEventsInput">Number of events </label>
      <br />
      <input
        type="text"
        className="textbox"
        defaultValue="32"
        onChange={handleInputChanged}
        data-testid="numberOfEventsInput"
      />
    </div>
  );
};

export default NumberOfEvents;
