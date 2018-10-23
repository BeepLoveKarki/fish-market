import React from 'react';
import propTypes from 'prop-types';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import {formatPrice} from '../helpers';

class Order extends React.Component{

    renderOrder=(key)=>{
        const fish=this.props.fishes[key];
        const count=this.props.order[key];
        const rbutton=<button onClick={()=>{this.props.removeFromOrder(key)}}>&times;</button>
        if(!fish || fish.status==='unavailable'){
            return (
                <li key={key}>
                 Sorry, {fish?fish.name:'Fish'} is no longer available
                 {rbutton}
                </li>
            )
        };

        return (
            <li key={key}>
              <span>
                <CSSTransitionGroup
                 className="count"
                 transitionName="count"
                 transitionEnterTimeout={250}
                 transitionLeaveTimeout={250}
                >
                <span key={count}>
                  {count}
                </span>
                </CSSTransitionGroup>
                lbs {fish.name}
              </span>
              <span className="price">{formatPrice(count*fish.price)}</span>
              {rbutton}
            </li>
        )

    }

    render(){
        const orderIds=Object.keys(this.props.order);
        const total=orderIds.reduce((prevTotal,key)=>{
             const fish=this.props.fishes[key];
             const count=this.props.order[key];
             const isAvailable=fish && fish.status==='available';
             if(isAvailable){
                  return prevTotal+(count*fish.price||0);
             }
             return prevTotal;
        },0);
    return(
        <div className="order-wrap">
          <h2>Your Order</h2>
         <CSSTransitionGroup 
           className="order" 
           component="ul"
           transitionName="order"
           transitionEnterTimeout={500}
           transitionLeaveTimeout={500}
        >  
             {orderIds.map(this.renderOrder)}
              <li className="total">
                <strong>Total:</strong>
               {formatPrice(total)}
              </li>
         </CSSTransitionGroup>
        </div>
     )
    }
    
    static propTypes={
        fishes:propTypes.object.isRequired,
        order:propTypes.object.isRequired,
        removeFromOrder:propTypes.func.isRequired
    }

}

export default Order;