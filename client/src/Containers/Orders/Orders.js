import React, { Component } from 'react';
import axios from '../../axios-orders';
import Order from '../../Components/Order/Order';
import withErrorHandler from '../../HOCs/withErrorHandler/withErrorHandler';
class Orders extends Component {

  state = {
    orders: [],
    loading: true
  }
  componentDidMount() {
    axios.get('/orders.json')
      .then(res => {
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({
            ...res.data[key],
            id: key
          })
        }
        this.setState({loading: false, orders: fetchedOrders})
      })
      .catch(err => {
        loading: false
      })
  }
  render() {
    return (
      <div>
          {this.state.orders.map((order) => {
            return <Order key={order.id} 
                          ingredients={order.ingredients} 
                          price={+order.price} />
          })}
      </div>
    )
  }
}

export default withErrorHandler(Orders, axios);