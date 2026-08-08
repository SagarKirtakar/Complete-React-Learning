const FoodItem = () => {

  let foodItems = ["Dal", "Chawal", "Roti", "Sabji", "Milkshake", "Salad"];

  return <>
    <ul className="list-group">
      {foodItems.map((item) => (
        <li className="list-group-item" key={item}>
          {item}
        </li>
      ))}
    </ul>
  </>
}

export default FoodItem; 