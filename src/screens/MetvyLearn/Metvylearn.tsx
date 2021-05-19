import React, { useState, useEffect } from 'react';
import FLexLayout from '../../components/FlexLayout';
import HeaderLearn from '../../components/HeaderLearn/HeaderLearn';
import Style from './MetvyLearn.module.css';
import { Image, Carousel } from 'react-bootstrap';
import {
    testimonialLearn,
    coursesLearnScreenAdvertisementMetaData,
    mentorData,
    programsCardsMetaData,
    whyUsParagraph
} from '../../constants';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import Footer from '../../components/Footer/Footer'

import { Carousel as CarouselAdvertisement } from 'react-responsive-carousel';

const _MetvyLearn = () => {
    const [width, setWidth] = useState(-1);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    const advertisements = coursesLearnScreenAdvertisementMetaData.map((advertisement) => {
        return (
            <FLexLayout
                className={Style.mentorshipCard}
                rowORColumn="column"
                justifyContent="between"
                style={{
                    width: `${0.87 * width}px`,
                    marginLeft: `${0.06 * width}px`,
                    marginRight: `${0.06 * width}px`,
                    marginTop: '29px',
                    height: `320px`,
                    zIndex: -20,
                    backgroundImage: `url("${advertisement.backgroundImage}")`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    color: 'black'
                }}
                alignItem="center"
            >
                <Image
                    src={advertisement.illustratorImg}
                    style={{
                        width: advertisement.illustratorImgWidth,
                        height: advertisement.illustratorImgHeight
                    }}
                />

                <div
                    style={{
                        marginLeft: `${0.19 * width}px`,
                        marginRight: `${0.19 * width}px`,
                        marginTop: '9px'
                    }}
                >
                    {advertisement.text}
                </div>

                <div
                    style={{
                        height: '2px',
                        width: `${0.05 * width}px`,
                        backgroundColor: 'white',
                        marginTop: '10px'
                    }}
                ></div>

                <div style={{ fontFamily: 'poppinsRegular', fontSize: '12px', marginTop: '8px' }}>
                    {'Mentors from '}
                </div>

                <FLexLayout
                    rowORColumn="row"
                    justifyContent="between"
                    alignItem="center"
                    style={{
                        marginLeft: `${0.06 * width}px`,
                        marginRight: `${0.06 * width}px`,
                        padding: '15px',
                        backgroundColor: 'white',
                        width: '100%',
                        marginTop: '19px',
                        height: '41px'
                    }}
                >
                    {advertisement.brands.map((brand) => {
                        return (
                            <Image
                                src={brand.name}
                                style={{ width: brand.width, height: brand.height }}
                            />
                        );
                    })}
                </FLexLayout>
            </FLexLayout>
        );
    });

    return (
        <div>
            <HeaderLearn />
            <div
                style={{
                    paddingTop: '100px',
                    backgroundImage: 'url("/icons/bg_learn.png")',
                    backgroundRepeat:'no-repeat'
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

                {/* advertisement-card-carousel */}
                <CarouselAdvertisement
                    infiniteLoop={true}
                    autoPlay={true}
                    showArrows={false}
                    showIndicators={false}
                    showStatus={false}
                    showThumbs={false}
                    axis={'horizontal'}
                >
                    {advertisements}
                </CarouselAdvertisement>

                {/* 30-days cohort - heading- container */}

                <FLexLayout rowORColumn="column" justifyContent="center" alignItem="center">
                    <div className={Style.bannerText} style={{ marginTop: '24px' }}>
                        {'30-Day Cohort Based Mentorship Programs'}
                    </div>
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
                        style={{ height: `${0.22 * width}px`, width: `${0.2 * width}px` }}
                        className={Style.statsBox}
                        rowORColumn="column"
                        justifyContent="center"
                        alignItem="center"
                    >
                        <div style={{ fontFamily: 'poppinsSemiBold', fontSize: '22px' }}>
                            {'200+'}
                        </div>
                        <div style={{ fontFamily: 'poppinsRegular', fontSize: '11px' }}>
                            {'Sessions'}
                        </div>
                    </FLexLayout>

                    {/* stats-box-2 */}

                    <FLexLayout
                        style={{ height: `${0.22 * width}px`, width: `${0.2 * width}px` }}
                        className={Style.statsBox}
                        rowORColumn="column"
                        justifyContent="center"
                        alignItem="center"
                    >
                        <div style={{ fontFamily: 'poppinsSemiBold', fontSize: '22px' }}>
                            {'1000+'}
                        </div>
                        <div style={{ fontFamily: 'poppinsRegular', fontSize: '11px' }}>
                            {'Participants'}
                        </div>
                    </FLexLayout>

                    {/* stats-box-3 */}

                    <FLexLayout
                        style={{ height: `${95}px`, width: `${85}px` }}
                        className={Style.statsBox}
                        rowORColumn="column"
                        justifyContent="center"
                        alignItem="center"
                    >
                        <div style={{ fontFamily: 'poppinsSemiBold', fontSize: '22px' }}>
                            {'100+'}
                        </div>
                        <div style={{ fontFamily: 'poppinsRegular', fontSize: '11px' }}>
                            {'Mentors'}
                        </div>
                    </FLexLayout>
                </FLexLayout>

                {/* our-mentor-text-container */}

                <FLexLayout
                    rowORColumn="column"
                    justifyContent="center"
                    alignItem="center"
                    style={{
                        textAlign: 'center',
                        fontFamily: 'poppinsSemiBoldItalic',
                        fontSize: '36px',
                        marginTop: '29px'
                    }}
                >
                    <FLexLayout rowORColumn="row">
                        <div> {'Our Mentors'}</div>
                    </FLexLayout>
                </FLexLayout>

                {/* our-mentors-carousel */}
                <Carousel interval={2000} fade={true} controls={false} indicators={false}>
                    {mentorData.map((mentor) => {
                        return (
                            <Carousel.Item>
                                <FLexLayout
                                    style={{ marginTop: '120px' }}
                                    rowORColumn="row"
                                    justifyContent="center"
                                    alignItem="center"
                                >
                                    <FLexLayout
                                        rowORColumn="column"
                                        className={Style['mentor-card']}
                                    >
                                        {/* image-container */}
                                        <div
                                            style={{ background: `url("${mentor.imageName}")` }}
                                            className={Style['circular-image']}
                                        ></div>

                                        {/* name-container */}
                                        <FLexLayout
                                            style={{ position: 'relative', top: '-60px' }}
                                            rowORColumn="row"
                                            justifyContent="center"
                                            alignItem="center"
                                        >
                                            <div
                                                style={{
                                                    fontFamily: 'poppinsBold',
                                                    fontSize: '18px'
                                                }}
                                            >
                                                {' '}
                                                {mentor.mentorName}{' '}
                                            </div>
                                        </FLexLayout>

                                        {/* description-container */}
                                        <FLexLayout
                                            style={{
                                                fontFamily: 'poppinsRegular',
                                                fontSize: '12px',
                                                position: 'relative',
                                                top: '-50px'
                                            }}
                                            rowORColumn="row"
                                            justifyContent="center"
                                            alignItem="center"
                                        >
                                            <FLexLayout rowORColumn="row" style={{ width: '80%' }}>
                                                <div>
                                                    <ul>
                                                        {mentor.description.map((x) => {
                                                            return (
                                                                <li
                                                                    className={
                                                                        Style.mentorDescription
                                                                    }
                                                                >
                                                                    {x}
                                                                </li>
                                                            );
                                                        })}
                                                    </ul>
                                                </div>
                                            </FLexLayout>
                                        </FLexLayout>

                                        {/* linkedin-icon-container */}
                                        <FLexLayout
                                            rowORColumn="row"
                                            justifyContent="center"
                                            alignItem="center"
                                            style={{ position: 'relative', top: '-20px' }}
                                        >
                                            <Image
                                                src="/icons/linkedin 1.png"
                                                style={{ width: '24px', height: '24px' }}
                                            />
                                        </FLexLayout>
                                    </FLexLayout>
                                </FLexLayout>
                            </Carousel.Item>
                        );
                    })}
                </Carousel>

                {/* brand-advertisement-container */}

                <FLexLayout
                    style={{
                        padding: '32px',
                        width: `${0.87 * width}px`,
                        height: `${340}px`,
                        marginLeft: `${0.06 * width}px`,
                        marginRight: `${0.06 * width}px`
                    }}
                    rowORColumn="column"
                    className={Style['brand-advertisement-container']}
                >
                    {/* text-container */}

                    <FLexLayout rowORColumn="row" justifyContent="center" alignItem="center">
                        {/* heading */}
                        <div
                            style={{
                                textAlign: 'center',
                                fontFamily: 'poppinsSemiBoldItalic',
                                fontSize: '14px'
                            }}
                        >
                            {'Get Live-Mentorship by Professionals working with'}
                        </div>
                    </FLexLayout>

                    {/* underline-container */}
                    <FLexLayout rowORColumn="column" justifyContent="center" alignItem="center">
                        {/* underline */}
                        <FLexLayout
                            style={{ marginTop: '17px' }}
                            rowORColumn="row"
                            justifyContent="center"
                            alignItem="center"
                        >
                            <div
                                style={{
                                    height: '2px',
                                    width: `${0.15 * width}px`,
                                    backgroundColor: 'black'
                                }}
                            >
                                {' '}
                            </div>
                        </FLexLayout>
                    </FLexLayout>

                    {/* brand-icon-container */}

                    <FLexLayout
                        rowORColumn="column"
                        style={{ paddingLeft: '20px', paddingRight: '20px', marginTop: '22px' }}
                    >
                        {/* icon-row-1 */}
                        <FLexLayout
                            rowORColumn="row"
                            justifyContent="between"
                            style={{ marginTop: '25px' }}
                        >
                            <Image height="30px" width="76px" src="/icons/Amazon logo.png" />
                            <Image height="23px" width="44px" src="/icons/unnamed (1).png" />
                            <Image height="19px" width="70px" src="/icons/BharatPe 1.png" />
                        </FLexLayout>

                        {/* icon-row-2 */}
                        <FLexLayout
                            rowORColumn="row"
                            justifyContent="between"
                            style={{ marginTop: '25px' }}
                        >
                            <Image
                                height="15px"
                                width="61px"
                                src="/icons/Adobe_Corporate_Logo.png"
                            />
                            <Image height="26px" width="24px" src="/icons/Ducati_red_logo 1.png" />
                            <Image height="17px" width="70px" src="/icons/Walmart_logo.png" />
                        </FLexLayout>

                        {/* icon-row-3 */}
                        <FLexLayout
                            rowORColumn="row"
                            justifyContent="between"
                            style={{ marginTop: '25px' }}
                        >
                            <Image height="21px" width="58px" src="/icons/Facebook-New-Logo.png" />
                            <Image
                                height="12px"
                                width="59px"
                                src="/icons/microsoft-logo-images-png-33.png"
                            />
                            <Image height="21px" width="73px" src="/icons/purepng.png" />
                        </FLexLayout>

                        {/* icon-row-4 */}
                        <FLexLayout
                            rowORColumn="row"
                            justifyContent="between"
                            style={{ marginTop: '25px' }}
                            alignItem="center"
                        >
                            <Image height="43px" width="65px" src="/icons/Paytm-Logo 1.png" />
                            <Image height="22px" width="68px" src="/icons/ig-logo 1.png" />
                            <Image
                                height="13px"
                                width="66px"
                                src="/icons/1200px-The_World_Bank_logo 1.png"
                            />
                        </FLexLayout>
                    </FLexLayout>
                </FLexLayout>

                {/* heading-text-check-our-program */}
                <FLexLayout
                    rowORColumn="column"
                    justifyContent="center"
                    alignItem="center"
                    style={{
                        margin: '49px',
                        marginBottom: '0px',
                        textAlign: 'center',
                        fontFamily: 'poppinsSemiBoldItalic',
                        fontSize: '24px',
                        color: 'white'
                    }}
                >
                    <FLexLayout rowORColumn="row">
                        <div> {'Check out our Mentorship Programs'}</div>
                    </FLexLayout>
                </FLexLayout>

                {/* program-card-container */}
                <Carousel indicators={false} controls={false} interval={3500}>
                    {programsCardsMetaData.map((cardData) => {
                        return (
                            <Carousel.Item>
                                <FLexLayout
                                    justifyContent="center"
                                    alignItem="center"
                                    rowORColumn="row"
                                    style={{
                                        height: '650px'
                                        // paddingBottom: '40px'
                                    }}
                                >
                                    {/* program-card */}
                                    <FLexLayout
                                        style={{
                                            width: `${0.77 * width}px`,
                                            height: '504px',
                                            backgroundImage: `url("${cardData.backgroundImage}")`,
                                            backgroundPosition: 'center',
                                            backgroundSize: 'cover',
                                            boxShadow: cardData['box-shadow']
                                        }}
                                        className={Style.programCard}
                                        rowORColumn="column"
                                        justifyContent="between"
                                    >
                                        {/* program- heading - container  */}
                                        <FLexLayout
                                            style={{ marginTop: '30px' }}
                                            justifyContent="center"
                                            alignItem="center"
                                            rowORColumn="row"
                                        >
                                            {/* program-heading */}
                                            <div
                                                style={{ textAlign: 'center' }}
                                                className={Style.programHeading}
                                            >
                                                {cardData.name}
                                            </div>
                                        </FLexLayout>

                                        {/* data-weeks-container */}
                                        <FLexLayout
                                            rowORColumn="row"
                                            alignItem="center"
                                            justifyContent="center"
                                        >
                                            {/* data-weeks-outer-box */}
                                            <FLexLayout
                                                rowORColumn="row"
                                                justifyContent="between"
                                                style={{ width: '80%' }}
                                            >
                                                {/* data-weeks-value-box-1 */}
                                                <FLexLayout rowORColumn="column" alignItem="center">
                                                    {/* data-value */}
                                                    <FLexLayout
                                                        className={Style['data-weeks-value-box']}
                                                        justifyContent="center"
                                                        alignItem="center"
                                                        rowORColumn="column"
                                                    >
                                                        <div>{cardData.weeks}</div>
                                                    </FLexLayout>

                                                    {/* data-value-label */}
                                                    <div className={Style['data-value-label']}>
                                                        {'weeks'}
                                                    </div>
                                                </FLexLayout>

                                                {/* data-weeks-value-box-2 */}
                                                <FLexLayout rowORColumn="column" alignItem="center">
                                                    {/* data-value */}
                                                    <FLexLayout
                                                        className={Style['data-weeks-value-box']}
                                                        justifyContent="center"
                                                        alignItem="center"
                                                        rowORColumn="column"
                                                    >
                                                        <div>{cardData.peopleUpSkilled}</div>
                                                    </FLexLayout>

                                                    {/* data-value-label */}
                                                    <div className={Style['data-value-label']}>
                                                        {'People Up Skilled'}
                                                    </div>
                                                </FLexLayout>

                                                {/* data-weeks-value-box-3 */}
                                                <FLexLayout rowORColumn="column" alignItem="center">
                                                    {/* data-value */}
                                                    <FLexLayout
                                                        className={Style['data-weeks-value-box']}
                                                        justifyContent="center"
                                                        alignItem="center"
                                                        rowORColumn="column"
                                                    >
                                                        <div>{cardData.sessions}</div>
                                                    </FLexLayout>

                                                    {/* data-value-label */}
                                                    <div className={Style['data-value-label']}>
                                                        {'Sessions'}
                                                    </div>
                                                </FLexLayout>
                                            </FLexLayout>
                                        </FLexLayout>

                                        {/* underline */}
                                        <FLexLayout
                                            rowORColumn="row"
                                            justifyContent="center"
                                            alignItem="center"
                                        >
                                            <div
                                                style={{
                                                    height: '3px',
                                                    width: `${0.15 * width}px`,
                                                    backgroundColor: 'white'
                                                }}
                                            >
                                                {' '}
                                            </div>
                                        </FLexLayout>

                                        {/* card-text */}

                                        <FLexLayout
                                            rowORColumn="column"
                                            justifyContent="center"
                                            alignItem="center"
                                            style={{
                                                textAlign: 'center',
                                                fontFamily: 'poppinsSemiBold',
                                                fontSize: '13px'
                                            }}
                                        >
                                            <FLexLayout style={{ width: '80%' }} rowORColumn="row">
                                                <div>{cardData.description}</div>
                                            </FLexLayout>
                                        </FLexLayout>

                                        {/* apply-now-button-container */}
                                        <FLexLayout
                                            rowORColumn="row"
                                            alignItem="center"
                                            justifyContent="center"
                                        >
                                            {/* apply-now-button */}
                                            <FLexLayout
                                                className={Style['apply-now-button']}
                                                justifyContent="between"
                                                rowORColumn="row"
                                                style={{ width: '80%' }}
                                            >
                                                {/* apply-now-text */}
                                                <div className={Style['apply-now-text']}>
                                                    {'Apply Now'}
                                                </div>

                                                {/* price-container */}
                                                <FLexLayout rowORColumn="row">
                                                    {/* ruppeeee-symbol */}
                                                    <div
                                                        style={{
                                                            fontFamily: 'poppinsMedium',
                                                            fontSize: '14px',
                                                            color: 'white',
                                                            marginRight: '5px'
                                                        }}
                                                    >
                                                        {' '}
                                                        &#8377;{' '}
                                                    </div>

                                                    {/* price-box */}
                                                    <FLexLayout rowORColumn="column">
                                                        <div
                                                            style={{
                                                                fontFamily: 'poppinsMedium',
                                                                fontSize: '14px',
                                                                color: 'white'
                                                            }}
                                                        >
                                                            {cardData.princeAfterDiscount}
                                                        </div>
                                                        <div
                                                            style={{
                                                                fontFamily: 'poppinsLightItalic',
                                                                fontSize: '9px',
                                                                color: 'white'
                                                            }}
                                                        >
                                                            <del>
                                                                {cardData.priceBeforeDiscount}
                                                            </del>
                                                        </div>
                                                    </FLexLayout>

                                                    <Image
                                                        style={{
                                                            marginLeft: '14px',
                                                            height: '20px'
                                                        }}
                                                        src="icons/Arrow 1.png"
                                                    />
                                                </FLexLayout>
                                            </FLexLayout>
                                        </FLexLayout>

                                        {/* brands-strip  */}

                                        <FLexLayout
                                            rowORColumn="row"
                                            justifyContent="between"
                                            alignItem="center"
                                            style={{
                                                padding: '15px',
                                                backgroundColor: 'white',
                                                width: '100%',
                                                height: '41px',
                                                borderBottomLeftRadius: '16px',
                                                borderBottomRightRadius: '16px'
                                            }}
                                        >
                                            {cardData.brands.map((brand) => {
                                                return (
                                                    <Image
                                                        src={brand.name}
                                                        style={{
                                                            width: brand.width,
                                                            height: brand.height
                                                        }}
                                                    />
                                                );
                                            })}
                                        </FLexLayout>
                                    </FLexLayout>
                                </FLexLayout>
                            </Carousel.Item>
                        );
                    })}
                </Carousel>

                {/* heading-text-perks-&-Benefits */}
                <FLexLayout
                    rowORColumn="column"
                    justifyContent="center"
                    alignItem="center"
                    style={{
                        textAlign: 'center',
                        fontFamily: 'poppinsSemiBoldItalic',
                        fontSize: '24px',
                        color: 'white',
                        marginBottom:'54px'
                    }}
                >
                    <FLexLayout rowORColumn="row">
                        <div> {'Perks & Benefits'}</div>
                    </FLexLayout>
                </FLexLayout>

                {/* benefits-container */}
                <FLexLayout rowORColumn="row" justifyContent="center" alignItem="center">
                    {/* benefits-box */}
                    <FLexLayout rowORColumn="column">

                        {/* row-1 */}
                        <FLexLayout rowORColumn="row">
                            {/* perks-box-1 */}
                            <FLexLayout
                                style={{
                                    backgroundImage: 'url("icons/grey_background.png")',
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    marginRight: '17px'
                                }}
                                className={Style['perks-box']}
                                rowORColumn="column"
                                justifyContent="center"
                                alignItem="center"
                            >
                                <div style={{ fontFamily: 'poppinsSemiBold', fontSize: '15px' }}>
                                    {'Live Mentorship'}
                                </div>
                                <div style={{ fontFamily: 'poppinsMedium', fontSize: '9px' }}>
                                    {'With Experts'}
                                </div>
                            </FLexLayout>

                            {/* perks-box-2 */}
                            <FLexLayout
                                style={{
                                    backgroundImage: 'url("icons/grey_background.png")',
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover'
                                }}
                                className={Style['perks-box']}
                                rowORColumn="column"
                                justifyContent="center"
                                alignItem="center"
                            >
                                <div style={{ fontFamily: 'poppinsSemiBold', fontSize: '15px' }}>
                                    {'Certificate'}
                                </div>
                                <div style={{ fontFamily: 'poppinsMedium', fontSize: '9px' }}>
                                    {'of  Internship'}
                                </div>
                            </FLexLayout>
                        </FLexLayout>

                        {/* row-2 */}
                        <FLexLayout style={{ marginTop: '26px' }} rowORColumn="row">
                            {/* perks-box-1 */}
                            <FLexLayout
                                style={{
                                    backgroundImage: 'url("icons/grey_background.png")',
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    marginRight: '17px'
                                }}
                                className={Style['perks-box']}
                                rowORColumn="column"
                                justifyContent="center"
                                alignItem="center"
                            >
                                <div style={{ fontFamily: 'poppinsSemiBold', fontSize: '15px' }}>
                                    {'Live Mentorship'}
                                </div>
                                <div style={{ fontFamily: 'poppinsMedium', fontSize: '9px' }}>
                                    {'With Experts'}
                                </div>
                            </FLexLayout>

                            {/* perks-box-2 */}
                            <FLexLayout
                                style={{
                                    backgroundImage: 'url("icons/grey_background.png")',
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover'
                                }}
                                className={Style['perks-box']}
                                rowORColumn="column"
                                justifyContent="center"
                                alignItem="center"
                            >
                                <div style={{ fontFamily: 'poppinsSemiBold', fontSize: '15px' }}>
                                    {'Certificate'}
                                </div>
                                <div style={{ fontFamily: 'poppinsMedium', fontSize: '9px' }}>
                                    {'of  Internship'}
                                </div>
                            </FLexLayout>
                        </FLexLayout>
                    </FLexLayout>
                </FLexLayout>

                {/* scholars-from-container */}
                <FLexLayout justifyContent="center" alignItem="center" rowORColumn="row">
                    {/* scholars from-card */}
                    <FLexLayout className={Style['scholars-from-card']} rowORColumn="column">
                        {/* scholars from heading container */}
                        <FLexLayout
                            style={{ marginTop: '26px' }}
                            rowORColumn="row"
                            justifyContent="center"
                            alignItem="center"
                        >
                            <FLexLayout rowORColumn="row">
                                <div
                                    style={{
                                        fontFamily: 'poppinsSemiBoldItalic',
                                        fontSize: '36px'
                                    }}
                                >
                                    {'Scholars From'}
                                </div>
                            </FLexLayout>
                        </FLexLayout>

                        {/* underline-container */}
                        <FLexLayout rowORColumn="column" justifyContent="center" alignItem="center">
                            {/* underline */}

                            <FLexLayout
                                style={{ marginTop: '39px' }}
                                rowORColumn="row"
                                justifyContent="center"
                                alignItem="center"
                            >
                                <div
                                    style={{
                                        height: '2px',
                                        width: `${40}px`,
                                        backgroundColor: 'black'
                                    }}
                                >
                                    {' '}
                                </div>
                            </FLexLayout>
                        </FLexLayout>

                        {/* scholar-images */}
                        <FLexLayout
                            style={{ marginTop: '45px' }}
                            rowORColumn="row"
                            justifyContent="center"
                            alignItem="center"
                        >
                            <Image style={{ width: '340px' }} src="/icons/scholars.png" />
                        </FLexLayout>
                    </FLexLayout>
                </FLexLayout>

                {/* heading -why us ? */}
                <FLexLayout
                    style={{ marginTop: '105px' }}
                    rowORColumn="row"
                    justifyContent="center"
                    alignItem="center"
                >
                    <FLexLayout rowORColumn="row">
                        <div
                            style={{
                                fontFamily: 'poppinsSemiBoldItalic',
                                fontSize: '36px'
                            }}
                        >
                            {'Why Us?'}
                        </div>
                    </FLexLayout>
                </FLexLayout>

                {/*  why us- paragraph ? */}
                <FLexLayout
                    style={{ marginTop: '48px' }}
                    rowORColumn="row"
                    justifyContent="center"
                    alignItem="center"
                >
                    <FLexLayout style={{ width: '80%' }} rowORColumn="row">
                        <div
                            style={{
                                fontFamily: 'poppinsRegular',
                                fontSize: '18px',
                                textAlign: 'center'
                            }}
                        >
                            {whyUsParagraph}
                        </div>
                    </FLexLayout>
                </FLexLayout>

                {/* heading-testimonials*/}
                <FLexLayout
                    rowORColumn="column"
                    justifyContent="center"
                    alignItem="center"
                    style={{
                        marginTop: '134px',
                        textAlign: 'center',
                        fontFamily: 'poppinsSemiBoldItalic',
                        fontSize: '36px'
                    }}
                >
                    <FLexLayout rowORColumn="row">
                        <div> {'Testimonials'}</div>
                    </FLexLayout>
                </FLexLayout>

                {/* testimonial-learn-container-1 */}

                <FLexLayout
                    style={{ marginTop: '32px' }}
                    rowORColumn="column"
                    justifyContent="center"
                    alignItem="center"
                >
                    {/* testimonial-learn-card */}
                    <FLexLayout
                        style={{ width: '80%' }}
                        className={Style['testimonial-learn-card']}
                        rowORColumn="row"
                    >
                        <Image
                            style={{ width: '70px', height: '100%' }}
                            src="icons/Rectangle 98.png"
                        />

                        <FLexLayout rowORColumn="column" style={{ marginLeft: '17px' }}>
                            <div style={{ fontFamily: 'poppinsSemiBold', fontSize: '16px' }}>
                                {'Vipul Ghai'}
                            </div>
                            <div style={{ fontFamily: 'poppinsLight', fontSize: '8px' }}>
                                {' '}
                                {'The Design Village'}{' '}
                            </div>

                            <div
                                style={{
                                    marginTop: '15px',
                                    fontFamily: 'poppinsRegular',
                                    fontSize: '13px'
                                }}
                            >
                                {testimonialLearn}
                            </div>
                        </FLexLayout>
                    </FLexLayout>
                </FLexLayout>

                {/* testimonial-learn-container-2 */}

                <FLexLayout
                    style={{ marginTop: '32px' }}
                    rowORColumn="column"
                    justifyContent="center"
                    alignItem="center"
                >
                    {/* testimonial-learn-card */}
                    <FLexLayout
                        style={{ width: '80%' }}
                        className={Style['testimonial-learn-card']}
                        rowORColumn="row"
                    >
                        <Image
                            style={{ width: '70px', height: '100%' }}
                            src="icons/Rectangle 98.png"
                        />

                        <FLexLayout rowORColumn="column" style={{ marginLeft: '17px' }}>
                            <div style={{ fontFamily: 'poppinsSemiBold', fontSize: '16px' }}>
                                {'Vipul Ghai'}
                            </div>
                            <div style={{ fontFamily: 'poppinsLight', fontSize: '8px' }}>
                                {' '}
                                {'The Design Village'}{' '}
                            </div>

                            <div
                                style={{
                                    marginTop: '15px',
                                    fontFamily: 'poppinsRegular',
                                    fontSize: '13px'
                                }}
                            >
                                {testimonialLearn}
                            </div>
                        </FLexLayout>
                    </FLexLayout>
                </FLexLayout>

                {/* testimonial-learn-container-3 */}
                <FLexLayout
                    style={{ marginTop: '32px' }}
                    rowORColumn="column"
                    justifyContent="center"
                    alignItem="center"
                >
                    {/* testimonial-learn-card */}
                    <FLexLayout
                        style={{ width: '80%' }}
                        className={Style['testimonial-learn-card']}
                        rowORColumn="row"
                    >
                        <Image
                            style={{ width: '70px', height: '100%' }}
                            src="icons/Rectangle 98.png"
                        />

                        <FLexLayout rowORColumn="column" style={{ marginLeft: '17px' }}>
                            <div style={{ fontFamily: 'poppinsSemiBold', fontSize: '16px' }}>
                                {'Vipul Ghai'}
                            </div>
                            <div style={{ fontFamily: 'poppinsLight', fontSize: '8px' }}>
                                {' '}
                                {'The Design Village'}{' '}
                            </div>

                            <div
                                style={{
                                    marginTop: '15px',
                                    fontFamily: 'poppinsRegular',
                                    fontSize: '13px'
                                }}
                            >
                                {testimonialLearn}
                            </div>
                        </FLexLayout>
                    </FLexLayout>
                </FLexLayout>

                {/* drop-a-query-box */}
                <FLexLayout
                    className={Style.queryBox}
                    justifyContent="center"
                    alignItem="center"
                    rowORColumn="row"
                >
                    <FLexLayout alignItem='center' rowORColumn="row">
                        <div>{'Drop in a Query'}</div>
                        <Image
                            style={{ marginLeft: '13px', width: '27px', height: '15px' }}
                            src="icons/Arrow 2.png"
                        />
                    </FLexLayout>
                </FLexLayout>
                  
                   
                 {/* footer-box */}
                 <Footer/>

            </div>
        </div>
    );
};

export default _MetvyLearn;
