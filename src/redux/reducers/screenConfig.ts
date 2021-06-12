import { ActionTypes }  from '../Actions/types'


const defaultState={
    height : -1,
    width : -1
}


export interface ScreenConfigState {
    height:number,
    width:number
}

export const ScreenConfig =(state=defaultState,action)=>{

    switch (action.type) {
        case  ActionTypes.SET_WIDTH :
            return { ...state,width: action.payload.width }
        default:
            return state
    }
}