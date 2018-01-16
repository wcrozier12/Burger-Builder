import React, { Component } from 'react';
import Aux from '../../../HOCs/Aux/Aux';
import Button from '../../UI/Button/Button';
import '../../UI/Button/Button.css';

class OrderSummary extends Component {
  //this could be a functional component, just made a class for debugging
  componentDidUpdate() {
    console.log('orderSummary will update')
  }
 render() { 
   const ingredientSummary = Object.keys(this.props.ingredients)
      .map(ing => {
        return <li key={ing}><span style={{textTransform: 'capitalize'}}>{ing}</span>: {this.props.ingredients[ing]}</li>
    })
  return (
      <Aux> 
        <h3> Your Order </h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul>
          {ingredientSummary}
        </ul>
        <p><strong> Total Price: ${this.props.price.toFixed(2)}</strong></p>
        <p> Continue to checkout? </p>
        <Button btnType='Danger' clicked={this.props.purchaseCanceled}>CANCEL</Button>
        <Button btnType='Success' clicked={this.props.purchaseContinued}>CONTINUE</Button>
      </Aux>
  )
 }
}

export default OrderSummary;