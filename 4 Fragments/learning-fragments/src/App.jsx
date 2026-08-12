import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ErrorMessage from "./components/ErrorMessage.jsx";
import FoodItem from "./components/FoodItem.jsx";

function App() {
  let foodItems = ["Dal", "Chawal", "Roti", "Sabji", "Milkshake", "Salad"];
  // let foodItems = [];

  return (
    <>
      <h1>Healthy Food</h1>

      <ErrorMessage items={foodItems} />
      <FoodItem items={foodItems}></FoodItem>
    </>
  );
}

export default App;