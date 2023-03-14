import { SET_LOADING, SET_USERS } from "../types"
const reducerfunction=(state,action)=>{
    switch(action.type){
        case SET_USERS:
            return{
                ...state,
                users:action.payload,
                loading:false
            }
            case SET_LOADING:
                return{
                    ...state,
                    loading:true
                }
    }

}

export default reducerfunction