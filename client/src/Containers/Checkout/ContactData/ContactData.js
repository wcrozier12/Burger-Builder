import React, { Component } from 'react';
import axios from '../../../axios-orders';
import './ContactData.css';
import Button from '../../../Components/UI/Button/Button';
import Spinner from '../../../Components/UI/Spinner/Spinner';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      postalCode: ''
    },
    loading: false
  }

  orderHandler = (event) => {
    event.preventDefault();
    this.setState({loading: true})
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: 'Cody Crozier',
        address: {
          street: 'testStreet',
          zipCode: '11122',
          country: 'USA'
        },
        email:'test@test.com'
      },
      deliveryMethod: 'fastest'
    }
    axios.post('/orders.json', order)
    .then(response => {
      this.setState({loading: false})
      this.props.history.push('/')
    }) 
    .catch(error => this.setState({loading: false}))
  }
  render() {
    let form = (<form>
          <input className='Input' type='text' name='name' placeholder='Your name' />
          <input className='Input' type='email' name='email' placeholder='Your email' />
          <input className='Input' type='text' name='street' placeholder='Street' />
          <input className='Input' type='text' name='postalCode' placeholder='Postal Code' />
          <Button btnType='Success' clicked={this.orderHandler}> ORDER </Button>
        </form>);
    if (this.state.loading) {
      form = <Spinner />
    }
    return(
      <div className='ContactData'>
        <h4>Enter your contact data</h4>
        {form}
      </div>
    )
  }
}

export default ContactData;