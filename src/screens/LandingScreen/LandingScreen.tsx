import Header from '../../components/HeaderLanding/HeaderLanding';

import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FLexLayout from '../../components/FlexLayout';
import { Image } from 'react-bootstrap';
import {
    brandName,
    firstPartText,
    rating,
    testimonialHeading,
    totalDownloadsLandingScreen
} from '../../constants';
import Style from './LandingScreen.module.css';

import Carousel from '../Carousel/Carousel';
import { useRouter } from 'next/router';

import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel as CarouselTestimonial } from 'react-responsive-carousel';
import { connect } from 'react-redux';
import { setWidth } from '../../redux/Actions/Screenconfig';
import TestimonialCard from '../../components/TestimonialCard/testimonialCard';
import Footer from '../../components/Footer/Footer';

import { Link } from 'react-scroll';

const useStyles = makeStyles({
    list: {
        width: 250
    },
    fullList: {
        width: 'auto'
    }
});

function _LandingScreen({ setWidth, width }) {
    const classes = useStyles();

    useEffect(() => {
        setWidth(window.innerWidth);
        window.addEventListener('resize', () => setWidth(window.innerWidth));
    }, []);

    const [showSidePanel, setShowSidePanel] = useState(false);

    const mentorshipContainerBreakPoint = 1300;

    const [carouselText, setCarouselText] = useState('CHATS');

    const [animationState, setAnimationState] = useState('running');

    const slides = [
        {
            key: 'uuidv4()',
            content: <Image src="/icons/Apple_Explore.png" />
        },
        {
            key: 'uuidv3()',
            content: <Image src="/icons/Apple_Explore.png" />
        },
        {
            key: 'uuidv2()',
            content: <Image src="/icons/Apple_Explore.png" />
        }
    ];

    const router = useRouter();

    const testimonial = (
        <FLexLayout rowORColumn="column" justifyContent="center" alignItem="center">
            <FLexLayout
                rowORColumn="row"
                style={{
                    margin: '30px',
                    height: `${145}px`,
                    width: `${314}px`
                }}
                className={Style.testimonialCard}
            >
                {/* image */}
                <FLexLayout
                    style={{
                        marginRight: '13px',
                        marginTop: '15px',
                        marginLeft: '10px',
                        width: '100%'
                    }}
                    rowORColumn="column"
                    alignItem="center"
                >
                    <Image
                        style={{
                            height: `${0.17 * width}px`,
                            width: `${0.17 * width}px`,
                            borderRadius: '50%',
                            marginBottom: '10px',
                            backgroundColor: 'red'
                        }}
                        src="/icons/ginpic-20180223123437455.jpeg"
                    />

                    <div style={{ textAlign: 'center' }} className={Style.testimonialUserName}>
                        {'Anusha Anand'}
                    </div>
                    <div className={Style.testimonialUserDesignation}>{'SDE'}</div>
                </FLexLayout>

                {/* testimonial- text  */}
                <div className={Style.testimonialUserText}>
                    {
                        '“A community of professionals, freelancers and mentors to help you excel in your endeavours. A community of professionals, freelancers and mentors to help you excel in your endeavours.”'
                    }
                </div>
            </FLexLayout>
        </FLexLayout>
    );

    const testimonials = [1, 2, 3, 4].map((x) => testimonial);

    return (
        <div>
            <Header />
            <div className={Style.container}>
                {/* brand-icon-with-name */}
                <FLexLayout
                    style={{ paddingTop: '120px' }}
                    rowORColumn="row"
                    alignItem="center"
                    justifyContent="center"
                >
                    <FLexLayout justifyContent="center" alignItem="center" rowORColumn="column">
                        <Image
                            style={{ width: '72px', height: '72px' }}
                            src="/icons/ic_launcher.png"
                        />
                        <div className={Style.brandText}>{brandName}</div>
                    </FLexLayout>
                </FLexLayout>

                <FLexLayout
                    alignItem={'center'}
                    justifyContent="center"
                    style={{ marginTop: '67px' }}
                    rowORColumn="column"
                >
                    <div
                        style={{
                            height: '2px',
                            width: `${0.05 * width}px`,
                            background: 'white',
                            marginBottom: '15px'
                        }}
                    >
                        {' '}
                    </div>

                    <div
                        style={{
                            marginLeft: `${0.13 * width}px`,
                            marginRight: `${0.13 * width}px`
                        }}
                        className={Style.subHeadingText}
                    >
                        {firstPartText}
                    </div>

                    <div
                        style={{
                            height: '2px',
                            width: `${0.18 * width}px`,
                            background: 'white',
                            marginTop: '17px'
                        }}
                    >
                        {' '}
                    </div>
                </FLexLayout>

                {/* explore networking  and mentorships-mobile  */}
                {width < mentorshipContainerBreakPoint && (
                    <FLexLayout rowORColumn="row" justifyContent="center" alignItem="center">
                        <FLexLayout
                            style={{
                                marginTop: '60px'
                            }}
                            alignItem="center"
                            justifyContent="around"
                            rowORColumn="row"
                            className={Style['explore-mentorship-box']}
                        >
                            <Link
                                to="explore-carousel"
                                spy={true}
                                smooth={true}
                                offset={-10}
                                duration={500}
                            >
                                {/* card-1 */}
                                <FLexLayout
                                    rowORColumn="column"
                                    justifyContent="center"
                                    alignItem="center"
                                >
                                    <FLexLayout
                                        rowORColumn="column"
                                        justifyContent="center"
                                        alignItem="center"
                                        className={Style.navigationIcons}
                                        style={{
                                            width: `${105}px`,
                                            height: `${105}px`,
                                            textAlign: 'center',
                                            zIndex: 1
                                        }}
                                    >
                                        <Image
                                            style={{
                                                width: `${52}px`,
                                                height: `${44}px`
                                            }}
                                            src="/icons/Explore.png"
                                        />
                                    </FLexLayout>

                                    <div
                                        style={{
                                            color: 'white',
                                            marginTop: '17px',
                                            fontFamily: 'poppinsMedium',
                                            fontSize: '14px'
                                        }}
                                    >
                                        {' '}
                                        Explore{' '}
                                    </div>
                                    <div
                                        style={{
                                            color: 'white',
                                            fontFamily: 'poppinsBold',
                                            fontSize: '14px'
                                        }}
                                    >
                                        {' '}
                                        Networking{' '}
                                    </div>
                                </FLexLayout>
                            </Link>

                            {/* card-2 */}
                            <FLexLayout
                                onClick={() => router.push('/MetvyLearn')}
                                rowORColumn="column"
                                justifyContent="center"
                                alignItem="center"
                            >
                                <FLexLayout
                                    rowORColumn="column"
                                    justifyContent="center"
                                    alignItem="center"
                                    className={Style.navigationIcons}
                                    style={{
                                        width: `${105}px`,
                                        height: `${105}px`,
                                        textAlign: 'center'
                                    }}
                                >
                                    <Image
                                        style={{
                                            width: `${52}px`,
                                            height: `${44}px`
                                        }}
                                        src="/icons/mentorship.png"
                                    />
                                </FLexLayout>

                                <div
                                    style={{
                                        color: 'white',
                                        marginTop: '17px',
                                        fontFamily: 'poppinsMedium',
                                        fontSize: '14px'
                                    }}
                                >
                                    {' '}
                                    Explore{' '}
                                </div>
                                <div
                                    style={{
                                        color: 'white',
                                        fontFamily: 'poppinsBold',
                                        fontSize: '14px'
                                    }}
                                >
                                    {' '}
                                    Mentorship{' '}
                                </div>
                            </FLexLayout>
                        </FLexLayout>
                    </FLexLayout>
                )}

                {/* explore and mentorship- desktop -container*/}
                {width >= mentorshipContainerBreakPoint && (
                    <FLexLayout
                        style={{ marginTop: '66px' }}
                        rowORColumn="column"
                        justifyContent="center"
                        alignItem="center"
                    >
                        {/* explore and mentorship box */}
                        <FLexLayout
                            justifyContent="between"
                            alignItem="center"
                            rowORColumn="row"
                            style={{ width: '55%' }}
                        >
                            {/* card-1 */}
                            <Link
                                to="explore-carousel"
                                spy={true}
                                smooth={true}
                                offset={-10}
                                duration={500}
                            >
                                <FLexLayout
                                    justifyContent="center"
                                    alignItem="center"
                                    className={Style['explore-mentorship-card']}
                                    rowORColumn="row"
                                >
                                    <Image
                                        style={{
                                            width: '69px',
                                            height: '59px',
                                            marginRight: '31px'
                                        }}
                                        src="/icons/Vector.png"
                                    />
                                    <div>{'Networking'}</div>
                                </FLexLayout>
                            </Link>

                            {/* card-2 */}
                            <FLexLayout
                                justifyContent="center"
                                alignItem="center"
                                className={Style['explore-mentorship-card']}
                                rowORColumn="row"
                                onClick={() => router.push('/MetvyLearn')}
                            >
                                <Image
                                    style={{ width: '69px', height: '59px', marginRight: '31px' }}
                                    src="/icons/mentorship_desktop.png"
                                />
                                <div>{'Mentorship'}</div>
                            </FLexLayout>
                        </FLexLayout>
                    </FLexLayout>
                )}

                {/* download play store container */}
                <FLexLayout rowORColumn="row" justifyContent="center" alignItem="center">
                    <FLexLayout
                        rowORColumn="row"
                        style={{
                            marginTop: '76px'
                        }}
                        alignItem="center"
                        justifyContent="center"
                    >
                        <FLexLayout
                            className={Style.storeIcons}
                            rowORColumn="row"
                            alignItem="center"
                            justifyContent="between"
                            style={{ marginRight: '17px' }}
                        >
                            <FLexLayout
                                rowORColumn="column"
                                // style={{ marginRight: `${0.027 * width}px` }}
                            >
                                <div
                                    style={{
                                        fontFamily: 'poppinsSemiBold',
                                        fontSize: '15px',
                                        fontStyle: 'normal',
                                        lineHeight: '17px'
                                    }}
                                >
                                    Download
                                </div>
                                <div style={{ fontFamily: 'poppinsLight', fontSize: '9px' }}>
                                    on Play Store
                                </div>
                            </FLexLayout>

                            <Image
                                style={{ height: `${27}px`, width: `${24}px` }}
                                src="/icons/playstore.png"
                            />
                        </FLexLayout>

                        <FLexLayout
                            className={Style.storeIcons}
                            rowORColumn="row"
                            alignItem="center"
                            justifyContent="between"
                        >
                            <FLexLayout rowORColumn="column">
                                <div
                                    style={{
                                        fontFamily: 'poppinsSemiBold',
                                        fontSize: '15px',
                                        fontStyle: 'normal',
                                        lineHeight: '17px'
                                    }}
                                >
                                    Download
                                </div>
                                <div style={{ fontFamily: 'poppinsLight', fontSize: '9px' }}>
                                    on App Store
                                </div>
                            </FLexLayout>

                            <Image
                                style={{ height: `${27}px`, width: `${24}px` }}
                                src="/icons/Apple.png"
                            />
                        </FLexLayout>
                    </FLexLayout>
                </FLexLayout>

                {/* Downloads-number-container */}
                <FLexLayout
                    style={{ marginTop: '83px' }}
                    rowORColumn="row"
                    justifyContent="center"
                    alignItem="center"
                >
                    <FLexLayout rowORColumn="column" alignItem="center">
                        <div className={Style['totalDownloads']}>{totalDownloadsLandingScreen}</div>
                        <div className={Style['downloads-label']}>{'Downloads'}</div>
                    </FLexLayout>
                </FLexLayout>

                {/* Rating container-number-container */}

                <FLexLayout
                    style={{ marginTop: '72px' }}
                    rowORColumn="row"
                    justifyContent="center"
                    alignItem="center"
                >
                    <FLexLayout rowORColumn="column" alignItem="center">
                        <div className={Style['totalDownloads']}>{rating}</div>
                        <div className={Style['downloads-label']}>{'Ratings'}</div>
                    </FLexLayout>
                </FLexLayout>

                {/* a new way to interact */}
                <FLexLayout
                    style={{ marginTop: '60px' }}
                    rowORColumn="row"
                    justifyContent="center"
                    alignItem="center"
                >
                    <div className={Style.headingBold}>
                        {'A New way to interact with your Network!'}
                    </div>
                </FLexLayout>

                {/* underline */}
                <FLexLayout
                    rowORColumn="column"
                    alignItem="center"
                    justifyContent="center"
                    style={{ marginTop: '25px' }}
                >
                    <div
                        style={{
                            height: '2px',
                            width: `${0.05 * width}px`,
                            background: 'white',
                            marginBottom: '15px'
                        }}
                    >
                        {' '}
                    </div>
                </FLexLayout>
               
                {/* carousel-3d+ heading _screen */}
                <div id={'explore-carousel'}>
                    {/* carousel-screen-name */}
                    <FLexLayout rowORColumn="column" alignItem="center" justifyContent="center">
                        <div
                            className={Style.headingDiscover}
                            style={{ color: 'white', marginTop: '90px' }}
                        >
                            {' '}
                            {carouselText}{' '}
                        </div>
                    </FLexLayout>

                    {/* explore-carousel-3d */}
                    <FLexLayout rowORColumn="column" justifyContent="center" alignItem="center">
                        <Carousel onTextChange={setCarouselText} />
                    </FLexLayout>
                </div>

                {/* featured-on-container */}
                <FLexLayout
                    style={{ marginBottom: '100px' }}
                    rowORColumn="row"
                    justifyContent="center"
                    alignItem="center"
                >
                    {/* featured-on-box */}
                    <FLexLayout
                        alignItem="center"
                        className={Style['featured-on-container']}
                        rowORColumn="column"
                    >
                        {/* featured-on-heading */}
                        <div className={Style['featured-on-heading']}>{'Featured On'}</div>

                        {/* underline */}
                        <FLexLayout
                            rowORColumn="column"
                            alignItem="center"
                            justifyContent="center"
                            style={{ marginTop: '25px' }}
                        >
                            <div
                                className={Style['featured-on-underline']}
                                style={{
                                    width: `${0.05 * width}px`
                                }}
                            >
                                {' '}
                            </div>
                        </FLexLayout>

                        {/* images-featured-on */}
                        <Image
                            className={Style['featured-on-image']}
                            src="/icons/Featured on 1.png"
                        />
                        <div className={Style['featured-on-bottom-text']}>
                            {'& 30+ Media Houses'}
                        </div>
                    </FLexLayout>
                </FLexLayout>

                {/* straight from community */}
                <FLexLayout rowORColumn="row" justifyContent="center" alignItem="center">
                    <FLexLayout
                        className={Style.testimonialsHeading}
                        rowORColumn="row"
                        justifyContent="center"
                        alignItem="center"
                        style={{
                            width: `${313}px`,
                            height: `${50}px`,
                            marginLeft: `${0.12 * width}px`,
                            marginRight: `${0.12 * width}px`
                        }}
                    >
                        <div className={Style.testimonialText}>{testimonialHeading}</div>
                    </FLexLayout>
                </FLexLayout>

                {/* Testimonials */}
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
                        <TestimonialCard
                            testimonialText={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
                            avatarImage="/icons/76.jpeg"
                            designation="Accountant,Metvy"
                            avatarName="Jane Doe"
                        />

                        <TestimonialCard
                            testimonialText={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
                            avatarImage="/icons/76.jpeg"
                            designation="Accountant,Metvy"
                            avatarName="Jane Doe"
                        />

                        <TestimonialCard
                            testimonialText={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
                            avatarImage="/icons/76.jpeg"
                            designation="Accountant,Metvy"
                            avatarName="Jane Doe"
                        />

                        <TestimonialCard
                            testimonialText={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
                            avatarImage="/icons/76.jpeg"
                            designation="Accountant,Metvy"
                            avatarName="Jane Doe"
                        />

                        <TestimonialCard
                            testimonialText={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
                            avatarImage="/icons/76.jpeg"
                            designation="Accountant,Metvy"
                            avatarName="Jane Doe"
                        />

                        <TestimonialCard
                            testimonialText={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
                            avatarImage="/icons/76.jpeg"
                            designation="Accountant,Metvy"
                            avatarName="Jane Doe"
                        />

                        <TestimonialCard
                            testimonialText={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
                            avatarImage="/icons/76.jpeg"
                            designation="Accountant,Metvy"
                            avatarName="Jane Doe"
                        />

                        <TestimonialCard
                            testimonialText={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
                            avatarImage="/icons/76.jpeg"
                            designation="Accountant,Metvy"
                            avatarName="Jane Doe"
                        />

                        <TestimonialCard
                            testimonialText={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
                            avatarImage="/icons/76.jpeg"
                            designation="Accountant,Metvy"
                            avatarName="Jane Doe"
                        />

                        <TestimonialCard
                            testimonialText={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
                            avatarImage="/icons/76.jpeg"
                            designation="Accountant,Metvy"
                            avatarName="Jane Doe"
                        />

                        <TestimonialCard
                            testimonialText={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
                            avatarImage="/icons/76.jpeg"
                            designation="Accountant,Metvy"
                            avatarName="Jane Doe"
                        />

                        <TestimonialCard
                            testimonialText={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
                            avatarImage="/icons/76.jpeg"
                            designation="Accountant,Metvy"
                            avatarName="Jane Doe"
                        />

                        <TestimonialCard
                            testimonialText={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
                            avatarImage="/icons/76.jpeg"
                            designation="Accountant,Metvy"
                            avatarName="Jane Doe"
                        />

                        <TestimonialCard
                            testimonialText={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
                            avatarImage="/icons/76.jpeg"
                            designation="Accountant,Metvy"
                            avatarName="Jane Doe"
                        />

                        <TestimonialCard
                            testimonialText={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
                            avatarImage="/icons/76.jpeg"
                            designation="Accountant,Metvy"
                            avatarName="Jane Doe"
                        />

                        <TestimonialCard
                            testimonialText={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
                            avatarImage="/icons/76.jpeg"
                            designation="Accountant,Metvy"
                            avatarName="Jane Doe"
                        />

                        <TestimonialCard
                            testimonialText={`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`}
                            avatarImage="/icons/76.jpeg"
                            designation="Accountant,Metvy"
                            avatarName="Jane Doe"
                        />

                    </FLexLayout>
                </FLexLayout>

                <Footer />
            </div>
        </div>
    );
}

const mapDispatchToProps = (state) => {
    return {
        width: state.screenConfig.width
    };
};

const mapActionToProps = { setWidth };

export default connect(mapDispatchToProps, mapActionToProps)(_LandingScreen);
