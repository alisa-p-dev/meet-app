Meet App
=======

This application is constructed with React for the frontend and utilizes AWS Lambda for the backend. Its primary functionality involves presenting a list of events sourced from the Google Calendar API. Users can conveniently apply filters based on either the city or the quantity of events.

Prerequisites
-----------
Install Node.js

Installation
-----------
1. Clone the repository.
2. Navigate to the project directory in the terminal.
3. Run `npm install`  to install the necessary dependencies.

Technologies Used
-----------
- React

User Stories and Features
-----------
### Feature 1: Filter Events by City  
As a user I want to be able to filter events by the city, so that I can see only events in my location.

- _Scenario 1_  
When user hasn’t searched for a specific city, show upcoming events from all cities.  
**Given** user hasn’t searched for any city;  
**When** the user opens the app;  
**Then** the user should see a list of upcoming events.  

- _Scenario 2_  
User should see a list of suggestions when they search for a city.
**Given** the main page is open;  
**When** user starts typing in the city textbox;  
**Then** the user should receive a list of cities (suggestions) that match what they’ve typed.  

- _Scenario 3_  
User can select a city from the suggested list.
**Given** user was typing “Berlin” in the city textbox AND the list of suggested cities is showing;  
**When** the user selects a city (e.g., “Berlin, Germany”) from the list;  
**Then** their city should be changed to that city (i.e., “Berlin, Germany”) AND the user should receive a list of upcoming events in that city.  

### Show/Hide Event Details  
As a user I would like to be able to see/hide event details, so that I can know more/less information about the event.

- _Scenario 1_  
When user has opened events list, show events without details.
**Given** user opens the app;  
**When** user has opened events list;  
**Then** the user should see a list of upcoming events without details. 

- _Scenario 2_  
User should see event details when they expand the event.
**Given** the list of events is shown;  
**When** user selects and expands an event ;  
**Then** correspondent event deatils are shown.  

- _Scenario 3_  
User can hide event details.
**Given** certain event details are displayed;  
**When** the user selects to hide the ditails;  
**Then** selected event details are not shown any more.  

### Specify Number of Events  
As a user, I would like to be able to specify the number of events I want to view in the app so that I can see more or fewer events in the events list at once.

- _Scenario 1_  
When user hasn’t specified a number of events to be shown.  
**Given** user hasn’t  specified a number of events to be shown;  
**When** the user opens the app;  
**Then** the user should see a list of default number of upcoming events.  

- _Scenario 2_  
User wants to see a certain number of events.
**Given** the main page is open;  
**When** user starts typing the number of events they want to see;  
**Then** specified number of events is shown.  
 
 ### Use the App When Offline  
 As a user, I would like to be able to use the app when offline so that I can see the events I viewed the last time I was online.

- _Scenario 1_ 
When user has no internet connection and opens the app to view events. 
**Given** user has previously opened the app and;  
**When** the user opens the app offline;  
**Then** the user should see a list of events that was show last tme user opened the app online. 

- _Scenario 2_  
When user has no internet connection and opens the app for the first time. 
**Given** user hasn't previously opened any events in the app;  
**When** the user opens the app offline;  
**Then** the user should see a message saying that no events available. 

 ### Add an App Shortcut to the Home Screen  
 As a user, I would like to be able to add the app shortcut to my home screen so that I can open the app faster.

- _Scenario 1_    
User can install the app shortcut on their device home screen.  
**Given** user presses on the app shourtcut;  
**When** the user selects an option to add a shortcut to the home screen;  
**Then** after confirming, the app icon appears on the home screen for easy access.  

 ### Display Charts Visualizing Event Details  
As a user, I would like to be able to see a chart showing the upcoming events in each city so that I know what events are organized in which city.  

- _Scenario 1_  
User can install the app shortcut on their device home screen.  
**Given** The user is viewing the event details page;   
**When** The user taps on a "View Charts" button or a specific tab within the event details page;    
**Then** The application retrieves relevant data and generates visually appealing charts, presenting them to the user within the event details page to provide additional insights or statistics about the event.


Use of Serverless feature
-----------
The Meet App can use serverless functions for event notifications, real-time data processing, user authentication, event recommendations, , and scalability. By leveraging serverless technology, the app can efficiently handle backend processes, provide personalized experiences, and scale according to user demand.
