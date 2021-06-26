import React from 'react';
import FLexLayout from '../FlexLayout';
import Style from './testimonial.module.css';
import { Image } from 'react-bootstrap';

interface Props {
    avatarImage: string;
    designation: string;
    testimonialText: string;
    avatarName: string;
}

const _testimonialCard = (props: Props) => {
    const { avatarImage, designation, testimonialText, avatarName } = props;
    return (
        <FLexLayout className={Style['container']} rowORColumn="column">
            {/* description */}
            <FLexLayout rowORColumn="row" justifyContent="center" alignItem="center">
                <div className={Style['testimonialText']}>
                    {' '}
                    <span className={Style['quotes']}>&quot;</span> {testimonialText}{' '}
                    <span className={Style['quotes']}>&quot;</span>{' '}
                </div>
            </FLexLayout>

            <FLexLayout rowORColumn="row" justifyContent="center" alignItem="center">
                <FLexLayout alignItem="center" rowORColumn="row" style={{ marginTop: '20px' }}>
                    <Image
                        style={{ height: '54px', width: '54px', borderRadius: '50%' }}
                        src={avatarImage}
                    />


                    <FLexLayout style={{marginLeft:'20px'}} rowORColumn="column">
                        <div className={Style['avatarName']}>{avatarName}</div>
                        <div className={Style['avatarDesignation']}>{designation}</div>
                    </FLexLayout>


                </FLexLayout>
            </FLexLayout>
        </FLexLayout>
    );
};

export default _testimonialCard;
