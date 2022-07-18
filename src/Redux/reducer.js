import { ADD_COUNTER, SUB_COUNTER } from "./type"

const init={
    counter:1
}
const reducer=( state=init , {type,payload} )=>{
    console.log(state,type,payload)
        switch(type){
            case ADD_COUNTER:
                return{
                    ...state,
                    counter: state.counter + payload
                };
            case SUB_COUNTER:
                return{
                    ...state,
                    counter: state.counter - payload
                };
            default:
                return state
        }
}

export { reducer };