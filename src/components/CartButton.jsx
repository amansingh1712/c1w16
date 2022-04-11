import React from 'react'


// keep the add to cart component here
const CartButton = () => {
    //manage state of the count 
  const [counter, setCounter] = React.useState(0);
  const handleIncrement = (value) => {
    setCounter(counter+value)
  }
  return <>
  {/* add to cart button */}
  {/* count with - and  + button */}
  <div>
      {/* <button>-</button> */}
      <p className="count-item">{counter>0 &&counter}</p>
      <button onClick={()=>handleIncrement(1)}>Add To Cart +</button>
      <button onClick={()=>handleIncrement(-1)}>-</button>
  </div>
  </>;
};
export default CartButton
