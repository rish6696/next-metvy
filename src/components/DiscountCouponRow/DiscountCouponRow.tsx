import react from 'react';
import { connect } from 'react-redux';
import { DiscountCoupons } from '../../redux/Actions/Courses';
import { StoreStateInterface } from '../../redux/reducers';
import FLexLayout from '../FlexLayout';
import Style from './DiscountCouponRow.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import { CourseSelectionStatus } from '../../redux/reducers/CoursesData';
import { applyDiscountCode, APPLY_DISCOUNT_CODE_ACTION_PAYLOAD } from '../../redux/Actions/Courses';

interface Props {
    discountCoupon: DiscountCoupons;
    courseSelectedStatus: CourseSelectionStatus;
    applyDiscountCode: (applyDiscountCodePayload: APPLY_DISCOUNT_CODE_ACTION_PAYLOAD) => void;
}

const _DiscountCoupon = (props: Props) => {
    const {
        discountCoupon: { code, _id, isActive, numberOfCourses, percentDiscount },
        courseSelectedStatus,
        applyDiscountCode
    } = props;

    const totalCourseSelected = () => {
        let total = 0;
        Object.keys(courseSelectedStatus).forEach((course) => {
            if (courseSelectedStatus[course].courseSelected === true) total++;
        });

        return total;
    };

    const getDescription = () => {
        if (totalCourseSelected() >= numberOfCourses) {
            return (
                <div className={Style['description-selected']}>
                    {' '}
                    Upon Enrolling in {numberOfCourses} Programs{' '}
                </div>
            );
        }

        return (
            <div className={Style['description-disabled']}>
                {' '}
                Enrolling in {numberOfCourses} Programs to use the code
            </div>
        );
    };

    const getApplyNowButton = () => {
        var window: any = window;
        if (totalCourseSelected() >= numberOfCourses) {
            return (
                <FLexLayout
                    className={Style['apply-now-button-active']}
                    rowORColumn="column"
                    justifyContent="center"
                    alignItem="center"
                    onClick={() => {
                        window?.gtag('event', 'Apply_Now');
                        applyDiscountCode({
                            selectedDiscountCodeId: _id,
                            selectedDiscountCodePercent: percentDiscount,
                            selectedDiscountCodeText: code
                        })
                    }
                    }
                >
                    Apply Now
                </FLexLayout>
            );
        }

        return (
            <FLexLayout
                className={Style['apply-now-button-inactive']}
                rowORColumn="column"
                justifyContent="center"
                alignItem="center"
            >
                Apply Now
            </FLexLayout>
        );
    };

    return (
        <Col style={{ padding: "0px" }} >
            <FLexLayout rowORColumn="row" justifyContent="center" alignItem="center">
                {/* inner-container */}
                <FLexLayout rowORColumn="column" className={Style['container']}>
                    {/* row-1 */}
                    <div className={Style['use-title']}>
                        {' '}
                        Use Code <span className={Style['code']}> {code} </span> to avail{' '}
                        <span className={Style['percent']}>{percentDiscount}% off</span>{' '}
                    </div>

                    {/* row-2 */}
                    <FLexLayout
                        justifyContent="between"
                        style={{ marginTop: '10px' }}
                        rowORColumn="row"
                    >
                        <div>{getDescription()}</div>
                        {getApplyNowButton()}
                    </FLexLayout>
                </FLexLayout>
            </FLexLayout>
        </Col>
    );
};

const mapStateToProps = (state: StoreStateInterface) => {
    return {
        discountCoupons: state.discountCouponData.discountCodes,
        courseSelectedStatus: state.courses.courseSelectionStatus
    };
};

const mapDispatchToProps = {
    applyDiscountCode
};

export default connect(mapStateToProps, mapDispatchToProps)(_DiscountCoupon);
