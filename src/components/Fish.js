import React from 'react';
import propTypes from 'prop-types';
import {formatPrice} from '../helpers';
import fishes from '../sample-fishes';

class Fish extends React.Component{
    render(){
        const {details}=this.props;
        const isAvailable=details.status==='available';
        const buttonText=isAvailable?'Add To Order':'Sold Out!';
        return (
            <li className="menu-fish">
              <img src={details.image} alt={details.name}/>
              <h3 className="fish-name">
                 {details.name}
                 <span className="price">{formatPrice(details.price)}</span>
              </h3>
              <p>{details.desc}</p>
              <button onClick={()=>{this.props.addToOrder(this.props.index)}} disabled={!isAvailable}>{buttonText}</button>
            </li>
        )
    }
}

fishes.propTypes={
    addToOrder:propTypes.func.isRequired,
    index:propTypes.string.isRequired
}

export default Fish;