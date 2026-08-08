const ErrorMessage = () => {

  let foodItems = ["Dal", "Chawal", "Roti", "Sabji", "Milkshake", "Salad"];

  return <>
    {foodItems.length === 0 ? <h3>I am still hungry..</h3> : null}
  </>

}

export default ErrorMessage;
