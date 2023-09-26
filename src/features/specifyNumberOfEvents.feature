Feature: Specify Number of Events

Scenario: When user hasn't specified a number, 32 is the default number
    Given the user hasn’t specified a number of events
    When the user sees the list of all upcoming events
    Then the user should see 32 events

Scenario: User can change the number of events they want to see
    Given the user has specified a number of events
    When the user sees the list of all upcoming events
    Then the user should see the number of events they specified