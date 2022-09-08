import React from 'react'
import '../styles/App.css';
const App = () => {

  const handleClick = (event) =>{
    // use console.log
    console.log("Button id is:-" + event.target.id)

  }
  // For example if we click button a, it prints 'Button id is:-button-a'
  // and same for button-b or any other button we add in the app.
  // do not remove the two buttons or change their id
  return (
    <div id="main" onClick={handleClick}>
      <button id="button-a">Button A</button>
      <button id="button-b">Button B</button>
    </div>
  )
}


export default App;
