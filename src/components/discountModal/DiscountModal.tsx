import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import FLexLayout from '../FlexLayout';
import { connect } from 'react-redux';
import { StoreStateInterface } from '../../redux/reducers';
import { DiscountCoupons } from '../../redux/Actions/Courses';
import DiscountCouponRow from '../../components/DiscountCouponRow/DiscountCouponRow';
import { Container, Row, Col } from 'react-bootstrap';
import { setModalAction } from '../../redux/Actions/Courses'

export interface ModalProps {
    discountCoupons: DiscountCoupons[];
    modalShow: boolean;
    setModalAction : (modalState:boolean) => void
}

function SimpleModal(props: ModalProps) {
    const { discountCoupons,modalShow,setModalAction } = props;

    function rand() {
        return Math.round(Math.random() * 20) - 10;
    }

    function getModalStyle() {
        const top = 50;
        const left = 50;

        return {
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
        };
    }

    const getMakeStyle = (width) => {
        return makeStyles((theme) => ({
            paper: {
                position: 'absolute',
                width:  (0.95) * width,
                backgroundColor: theme.palette.background.paper,
                border: '0px solid #000',
                boxShadow: theme.shadows[5],
                padding: theme.spacing(2, 4, 3)
            }
        }));
    };


    const [modalStyle] = React.useState(getModalStyle);
    const body = () => {
        if (typeof window !== 'undefined') {
            return (
                <div style={modalStyle} className={getMakeStyle(window.innerWidth)().paper}>
                    <Container fluid={true}  >
                        <Row>
                            {discountCoupons.map((discountCoupon) => (
                                <DiscountCouponRow
                                    discountCoupon={discountCoupon}
                                    key={discountCoupon._id}
                                />
                            ))}
                        </Row>
                    </Container>
                </div>
            );
        }
        return null;
    };

    return (
        <div>
            <Modal
                open={modalShow}
                onClose={()=>setModalAction(!modalShow)}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                {body()}
            </Modal>
        </div>
    );
}

const mapStateToProps = (state: StoreStateInterface) => {
    return {
        discountCoupons: state.discountCouponData.discountCodes,
        modalShow : state.discountModal.open
    };
};

const mapDispatchToProps = {
  setModalAction
};

export default connect(mapStateToProps, mapDispatchToProps)(SimpleModal);
