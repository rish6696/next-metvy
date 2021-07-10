import {
    GetCoursesAction,
    AddOrRemoveCourseToBuyAction,
    SELECT_MONTH,
    SET_SELECT_MONTH_ERROR,
    SetMinimumOneCourseError,
    SET_SERVER_DOWN,
    GET_INVOICE,
    SET_GET_INVOICE_ERROR,
    PAY_COURSE_ACTION,GET_DISCOUNT_COUPONS_ACTION,ApplyDiscountCodeAction,SET_MODAL_ACTION
} from './Courses';

import { SET_LOADER_STATUS_ENROLL_SCREEN } from './Loader';

import { SetWidthAction } from '../Actions/Screenconfig';

export enum ActionTypes {
    SET_WIDTH,
    GET_COURSES,
    ADD_OR_REMOVE_COURSE_TO_BUY,
    SELECT_MONTH,
    SET_SELECT_COURSE_ERROR,
    SET_MINIMUM_ONE_COURSE_ERROR,
    SET_SERVER_DOWN,
    GET_INVOICE,
    SET_LOADER_STATUS_ENROLL_SCREEN,
    SET_GET_INVOICE_ERROR,
    PAY_COURSE,GET_DISCOUNT_COUPONS,APPLY_DISCOUNT_CODE,SET_MODAL_STATE
}

export type Action =
    | GetCoursesAction
    | SetWidthAction
    | AddOrRemoveCourseToBuyAction
    | SELECT_MONTH
    | SET_SELECT_MONTH_ERROR
    | SetMinimumOneCourseError
    | SET_SERVER_DOWN
    | SET_LOADER_STATUS_ENROLL_SCREEN
    | GET_INVOICE
    | SET_GET_INVOICE_ERROR
    |PAY_COURSE_ACTION
    |GET_DISCOUNT_COUPONS_ACTION
    |ApplyDiscountCodeAction
    | SET_MODAL_ACTION
;
