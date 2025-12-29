
Arda Karaer - MIS 233 Grafana Datasource Plugin Final Project

This is a custom Grafana Datasource Plugin developed for the MIS 233 Final Project. It demonstrates a fully functional datasource with custom query parameters, error handling, and data simulation.

Developer
Arda Karaer

Installation & Run Instructions

Prerequisites
* Node.js 
* npm
* Docker (Running)

How to Run Locally
This project uses the official Grafana Toolkit Docker development server.
1. Download the project folder and enter the directory:
   ```bash
   git clone <https://github.com/ardakaraer/mis233-final-project.git>
   cd mis233-final-project
   ```
2.  Install dependencies:
    ```bash
    npm install
    ```
3.  Start the Compiler (Terminal 1)
    Run the following command to watch for code changes:
    ```bash
    npm run dev
    ```
4.  Start the Grafana Server (Terminal 2)
    Open a new terminal window and run the Docker server:
    ```bash
    npm run server
    ```
5.  Access Grafana:
    Open your browser to: http://localhost:3000
    Username:`admin`
    Password: `admin`
6.  Activate the plugin:
    Connections -> Data Sources on navigation on the left,
    Click Add data source,
    Search for the mis233-final-project and select it,
    Dashboards -> New Dashboard -> click Add Visualization     
    
    
Bonus Features Implemented
I have implemented the following bonus features beyond the mandatory requirements:

1.  Datasource Plugin Type: As per the assignment rules, implementing a Datasource plugin.
2.  Custom Query Parameters: The Query Editor allows users to input text (`Query Text`), which is read and processed by the backend logic.
3.  Error Handling: The plugin includes specific logic to handle invalid inputs.
    Type the word `error` in the "Query Text" field to trigger a simulated API failure notification.
4.  Interactivity: The plugin listens to user keystrokes in real-time and logs the input to the browser console, demonstrating a reactive UI.

