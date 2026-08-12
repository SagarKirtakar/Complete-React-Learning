import Item from "./Item";

const FoodItem = ({ items }) => {

  return <>
    <ul className="list-group kg-items">
      {items.map((item) => (
        <Item key={item} foodItem={item}></Item>
      ))}
    </ul>
  </>
}

export default FoodItem; 