import React from 'react';
import FLexLayout from '../FlexLayout';
import Style from './1stPartCard.module.css';
import { Image } from 'react-bootstrap';

interface Prop {
    image: string;
    mainHeading: string;
    subHeading: string;
    buttonText: string;
}

const _Card = (props: Prop) => {
    const { image, mainHeading, subHeading, buttonText } = props;

    return (
        <FLexLayout alignItem="center"  rowORColumn="column" className={Style.card}>
            <Image className={Style.cardImage} src={image} />
            <div className={Style.cardMainHeading}> {mainHeading} </div>

            <div className={Style.cardSubHeading}> {subHeading} </div>

            <FLexLayout
                rowORColumn="row"
                alignItem="center"
                justifyContent="center"
                className={Style.cardButtonText}
            >
               <div> {buttonText} </div> 
            </FLexLayout>
        </FLexLayout>
    );
};

export default _Card;
