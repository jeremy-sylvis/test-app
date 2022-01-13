import React from 'react';
import './App.css';

function App() {

  const description = <>
    <p>All of the code found here is in app.tsx and can be removed.</p>
    <h2>Description of task</h2>
    <ul>
      <li>Create task tracking type application (think trello or jira)</li>
      <li>Requirements:</li>
      <ul>
        <li>
            The board should have 3 columns: TODO, IN-PROGRESS, & DONE
        </li>
        <li>
          The cards can be very basic and only need to capture a short description of what needs accomplished. <br/>
          Feel free to add any other details you wish to make it better
        </li>
        <li>
          An "Add Card" button to add a new card which will place the card in the TODO column by default.
          <br/>
          This button needs to present a way for the user to add the required information to the card (description).
        </li>
        <li>
          The user should be able to move the card from column to column.
        </li>
      </ul>
      <p><i>Notes: I should be able to pull this down and run it on my machine, if persisting data via points below, think about using a container system to handle all of the setup so it can be run with a single command.</i></p>
    </ul>
    <blockquote>
      Optional:
      <ul><li>design doesnt necessarily matter, but if you're inclined, feel free to adjust the css to fit your style.
        </li>
        <li>
          Build a backend API to manage the state of the above board
        </li>
        <li>
          If building an API it would be beneficial to have a datastore (postgres, mongo, dynamo, etc.) to persist data in
        </li>
      </ul>
    </blockquote>
  </>

  return (
    <div className="App">
      <header className="App-header" />
      <div className="instructionContainer">
        <h1>The App code should start here</h1>
        {description}
      </div>
    </div>
  );
}

export default App;
