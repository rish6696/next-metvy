import { Course, Invoice } from '../Actions/Courses';
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
    invoiceError : string;
    paymentLink: string
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
            invoiceCourses: []
        },
        invoiceError : '',
        paymentLink:''
    },
    action: Action
) : CourseReducerState => {
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
                minimumOneCourseError: ''
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
                invoiceData :action.payload
            }

        case ActionTypes.SET_GET_INVOICE_ERROR:
            return{
                ...state,
                invoiceError : action.payload
            }

        case ActionTypes.PAY_COURSE:
            return {
                ...state,
                paymentLink: action.payload
            }
        default:
            return state;
    }
};
