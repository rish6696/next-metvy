import React from 'react';
import TextureBackground from '../TextureBackGround/Texturebackground';
import Header from '../Header/Header';
import FLexLayout from '../FlexLayout';
import { Image } from 'react-bootstrap';
import Style from './FirstPart.module.css';
import { firstPartText, firstPartCardData } from '../../constants';
import FirstPartCard from '../1stPartCard/1stPartCard';

const _FirstPart = () => {
    return (
        <TextureBackground>
            <FLexLayout style={{padding:'40px'}} rowORColumn="row">
                <Image
                    className={Style.mobileIcon}
                    src="/icons/Apple_Explore.png"
                />

                <FLexLayout justifyContent='between' style={{marginLeft:'80px',marginRight:'40px'}} rowORColumn="column">
                    <div className={Style.text}>{firstPartText}</div>

                    <FLexLayout  rowORColumn="row" justifyContent='between'  >
                        {firstPartCardData.map((x) => (
                            <FirstPartCard
                                buttonText={x.buttonText}
                                image={x.image}
                                mainHeading={x.mainHeading}
                                subHeading={x.subHeading}
                            />
                        ))}
                    </FLexLayout>


                    <FLexLayout rowORColumn='row' >
                        <Image className={Style.storeIcons} src='/icons/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917 1.png'  />
                        <Image className={Style.storeIcons} src='/icons/google-play-badge 1.png' />
                    </FLexLayout>
                </FLexLayout>
            </FLexLayout>
        </TextureBackground>
    );
};

export default _FirstPart;
