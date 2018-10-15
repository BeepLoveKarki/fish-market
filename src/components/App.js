import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from'./Inventory';
import Fish from './Fish';
import fishes  from '../sample-fishes';
//import base from '../base';

class App extends React.Component{

    constructor(){
        super();
        this.addFish=this.addFish.bind(this);
        this.loadFish=this.loadFish.bind(this);
        this.addToOrder=this.addToOrder.bind(this);
        this.state={
            fishes:{},
            order:{}
        };
    }

    loadFish(){
        this.setState({
          fishes:fishes
        });
    }

    addFish(fish){
        const fishes={...this.state.fishes};
        const tstamp=Date.now();
        fishes[`fish-${tstamp}`]=fish;
        this.setState({fishes});
    }

    addToOrder(key){
        const order={...this.state.order};
        order[key]=order[key]+1 || 1;
        this.setState({order});
    }

    /*componentWillMount(){
        const sid=this.props.match.params.storeId;
        this.ref=base.syncState(`${sid}/fishes`,{
           context:this,
           state:'fishes'
        });
    }

    componentWillUnmount(){
        base.removeBinding(this.ref);
    }*/

    render(){
        return (
            <div className="catch-of-the-day">
              <div className="menu">
                 <Header tagline="Fresh Seafood Market"/>
                 <ul className="list-of-fishes">
                   {
                       Object.keys(this.state.fishes).map(key=> 
                       <Fish key={key} index={key} addToOrder={this.addToOrder} details={this.state.fishes[key]}/>)
                   }
                 </ul>
              </div>
               <Order fishes={this.state.fishes} order={this.state.order}/>
               <Inventory loadFish={this.loadFish} addFish={this.addFish}/>
            </div>
        )
    }
}

export default App;