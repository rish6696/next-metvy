import { combineReducers } from 'redux';
import { ScreenConfig } from './screenConfig';
import { CourseReducerState,DiscountCouponReducerState,discountCodeReducer,courses,discountModalReducer,DiscountModalReducerState } from '../reducers/CoursesData';
import { ScreenConfigState } from '../reducers/screenConfig';
import { ServerErrorReducer, serverErrorReducer } from './ServerError';
import { loaderStatus, LoaderStatus } from './Loader';

export interface StoreStateInterface {
    screenConfig: ScreenConfigState;
    courses: CourseReducerState;
    serverDownError: ServerErrorReducer;
    loaderShow: LoaderStatus;
    discountCouponData : DiscountCouponReducerState,
    discountModal : DiscountModalReducerState
}

const reducers = combineReducers<StoreStateInterface>({
    screenConfig: ScreenConfig,
    courses,
    serverDownError: serverErrorReducer,
    loaderShow: loaderStatus,
    discountCouponData : discountCodeReducer,
    discountModal : discountModalReducer
});

export default reducers;
