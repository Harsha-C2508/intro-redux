import { ADD_COUNTER, SUB_COUNTER } from "./type"

const addcounter = (payload)=>{
    return {
        type: ADD_COUNTER,
        payload
    };
};

const subcounter = (payload)=>{
    return {
        type: SUB_COUNTER,
        payload
    };
};

export {addcounter,subcounter};