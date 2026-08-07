import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css'

function App() {

  let foodItems = ["Dal", "Chawal", "Roti", "Sabji", "Milkshake", "Salad"];

  return (
    <>
      <h1>Healthy food</h1>
      <ul class="list-group">
        {
          foodItems.map((item) => (
            <li class="list-group-item">{item}</li>
          ))}
      </ul>
    </>
  );

}

export default App
