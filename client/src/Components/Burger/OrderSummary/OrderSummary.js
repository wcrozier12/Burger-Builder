import React from 'react';
import Aux from '../../../HOCs/Aux';
import Button from '../../UI/Button/Button';
import '../../UI/Button/Button.css';

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
      .map(ing => {
        return <li key={ing}><span style={{textTransform: 'capitalize'}}>{ing}</span>: {props.ingredients[ing]}</li>
      })
  return (
      <Aux> 
        <h3> Your Order </h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>
          {ingredientSummary}
        </ul>
        <p> Continue to checkout? </p>
        <Button btnType='Danger' clicked={props.purchaseCanceled}>CANCEL</Button>
        <Button btnType='Success' clicked={props.purchaseContinued}>CONTINUE</Button>
      </Aux>
  )
}

export default orderSummary;