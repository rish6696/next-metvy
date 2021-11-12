import React from 'react';
import FLexLayout from '../FlexLayout';
import Style from './testimonialv2.module.css';
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
        <FLexLayout
            className={Style['outer-testimonial']}
            rowORColumn="column"
            alignItem="center"
        >
            {/* inner-testimonial */}
            <FLexLayout
                className={Style['inner-testimonial']}
                rowORColumn="row"
                alignItem="center"
            >
                <img
                    className={Style['testimonial-inner-image']}
                    src={avatarImage}
                    style={{borderRadius:'10px'}}
                />
                <FLexLayout
                    style={{ height: '100%', width: '100%' }}
                    rowORColumn="column"
                    justifyContent="center"
                >
                    <div className={Style['testimonial-user-name']}>
                        {avatarName}
                    </div>
                    <div className={Style['testimonial-user-designation']}>
                        {' '}
                        {designation}
                    </div>
                </FLexLayout>
            </FLexLayout>

            {/* testiomonial-text */}
            <div className={Style['testimonial-text']}>
                {testimonialText}
            </div>
        </FLexLayout>
    );
};

export default _testimonialCard;
