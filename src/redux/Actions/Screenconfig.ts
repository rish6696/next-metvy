import { ActionTypes } from './types'


export interface SetWidthAction {
    type : ActionTypes.SET_WIDTH,
    payload : { width:number,height ?:number }
}

export const setWidth = ( width:number ):SetWidthAction=>{
    return { type: ActionTypes.SET_WIDTH ,payload:{ width } }
}

