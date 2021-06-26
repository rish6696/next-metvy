import React, { useState, useEffect } from 'react';
import FLexLayout from '../../components/FlexLayout';
import HeaderLearn from '../../components/HeaderLearn/HeaderLearn';
import Style from './MetvyLearn.module.css';
import { Image, Carousel, Container, Row, Col } from 'react-bootstrap';
import TestimonialCard from '../../components/TestimonialCard/testimonialCard'

import {
    testimonialLearn,
    coursesLearnScreenAdvertisementMetaData,
    mentorData,
    programsCardsMetaData,
    whyUsParagraph,
    courses,
    learnTestimonialsData
} from '../../constants';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import Footer from '../../components/Footer/Footer';
import { connect } from 'react-redux';
import { setWidth } from '../../redux/Actions/Screenconfig';
import { useRouter } from 'next/router';


import { Carousel as CarouselAdvertisement } from 'react-responsive-carousel';

const _MetvyLearn = ({ width, setWidth }) => {
    useEffect(() => {
        setWidth(window.innerWidth);
        window.addEventListener('resize', () => setWidth(window.innerWidth));
    }, []);

    const [animationState, setAnimationState] = useState('running');


    const advertisements = coursesLearnScreenAdvertisementMetaData.map((advertisement) => {
        return (
            <FLexLayout
                style={{ marginTop: '29px', height: '376px' }}
                rowORColumn="row"
                justifyContent="center"
                alignItem="center"
            >
                <FLexLayout
                    className={Style.mentorshipCard}
                    rowORColumn="column"
                    justifyContent="between"
                    style={{
                        width: `${362}px`,
                        height: `282px`,
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
                            height: advertisement.illustratorImgHeight,
                            marginTop: '26px'
                        }}
                    />

                    <FLexLayout rowORColumn="row" justifyContent="center" alignItem="center">
                        <div
                            style={{
                                marginTop: '9px',
                                lineHeight: '22px',
                                width: '221px'
                            }}
                        >
                            {advertisement.text}
                        </div>
                    </FLexLayout>

                    <div
                        style={{
                            height: '2px',
                            width: `${22}px`,
                            backgroundColor: 'black',
                            marginTop: '10px'
                        }}
                    ></div>

                    <div
                        style={{
                            fontFamily: 'poppinsRegular',
                            fontSize: '12px',
                            marginTop: '8px',
                            lineHeight: '13px',
                            marginBottom: '10px'
                        }}
                    >
                        {'Mentors from '}
                    </div>

                    <FLexLayout
                        rowORColumn="row"
                        justifyContent="between"
                        alignItem="center"
                        style={{
                            backgroundColor: 'white',
                            width: '100%',
                            height: '41px',
                            paddingLeft: '40px',
                            paddingRight: '40px'
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
            </FLexLayout>
        );
    });

    const getAdvertisementCard = (advertisement, marginRight) => {
        return (
            <FLexLayout
                style={{ marginTop: '29px', height: '376px', marginRight: marginRight }}
                rowORColumn="row"
                justifyContent="center"
                alignItem="center"
            >
                <FLexLayout
                    className={Style.mentorshipCard}
                    rowORColumn="column"
                    justifyContent="between"
                    style={{
                        width: `${362}px`,
                        height: `282px`,
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
                            height: advertisement.illustratorImgHeight,
                            marginTop: '26px'
                        }}
                    />

                    <FLexLayout rowORColumn="row" justifyContent="center" alignItem="center">
                        <div
                            style={{
                                marginTop: '9px',
                                lineHeight: '22px',
                                width: '221px'
                            }}
                        >
                            {advertisement.text}
                        </div>
                    </FLexLayout>

                    <div
                        style={{
                            height: '2px',
                            width: `${22}px`,
                            backgroundColor: 'black',
                            marginTop: '10px'
                        }}
                    ></div>

                    <div
                        style={{
                            fontFamily: 'poppinsRegular',
                            fontSize: '12px',
                            marginTop: '8px',
                            lineHeight: '13px',
                            marginBottom: '10px'
                        }}
                    >
                        {'Mentors from '}
                    </div>

                    <FLexLayout
                        rowORColumn="row"
                        justifyContent="between"
                        alignItem="center"
                        style={{
                            backgroundColor: 'white',
                            width: '100%',
                            height: '41px',
                            paddingLeft: '40px',
                            paddingRight: '40px'
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
            </FLexLayout>
        );
    };

    const getAdvertisementBasedOnScreenWidth = () => {
        let itemToReturn = [];
        // accommodating 2 banners in a view

        if (width >= 1190) {
            let i = 0;
            while (i < coursesLearnScreenAdvertisementMetaData.length) {
                const advertisementOne = coursesLearnScreenAdvertisementMetaData[i];
                const advertisementTwo = coursesLearnScreenAdvertisementMetaData[++i];
                const advertisementThird = coursesLearnScreenAdvertisementMetaData[++i];

                i++;

                itemToReturn.push(
                    <FLexLayout justifyContent="center" rowORColumn="row">
                        {getAdvertisementCard(advertisementOne, '30px')}
                        {getAdvertisementCard(advertisementTwo, '30px')}
                        {getAdvertisementCard(advertisementThird, '')}
                    </FLexLayout>
                );
            }

            return itemToReturn;
        }

        if (width >= 800) {
            let i = 0;
            while (i < coursesLearnScreenAdvertisementMetaData.length) {
                const advertisementOne = coursesLearnScreenAdvertisementMetaData[i];
                const advertisementTwo = coursesLearnScreenAdvertisementMetaData[++i];

                i++;

                itemToReturn.push(
                    <FLexLayout justifyContent="center" rowORColumn="row">
                        {getAdvertisementCard(advertisementOne, '30px')}
                        {getAdvertisementCard(advertisementTwo, '')}
                    </FLexLayout>
                );
            }

            return itemToReturn;
        }

        let i = 0;
        while (i < coursesLearnScreenAdvertisementMetaData.length) {
            const advertisementOne = coursesLearnScreenAdvertisementMetaData[i];

            i++;

            itemToReturn.push(
                <FLexLayout justifyContent="center" rowORColumn="row">
                    {getAdvertisementCard(advertisementOne,0)}
                </FLexLayout>
            );
        }
        return itemToReturn;
    };

    const router = useRouter()

    const programCardComponent = programsCardsMetaData.map((cardData) => {
        return (
            <FLexLayout
                justifyContent="center"
                alignItem="center"
                rowORColumn="row"
                style={{
                    height: '650px'
                    // paddingBottom: '40px'
                }}
                onClick={() => router.push(cardData.routePath)}
            >
                {/* program-card */}
                <FLexLayout
                    style={{
                        width: `321px`,
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
                        <div style={{ textAlign: 'center' }} className={Style.programHeading}>
                            {cardData.name}
                        </div>
                    </FLexLayout>

                    {/* data-weeks-container */}
                    <FLexLayout rowORColumn="row" alignItem="center" justifyContent="center">
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
                                <div className={Style['data-value-label']}>{'weeks'}</div>
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
                                <div className={Style['data-value-label']}>{'Sessions'}</div>
                            </FLexLayout>
                        </FLexLayout>
                    </FLexLayout>

                    {/* underline */}
                    <FLexLayout rowORColumn="row" justifyContent="center" alignItem="center">
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
                    <FLexLayout rowORColumn="row" alignItem="center" justifyContent="center">
                        {/* apply-now-button */}
                        <FLexLayout
                            className={Style['apply-now-button']}
                            justifyContent="between"
                            rowORColumn="row"
                            style={{ width: '80%' }}
                        >
                            {/* apply-now-text */}
                            <div className={Style['apply-now-text']}>{'Apply Now'}</div>

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
                                        <del>{cardData.priceBeforeDiscount}</del>
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
        );
    });

    return (
        <div>
            <HeaderLearn />
            <div
                className={Style['container']}
                style={{
                    paddingTop: '100px'
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
                    {getAdvertisementBasedOnScreenWidth()}
                </CarouselAdvertisement>

                {/* 30-days cohort - heading- container */}

                <FLexLayout rowORColumn="column" justifyContent="center" alignItem="center">
                    <div className={Style.bannerText}>
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

                {/* our-mentors-carousel-mobile */}
                {width <= 768 && (
                    <Carousel interval={2000} fade={true} controls={false} indicators={false}>
                        {mentorData.map((mentor) => {
                            return (
                                <Carousel.Item>
                                    <FLexLayout
                                        style={{ marginTop: '120px', height: '490px' }}
                                        rowORColumn="row"
                                        justifyContent="center"
                                        alignItem="center"
                                    >
                                        <FLexLayout
                                            rowORColumn="column"
                                            className={Style['mentor-card']}
                                        >
                                            {/* image-container */}
                                            <FLexLayout
                                                className={Style['circular-image-container']}
                                                rowORColumn="row"
                                                justifyContent="center"
                                                alignItem="center"
                                            >
                                                <div
                                                    style={{
                                                        background: `url("${mentor.imageName}")`
                                                    }}
                                                    className={Style['circular-image']}
                                                ></div>
                                            </FLexLayout>

                                            {/* name-container */}
                                            <FLexLayout
                                                style={{ position: 'relative', top: '-82px' }}
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
                                                    lineHeight: '16px',
                                                    top: '-70px'
                                                }}
                                                rowORColumn="row"
                                                justifyContent="center"
                                                alignItem="center"
                                            >
                                                <FLexLayout
                                                    rowORColumn="row"
                                                    style={{ width: '80%' }}
                                                >
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
                                                style={{ position: 'relative', top: '-65px' }}
                                                onClick={()=>window.open(mentor.linkedIn)}
                                            >
                                                <Image
                                                    src="/icons/linkedin 1.png"
                                                    style={{ width: '24px', height: '24px',cursor:'pointer' }}
                                                  
                                                />
                                            </FLexLayout>
                                        </FLexLayout>
                                    </FLexLayout>
                                </Carousel.Item>
                            );
                        })}
                    </Carousel>
                )}

                {/* our-mentors-carousel-desktop */}
                {width > 768 && (
                    <Container fluid={true}>
                        <Row>
                            {mentorData.map((mentor) => {
                                return (
                                    <Col xl={4} lg={4} md={6}>
                                        <FLexLayout
                                            style={{ marginTop: '120px', height: '490px' }}
                                            rowORColumn="row"
                                            justifyContent="center"
                                            alignItem="center"
                                        >
                                            <FLexLayout
                                                rowORColumn="column"
                                                className={Style['mentor-card']}
                                            >
                                                {/* image-container */}
                                                <FLexLayout
                                                    className={Style['circular-image-container']}
                                                    rowORColumn="row"
                                                    justifyContent="center"
                                                    alignItem="center"
                                                >
                                                    <div
                                                        style={{
                                                            background: `url("${mentor.imageName}")`
                                                        }}
                                                        className={Style['circular-image']}
                                                    ></div>
                                                </FLexLayout>

                                                {/* name-container */}
                                                <FLexLayout
                                                    style={{ position: 'relative', top: '-82px' }}
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
                                                        lineHeight: '16px',
                                                        top: '-70px'
                                                    }}
                                                    rowORColumn="row"
                                                    justifyContent="center"
                                                    alignItem="center"
                                                >
                                                    <FLexLayout
                                                        rowORColumn="row"
                                                        style={{ width: '80%' }}
                                                    >
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
                                                    style={{ position: 'relative', top: '-65px' }}
                                                >
                                                    <Image
                                                        src="/icons/linkedin 1.png"
                                                        style={{ cursor:'pointer',width: '24px', height: '24px' }}
                                                        onClick={()=>window.open(mentor.linkedIn)}
                                                    />
                                                </FLexLayout>
                                            </FLexLayout>
                                        </FLexLayout>
                                    </Col>
                                );
                            })}
                        </Row>
                    </Container>
                )}

                {/* brand-advertisement-container */}

                <FLexLayout rowORColumn="row" justifyContent="center" alignItem="center">
                    <FLexLayout
                        style={{
                            padding: '32px',
                            width: `${362}px`,
                            height: `${340}px`
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
                                <Image
                                    height="26px"
                                    width="24px"
                                    src="/icons/Ducati_red_logo 1.png"
                                />
                                <Image height="17px" width="70px" src="/icons/Walmart_logo.png" />
                            </FLexLayout>

                            {/* icon-row-3 */}
                            <FLexLayout
                                rowORColumn="row"
                                justifyContent="between"
                                style={{ marginTop: '25px' }}
                            >
                                <Image
                                    height="21px"
                                    width="58px"
                                    src="/icons/Facebook-New-Logo.png"
                                />
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
                                <Image style={{width:'58px',height:'21px'}} src="/icons/Paytm-Logo 1.png" />
                                <Image height="22px" width="68px" src="/icons/ig-logo 1.png" />
                                <Image
                                    height="13px"
                                    width="66px"
                                    src="/icons/1200px-The_World_Bank_logo 1.png"
                                />
                            </FLexLayout>
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
                {width <= 768 && (
                    <CarouselAdvertisement
                        infiniteLoop={true}
                        autoPlay={true}
                        showArrows={false}
                        showIndicators={false}
                        showStatus={false}
                        showThumbs={false}
                        axis={'horizontal'}
                    >
                        {programCardComponent}
                    </CarouselAdvertisement>
                )}

                {/* program-card-container-desktop */}
                {width > 768 && (
                    <Container fluid={true}>
                        <Row
                            style={{
                                display: 'flex',
                                flexDirection: 'row',
                                justifyContent: 'space-evenly'
                            }}
                        >
                            {programsCardsMetaData.map((cardData) => {
                                return (
                                    <Col onClick={() => router.push(cardData.routePath)}  xl={4} lg={4} md={6} >
                                        <FLexLayout
                                            justifyContent="center"
                                            alignItem="center"
                                            rowORColumn="row"
                                            style={{
                                                height: '650px',
                                                cursor : "pointer"
                                                // paddingBottom: '40px'
                                            }}
                                        >
                                            {/* program-card */}
                                            <FLexLayout
                                                style={{
                                                    width: `321px`,
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
                                                        <FLexLayout
                                                            rowORColumn="column"
                                                            alignItem="center"
                                                        >
                                                            {/* data-value */}
                                                            <FLexLayout
                                                                className={
                                                                    Style['data-weeks-value-box']
                                                                }
                                                                justifyContent="center"
                                                                alignItem="center"
                                                                rowORColumn="column"
                                                            >
                                                                <div>{cardData.weeks}</div>
                                                            </FLexLayout>

                                                            {/* data-value-label */}
                                                            <div
                                                                className={
                                                                    Style['data-value-label']
                                                                }
                                                            >
                                                                {'weeks'}
                                                            </div>
                                                        </FLexLayout>

                                                        {/* data-weeks-value-box-2 */}
                                                        <FLexLayout
                                                            rowORColumn="column"
                                                            alignItem="center"
                                                        >
                                                            {/* data-value */}
                                                            <FLexLayout
                                                                className={
                                                                    Style['data-weeks-value-box']
                                                                }
                                                                justifyContent="center"
                                                                alignItem="center"
                                                                rowORColumn="column"
                                                            >
                                                                <div>
                                                                    {cardData.peopleUpSkilled}
                                                                </div>
                                                            </FLexLayout>

                                                            {/* data-value-label */}
                                                            <div
                                                                className={
                                                                    Style['data-value-label']
                                                                }
                                                            >
                                                                {'People Up Skilled'}
                                                            </div>
                                                        </FLexLayout>

                                                        {/* data-weeks-value-box-3 */}
                                                        <FLexLayout
                                                            rowORColumn="column"
                                                            alignItem="center"
                                                        >
                                                            {/* data-value */}
                                                            <FLexLayout
                                                                className={
                                                                    Style['data-weeks-value-box']
                                                                }
                                                                justifyContent="center"
                                                                alignItem="center"
                                                                rowORColumn="column"
                                                            >
                                                                <div>{cardData.sessions}</div>
                                                            </FLexLayout>

                                                            {/* data-value-label */}
                                                            <div
                                                                className={
                                                                    Style['data-value-label']
                                                                }
                                                            >
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
                                                            width: `${36}px`,
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
                                                    <FLexLayout
                                                        style={{ width: '80%' }}
                                                        rowORColumn="row"
                                                    >
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
                                                                        fontFamily:
                                                                            'poppinsLightItalic',
                                                                        fontSize: '9px',
                                                                        color: 'white'
                                                                    }}
                                                                >
                                                                    <del>
                                                                        {
                                                                            cardData.priceBeforeDiscount
                                                                        }
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
                                    </Col>
                                );
                            })}
                        </Row>
                    </Container>
                )}

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
                        marginBottom: '54px'
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
                <FLexLayout
                    style={{ marginTop: '140px' }}
                    justifyContent="center"
                    alignItem="center"
                    rowORColumn="row"
                >
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


                {/* testimonials */}

                <FLexLayout
                    style={{ overflow: 'hidden', marginTop: '30px' }}
                    rowORColumn="row"
                    justifyContent="end"
                >
                    <FLexLayout
                        onMouseEnter={() => {
                            setAnimationState('paused');
                        }}
                        onMouseLeave={() => {
                            setAnimationState('running');
                        }}
                        className={Style['effect']}
                        style={{
                            width: '10000%',
                            animationPlayState: animationState
                        }}
                        rowORColumn="row"
                    >
                        {learnTestimonialsData.map(testimonial=>( <TestimonialCard
                            testimonialText={testimonial.text}
                            avatarImage={testimonial.imageName}
                            designation={testimonial.title}
                            avatarName={testimonial.fullName}
                        />))}
                    </FLexLayout>
                </FLexLayout>
                
                {/* drop-a-query-box */}
                {/* <FLexLayout
                    className={Style.queryBox}
                    justifyContent="center"
                    alignItem="center"
                    rowORColumn="row"
                >
                    <FLexLayout alignItem="center" rowORColumn="row">
                        <div>{'Drop in a Query'}</div>
                        <Image
                            style={{ marginLeft: '13px', width: '27px', height: '15px' }}
                            src="icons/Arrow 2.png"
                        />
                    </FLexLayout>
                </FLexLayout> */}

                {/* footer-box */}
                <Footer />
            </div>
        </div>
    );
};

const mapDispatchToProps = (state) => {
    return {
        width: state.screenConfig.width
    };
};

const mapActionToProps = { setWidth };

export default connect(mapDispatchToProps, mapActionToProps)(_MetvyLearn);
