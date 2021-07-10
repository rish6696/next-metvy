import React, { useState, createRef, RefObject, useEffect, Ref } from 'react';
import Style from './Enroll.module.css';
import FLexLayout from '../../components/FlexLayout';
import HeaderLearn from '../../components/HeaderLearn/HeaderLearn';
import { Image } from 'react-bootstrap';
import { enrollScreenCourseData, MONTHS } from '../../constants';
import apiConfig from '../../api-services/apiConfig';
import ServerDown from '../../components/ServerDown/ServerDown';
import Loader from '../../components/LoaderComponent/LoaderComponent';
import Scroll from 'react-scroll';
import DiscountModal from '../../components/discountModal/DiscountModal';

import {
    getCourses,
    addOrRemoveCourseToBuy,
    selectMonth,
    setSelectMonthError,
    setMinimumOneCourseError,
    getInvoice,
    Cart_Items,
    Invoice,
    payCourse,
    PAY_COURSE_API_REQUEST_CONTRACT,
    getDiscountCoupons,
    DiscountCoupons,
    setModalAction
} from '../../redux/Actions/Courses';

import { connect } from 'react-redux';
import { StoreStateInterface } from '../../redux/reducers/index';
import { Course } from '../../redux/Actions/Courses';
import { CourseSelectionStatus } from '../../redux/reducers/CoursesData';
import Moment from 'moment';

interface Props {
    getCourses(): any;
    addOrRemoveCourseToBuy(string): any;
    coursesData: Course[];
    courseSelectStatus: CourseSelectionStatus;
    selectMonth: Function;
    setSelectMonthError: Function;
    minimumOneCourseError: string;
    setMinimumOneCourseError: Function;
    isServerDown: boolean;
    showEnrollScreenLoader: boolean;
    getInvoice: (cartItems: Cart_Items) => void;
    invoiceData: Invoice;
    getInvoiceError: string;
    payCourse: (payCourseData: PAY_COURSE_API_REQUEST_CONTRACT) => void;
    getDiscountCoupons: () => void;
    discountCoupons: DiscountCoupons[];
    setModalAction: (modalState: boolean) => void;
    selectedDiscountCouponText: string;
    selectedDiscountCouponId: string;
    selectedDiscountCouponPercent: number;
}

const _EnrollScreen = (props: Props) => {
    const [checked, setChecked] = React.useState(true);

    const {
        getCourses,
        courseSelectStatus,
        coursesData,
        addOrRemoveCourseToBuy,
        selectMonth,
        setSelectMonthError,
        minimumOneCourseError,
        setMinimumOneCourseError,
        isServerDown,
        showEnrollScreenLoader,
        getInvoice,
        invoiceData,
        getInvoiceError,
        payCourse,
        getDiscountCoupons,
        discountCoupons,
        setModalAction,
        selectedDiscountCouponText,
        selectedDiscountCouponId,
        selectedDiscountCouponPercent
    } = props;

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    const [selectBatchError, setSelectBatchError] = useState('');

    

    const [discountCode, setDiscountCode] = useState('');
    const [discountCodeError, setDiscountCodeError] = useState('**Invalid Discount code');

    const [name, setName] = useState('');
    const [nameError, setNameError] = useState('');

    const nameRef: RefObject<HTMLInputElement> = createRef();
    const emailRef: RefObject<HTMLInputElement> = createRef();
    const phoneRef: RefObject<HTMLInputElement> = createRef();
    const schoolRef: RefObject<HTMLInputElement> = createRef();
    const streamRef: RefObject<HTMLInputElement> = createRef();

    const invoiceDataContainerRef: Ref<HTMLDivElement> = createRef();

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const onEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (emailError.length != 0) setEmailError('');
        setEmail(event.target.value);
    };

    const onNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (nameError.length != 0) setNameError('');
        setName(event.target.value);
    };

    const [mobile, setMobile] = useState('');
    const [mobileError, setMobileError] = useState('');

    const onMobileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (mobileError.length != 0) setMobileError('');
        setMobile(event.target.value);
    };

    const [school, setSchool] = useState('');
    const [schoolError, setSchoolError] = useState('');

    const onSchoolChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (schoolError.length != 0) setSchoolError('');
        setSchool(event.target.value);
    };

    const [stream, setStream] = useState('');
    const [streamError, setStreamError] = useState('');

    useEffect(() => {
        getCourses();
        getDiscountCoupons();
    }, []);

    useEffect(() => {
        if (invoiceData && invoiceData.invoiceCourses.length > 0) {
            const scroll = Scroll.animateScroll;
            scroll.scrollToBottom();
        }
    }, [invoiceData]);

    const onStreamChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (streamError.length != 0) setStreamError('');
        setStream(event.target.value);
    };

    const onDisCountCodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDiscountCode(event.target.value);
    };

    const onProgramValueChange = (courseId) => {
        return () => {
            addOrRemoveCourseToBuy(courseId);
        };
    };

    const onMonthSelected = (event) => {
        const { courseId } = JSON.parse(event.currentTarget.dataset.info);
        const month = event.target.value;
        selectMonth(parseInt(month), courseId);
    };

    const getCourseMonthInfo = (monthNumber) => {
        const date = Moment();
        date.set('M', monthNumber - 1);
        return `${date.startOf('M').get('D')}st ${date.format('MMMM YYYY')} - ${date
            .endOf('M')
            .get('D')}th ${date.format('MMMM YYYY')}`;
    };


    const getTextForDiscountCodeButton =():string=>{
       if(selectedDiscountCouponPercent==-1) return "Use Discount Coupon"
       return `Applied ${selectedDiscountCouponText} for ${selectedDiscountCouponPercent}% off` 
    }

    const onConfirmButtonClicked = () => {
        //  check if the name is empty or not
        if (name.length == 0) {
            setNameError('**Name cannot be empty');
            nameRef.current.focus();
            return;
        }

        // check if the email is empty or not
        if (email.length == 0) {
            setEmailError('**Email cannot be empty');
            emailRef.current.focus();
            return;
        }

        // check if email is valid or not
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (regexEmail.test(email) === false) {
            setEmailError('**Invalid Email Address');
            emailRef.current.focus();
            return;
        }

        // check if the mobile is empty or not
        if (mobile.length == 0) {
            setMobileError('**Mobile cannot be empty');
            phoneRef.current.focus();
            return;
        }

        // check if the school is empty or not
        if (school.length == 0) {
            setSchoolError('**School cannot be empty');
            schoolRef.current.focus();
            return;
        }

        // check if the stream is empty or not
        if (stream.length == 0) {
            setStreamError('**Stream cannot be empty');
            streamRef.current.focus();
            return;
        }

        // checking if the courses select have valid month of enrollment or not
        // if not then setting the required error

        for (let i = 0; i < Object.keys(courseSelectStatus).length; i++) {
            if (courseSelectStatus[Object.keys(courseSelectStatus)[i]].courseSelected == true) {
                const selectMonth =
                    courseSelectStatus[Object.keys(courseSelectStatus)[i]].selectMonth;
                const availableMonths =
                    courseSelectStatus[Object.keys(courseSelectStatus)[i]].availableMonths;

                if (availableMonths.indexOf(selectMonth) === -1) {
                    setSelectMonthError(Object.keys(courseSelectStatus)[i]);
                    return;
                }
            }
        }

        // checking atleast 1 course is enrolled or not
        let selectedAtLeastOneCourse = 0;
        for (let i = 0; i < Object.keys(courseSelectStatus).length; i++) {
            if (courseSelectStatus[Object.keys(courseSelectStatus)[i]].courseSelected == true) {
                selectedAtLeastOneCourse = 1;
                break;
            }
        }

        if (selectedAtLeastOneCourse == 0) {
            setMinimumOneCourseError('**Please Enroll in at least one course');
            return;
        }

        let cartCourses: { courseId: string; month: number }[] = [];

        Object.keys(courseSelectStatus).forEach((courseId) => {
            if (courseSelectStatus[courseId].courseSelected === true) {
                cartCourses.push({
                    courseId: courseId,
                    month: courseSelectStatus[courseId].selectMonth
                });
            }
        });

        getInvoice({
            discountCouponID: selectedDiscountCouponId,
            courses: cartCourses
        });
    };

    const onPayButtonClicked = () => {
        let cartCourses: { courseId: string; month: number }[] = [];

        Object.keys(courseSelectStatus).forEach((courseId) => {
            if (courseSelectStatus[courseId].courseSelected === true) {
                cartCourses.push({
                    courseId: courseId,
                    month: courseSelectStatus[courseId].selectMonth
                });
            }
        });

        payCourse({
            name,
            email,
            phone: mobile,
            discountCouponID: selectedDiscountCouponId,
            school,
            stream,
            courses: cartCourses
        });
    };

    if (isServerDown === true) {
        return <ServerDown />;
    }

    return (
        <div>
            <HeaderLearn />
            <div
                // className={Style['container']}
                style={{
                    paddingTop: '100px',
                    height: '1200px'
                }}
            >
                {/* iconContainer */}
                <FLexLayout
                    style={{ marginTop: '35px' }}
                    rowORColumn="column"
                    justifyContent="center"
                    alignItem="center"
                >
                    <Image
                        style={{ width: `${68}px`, height: '68px' }}
                        src="/icons/ML_LOGO 3.png"
                        className={Style.iconContainer}
                    />
                </FLexLayout>

                {/* Live mentorship heading */}
                <FLexLayout
                    rowORColumn="column"
                    justifyContent="center"
                    alignItem="center"
                    style={{
                        textAlign: 'center',
                        fontFamily: 'poppinsSemiBoldItalic',
                        fontSize: '24px',
                        marginTop: '29px'
                    }}
                >
                    <FLexLayout rowORColumn="row">
                        <div> {'India’s First Curated Live Mentorship Experience'}</div>
                    </FLexLayout>
                </FLexLayout>

                {/* stats-container */}
                <FLexLayout
                    style={{ marginTop: '42px' }}
                    rowORColumn="row"
                    alignItem="center"
                    justifyContent="around"
                >
                    {/* stats-box-1 */}

                    <FLexLayout
                        className={Style.statsBox}
                        rowORColumn="column"
                        justifyContent="center"
                        alignItem="center"
                    >
                        <div className={Style['stats-value']}>{'200+'}</div>
                        <div className={Style['stats-label']}>{'Sessions'}</div>
                    </FLexLayout>

                    {/* stats-box-2 */}

                    <FLexLayout
                        className={Style.statsBox}
                        rowORColumn="column"
                        justifyContent="center"
                        alignItem="center"
                    >
                        <div className={Style['stats-value']}>{'1000+'}</div>
                        <div className={Style['stats-label']}>{'Participants'}</div>
                    </FLexLayout>

                    {/* stats-box-3 */}

                    <FLexLayout
                        className={Style.statsBox}
                        rowORColumn="column"
                        justifyContent="center"
                        alignItem="center"
                    >
                        <div className={Style['stats-value']}>{'100+'}</div>
                        <div className={Style['stats-label']}>{'Mentors'}</div>
                    </FLexLayout>
                </FLexLayout>

                {/* enroll-form-container */}
                <FLexLayout rowORColumn="row" justifyContent="center" alignItem="center">
                    <FLexLayout
                        className={Style['enroll-form-container']}
                        rowORColumn="column"
                        alignItem="center"
                    >
                        {/* 30-days-mentorship-text */}
                        <div
                            className={Style['days-mentorship-text']}
                        >{`30-Day Cohort Based Mentorship Programs`}</div>

                        {/* input-box */}

                        <form>
                            {/* name-box */}
                            <FLexLayout id={Style['name-input-box']} rowORColumn="column">
                                <FLexLayout
                                    className={Style['studentFelidsError']}
                                    rowORColumn="column"
                                >
                                    <div>{nameError}</div>
                                </FLexLayout>

                                <FLexLayout rowORColumn="column" className={Style['input-box']}>
                                    <input
                                        value={name}
                                        onChange={onNameChange}
                                        ref={nameRef}
                                        required={true}
                                        placeholder="Name"
                                    />
                                </FLexLayout>
                            </FLexLayout>

                            {/* email-box */}
                            <FLexLayout rowORColumn="column">
                                <FLexLayout
                                    className={Style['studentFelidsError']}
                                    rowORColumn="column"
                                >
                                    <div>{emailError}</div>
                                </FLexLayout>

                                <FLexLayout rowORColumn="column" className={Style['input-box']}>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={onEmailChange}
                                        ref={emailRef}
                                        required={true}
                                        placeholder="Email"
                                    />
                                </FLexLayout>
                            </FLexLayout>

                            {/* mobile-box */}
                            <FLexLayout rowORColumn="column">
                                <FLexLayout
                                    className={Style['studentFelidsError']}
                                    rowORColumn="column"
                                >
                                    <div>{mobileError}</div>
                                </FLexLayout>

                                <FLexLayout rowORColumn="column" className={Style['input-box']}>
                                    <input
                                        type="tel"
                                        ref={phoneRef}
                                        required={true}
                                        placeholder="Mobile"
                                        value={mobile}
                                        onChange={onMobileChange}
                                    />
                                </FLexLayout>
                            </FLexLayout>

                            {/* school-box */}
                            <FLexLayout rowORColumn="column">
                                <FLexLayout
                                    className={Style['studentFelidsError']}
                                    rowORColumn="column"
                                >
                                    <div>{schoolError}</div>
                                </FLexLayout>

                                <FLexLayout rowORColumn="column" className={Style['input-box']}>
                                    <input
                                        value={school}
                                        onChange={onSchoolChange}
                                        ref={schoolRef}
                                        required={true}
                                        placeholder="School / College / University / Organization"
                                    />
                                </FLexLayout>
                            </FLexLayout>

                            {/* stream-box */}
                            <FLexLayout rowORColumn="column">
                                <FLexLayout
                                    className={Style['studentFelidsError']}
                                    rowORColumn="column"
                                >
                                    <div>{streamError}</div>
                                </FLexLayout>

                                <FLexLayout rowORColumn="column" className={Style['input-box']}>
                                    <input
                                        value={stream}
                                        onChange={onStreamChange}
                                        ref={streamRef}
                                        required={true}
                                        placeholder="Stream / Course / Subjects / Profession"
                                    />
                                </FLexLayout>
                            </FLexLayout>

                            {/* select-programs */}
                            <FLexLayout
                                className={Style['select-programs-heading-box']}
                                rowORColumn="row"
                                justifyContent="center"
                                alignItem="center"
                            >
                                <div>{'Select Programs'}</div>
                            </FLexLayout>

                            {coursesData &&
                                coursesData.map((x, i) => {
                                    return (
                                        <FLexLayout
                                            keyVal={i}
                                            justifyContent="between"
                                            rowORColumn="row"
                                            alignItem="start"
                                            style={{ ...x.style }}
                                            className={Style['program-with-input-row']}
                                        >
                                            {/* check-box */}
                                            <input
                                                onChange={onProgramValueChange(x._id)}
                                                //  checked={setCourseSelectStatus[x._id]}
                                                type="checkbox"
                                                className={Style['checkbox-input']}
                                            />

                                            {/* program-name-with-select-field */}

                                            <FLexLayout rowORColumn="column">
                                                {/* program-name */}
                                                <FLexLayout
                                                    justifyContent="between"
                                                    className={Style['program-name']}
                                                    rowORColumn="row"
                                                    alignItem="center"
                                                    style={{
                                                        backgroundColor: x.bgColor,
                                                        paddingLeft: '15px',
                                                        paddingRight: '5px'
                                                    }}
                                                >
                                                    {/* program-name */}
                                                    <div>{x.programName}</div>

                                                    {/* price-box */}
                                                    <FLexLayout
                                                        justifyContent="center"
                                                        className={Style['price-box']}
                                                        rowORColumn="row"
                                                        alignItem="center"
                                                    >
                                                        <div>&#8377; {x.coursePrice}</div>
                                                    </FLexLayout>
                                                </FLexLayout>

                                                {/* select-batch-field-with-dropdown */}

                                                {courseSelectStatus &&
                                                    courseSelectStatus[x._id].courseSelected ===
                                                        true && (
                                                        <FLexLayout
                                                            className={
                                                                Style['select-a-batch-dropDown']
                                                            }
                                                            rowORColumn="column"
                                                        >
                                                            <select
                                                                onChange={onMonthSelected}
                                                                style={{ width: '100%' }}
                                                                data-info={`{ "courseId": "${x._id}" }`}
                                                            >
                                                                <option
                                                                    value=""
                                                                    selected
                                                                    disabled
                                                                    hidden
                                                                >
                                                                    Please Select a Batch
                                                                </option>

                                                                {courseSelectStatus[
                                                                    x._id
                                                                ].availableMonths.map(
                                                                    (month, i) => {
                                                                        return (
                                                                            <option
                                                                                key={i}
                                                                                value={month}
                                                                            >
                                                                                {getCourseMonthInfo(
                                                                                    month
                                                                                )}
                                                                            </option>
                                                                        );
                                                                    }
                                                                )}
                                                            </select>
                                                        </FLexLayout>
                                                    )}

                                                {/* select-a-batch-error */}
                                                {courseSelectStatus &&
                                                    courseSelectStatus[x._id].showError ===
                                                        true && (
                                                        <FLexLayout
                                                            className={Style['batch-month-error']}
                                                            rowORColumn="row"
                                                            alignItem="center"
                                                            justifyContent="center"
                                                        >
                                                            {
                                                                '*Please select a batch. This is a required Field'
                                                            }
                                                        </FLexLayout>
                                                    )}
                                            </FLexLayout>
                                        </FLexLayout>
                                    );
                                })}

                            <FLexLayout
                                className={Style['invalidDiscountCouponError']}
                                rowORColumn="row"
                                justifyContent="center"
                                alignItem="center"
                            >
                                <div>{minimumOneCourseError}</div>
                            </FLexLayout>

                            {/* have-discount-coupon-box */}
                            {/* <FLexLayout
                                className={Style['discount-coupon-heading-box']}
                                rowORColumn="row"
                                justifyContent="center"
                                alignItem="center"
                            >
                                <input
                                    onChange={onDisCountCodeChange}
                                    value={discountCode}
                                    style={{ width: '80%', textAlign: 'center' }}
                                    placeholder="Have a discount coupon ?"
                                />
                            </FLexLayout>

                            <FLexLayout
                                className={Style['invalidDiscountCouponError']}
                                rowORColumn="row"
                                justifyContent="center"
                                alignItem="center"
                            >
                                <div>{getInvoiceError}</div>
                            </FLexLayout> */}

                            {/* apply for discount code */}
                            <FLexLayout
                                className={Style['confirm-now-button']}
                                rowORColumn="row"
                                justifyContent="center"
                                alignItem="center"
                                onClick={() => setModalAction(true)}
                                style={{ marginBottom: '40px' }}
                            >
                                <FLexLayout rowORColumn="row" alignItem="center">
                                    <div>{getTextForDiscountCodeButton()}</div>
                                    <Image
                                        style={{ marginLeft: '28px', height: '24px' }}
                                        src="icons/Arrow 1.png"
                                    />
                                </FLexLayout>
                            </FLexLayout>

                            {/* confirm-now */}
                            <FLexLayout
                                className={Style['confirm-now-button']}
                                rowORColumn="row"
                                justifyContent="center"
                                alignItem="center"
                                onClick={onConfirmButtonClicked}
                                style={{ marginBottom: '40px' }}
                            >
                                <div>{'Confirm '}</div>
                            </FLexLayout>
                        </form>

                        {showEnrollScreenLoader == true && <Loader />}

                        {/* bill-items-container */}
                        {invoiceData.invoiceCourses && invoiceData.invoiceCourses.length > 0 && (
                            <FLexLayout
                                alignItem="center"
                                className={Style['bill-items-container']}
                                rowORColumn="column"
                            >
                                {invoiceData.invoiceCourses.map((invoiceCourse) => {
                                    return (
                                        <FLexLayout
                                            style={{ width: '80%' }}
                                            rowORColumn="row"
                                            justifyContent="between"
                                            className={Style['bill-item-row']}
                                        >
                                            {/* program-name-with -month */}
                                            <FLexLayout rowORColumn="column">
                                                <div className={Style['bill-item-program-name']}>
                                                    {' '}
                                                    {invoiceCourse.courseName}
                                                </div>
                                                <div className={Style['bill-item-program-month']}>
                                                    {`${MONTHS[invoiceCourse.month]} Cohort`}
                                                </div>
                                            </FLexLayout>

                                            {/* price-box */}
                                            <FLexLayout
                                                justifyContent="center"
                                                className={Style['price-box-bill-item']}
                                                rowORColumn="row"
                                                alignItem="center"
                                            >
                                                <div>&#8377; {invoiceCourse.price}</div>
                                            </FLexLayout>
                                        </FLexLayout>
                                    );
                                })}

                                {/* subtotal-box  */}
                                <FLexLayout
                                    style={{ width: '80%' }}
                                    rowORColumn="row"
                                    justifyContent="between"
                                    className={Style['bill-item-row']}
                                >
                                    <div className={Style['bill-item-program-name']}>
                                        {' '}
                                        {'Subtotal'}
                                    </div>

                                    {/* price-box */}
                                    <FLexLayout
                                        justifyContent="center"
                                        className={Style['price-box-bill-item']}
                                        rowORColumn="row"
                                        alignItem="center"
                                    >
                                        <div>&#8377; {invoiceData.subTotal}</div>
                                    </FLexLayout>
                                </FLexLayout>

                                {/* discount-box */}
                                { invoiceData.disCountAmount !==0 && (
                                     <FLexLayout
                                     style={{ width: '80%' }}
                                     rowORColumn="row"
                                     justifyContent="between"
                                     className={Style['bill-item-row']}
                                     id={Style['promo-code-applied-box']}
                                 >
                                     <div>
                                         <span className={Style['promoCode-text']}>
                                             {`${invoiceData.discountCoupon} Code Applied`}
                                         </span>{' '}
                                         <span className={Style['promoCode-value']}>
                                             {`${invoiceData.percentageDiscount}% Discount`}
                                         </span>
                                     </div>
 
                                     {/* price-box */}
                                     <FLexLayout
                                         justifyContent="center"
                                         className={Style['price-box-bill-item']}
                                         rowORColumn="row"
                                         alignItem="center"
                                     >
                                         <div> - &#8377; {invoiceData.disCountAmount}</div>
                                     </FLexLayout>
                                 </FLexLayout>
                                )}
                            </FLexLayout>
                        )}

                        {/* check-out-amount */}
                        {invoiceData.invoiceCourses && invoiceData.invoiceCourses.length > 0 && (
                            <FLexLayout
                                style={{ width: '80%' }}
                                rowORColumn="row"
                                justifyContent="between"
                                className={Style['checkout-amount']}
                                ref={invoiceDataContainerRef}
                            >
                                <div> {'Checkout Amount'} </div>

                                {/* price-box */}
                                <div> &#8377; {invoiceData.checkoutAmount}</div>
                            </FLexLayout>
                        )}
                    </FLexLayout>
                </FLexLayout>

                {/* pay- now container */}
                {invoiceData && invoiceData.invoiceCourses.length > 0 && (
                    <FLexLayout rowORColumn="row" justifyContent="center" alignItem="center">
                        {/* pay-now button */}
                        <FLexLayout
                            className={Style['confirm-now-button']}
                            rowORColumn="row"
                            justifyContent="center"
                            alignItem="center"
                            onClick={onPayButtonClicked}
                            style={{ marginBottom: '20px' }}
                        >
                            <div>{'Pay Now'}</div>
                        </FLexLayout>
                    </FLexLayout>
                )}
            </div>
            <DiscountModal />
        </div>
    );
};

const mapStateToProps = (state: StoreStateInterface) => {
    return {
        coursesData: state.courses.courseData,
        courseSelectStatus: state.courses.courseSelectionStatus,
        minimumOneCourseError: state.courses.minimumOneCourseError,
        isServerDown: state.serverDownError.error,
        showEnrollScreenLoader: state.loaderShow.enrollScreen,
        invoiceData: state.courses.invoiceData,
        getInvoiceError: state.courses.invoiceError,
        discountCoupons: state.discountCouponData.discountCodes,
        selectedDiscountCouponText: state.discountCouponData.selectedDiscountCodeText,
        selectedDiscountCouponId: state.discountCouponData.selectedDiscountCodeId,
        selectedDiscountCouponPercent: state.discountCouponData.selectedDiscountCodePercent
    };
};

const mapDispatchToProps = {
    getCourses,
    addOrRemoveCourseToBuy,
    selectMonth,
    setSelectMonthError,
    setMinimumOneCourseError,
    getInvoice,
    payCourse,
    getDiscountCoupons,
    setModalAction
};

export default connect(mapStateToProps, mapDispatchToProps)(_EnrollScreen);
