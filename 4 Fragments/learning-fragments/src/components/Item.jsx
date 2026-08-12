import css from "./item.module.css";

const Item = ({ foodItem }) => {

  return <li className={`${css["kg-item"]}`}>
    <span className={`${css["kg-span"]}`}>{foodItem}</span>
  </li>;
};

export default Item;