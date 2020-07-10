import React from 'react';
// import './App.css';
import Clothing from './Clothing'

function App() {
  return (
    <div className="App">
      <p>Weather Wardrobe App</p>
     <div class="Seasons">
  <div id="myDropdown" class="dropdown-content">
  </div>
</div>

<label for="Seasons">Choose a season: </label>

    <select name="Seasons" id="Seasons" onchange="location = this.value;">
      <option value="Summer">Summer</option>
      <option value="Fall">Fall</option>
      <option value="Winter">Winter</option>
      <option value="Spring">Spring</option>
    </select>

    <Clothing />
    </div>
    );
}

export default App;


// https://www.w3schools.com/tags/tag_table.asp
