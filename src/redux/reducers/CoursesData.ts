import { Course, DiscountCoupons, Invoice } from '../Actions/Courses';
import { ActionTypes, Action } from '../Actions/types';

export interface CourseSelectionStatus {
    [name: string]: {
        availableMonths: number[];
        selectMonth: number;
        courseSelected: boolean;
        showError: boolean;
    };
}

export interface CourseReducerState {
    courseData: Course[];
    courseSelectionStatus: CourseSelectionStatus;
    selectBatchError: string;
    minimumOneCourseError: string;
    invoiceData: Invoice;
    invoiceError: string;
    paymentLink: string;
}

export interface DiscountCouponReducerState {
    discountCodes: DiscountCoupons[];
    selectedDiscountCodeId: string;
    selectedDiscountCodeText: string;
    selectedDiscountCodePercent: number;
}

export const courses = (
    state: CourseReducerState = {
        courseData: [],
        courseSelectionStatus: {},
        selectBatchError: '',
        minimumOneCourseError: '',
        invoiceData: {
            checkoutAmount: -1,
            disCountAmount: -1,
            subTotal: -1,
            invoiceCourses: [],
            discountCoupon: '',
            percentageDiscount: -1,
            gstAmount: -1,
        },
        invoiceError: '',
        paymentLink: ''
    },
    action: Action
): CourseReducerState => {
    switch (action.type) {
        case ActionTypes.GET_COURSES:
            let courseSelectionStatusRef: CourseSelectionStatus = {};

            action.payload.forEach((course) => {
                courseSelectionStatusRef[course._id] = {
                    availableMonths: course.availableMonths,
                    selectMonth: -1,
                    courseSelected: false,
                    showError: false
                };
            });

            return {
                ...state,
                courseData: action.payload,
                courseSelectionStatus: { ...courseSelectionStatusRef }
            };

        case ActionTypes.ADD_OR_REMOVE_COURSE_TO_BUY:
            let temp = {};
            temp[action.payload] = {
                ...state.courseSelectionStatus[action.payload],
                courseSelected: !state.courseSelectionStatus[action.payload].courseSelected,
                showError: false
            };

            return {
                ...state,
                courseSelectionStatus: { ...state.courseSelectionStatus, ...temp },
                selectBatchError: '',
                minimumOneCourseError: '',
                invoiceData: {
                    checkoutAmount: -1,
                    disCountAmount: -1,
                    invoiceCourses: [],
                    discountCoupon: '',
                    percentageDiscount: -1,
                    subTotal: -1,
                    gstAmount:-1
                }
            };

        case ActionTypes.SELECT_MONTH:
            const { courseId, month } = action.payload;

            let tempSelectMonth = {};

            tempSelectMonth[courseId] = {
                ...state.courseSelectionStatus[courseId],
                selectMonth: month,
                showError: false
            };

            return {
                ...state,
                courseSelectionStatus: { ...state.courseSelectionStatus, ...tempSelectMonth }
            };

        case ActionTypes.SET_SELECT_COURSE_ERROR:
            let tempSelectError = {};

            tempSelectError[action.payload] = {
                ...state.courseSelectionStatus[action.payload],
                showError: true
            };

            return {
                ...state,
                courseSelectionStatus: { ...state.courseSelectionStatus, ...tempSelectError }
            };

        case ActionTypes.SET_MINIMUM_ONE_COURSE_ERROR:
            return {
                ...state,
                minimumOneCourseError: action.payload
            };

        case ActionTypes.GET_INVOICE:
            return {
                ...state,
                invoiceData: action.payload
            };

        case ActionTypes.SET_GET_INVOICE_ERROR:
            return {
                ...state,
                invoiceError: action.payload
            };
        
         case  ActionTypes.APPLY_DISCOUNT_CODE:
             return {
                 ...state,
                 invoiceError: ''
             }

        case ActionTypes.PAY_COURSE:
            return {
                ...state,
                paymentLink: action.payload
            };
        case ActionTypes.APPLY_DISCOUNT_CODE:
            return {
                ...state,
                invoiceData: {
                    checkoutAmount: -1,
                    disCountAmount: -1,
                    invoiceCourses: [],
                    discountCoupon: '',
                    percentageDiscount: -1,
                    subTotal: -1, gstAmount: -1
                }
            };
        default:
            return state;
    }
};

export const discountCodeReducer = (
    state: DiscountCouponReducerState = {
        discountCodes: [],
        selectedDiscountCodeId: '',
        selectedDiscountCodePercent: -1,
        selectedDiscountCodeText: ''
    },
    action: Action
): DiscountCouponReducerState => {
    switch (action.type) {
        case ActionTypes.GET_DISCOUNT_COUPONS:
            return { ...state, discountCodes: action.payload };

        case ActionTypes.APPLY_DISCOUNT_CODE:
            return {
                ...state,
                selectedDiscountCodeId: action.payload.selectedDiscountCodeId,
                selectedDiscountCodePercent: action.payload.selectedDiscountCodePercent,
                selectedDiscountCodeText: action.payload.selectedDiscountCodeText
            };

        case ActionTypes.ADD_OR_REMOVE_COURSE_TO_BUY:
            return {
                ...state,
                selectedDiscountCodeId: '',
                selectedDiscountCodePercent: -1,
                selectedDiscountCodeText: ''
            };

        default:
            return state;
    }
};

export interface DiscountModalReducerState {
    open: boolean;
}

export const discountModalReducer = (
    state: DiscountModalReducerState = { open: false },
    action: Action
): DiscountModalReducerState => {
    switch (action.type) {
        case ActionTypes.SET_MODAL_STATE:
            return { ...state, open: action.payload };

        case ActionTypes.APPLY_DISCOUNT_CODE:
            return { open: false };

        default:
            return state;
    }
};
