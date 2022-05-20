import apiConfig from '../../api-services/apiConfig';
import { ActionTypes } from './types';
import { Dispatch } from 'redux';
import { AxiosError } from 'axios';
import { SET_LOADER_STATUS_ENROLL_SCREEN } from './Loader';

export interface Course {
    _id: string;
    coursePrice: number;
    programName: string;
    bgColor: string;
    style?: { marginTop: string };
    availableMonths: number[];
}

type InvoiceObject = {
    courseName: string;
    month: number;
    price: number;
};

export interface Invoice {
    invoiceCourses: InvoiceObject[];
    subTotal: number;
    disCountAmount: number;
    checkoutAmount: number;
    discountCoupon: string;
    percentageDiscount: number;
    gstAmount :  number;
}

export interface DiscountCoupons {
    _id: string;
    code: string;
    percentDiscount: number;
    isActive: boolean;
    numberOfCourses: number;
}

export interface SetMinimumOneCourseError {
    type: ActionTypes.SET_MINIMUM_ONE_COURSE_ERROR;
    payload: string;
}

export interface GetCoursesAction {
    type: ActionTypes.GET_COURSES;
    payload: Course[];
}

export interface SET_SELECT_MONTH_ERROR {
    type: ActionTypes.SET_SELECT_COURSE_ERROR;
    payload: string;
}

export interface AddOrRemoveCourseToBuyAction {
    type: ActionTypes.ADD_OR_REMOVE_COURSE_TO_BUY;
    payload: string; // course id
}

export interface SELECT_MONTH {
    type: ActionTypes.SELECT_MONTH;
    payload: { month: number; courseId: string }; // course id
}

export interface SET_SERVER_DOWN {
    type: ActionTypes.SET_SERVER_DOWN;
}

export interface GET_INVOICE {
    type: ActionTypes.GET_INVOICE;
    payload: Invoice;
}

export interface GET_DISCOUNT_COUPONS_ACTION {
    type: ActionTypes.GET_DISCOUNT_COUPONS;
    payload: DiscountCoupons[];
}

export const setMinimumOneCourseError = (erMsg:string) => {
    return {
        type: ActionTypes.SET_MINIMUM_ONE_COURSE_ERROR,
        payload: erMsg
    };
};

export interface APPLY_DISCOUNT_CODE_ACTION_PAYLOAD {
    selectedDiscountCodeId: string;
    selectedDiscountCodePercent: number;
    selectedDiscountCodeText: string;
}

export interface ApplyDiscountCodeAction {
    type: ActionTypes.APPLY_DISCOUNT_CODE;
    payload: APPLY_DISCOUNT_CODE_ACTION_PAYLOAD;
}

export const applyDiscountCode = (
    applyDiscountCodePayload: APPLY_DISCOUNT_CODE_ACTION_PAYLOAD
): ApplyDiscountCodeAction => {
    return {
        type: ActionTypes.APPLY_DISCOUNT_CODE,
        payload: applyDiscountCodePayload
    };
};


export interface SET_MODAL_ACTION {
    type: ActionTypes.SET_MODAL_STATE,
    payload : boolean 
}


export const setModalAction =(modalState:boolean):SET_MODAL_ACTION=>{
  return {
      type:ActionTypes.SET_MODAL_STATE, payload : modalState
  }
}



export const addOrRemoveCourseToBuy = (course_id: string) => {
    return { type: ActionTypes.ADD_OR_REMOVE_COURSE_TO_BUY, payload: course_id };
};

export interface SET_GET_INVOICE_ERROR {
    type: ActionTypes.SET_GET_INVOICE_ERROR;
    payload: string;
}

export const setGetInvoiceError = (errorMessage: string): SET_GET_INVOICE_ERROR => {
    return { type: ActionTypes.SET_GET_INVOICE_ERROR, payload: errorMessage };
};

export const setSelectMonthError = (courseId: string) => {
    return { type: ActionTypes.SET_SELECT_COURSE_ERROR, payload: courseId };
};

export const selectMonth = (month: number, courseId: string) => {
    return { type: ActionTypes.SELECT_MONTH, payload: { month, courseId } };
};

export interface Cart_Items {
    discountCouponID: string;
    courses: { month: number; courseId: string }[];
    editableDiscountCoupon: string;
}

export const getInvoice = (cartItems: Cart_Items) => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch<SET_LOADER_STATUS_ENROLL_SCREEN>({
                type: ActionTypes.SET_LOADER_STATUS_ENROLL_SCREEN,
                payload: true
            });

            const { data } = await apiConfig.post<Invoice>('/api/learn/get-invoice', cartItems);
            dispatch<GET_INVOICE>({ type: ActionTypes.GET_INVOICE, payload: data });
        } catch (error) {
            dispatch<SET_LOADER_STATUS_ENROLL_SCREEN>({
                type: ActionTypes.SET_LOADER_STATUS_ENROLL_SCREEN,
                payload: false
            });

            if (error && error.response) {
                dispatch<SET_GET_INVOICE_ERROR>({
                    type: ActionTypes.SET_GET_INVOICE_ERROR,
                    payload: error.response.data.message
                });
                return;
            }
            dispatch<SET_SERVER_DOWN>({ type: ActionTypes.SET_SERVER_DOWN });
        }
    };
};

export const getDiscountCoupons = () => {
    return async (dispatch: Dispatch) => {
        try {
            const { data } = await apiConfig.get<DiscountCoupons[]>('/api/learn/discount-codes');
            dispatch<GET_DISCOUNT_COUPONS_ACTION>({
                type: ActionTypes.GET_DISCOUNT_COUPONS,
                payload: data
            });
        } catch (error) {
            if (error && error.response) {
                dispatch<SET_GET_INVOICE_ERROR>({
                    type: ActionTypes.SET_GET_INVOICE_ERROR,
                    payload: error.response.data.message
                });
            }
            dispatch<SET_SERVER_DOWN>({ type: ActionTypes.SET_SERVER_DOWN });
        }
    };
};

export const getCourses = () => {
    return async (dispatch: Dispatch) => {
        try {
            const { data } = await apiConfig.get<Course[]>('/api/learn/get-courses');
            dispatch<GetCoursesAction>({ type: ActionTypes.GET_COURSES, payload: data });
        } catch (error) {
            if (error && error.data) {
            } else {
                dispatch<SET_SERVER_DOWN>({ type: ActionTypes.SET_SERVER_DOWN });
            }
        }
    };
};

export interface PAY_COURSE_API_REQUEST_CONTRACT {
    name: string;
    email: string;
    phone: string;
    school: string;
    stream: string;
    discountCouponID: string;
    courses: { month: number; courseId: string }[];
    editableDiscountCoupon :string
    state : string
}

export interface PAY_COURSE_API_RESPONSE_CONTRACT {
    paymentLink: string;
}

export interface PAY_COURSE_ACTION {
    type: ActionTypes.PAY_COURSE;
    payload: string;
}

export const payCourse = (payCourseData: PAY_COURSE_API_REQUEST_CONTRACT) => {
    return async (dispatch: Dispatch) => {
        try {
            dispatch<SET_LOADER_STATUS_ENROLL_SCREEN>({
                type: ActionTypes.SET_LOADER_STATUS_ENROLL_SCREEN,
                payload: true
            });

            const { data } = await apiConfig.post<PAY_COURSE_API_RESPONSE_CONTRACT>(
                '/api/learn/pay',
                payCourseData
            );


            window.location.href = data.paymentLink;
            dispatch<PAY_COURSE_ACTION>({
                type: ActionTypes.PAY_COURSE,
                payload: data.paymentLink
            });
        } catch (error) {
            console.log(error);
            
            if (error && error.response) {
                dispatch<SET_GET_INVOICE_ERROR>({
                    type: ActionTypes.SET_GET_INVOICE_ERROR,
                    payload: error.response.data.message
                });
            }
            dispatch<SET_SERVER_DOWN>({ type: ActionTypes.SET_SERVER_DOWN });
        }
    };
};
