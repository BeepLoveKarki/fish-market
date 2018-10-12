import React from 'react';
import {getFunName} from '../helpers';

class StorePicker extends React.Component{

  gotoStore(e){
    e.preventDefault();
    let storeId=this.storeInput.value;
    //this.context.router.transitionTo(`/store/${storeId}`);
    this.props.history.push(`/store/${storeId}`);
  }

  render(){
     return (
       <form className="store-selector" onSubmit={this.gotoStore.bind(this)}>
         {/*Hello*/}
         <h2>Please enter a store</h2>
         <input type="text" required placeholder="Enter store name" 
         defaultValue={getFunName()} ref={(input)=>{this.storeInput=input}}/>
         <button type="submit">Visit Store -></button>
       </form>
     )
  }
}


export default StorePicker;