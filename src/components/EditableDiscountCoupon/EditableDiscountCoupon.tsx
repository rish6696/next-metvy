import React,{useState} from 'react';
import { Col } from 'react-bootstrap';
import FLexLayout from '../FlexLayout/index';
import Style from './EditableDiscountCoupon.module.css';
import { connect } from 'react-redux';
import { applyDiscountCode,APPLY_DISCOUNT_CODE_ACTION_PAYLOAD } from '../../redux/Actions/Courses';
import { StoreStateInterface } from '../../redux/reducers';
import {EDITABLE_DISCOUNT_CODE_ID } from '../../constants'


interface Props {
    applyDiscountCode: (applyDiscountCodePayload: APPLY_DISCOUNT_CODE_ACTION_PAYLOAD) => void;
}

const _EditableDiscountCoupon = (props:Props) => {


    const [editableDiscountCoupon,setEditableDiscount] = useState('');


    const { applyDiscountCode } = props

    const getApplyNowButton = () => {
        if(editableDiscountCoupon.length == 6){
            return (
                <FLexLayout
                    className={Style['apply-now-button-active']}
                    rowORColumn="column"
                    justifyContent="center"
                    alignItem="center"
                    onClick={() =>{
                        console.log('clicked')
                        applyDiscountCode({
                            selectedDiscountCodeId: EDITABLE_DISCOUNT_CODE_ID ,
                            selectedDiscountCodePercent: -20,
                            selectedDiscountCodeText: editableDiscountCoupon.toUpperCase()
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


    const onInputChange = (event:React.ChangeEvent<HTMLInputElement> )=>{
        setEditableDiscount(event.target.value)
    }


    const getPlaceHolderStyle = ()=>{
        if(editableDiscountCoupon.length==0){
            return { fontSize: "6px",  fontFamily: "poppinsBold" }
        }
    }
    

    return (
        <Col>
            <FLexLayout
                rowORColumn="row"
                justifyContent="center"
                alignItem="center"
            >
                {/* inner-container */}
                <FLexLayout rowORColumn="column" className={Style['container']}>
                    {/* row-1 */}
                    <div className={Style['use-title']}>
                        {'Use a Specific Discount Code'}
                    </div>

                    {/* row-2 */}
                    <FLexLayout
                        justifyContent="between"
                        style={{ marginTop: '10px' }}
                        rowORColumn="row"
                    >
                        <FLexLayout
                            rowORColumn="row"
                            justifyContent="center"
                            alignItem="center"
                            className={Style['discount-input']}
                            style={getPlaceHolderStyle()}
                        >
                            <input  onChange={onInputChange} style={{width:"100%",paddingLeft:"10px",textTransform:'uppercase'}} maxLength={6} placeholder="Enter a discount code" />
                        </FLexLayout>
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

export default connect(mapStateToProps, mapDispatchToProps)(_EditableDiscountCoupon);
