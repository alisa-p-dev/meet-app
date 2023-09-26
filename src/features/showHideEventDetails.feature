Feature: Show/hide Event Details

Scenario: An event element is collapsed by default
  Given the user opens the app
  When the user should see the list of all upcoming events
  Then each event element should be collapsed by default

Scenario: User can expand an event to see its details
  Given the user sees the list of all upcoming events
  When the user clicks on “Show Details”
  Then the user should see all details of the event

Scenario: User can collapse an event to hide its details
  Given user sees details of the event
  When the user clicks on “Hide Details” 
  Then the event element should collapse
  
