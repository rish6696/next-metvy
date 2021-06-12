import { combineReducers } from 'redux';
import { ScreenConfig } from './screenConfig';
import { courses } from './CoursesData';
import { CourseReducerState } from '../reducers/CoursesData';
import { ScreenConfigState } from '../reducers/screenConfig';
import { ServerErrorReducer, serverErrorReducer } from './ServerError';
import { loaderStatus, LoaderStatus } from './Loader';

export interface StoreStateInterface {
    screenConfig: ScreenConfigState;
    courses: CourseReducerState;
    serverDownError: ServerErrorReducer;
    loaderShow: LoaderStatus;
}

const reducers = combineReducers<StoreStateInterface>({
    screenConfig: ScreenConfig,
    courses,
    serverDownError: serverErrorReducer,
    loaderShow: loaderStatus
});

export default reducers;
