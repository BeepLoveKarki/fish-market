import {EventEmitter} from "events";
import {fishes,fishes1} from "./sample-fishes";
import dispatcher from "../dispatcher";

class FishStore extends EventEmitter{
  fishes=fishes;
  fishes1=fishes1;
  
  getAll(){
      return this.fishes;
  }
  getAll1(){
    return this.fishes1;
  }

  createFish(name,image,desc,price,status){
     const tstamp=Date.now();
     const key1=`fish-${tstamp}`;
     this.fishes[key1]={
           name,
           image,
           desc,
           price,
           status
     };
     this.emit("create");
  }

  updateFish(name,image,desc,price,status,key){
    this.fishes[key]={
           name,
           image,
           desc,
           price,
           status
    };
    this.sortjson();
    this.emit("update");
  }

  deleteFish(key){
    this.fishes[key]=null;
    delete this.fishes[key];
    this.emit("delete");
  }

  handleAction=(action)=>{
    switch (action.type){
      case "CREATE_FISH":
        this.createFish(action.name,action.image,action.desc,action.price,action.status);   
      break;
      case "UPDATE_FISH":
        this.updateFish(action.name,action.image,action.desc,action.price,action.status,action.key);   
      break;
      case "DELETE_FISH":
        this.deleteFish(action.key);   
      break;
      default:
      break;
    }
  };

  sortjson(){
    const data={};
    Object.keys(this.fishes).sort().forEach((key)=>{
       data[key]=this.fishes[key];
    });
    this.fishes={...data};
  }
}

const fishStore=new FishStore();
dispatcher.register(fishStore.handleAction);
//window.dispatcher=dispatcher;

export default fishStore;