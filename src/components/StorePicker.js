import React from 'react';
import {getFunName} from '../helpers';

class StorePicker extends React.Component{
  render(){
     return (
       <form className="store-selector">
         {/*Hello*/}
         <h2>Please enter a store</h2>
         <input type="text" required placeholder="Enter store name" defaultValue={getFunName()}/>
         <button type="submit">Visit Store -></button>
       </form>
     )
  }
}

export default StorePicker;