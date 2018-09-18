import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import {connect} from 'react-redux';
import CheckoutSummary from '../../components/CheckoutSummary/CheckoutSummery'

import ContactData from  './ContactData/ContactData'
class Checkout extends Component {

    // state = {
    //     ingredients:null,
    //     totalprice:0

    // }

// componentWillMount() {
// const query= new URLSearchParams(this.props.location.search);
// const ingredients ={}
// let price = 0;
// for (let param of query.entries()){
// //['salad','1']
// if(param[0] ==='price') {
//     price = param[1];
// }
// else {
//     ingredients[param[0]] = + param[1];
// }


// }
// this.setState({ ingredients:ingredients, totalprice:price})

// }
    checkoutCancleHandler = () => {
 this.props.history.goBack('/');
    }

    CheckoutContinueHandler = () => {
         this.props.history.replace('/Checkout/contact-data')
    }
    render() {
         return(
              <div>
  <CheckoutSummary
  ingredients={this.props.ings}
  checkoutContinue={this.CheckoutContinueHandler}
  checkoutCancle ={this.checkoutCancleHandler}/>

  <Route path={this.props.match.path + '/contact-data'}
//   render = { (props) => (<ContactData ingredients={this.props.ingredients}  price={this.state.totalprice} {...props} />)}
component={ContactData}
  />

              </div>
         )
    }

}
const mapStateToProps = state => {
    return {
         ings:state.ingredients
    }

}

export default connect(mapStateToProps)(Checkout)