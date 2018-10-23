import React from 'react';
import Header from './Header';
import Order from './Order';
import Inventory from'./Inventory';
import Fish from './Fish';
import fishStore from '../stores/fishStore';
import {createFish,editFish,deleteFish} from '../actions/fishActions';
//import base from '../base';

class App extends React.Component{
    
    state={
        fishes:{},
        order:{}
    };

    loadFish=()=>{
        this.setState({
          fishes:fishStore.getAll(this.props.match.params.storeId)
        });
    };

    loadFish1=()=>{
        this.setState({
            fishes:fishStore.getAll1()
        });
    }

    addToOrder=(key)=>{
        const order={...this.state.order};
        order[key]=order[key]+1 || 1;
        this.setState({order});
    };

    removeFromOrder=(key)=>{
        const order={...this.state.order};
        order[key]=null;
        delete order[key];
        this.setState({order});
    };

    componentWillMount(){
        fishStore.on("create",this.getnow);
        fishStore.on("update",this.getnow);
        fishStore.on("delete",this.getnow);
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

    componentWillUnmount(){
        fishStore.removeAllListeners();
    }

    getnow=()=>{
        const sid=this.props.match.params.storeId;
        this.setState({fishes:fishStore.getAll()});
        localStorage.setItem(`fish-${sid}`,JSON.stringify(fishStore.getAll()));
    };


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
               <Inventory fishes={this.state.fishes} deleteFish={deleteFish} updateFish={editFish} loadFish={this.loadFish1} addFish={createFish}/>
            </div>
        )
    }
}

export default App;