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
        this.updateFish=this.updateFish.bind(this);
        this.deleteFish=this.deleteFish.bind(this);
        this.addToOrder=this.addToOrder.bind(this);
        this.removeFromOrder=this.removeFromOrder.bind(this);
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

    updateFish(key,ufish){
        const fishes={...this.state.fishes};
        fishes[key]=ufish;
        this.setState({fishes});
    }

    deleteFish(key){
        const fishes={...this.state.fishes};
        fishes[key]=null;
        delete fishes[key];
        this.setState({fishes});
    }

    addToOrder(key){
        const order={...this.state.order};
        order[key]=order[key]+1 || 1;
        this.setState({order});
    }

    removeFromOrder(key){
        const order={...this.state.order};
        order[key]=null;
        delete order[key];
        this.setState({order});
    }

    componentWillMount(){
        const sid=this.props.match.params.storeId;
        const lref=localStorage.getItem(`order-${sid}`);
        const fref=localStorage.getItem(`fish-${sid}`);
        if(fref){
            this.setState({
              fishes:JSON.parse(fref)
            });
        }
        if(lref){
            this.setState({
              order:JSON.parse(lref)
            });
        }
    }

    /*componentWillUnmount(){
        localStorage.clear();
    }*/

    componentWillUpdate(nextProps,nextState){
        const sid=this.props.match.params.storeId;
        localStorage.setItem(`order-${sid}`,JSON.stringify(nextState.order));
        localStorage.setItem(`fish-${sid}`,JSON.stringify(nextState.fishes));
    }

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
               <Order fishes={this.state.fishes} removeFromOrder={this.removeFromOrder} order={this.state.order}/>
               <Inventory fishes={this.state.fishes} deleteFish={this.deleteFish} updateFish={this.updateFish} loadFish={this.loadFish} addFish={this.addFish}/>
            </div>
        )
    }
}

export default App;