import { SET_WIDTH } from '../Actions/types'


const defaultState={
    height : -1,
    width : -1
}


interface Action {
    type : string,
    payload: any
}
  


export const ScreenConfig =(state=defaultState,action:Action)=>{
    switch (action.type) {
        case SET_WIDTH :
            return { ...state,width: action.payload.width }
        default:
            return state
    }
}