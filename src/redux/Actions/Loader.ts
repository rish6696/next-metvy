import apiConfig from '../../api-services/apiConfig';
import { ActionTypes } from './types';
import { Dispatch } from 'redux';
import { AxiosError } from 'axios';


export interface SET_LOADER_STATUS_ENROLL_SCREEN {
    type: ActionTypes.SET_LOADER_STATUS_ENROLL_SCREEN;
    payload: boolean;
}




