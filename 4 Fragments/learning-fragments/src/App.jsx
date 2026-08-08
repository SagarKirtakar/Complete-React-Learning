import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ErrorMessage from "./ErrorMessage.jsx";
import FoodItem from "./components/FoodItem.jsx";

function App() {
  // let foodItems = ["Dal", "Chawal", "Roti", "Sabji", "Milkshake", "Salad"];
  // let foodItems = [];

  return (
    <>
      <h1>Healthy Food</h1>

      <ErrorMessage />
      <FoodItem></FoodItem>
    </>
  );
}

export default App;