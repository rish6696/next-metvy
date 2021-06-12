import { ActionTypes,Action }  from '../Actions/types'


const defaultState={
    error :false
}


export interface ServerErrorReducer {
    error : boolean
}

export const serverErrorReducer =(state=defaultState,action:Action)=>{
    switch (action.type) {
        case  ActionTypes.SET_SERVER_DOWN :
            return { ...state, error:true }
        default:
            return state
    }
}