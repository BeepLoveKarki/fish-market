import dispatcher from "../dispatcher";

export function createFish(fish){
    dispatcher.dispatch({type:"CREATE_FISH",name:fish.name,image:fish.url,desc:fish.desc,price:fish.price,status:fish.status});
}

export function editFish(key,ufish){
    dispatcher.dispatch({type:"UPDATE_FISH",name:ufish.name,image:ufish.image,desc:ufish.desc,price:ufish.price,status:ufish.status,key:key});
}

export function deleteFish(key){
    dispatcher.dispatch({type:"DELETE_FISH",key:key});
}