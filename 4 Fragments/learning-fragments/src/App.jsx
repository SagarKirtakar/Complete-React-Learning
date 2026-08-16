import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import ErrorMessage from "./components/ErrorMessage.jsx";
import FoodItem from "./components/FoodItem.jsx";
import { useEffect } from "react";
import useEffect from "./components/UseEffect.jsx";

function App() {
  let foodItems = ["Dal", "Chawal", "Roti", "Sabji", "Milkshake", "Salad"];
  let textShow = "Food item Entered by user";
  // let foodItems = [];

  return (
    <>
      {/* <h1 className="food-heading">Healthy Food</h1> */}
      {/* <ErrorMessage items={foodItems} />
      <p>{textShow}</p>
      <FoodItem items={foodItems}></FoodItem> */}
      <useEffect></useEffect>
    </>
  );
}

export default App;