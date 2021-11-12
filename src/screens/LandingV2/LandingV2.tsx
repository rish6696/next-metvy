import Style from './LandingV2.module.css';
import HeaderV2 from '../../components/HeaderV2/HeaderV2';
import BackgroundBlur from '../../components/BackgroundEffectBlur/BackgroundEffectBlur';
import FLexLayout from '../../components/FlexLayout';
import { Image, Row, Container, Col } from 'react-bootstrap';
import { setWidth } from '../../redux/Actions/Screenconfig';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import TestimonialCard from '../../components/TestimonialsV2/testimonialV2';
import { appTestimonialsData } from '../../constants';
import Footer from '../../components/Footer/Footer';


const _Landing = ({ setWidth, width }) => {
    useEffect(() => {
        setWidth(window.innerWidth);
        window.addEventListener('resize', () => setWidth(window.innerWidth));
    }, []);

    const [animationState, setAnimationState] = useState('running');

    const masterClasses = [
        {
            imgName: 'Shawrya.png',
            title: 'How to build a Startup ?',
            name: 'Shawrya Mehrotra',
            date: '29th October,2021',
            time: '6-7 PM'
        },
        {
            imgName: 'Shawrya.png',
            title: 'How to build a Startup ?',
            name: 'Shawrya Mehrotra',
            date: '29th October,2021',
            time: '6-7 PM'
        },
        {
            imgName: 'Shawrya.png',
            title: 'How to build a Startup ?',
            name: 'Shawrya Mehrotra',
            date: '29th October,2021',
            time: '6-7 PM'
        }
    ];

    const getAdvertisementTextAndStatistics = () => {
        return (
            <FLexLayout justifyContent="center" rowORColumn="column">
                <FLexLayout
                    alignItem={width < 1000 ? 'center' : 'start'}
                    rowORColumn="column"
                >
                    <div className={Style['Learning-Text']}>
                        Learning is Better with{' '}
                        <span className={Style['Live-Text']}> Live </span>{' '}
                        <span className={Style['Changing-Text']}>
                            {' '}
                            Industry Experts.
                        </span>
                    </div>

                    <div className={Style['sub-advertisement-text']}>
                        {
                            'Curated – Peer to Peer - Mentorship & Networking Ecosystem'
                        }
                    </div>

                    <FLexLayout
                        className={Style['get-started-button']}
                        rowORColumn="row"
                        justifyContent="center"
                        alignItem="center"
                    >
                        <div>{'Get Started'}</div>
                    </FLexLayout>

                    <div className={Style['thirty-days-text']}>
                        {'30-Day Cohort Based Mentorship Programs.'}
                    </div>

                    {getStatsContainer()}
                </FLexLayout>
            </FLexLayout>
        );
    };

    const getStartedButton = () => {
        return (
            <FLexLayout
                className={Style['get-started-button']}
                rowORColumn="row"
                justifyContent="center"
                alignItem="center"
            >
                <div>{'Get Started'}</div>
            </FLexLayout>
        );
    };

    const getImageWidth = () => {
        return width > 1000 ? '511px' : width < 392 ? '90%' : '392px';
    };

    const getThirtyDaysText = () => {
        return (
            <div className={Style['thirty-days-text']}>
                {'30-Day Cohort Based Mentorship Programs.'}
            </div>
        );
    };

    const getStatsContainer = () => {
        return (
            <FLexLayout
                justifyContent="between"
                className={Style['statistics-box-container']}
                rowORColumn="row"
            >
                <FLexLayout
                    className={Style['stats-box']}
                    rowORColumn="column"
                    justifyContent="center"
                    alignItem="center"
                >
                    <span className={Style['stats-number']}>200+</span>
                    <span className={Style['stats-title']}>Sessions</span>
                </FLexLayout>

                <FLexLayout
                    className={Style['stats-box']}
                    rowORColumn="column"
                    justifyContent="center"
                    alignItem="center"
                >
                    <span className={Style['stats-number']}>2000+</span>
                    <span className={Style['stats-title']}>Participants</span>
                </FLexLayout>

                <FLexLayout
                    className={Style['stats-box']}
                    rowORColumn="column"
                    justifyContent="center"
                    alignItem="center"
                >
                    <span className={Style['stats-number']}>100+</span>
                    <span className={Style['stats-title']}>Mentors</span>
                </FLexLayout>
            </FLexLayout>
        );
    };

    return (
        <div className={Style['page-body']}>
            <BackgroundBlur />
            <HeaderV2 />
            <FLexLayout
                rowORColumn="column"
                className={Style['content-container-landing']}
            >
                <FLexLayout justifyContent="center" rowORColumn="row">
                    {/* advertisement text + getstarted button + statistics (for Desktop) */}
                    {width > 1000 && (
                        <FLexLayout
                            justifyContent="center"
                            style={{
                                paddingLeft: '50px',
                                paddingRight: '50px',
                                width: '100%'
                            }}
                            rowORColumn="column"
                        >
                            {/* Display Advertisement text and statistics if Viewport greater than 1000 */}
                            {width > 1000 &&
                                getAdvertisementTextAndStatistics()}
                        </FLexLayout>
                    )}

                    {/* Mentors-Image */}
                    <FLexLayout
                        rowORColumn="row"
                        justifyContent={'center'}
                        alignItem="center"
                    >
                        <img
                            style={{
                                width: getImageWidth(),
                                aspectRatio: '511 : 607'
                            }}
                            src="/icons/mentor-image-desktop 451w.png"
                        />
                    </FLexLayout>
                </FLexLayout>

                {width < 1000 && (
                    <FLexLayout
                        rowORColumn="row"
                        style={{ paddingLeft: '20px', paddingRight: '20px' }}
                        justifyContent="center"
                        alignItem="center"
                    >
                        {getAdvertisementTextAndStatistics()}
                    </FLexLayout>
                )}

                {/* mentors-from-title */}

                {width >= 1221 && (
                    <FLexLayout
                        justifyContent="center"
                        alignItem="center"
                        rowORColumn="column"
                    >
                        <div className={Style['mentors-from-title']}>
                            {'Mentors From'}
                        </div>
                    </FLexLayout>
                )}

                {/* mentor-from-strip-desktop */}
                {width >= 1221 && (
                    <FLexLayout
                        justifyContent="between"
                        rowORColumn="row"
                        alignItem="center"
                        className={Style['companies-container-desktop']}
                    >
                        <img
                            src="/icons/amazon.png"
                            style={{ width: '85.5px', height: '22.5px' }}
                        />
                        <img
                            src="/icons/purepng.png"
                            style={{ width: '90px', height: '25.8px' }}
                        />
                        <img
                            src="/icons/bharatpe.png"
                            style={{ width: '77.63px', height: '21.94px' }}
                        />
                        <img
                            src="/icons/Walmart_logo.png"
                            style={{ width: '78.19px', height: '19.13px' }}
                        />
                        <img
                            src="/icons/Ducati_red_logo 1.png"
                            style={{ width: '27.56px', height: '29.25px' }}
                        />
                        <img
                            src="/icons/Adobe_Corporate_Logo.png"
                            style={{ width: '68.63px', height: '17.44px' }}
                        />

                        <img
                            src="/icons/ig-logo 1.png"
                            style={{ width: '84.38px', height: '27.56px' }}
                        />
                        <img
                            src="/icons/Facebook-New-Logo.png"
                            style={{ width: '65.81px', height: '24.19px' }}
                        />

                        <img
                            src="/icons/microsoft-logo-images-png-33.png"
                            style={{ width: '72px', height: '14.63px' }}
                        />

                        <img
                            src="icons/Nike.png"
                            style={{ width: '48.38px', height: '25.31px' }}
                        />
                        <img
                            src="icons/1200px-The_World_Bank_logo 1.png"
                            style={{ width: '81.56px', height: '15.75px' }}
                        />

                        <img
                            src="icons/Paytm-Logo 1.png"
                            style={{ width: '73.13px', height: '21.38px' }}
                        />
                    </FLexLayout>
                )}

                {/* brand-advertisement-container-mobile */}
                {width < 1221 && (
                    <FLexLayout
                        rowORColumn="row"
                        justifyContent="center"
                        alignItem="center"
                    >
                        <FLexLayout
                            style={{
                                padding: '32px',
                                width: width > 380 ? '380px' : '90%',
                                height: `${340}px`
                            }}
                            rowORColumn="column"
                            className={Style['brand-advertisement-container']}
                        >
                            {/* text-container */}

                            <FLexLayout
                                rowORColumn="row"
                                justifyContent="center"
                                alignItem="center"
                            >
                                {/* heading */}
                                <div
                                    style={{
                                        textAlign: 'center',
                                        fontFamily: 'poppinsSemiBold',
                                        fontSize: '14px'
                                    }}
                                >
                                    {'Mentors From'}
                                </div>
                            </FLexLayout>

                            {/* underline-container */}
                            <FLexLayout
                                rowORColumn="column"
                                justifyContent="center"
                                alignItem="center"
                            >
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
                                style={{
                                    paddingLeft: '20px',
                                    paddingRight: '20px',
                                    marginTop: '22px'
                                }}
                            >
                                {/* icon-row-1 */}
                                <FLexLayout
                                    rowORColumn="row"
                                    justifyContent="between"
                                    style={{ marginTop: '25px' }}
                                >
                                    <Image
                                        height="30px"
                                        width="76px"
                                        src="/icons/Amazon logo.png"
                                    />
                                    <Image
                                        height="23px"
                                        width="44px"
                                        src="/icons/unnamed (1).png"
                                    />
                                    <Image
                                        height="19px"
                                        width="70px"
                                        src="/icons/bharatpe.png"
                                    />
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
                                    <Image
                                        height="17px"
                                        width="70px"
                                        src="/icons/Walmart_logo.png"
                                    />
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
                                    <Image
                                        height="21px"
                                        width="73px"
                                        src="/icons/purepng.png"
                                    />
                                </FLexLayout>

                                {/* icon-row-4 */}
                                <FLexLayout
                                    rowORColumn="row"
                                    justifyContent="between"
                                    style={{ marginTop: '25px' }}
                                    alignItem="center"
                                >
                                    <Image
                                        style={{
                                            width: '58px',
                                            height: '21px'
                                        }}
                                        src="/icons/Paytm-Logo 1.png"
                                    />
                                    <Image
                                        height="22px"
                                        width="68px"
                                        src="/icons/ig-logo 1.png"
                                    />
                                    <Image
                                        height="13px"
                                        width="66px"
                                        src="/icons/1200px-The_World_Bank_logo 1.png"
                                    />
                                </FLexLayout>
                            </FLexLayout>
                        </FLexLayout>
                    </FLexLayout>
                )}

                {/* desktop-community-logo and icon and join now */}
                {width > 1260 && (
                    <FLexLayout
                        rowORColumn="column"
                        style={{ position: 'relative', marginTop: '10px' }}
                    >
                        <FLexLayout
                            rowORColumn="row"
                            justifyContent="center"
                            alignItem="center"
                        >
                            <FLexLayout
                                className={
                                    Style['community-shaded-box-desktop']
                                }
                                rowORColumn="row"
                            >
                                {' '}
                            </FLexLayout>
                        </FLexLayout>

                        {/* outer-box-overlapping-content-box */}

                        <FLexLayout
                            rowORColumn="row"
                            style={{
                                position: 'absolute',
                                width: '100%',
                                paddingLeft: '60px'
                            }}
                        >
                            <FLexLayout
                                style={{
                                    width: '456px',
                                    height: '607px',
                                    filter: 'drop-shadow(0px 17px 117px rgba(0, 0, 0, 0.05))'
                                }}
                                rowORColumn="row"
                            >
                                <img src="/icons/community.png" />
                            </FLexLayout>

                            {/* Join -now button and bebefits */}

                            {/* right-side of vector icons -community  */}
                            <FLexLayout
                                justifyContent="end"
                                rowORColumn="column"
                                style={{ width: '676px', marginLeft: '40px' }}
                            >
                                {/* benefits-cards-rows */}
                                <FLexLayout
                                    style={{
                                        position: 'relative',
                                        top: '110px'
                                    }}
                                    justifyContent="between"
                                    order="4"
                                    rowORColumn="row"
                                >
                                    {/* internship-card  */}
                                    <FLexLayout
                                        className={Style['benefits-card-outer']}
                                        rowORColumn="column"
                                        justifyContent="center"
                                        alignItem="center"
                                        style={{ background: '#FFDEC5' }}
                                    >
                                        <FLexLayout
                                            style={{
                                                background:
                                                    'rgba(255, 255, 255, 0.59)',

                                                width: '90%',
                                                borderRadius: '18px'
                                            }}
                                            rowORColumn="column"
                                        >
                                            <img
                                                src="/icons/internship-vector.png"
                                                style={{
                                                    width: '177px',
                                                    height: '141px'
                                                }}
                                            />
                                            <FLexLayout
                                                rowORColumn="column"
                                                justifyContent="center"
                                                alignItem="center"
                                                className={
                                                    Style['benefits-cards-text']
                                                }
                                                style={{
                                                    backgroundColor: 'white',
                                                    textAlign: 'center',
                                                    borderBottomRightRadius:
                                                        '18px',
                                                    borderBottomLeftRadius:
                                                        '18px'
                                                }}
                                            >
                                                {'Internship opportunities'}
                                            </FLexLayout>
                                        </FLexLayout>
                                    </FLexLayout>

                                    {/* free-access-card  */}
                                    <FLexLayout
                                        className={Style['benefits-card-outer']}
                                        rowORColumn="column"
                                        justifyContent="center"
                                        alignItem="center"
                                        style={{ background: '#FFCFC9' }}
                                    >
                                        <FLexLayout
                                            style={{
                                                background:
                                                    'rgba(255, 255, 255, 0.59)',

                                                width: '90%',
                                                borderRadius: '18px'
                                            }}
                                            rowORColumn="column"
                                        >
                                            <img
                                                src="/icons/free-access.png"
                                                style={{
                                                    width: '177px',
                                                    height: '141px'
                                                }}
                                            />
                                            <FLexLayout
                                                rowORColumn="column"
                                                justifyContent="center"
                                                alignItem="center"
                                                className={
                                                    Style['benefits-cards-text']
                                                }
                                                style={{
                                                    backgroundColor: 'white',
                                                    textAlign: 'center',
                                                    borderBottomRightRadius:
                                                        '18px',
                                                    borderBottomLeftRadius:
                                                        '18px'
                                                }}
                                            >
                                                {
                                                    'Free Access to Metvy Learn Sessions'
                                                }
                                            </FLexLayout>
                                        </FLexLayout>
                                    </FLexLayout>

                                    {/* hands-card  */}
                                    <FLexLayout
                                        className={Style['benefits-card-outer']}
                                        rowORColumn="column"
                                        justifyContent="center"
                                        alignItem="center"
                                        style={{ background: '#C9E2FF' }}
                                    >
                                        <FLexLayout
                                            style={{
                                                background:
                                                    'rgba(255, 255, 255, 0.59)',

                                                width: '90%',
                                                borderRadius: '18px'
                                            }}
                                            rowORColumn="column"
                                        >
                                            <img
                                                src="/icons/hands.png"
                                                style={{
                                                    width: '177px',
                                                    height: '141px'
                                                }}
                                            />
                                            <FLexLayout
                                                rowORColumn="column"
                                                justifyContent="center"
                                                alignItem="center"
                                                className={
                                                    Style['benefits-cards-text']
                                                }
                                                style={{
                                                    backgroundColor: 'white',
                                                    textAlign: 'center',
                                                    borderBottomRightRadius:
                                                        '18px',
                                                    borderBottomLeftRadius:
                                                        '18px'
                                                }}
                                            >
                                                {'Peer to Peer Learning'}
                                            </FLexLayout>
                                        </FLexLayout>
                                    </FLexLayout>
                                </FLexLayout>

                                {/* join now- button  */}
                                <FLexLayout
                                    style={{
                                        position: 'relative',
                                        top: '55px'
                                    }}
                                    order="3"
                                    className={Style['join-now-button']}
                                    rowORColumn="column"
                                    justifyContent="center"
                                    alignItem="center"
                                >
                                    Join Now
                                </FLexLayout>

                                <FLexLayout
                                    style={{
                                        position: 'relative',
                                        top: '15px'
                                    }}
                                    rowORColumn="row"
                                    order="2"
                                >
                                    <div className={Style['community-text']}>
                                        {
                                            'Join a club of your choice for weekly meetups, exclusive events and mentorship from experts, all for FREE.'
                                        }
                                    </div>
                                </FLexLayout>

                                <FLexLayout
                                    style={{
                                        position: 'relative',
                                        bottom: '20px'
                                    }}
                                    rowORColumn="row"
                                    order="1"
                                >
                                    <div
                                        className={
                                            Style['community-heading-desktop']
                                        }
                                    >
                                        {'Metvy Learn Community'}
                                    </div>
                                </FLexLayout>
                            </FLexLayout>
                        </FLexLayout>
                    </FLexLayout>
                )}

                {/* mobile-community-logo and icon and join now */}
                {width <= 1260 && (
                    <FLexLayout
                        justifyContent="center"
                        alignItem="center"
                        rowORColumn="row"
                    >
                        <FLexLayout
                            className={Style['community-container-mobile']}
                            rowORColumn="column"
                            style={{ width: width < 368 ? '90%' : '368px' }}
                            alignItem="center"
                        >
                            {/* community-vector-icon */}
                            <FLexLayout
                                style={{
                                    position: 'relative',
                                    bottom: '190px',
                                    filter: 'drop-shadow(0px 17px 117px rgba(0, 0, 0, 0.05))'
                                }}
                                rowORColumn="row"
                            >
                                <img
                                    style={{
                                        aspectRatio: '456/607',
                                        width: '250px'
                                    }}
                                    src="/icons/community.png"
                                />
                            </FLexLayout>

                            <FLexLayout
                                style={{
                                    position: 'relative',
                                    bottom: '170px'
                                }}
                                rowORColumn="row"
                            >
                                <div
                                    className={
                                        Style['community-heading-mobile']
                                    }
                                >
                                    {'Metvy Learn Community'}
                                </div>
                            </FLexLayout>

                            <FLexLayout
                                style={{
                                    width: '290px',
                                    position: 'relative',
                                    bottom: '120px'
                                }}
                                justifyContent="center"
                                alignItem="center"
                                className={Style['community-text']}
                                rowORColumn="row"
                            >
                                <FLexLayout rowORColumn="row">
                                    {
                                        'Join a club of your choice for weekly meetups, exclusive events and mentorship from experts, all for FREE.'
                                    }
                                </FLexLayout>
                            </FLexLayout>

                            {/* join now- button  */}
                            <FLexLayout
                                style={{
                                    position: 'relative',
                                    bottom: '70px'
                                }}
                                className={Style['join-now-button']}
                                rowORColumn="column"
                                justifyContent="center"
                                alignItem="center"
                            >
                                Join Now
                            </FLexLayout>

                            {/* benefits-cards-row-mobile */}

                            <FLexLayout
                                style={{ width: '100%' }}
                                justifyContent="between"
                                rowORColumn="row"
                            >
                                {/* internship-card */}
                                <FLexLayout
                                    rowORColumn="row"
                                    justifyContent="between"
                                    style={{ position: 'relative' }}
                                >
                                    <FLexLayout
                                        className={Style['benefits-card-outer']}
                                        rowORColumn="column"
                                        justifyContent="center"
                                        alignItem="center"
                                        style={{ background: '#FFDEC5' }}
                                    >
                                        <FLexLayout
                                            style={{
                                                background:
                                                    'rgba(255, 255, 255, 0.59)',

                                                width: '90%',
                                                height: '90%',
                                                borderRadius: '10px'
                                            }}
                                            rowORColumn="column"
                                        >
                                            <img
                                                src="/icons/internship-vector.png"
                                                style={{
                                                    width:
                                                        width > 400
                                                            ? '100px'
                                                            : width * 0.23,
                                                    aspectRatio: '100/80'
                                                }}
                                            />
                                            <FLexLayout
                                                rowORColumn="column"
                                                justifyContent="center"
                                                alignItem="center"
                                                className={
                                                    Style['benefits-cards-text']
                                                }
                                                style={{
                                                    backgroundColor: 'white',
                                                    textAlign: 'center',
                                                    borderBottomRightRadius:
                                                        '10px',
                                                    borderBottomLeftRadius:
                                                        '10px'
                                                }}
                                            >
                                                {'Internship opportunities'}
                                            </FLexLayout>
                                        </FLexLayout>
                                    </FLexLayout>
                                </FLexLayout>

                                {/* free-access-card  */}
                                <FLexLayout
                                    className={Style['benefits-card-outer']}
                                    rowORColumn="column"
                                    justifyContent="center"
                                    alignItem="center"
                                    style={{ background: '#FFCFC9' }}
                                >
                                    <FLexLayout
                                        style={{
                                            background:
                                                'rgba(255, 255, 255, 0.59)',

                                            width: '90%',
                                            height: '90%',
                                            borderRadius: '10px'
                                        }}
                                        rowORColumn="column"
                                    >
                                        <img
                                            src="/icons/free-access.png"
                                            style={{
                                                width:
                                                    width > 400
                                                        ? '100px'
                                                        : width * 0.23,
                                                aspectRatio: '100/80'
                                            }}
                                        />
                                        <FLexLayout
                                            rowORColumn="column"
                                            justifyContent="center"
                                            alignItem="center"
                                            className={
                                                Style['benefits-cards-text']
                                            }
                                            style={{
                                                backgroundColor: 'white',
                                                textAlign: 'center',
                                                borderBottomRightRadius: '10px',
                                                borderBottomLeftRadius: '10px'
                                            }}
                                        >
                                            {
                                                'Free Access to Metvy Learn Sessions'
                                            }
                                        </FLexLayout>
                                    </FLexLayout>
                                </FLexLayout>

                                {/* hands-card  */}
                                <FLexLayout
                                    className={Style['benefits-card-outer']}
                                    rowORColumn="column"
                                    justifyContent="center"
                                    alignItem="center"
                                    style={{ background: '#C9E2FF' }}
                                >
                                    <FLexLayout
                                        style={{
                                            background:
                                                'rgba(255, 255, 255, 0.59)',

                                            width: '90%',
                                            height: '90%',
                                            borderRadius: '10px'
                                        }}
                                        rowORColumn="column"
                                    >
                                        <img
                                            src="/icons/hands.png"
                                            style={{
                                                width:
                                                    width > 400
                                                        ? '100px'
                                                        : width * 0.23,
                                                aspectRatio: '100/80'
                                            }}
                                        />
                                        <FLexLayout
                                            rowORColumn="column"
                                            justifyContent="center"
                                            alignItem="center"
                                            className={
                                                Style['benefits-cards-text']
                                            }
                                            style={{
                                                backgroundColor: 'white',
                                                textAlign: 'center',
                                                borderBottomRightRadius: '10px',
                                                borderBottomLeftRadius: '10px'
                                            }}
                                        >
                                            {'Peer to Peer Learning'}
                                        </FLexLayout>
                                    </FLexLayout>
                                </FLexLayout>
                            </FLexLayout>
                        </FLexLayout>
                    </FLexLayout>
                )}

                {/* Discover & Explore-Desktop */}
                {width >= 1260 && (
                    <FLexLayout rowORColumn="row">
                        {/* image-app */}
                        <FLexLayout rowORColumn="row">
                            <img src="/icons/app-shots.png" />
                            {/* <Carousel onTextChange={()=>{}} /> */}
                            {/* style={{width:'50%',marginLeft:'100px'}} */}
                        </FLexLayout>

                        {/* play-store app-store-buttons */}
                        <FLexLayout
                            rowORColumn="row"
                            justifyContent="center"
                            alignItem="center"
                        >
                            <FLexLayout rowORColumn="column">
                                <div className={Style['discover-explore-text']}>
                                    {'Discover & Explore'}
                                </div>
                                <FLexLayout
                                    style={{ marginTop: '23px' }}
                                    rowORColumn="column"
                                >
                                    <div
                                        style={{
                                            width: '114px',
                                            height: '2.2px',
                                            backgroundColor: 'black'
                                        }}
                                    ></div>
                                </FLexLayout>

                                <div
                                    className={
                                        Style['discover-explore-text-two']
                                    }
                                >
                                    A New way to interact <br /> with your
                                    Network!
                                </div>

                                {/* buttons-for-stores*/}
                                <FLexLayout
                                    style={{
                                        width: '500px',
                                        marginTop: '66px'
                                    }}
                                    justifyContent="between"
                                    rowORColumn="row"
                                >
                                    {/* play-store-button */}
                                    <FLexLayout
                                        className={Style['store-button']}
                                        rowORColumn="row"
                                        alignItem="center"
                                        justifyContent="between"
                                    >
                                        <div style={{ lineHeight: '14px' }}>
                                            Download <br />{' '}
                                            <span
                                                className={
                                                    Style[
                                                        'download-button-subText'
                                                    ]
                                                }
                                            >
                                                on PlayStore
                                            </span>{' '}
                                        </div>
                                        <img
                                            src="/icons/playStore-Vector.png"
                                            style={{
                                                width: '36px',
                                                height: '41px'
                                            }}
                                        />
                                    </FLexLayout>

                                    {/* app-store-button */}
                                    <FLexLayout
                                        className={Style['store-button']}
                                        rowORColumn="row"
                                        alignItem="center"
                                        justifyContent="between"
                                    >
                                        <div style={{ lineHeight: '14px' }}>
                                            Download <br />{' '}
                                            <span
                                                className={
                                                    Style[
                                                        'download-button-subText'
                                                    ]
                                                }
                                            >
                                                on App Store
                                            </span>{' '}
                                        </div>
                                        <img
                                            src="/icons/apple-vector.png"
                                            style={{
                                                width: '36px',
                                                height: '41px'
                                            }}
                                        />
                                    </FLexLayout>
                                </FLexLayout>
                            </FLexLayout>
                        </FLexLayout>
                    </FLexLayout>
                )}

                {/* Discover & Explore-Mobile */}
                {width < 1260 && (
                    <FLexLayout
                        style={{ marginTop: '34px' }}
                        alignItem="center"
                        rowORColumn="column"
                    >
                        <div className={Style['discover-explore-text']}>
                            {'BUSINESS CARDS'}
                        </div>
                        <div
                            style={{
                                width: '22px',
                                height: '2.2px',
                                backgroundColor: 'black',
                                marginTop: '23px'
                            }}
                        ></div>

                        <div
                            style={{ textAlign: 'center', marginTop: '7px' }}
                            className={Style['discover-explore-text-two']}
                        >
                            A New way to interact <br /> with your Network!
                        </div>

                        {/* <FLexLayout justifyContent='center' alignItem='center' rowORColumn="column">
                            <img src="/icons/app-shots.png" />
                        </FLexLayout> */}

                        {/* buttons-for-stores*/}
                        <FLexLayout
                            style={{
                                width: '331px',
                                marginTop: '66px'
                            }}
                            justifyContent="between"
                            rowORColumn="row"
                        >
                            {/* play-store-button */}
                            <FLexLayout
                                className={Style['store-button']}
                                rowORColumn="row"
                                alignItem="center"
                                justifyContent="between"
                            >
                                <div style={{ lineHeight: '14px' }}>
                                    Download <br />{' '}
                                    <span
                                        className={
                                            Style['download-button-subText']
                                        }
                                    >
                                        on PlayStore
                                    </span>{' '}
                                </div>
                                <img
                                    src="/icons/playStore-Vector.png"
                                    style={{
                                        width: '24px',
                                        height: '27px'
                                    }}
                                />
                            </FLexLayout>

                            {/* app-store-button */}
                            <FLexLayout
                                className={Style['store-button']}
                                rowORColumn="row"
                                alignItem="center"
                                justifyContent="between"
                            >
                                <div style={{ lineHeight: '14px' }}>
                                    Download <br />{' '}
                                    <span
                                        className={
                                            Style['download-button-subText']
                                        }
                                    >
                                        on App Store
                                    </span>{' '}
                                </div>
                                <img
                                    src="/icons/apple-vector.png"
                                    style={{
                                        width: '22px',
                                        height: '26px'
                                    }}
                                />
                            </FLexLayout>
                        </FLexLayout>
                    </FLexLayout>
                )}

                {/* master-class-both desktop-and-mobile */}
                {
                    <FLexLayout rowORColumn="column">
                        <FLexLayout
                            style={{
                                position: 'relative',
                                bottom: width > '1260' ? '120px' : '0px'
                            }}
                            className={Style['master-class-heading']}
                            rowORColumn="column"
                            justifyContent="center"
                            alignItem="center"
                        >
                            <div>{'Upcoming Metvy Learn Masterclasses'}</div>
                        </FLexLayout>
                        <FLexLayout
                            style={{
                                position: 'relative',
                                bottom: width > '1260' ? '100px' : '0px'
                            }}
                            rowORColumn="row"
                        >
                            <Container>
                                <Row>
                                    {masterClasses.map((masterClass) => {
                                        return (
                                            <Col style={{ marginTop: '50px' }}>
                                                {/* master-class-card-box-wih apply button */}
                                                <FLexLayout
                                                    alignItem="center"
                                                    rowORColumn="column"
                                                >
                                                    {/* master-class-card */}
                                                    <FLexLayout
                                                        className={
                                                            Style[
                                                                'master-class-card'
                                                            ]
                                                        }
                                                        rowORColumn="column"
                                                        alignItem="center"
                                                    >
                                                        <FLexLayout rowORColumn="column">
                                                            <img
                                                                style={{
                                                                    width: '250px',
                                                                    height: '250px'
                                                                }}
                                                                src={`/icons/${masterClass.imgName}`}
                                                            />

                                                            {/* title-box */}
                                                            <FLexLayout
                                                                style={{
                                                                    width: '259px',
                                                                    height: '51px',
                                                                    borderRadius:
                                                                        '45px',
                                                                    background:
                                                                        '#FFEBE4',
                                                                    marginTop:
                                                                        '16px',
                                                                    fontFamily:
                                                                        'poppinsSemiBold',
                                                                    fontSize:
                                                                        '14px'
                                                                }}
                                                                rowORColumn="column"
                                                                justifyContent="center"
                                                                alignItem="center"
                                                            >
                                                                {
                                                                    masterClass.title
                                                                }
                                                            </FLexLayout>

                                                            {/* name, time ,date */}
                                                            <FLexLayout
                                                                style={{
                                                                    textAlign:
                                                                        'center',
                                                                    marginTop:
                                                                        '14px'
                                                                }}
                                                                rowORColumn="column"
                                                            >
                                                                <div
                                                                    style={{
                                                                        fontFamily:
                                                                            'poppinsSemiBold',
                                                                        fontSize:
                                                                            '13px'
                                                                    }}
                                                                >
                                                                    {
                                                                        masterClass.name
                                                                    }
                                                                </div>
                                                                <div
                                                                    style={{
                                                                        fontFamily:
                                                                            'poppinsRegular',
                                                                        lineHeight:
                                                                            '15px',
                                                                        fontSize:
                                                                            '10px',
                                                                        marginTop:
                                                                            '8px'
                                                                    }}
                                                                >
                                                                    <span>
                                                                        {' '}
                                                                        {
                                                                            masterClass.date
                                                                        }{' '}
                                                                    </span>{' '}
                                                                    <br />{' '}
                                                                    <span>
                                                                        {
                                                                            masterClass.time
                                                                        }
                                                                    </span>
                                                                </div>
                                                            </FLexLayout>
                                                        </FLexLayout>
                                                    </FLexLayout>

                                                    <FLexLayout
                                                        rowORColumn="row"
                                                        justifyContent="center"
                                                        alignItem="center"
                                                        style={{
                                                            marginTop: '60px'
                                                        }}
                                                        className={
                                                            Style[
                                                                'master-class-apply-button'
                                                            ]
                                                        }
                                                    >
                                                        Click to Register
                                                    </FLexLayout>
                                                </FLexLayout>
                                            </Col>
                                        );
                                    })}
                                </Row>
                            </Container>
                        </FLexLayout>
                    </FLexLayout>
                }

                {/* Trusted-text-testimonial-headline */}
                <FLexLayout
                    justifyContent="center"
                    alignItem="center"
                    className={Style['trusted-testimonial-headline']}
                    rowORColumn="row"
                    style={{ width: '100%' }}
                >
                    <FLexLayout
                        rowORColumn="column"
                        justifyContent="center"
                        alignItem="center"
                    >
                        <p>
                            {' '}
                            Trusted by{' '}
                            <span style={{ color: '#1371FF' }}>
                                {' '}
                                2000+{' '}
                            </span>{' '}
                            Young Professionals & Students{' '}
                        </p>
                    </FLexLayout>
                </FLexLayout>

                {/* Testimonials-Container-HorizontalScrool */}

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
                            animationPlayState: animationState,
                            marginBottom :'100px'
                        }}
                        rowORColumn="row"
                    >
                       {appTestimonialsData.map(testimonial=>( <TestimonialCard
                            testimonialText={testimonial.text}
                            avatarImage={testimonial.imageName}
                            designation={testimonial.title}
                            avatarName={testimonial.fullName}
                        />))}

                    </FLexLayout>
                </FLexLayout>

                <Footer/>

            </FLexLayout>
        </div>
    );
};

const mapDispatchToProps = (state) => {
    return {
        width: state.screenConfig.width
    };
};

const mapActionToProps = { setWidth };

export default connect(mapDispatchToProps, mapActionToProps)(_Landing);
