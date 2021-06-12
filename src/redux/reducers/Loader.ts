import { ActionTypes,Action }  from '../Actions/types'

const defaultState:LoaderStatus = {
    enrollScreen : true
}


export interface LoaderStatus {
    enrollScreen : boolean
}

export const loaderStatus =(state:LoaderStatus=defaultState,action:Action):LoaderStatus=>{
    switch (action.type) {
        case  ActionTypes.GET_COURSES :
            return { ...state, enrollScreen: false }
        case ActionTypes.SET_SERVER_DOWN : 
           return { ...state,enrollScreen: false }
        case ActionTypes.SET_LOADER_STATUS_ENROLL_SCREEN :
             return {
                 ...state,enrollScreen : action.payload
             }

        case ActionTypes.GET_INVOICE :
            return { ...state,enrollScreen :false }
        default:
            return state
    }
}