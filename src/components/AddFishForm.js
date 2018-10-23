import React from 'react';
import propTypes from 'prop-types';

class AddFishForm extends React.Component{

    createFish(e){
        e.preventDefault();
        const fish={
            name:this.name.value,
            price:this.price.value,
            status:this.status.value,
            desc:this.desc.value,
            url:this.url.value
        };
        this.props.addFish(fish);
        this.fishform.reset();
    }

    render(){
        return (
            <form ref={(input)=>{this.fishform=input}} className="fish-edit" onSubmit={this.createFish.bind(this)}>
               <input ref={(input)=>{this.name=input}} type="text" placeholder="Fish Name" required/>
               <input ref={(input)=>{this.price=input}} type="number" placeholder="Fish Price" required/>
               <select ref={(input)=>{this.status=input}} required>
                   <option value="available">Fresh</option>
                   <option value="unavailable">Sold Out</option>
               </select>
               <textarea ref={(input)=>{this.desc=input}} placeholder="Fish Description" required/>
               <input type="text" ref={(input)=>{this.url=input}} placeholder="Image URL" required/>
               <button type="submit">+ Add</button>
            </form>
        )
    }
    static propTypes={
        addFish:propTypes.func.isRequired
    }
}

export default AddFishForm;