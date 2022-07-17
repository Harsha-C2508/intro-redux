import {reducer} from './reducer'
import { createStore } from 'react-redux'
const fn = (currentState,action) =>{
    if(action.type == "INCREMENT_AMOUNT"){
        return{
            ...currentState,
            count: currentState.count+1
        }
    }
    else if(action.type == "DECREMENT_AMOUNT"){
        return{
            ...currentState,
            count: currentState.count-1
        }
    }
    else{
        return currentState
    }
}

class Store{
    #state;
    #updater
    #listenerCallback
    constructor(initState,updaterFn){
        this.#state = initState
        this.#updater = updaterFn;
    }
    getState(){
        return this.#state;
    }
    get state(){
        return this.#state;
    }
    dispatch(action){
        const currentState = this.#state
        const newState = this.#updater(this.#state,action)
        this.#state = newState;
        if(currentState === newState){
            return
        }
        else{
            if(this.#listenerCallback)
              this.#listenerCallback()
        }
    }
    subscribe(callback){
        this.#listenerCallback = callback
    }
}
export const store = createStore(reducer,{count:1})
new Store( {count:1}, fn)
store.subscribe(()=>{
    console.log("Store has get updated")
    console.log(store.state)
})
console.log(store.getState());
console.log(store.state)

store.dispatch({ type:"INCREMENT_AMOUNT"})
console.log(store.state)
store.dispatch({ type:"DECREMENT_AMOUNT"})
console.log(store.state)
