import React from 'react'
import Aux from '../../hoc/Auxi';

const OrderSummary = (props) => {
    const ingredientSummary =Object.keys(props.ingredients)
    .map(igkey => {
        return (<li key ={igkey}>
                    <span style ={{textTransform: "capitalize"}}>{igkey}</span> : {props.ingredients[igkey]} 
                </li>)
    }); 
  return (
    <Aux>
      <h3>Your Order Summary :</h3>
      <p>A delcious burger with the following ingredients : </p>
      <ul>
            {ingredientSummary}
      </ul>
      <p>Continue  to checkout ?</p>
    </Aux>
  )
}

export default OrderSummary;
