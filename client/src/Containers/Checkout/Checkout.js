import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";
import CheckoutSummary from "../../Components/Order/CheckoutSummary/CheckoutSummary";
import { connect } from "react-redux";
import ContactData from "./ContactData/ContactData";
import * as actions from '../../store/actions'

class Checkout extends Component {
  
  checkoutContinuedHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  checkoutCancelledHandler = () => {
    this.props.history.replace('/');
  }
  render() {
    let summary = <Redirect to="/" />;
    if (this.props.ings) {
      const purchasedRedirect =  this.props.purchased ? <Redirect to='/' /> :
      summary = (
        <div>
          <CheckoutSummary
            ingredients={this.props.ings}
            checkoutCancelled={this.checkoutCancelledHandler}
            checkoutContinued={this.checkoutContinuedHandler}
          />
          <Route
            path={`${this.props.match.url}/contact-data`}
            component={ContactData}
          />
        </div>
      );
    }
    return (
      summary
    );
  }
}

const mapStateToProps = state => {
  return {
    ings: state.burgerBuilder.ingredients,
    purchased: state.order.purchased
  };
};

export default connect(mapStateToProps)(Checkout);
