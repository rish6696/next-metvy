import React, { useState, createRef, RefObject } from 'react';
import Style from './Enroll.module.css';
import FLexLayout from '../../components/FlexLayout';
import HeaderLearn from '../../components/HeaderLearn/HeaderLearn';
import { Image } from 'react-bootstrap';
import { enrollScreenCourseData, MONTHS } from '../../constants';

const _EnrollScreen = () => {
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
    };

    const [courseSelectStatus, setCourseSelectStatus] = useState({
        'Metvy Research Program': {
            availableMonths: [MONTHS.MAY, MONTHS.JUNE, MONTHS.JULY],
            selectMonth: 'Please Select a Batch',
            courseSelected: false,
            showError: false
        },
        'Metvy Business Program': {
            availableMonths: [MONTHS.MAY, MONTHS.JUNE, MONTHS.JULY],
            selectMonth: 'Please Select a Batch',
            courseSelected: false,
            showError: false
        },
        'Metvy AI Program': {
            availableMonths: [MONTHS.MAY, MONTHS.JUNE, MONTHS.JULY],
            selectMonth: 'Please Select a Batch',
            courseSelected: false,
            showError: false
        },
        'Metvy Consultancy Program': {
            availableMonths: [MONTHS.MAY, MONTHS.JUNE, MONTHS.JULY],
            selectMonth: 'Please Select a Batch',
            courseSelected: false,
            showError: false
        },
        'Metvy Design Program': {
            availableMonths: [MONTHS.MAY, MONTHS.JUNE, MONTHS.JULY],
            selectMonth: 'Please Select a Batch',
            courseSelected: false,
            showError: false
        }
    });

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

    const onStreamChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (streamError.length != 0) setStreamError('');
        setStream(event.target.value);
    };

    const onProgramValueChange = (programName) => {
        let temp = {};

        temp[programName] = {
            ...courseSelectStatus[programName],
            courseSelected: !courseSelectStatus[programName].courseSelected
        };

        return () => {
            setSelectBatchError('');
            setCourseSelectStatus({ ...courseSelectStatus, ...temp });
        };
    };

    const onMonthSelected = (event) => {
        const { programName } = JSON.parse(event.currentTarget.dataset.info);
        const month = event.target.value;

        let temp = {};
        temp[programName] = {
            ...courseSelectStatus[programName],
            selectMonth: month,
            showError: false
        };
        setCourseSelectStatus({ ...courseSelectStatus, ...temp });
    };

    const onConfirmButtonClicked = () => {
        // check if the name is empty or not
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
        //if not then setting the required error

        Object.keys(courseSelectStatus).forEach((programName) => {
            if (courseSelectStatus[programName].courseSelected === true) {
                const selectMonth = courseSelectStatus[programName].selectMonth;
                const availableMonths = courseSelectStatus[programName].availableMonths;

                if (availableMonths.indexOf(selectMonth) === -1) {
                    let temp = {};

                    temp[programName] = {
                        ...courseSelectStatus[programName],
                        showError: true
                    };
                    setCourseSelectStatus({ ...courseSelectStatus, ...temp });
                }
            }
        });

        // checking atleast 1 course is enrolled or not
        let selectedAtLeastOneCourse = 0;
        for (let i = 0; i < Object.keys(courseSelectStatus).length; i++) {
            if (courseSelectStatus[Object.keys(courseSelectStatus)[i]].courseSelected == true) {
                selectedAtLeastOneCourse = 1;
                break;
            }
        }

        if (selectedAtLeastOneCourse == 0) {
            setSelectBatchError('**Please Enroll in at least one course');
        }
    };

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
                                        type="number"
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

                            {enrollScreenCourseData.map((x, i) => {
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
                                            onChange={onProgramValueChange(x.programName)}
                                            checked={setCourseSelectStatus[x.programName]}
                                            type="checkbox"
                                            className={Style['checkbox-input']}
                                        />

                                        {/* program-name-with-select-field */}

                                        <FLexLayout rowORColumn="column">
                                            {/* program-name */}
                                            <FLexLayout
                                                justifyContent="around"
                                                className={Style['program-name']}
                                                rowORColumn="row"
                                                alignItem="center"
                                                style={{ backgroundColor: x.bgColor }}
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
                                                    <div>&#8377; 2599</div>
                                                </FLexLayout>
                                            </FLexLayout>

                                            {/* select-batch-field-with-dropdown */}

                                            {courseSelectStatus &&
                                                courseSelectStatus[x.programName].courseSelected ===
                                                    true && (
                                                    <FLexLayout
                                                        className={Style['select-a-batch-dropDown']}
                                                        rowORColumn="column"
                                                    >
                                                        <select
                                                            onChange={onMonthSelected}
                                                            style={{ width: '100%' }}
                                                            data-info={`{ "programName": "${x.programName}" }`}
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
                                                                x.programName
                                                            ].availableMonths.map((month) => {
                                                                return (
                                                                    <option value={month}>
                                                                        {month}
                                                                    </option>
                                                                );
                                                            })}
                                                        </select>
                                                    </FLexLayout>
                                                )}

                                            {/* select-a-batch-error */}
                                            {courseSelectStatus &&
                                                courseSelectStatus[x.programName].showError ===
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
                                <div>{selectBatchError}</div>
                            </FLexLayout>

                            {/* have-discount-coupon-box */}
                            <FLexLayout
                                className={Style['discount-coupon-heading-box']}
                                rowORColumn="row"
                                justifyContent="center"
                                alignItem="center"
                                style={
                                    discountCodeError.length == 0 ? {} : { border: '2px solid red' }
                                }
                            >
                                <div>{'Have a discount coupon ?'}</div>
                            </FLexLayout>

                            <FLexLayout
                                className={Style['invalidDiscountCouponError']}
                                rowORColumn="row"
                                justifyContent="center"
                                alignItem="center"
                            >
                                <div>{discountCodeError}</div>
                            </FLexLayout>

                            {/* confirm-now */}
                            <FLexLayout
                                className={Style['confirm-now-button']}
                                rowORColumn="row"
                                justifyContent="center"
                                alignItem="center"
                                onClick={onConfirmButtonClicked}
                            >
                                <div>{'Confirm '}</div>
                            </FLexLayout>
                        </form>

                        {/* bill-items-container */}
                        <FLexLayout
                            alignItem="center"
                            className={Style['bill-items-container']}
                            rowORColumn="column"
                        >
                            {/* bill - item-1 */}
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
                                        {'Metvy Business Program'}
                                    </div>
                                    <div className={Style['bill-item-program-month']}>
                                        {'May Cohort'}
                                    </div>
                                </FLexLayout>

                                {/* price-box */}
                                <FLexLayout
                                    justifyContent="center"
                                    className={Style['price-box-bill-item']}
                                    rowORColumn="row"
                                    alignItem="center"
                                >
                                    <div>&#8377; 2599</div>
                                </FLexLayout>
                            </FLexLayout>

                            {/* bill - item-1 */}
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
                                        {'Metvy Business Program'}
                                    </div>
                                    <div className={Style['bill-item-program-month']}>
                                        {'May Cohort'}
                                    </div>
                                </FLexLayout>

                                {/* price-box */}
                                <FLexLayout
                                    justifyContent="center"
                                    className={Style['price-box-bill-item']}
                                    rowORColumn="row"
                                    alignItem="center"
                                >
                                    <div>&#8377; 2599</div>
                                </FLexLayout>
                            </FLexLayout>

                            {/* bill - item-1 */}
                            <FLexLayout
                                style={{ width: '80%' }}
                                rowORColumn="row"
                                justifyContent="between"
                                className={Style['bill-item-row']}
                            >
                                <div className={Style['bill-item-program-name']}> {'Subtotal'}</div>

                                {/* price-box */}
                                <FLexLayout
                                    justifyContent="center"
                                    className={Style['price-box-bill-item']}
                                    rowORColumn="row"
                                    alignItem="center"
                                >
                                    <div>&#8377; 2599</div>
                                </FLexLayout>
                            </FLexLayout>

                            {/* bill - item-1 */}
                            <FLexLayout
                                style={{ width: '80%' }}
                                rowORColumn="row"
                                justifyContent="between"
                                className={Style['bill-item-row']}
                                id={Style['promo-code-applied-box']}
                            >
                                <div>
                                    <span className={Style['promoCode-text']}>
                                        {'Promo Code Applied'}
                                    </span>{' '}
                                    <span className={Style['promoCode-value']}>
                                        {'20% Discount'}
                                    </span>
                                </div>

                                {/* price-box */}
                                <FLexLayout
                                    justifyContent="center"
                                    className={Style['price-box-bill-item']}
                                    rowORColumn="row"
                                    alignItem="center"
                                >
                                    <div> - &#8377; 599</div>
                                </FLexLayout>
                            </FLexLayout>
                        </FLexLayout>

                        {/* check-out-amount */}
                        <FLexLayout
                            style={{ width: '80%' }}
                            rowORColumn="row"
                            justifyContent="between"
                            className={Style['checkout-amount']}
                        >
                            <div> {'Checkout Amount'} </div>

                            {/* price-box */}
                            <div> &#8377; 3999</div>
                        </FLexLayout>
                    </FLexLayout>
                </FLexLayout>

                {/* pay- now container */}
                <FLexLayout rowORColumn="row" justifyContent="center" alignItem="center">
                    {/* confirm-now */}
                    <FLexLayout
                        className={Style['confirm-now-button']}
                        rowORColumn="row"
                        justifyContent="center"
                        alignItem="center"
                        onClick={onConfirmButtonClicked}
                    >
                        <div>{'Pay Now'}</div>
                    </FLexLayout>
                </FLexLayout>


            </div>
        </div>
    );
};

export default _EnrollScreen;
