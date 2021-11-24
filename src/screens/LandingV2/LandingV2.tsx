import Style from './LandingV2.module.css';
import HeaderV2 from '../../components/HeaderV2/HeaderV2';
import BackgroundBlur from '../../components/BackgroundEffectBlur/BackgroundEffectBlur';
import FLexLayout from '../../components/FlexLayout';
import { Image, Row, Container, Col, Carousel } from 'react-bootstrap';
import { setWidth } from '../../redux/Actions/Screenconfig';
import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import TestimonialCard from '../../components/TestimonialsV2/testimonialV2';
import { appTestimonialsData } from '../../constants';
import Footer from '../../components/Footer/Footer';
import { useRouter } from 'next/router';

const _Landing = ({ setWidth, width }) => {
    const router = useRouter();

    const changingTexts = [
        { text: 'Live Industry Experts.', color: '#5C4DFF' },
        { text: 'Peers.', color: '#FF784D' },
        { text: 'Community.', color: '#F19B1B' },
        { text: 'Cohorts.', color: '#A463F6' },
        { text: 'Personalised Care.', color: '#FF77A8' }
    ];

    const mentorsImageName = ['/icons/Mentor - 1.png', '/icons/Mentor - 2.png'];

    const exploreAppImagesMobile = [
        '/icons/1_MAP_mobile.png',
        '/icons/2_EXPLORE_mobile.png',
        '/icons/3_MEETUP_mobile.png',
        '/icons/4_CHAT_mobile.png',
        '/icons/5_VIDEO CALL_mobile.png'
    ];

    const exploreImagesDesktop = [
        '/icons/1_Map_desktop.png',
        '/icons/2_Discover & Explore_desktop.png',
        '/icons/3_Meet up_desktop.png',
        '/icons/4_Chat_desktop.png',
        '/icons/5_Video Call_desktop.png'
    ];

    const [currentWordIndex, setCurrentWordIndex] = useState(0);

    useEffect(() => {
        setWidth(window.innerWidth);
        window.addEventListener('resize', () => setWidth(window.innerWidth));

        const intervalID = setInterval(() => {
            setCurrentWordIndex((index) => (index + 1) % changingTexts.length);
        }, 3000);

        return () => clearInterval(intervalID);
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
                        <span
                            style={{
                                color: changingTexts[currentWordIndex].color
                            }}
                            className={Style['Live-Text']}
                        >
                            {' '}
                            {changingTexts[currentWordIndex].text}{' '}
                        </span>{' '}
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
                        style={{ cursor: 'pointer' }}
                        onClick={() => router.push('/MetvyLearn')}
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

                    <Carousel
                        slide={false}
                        interval={2000}
                        fade={true}
                        controls={false}
                        indicators={false}
                    >
                        <Carousel.Item>
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
                                    src="/icons/Mentor - 1.png"
                                />
                            </FLexLayout>
                        </Carousel.Item>

                        <Carousel.Item>
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
                                    src="/icons/Mentor - 2.png"
                                />
                            </FLexLayout>
                        </Carousel.Item>
                    </Carousel>
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
                            src="/icons/nike.png"
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
                        style={{ marginTop: '10px' }}
                    >
                        {/* outer-box-overlapping-content-box */}

                        <FLexLayout
                            rowORColumn="row"
                            style={{
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
                    <FLexLayout
                        style={{ marginTop: '200px' }}
                        rowORColumn="row"
                    >
                        {/* image-app */}
                        <FLexLayout
                            style={{ marginLeft: '80px' }}
                            rowORColumn="row"
                        >
                            <Carousel
                                slide={false}
                                interval={2000}
                                fade={true}
                                controls={false}
                                indicators={false}
                            >
                                {exploreAppImagesMobile.map((imgName) => {
                                    return (
                                        <Carousel.Item>
                                            <FLexLayout
                                                rowORColumn="row"
                                                justifyContent={'center'}
                                                alignItem="center"
                                            >
                                                <img
                                                    style={{
                                                        width: '421px',
                                                        height: '516px'
                                                    }}
                                                    src={imgName}
                                                />
                                            </FLexLayout>
                                        </Carousel.Item>
                                    );
                                })}
                            </Carousel>
                        </FLexLayout>

                        {/* play-store app-store-buttons */}
                        <FLexLayout
                            rowORColumn="row"
                            justifyContent="center"
                            alignItem="center"
                            style={{ marginLeft: '240px' }}
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
                                        onClick={()=>window.open("https://play.google.com/store/apps/details?id=com.metvy&hl=en_IN&gl=US")}
                                        style={{cursor:'pointer'}}

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
                                        style={{ marginRight: '17px',cursor: "pointer"}}
                                        onClick={()=>window.open("https://apps.apple.com/in/app/metvy-professional-networking/id1521043145")}

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

                        <FLexLayout
                            justifyContent="center"
                            alignItem="center"
                            rowORColumn="column"
                        >
                        
                            <Carousel
                                slide={false}
                                interval={2000}
                                fade={true}
                                controls={false}
                                indicators={false}
                            >
                                {exploreAppImagesMobile.map((imgName) => {
                                    return (
                                        <Carousel.Item>
                                            <FLexLayout
                                                rowORColumn="row"
                                                justifyContent={'center'}
                                                alignItem="center"
                                            >
                                                <img
                                                    style={{
                                                        width: '330px',
                                                        height: '404px'
                                                    }}
                                                    src={imgName}
                                                />
                                            </FLexLayout>
                                        </Carousel.Item>
                                    );
                                })}
                            </Carousel>
                        </FLexLayout>

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
                                onClick={()=>window.open("https://play.google.com/store/apps/details?id=com.metvy&hl=en_IN&gl=US")}
                                style={{cursor:'pointer'}}
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
                                style={{ marginRight: '17px',cursor: "pointer"}}
                                onClick={()=>window.open("https://apps.apple.com/in/app/metvy-professional-networking/id1521043145")}
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
                            rowORColumn="column"
                            justifyContent="center"
                            alignItem="center"
                        >
                            <div className={Style['master-class-heading']}>
                                {'Upcoming Metvy Learn Masterclasses'}
                            </div>
                        </FLexLayout>
                        <FLexLayout rowORColumn="row">
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
                        style={{ width: '80%' }}
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
                            marginBottom: '100px'
                        }}
                        rowORColumn="row"
                    >
                        {appTestimonialsData.map((testimonial) => (
                            <TestimonialCard
                                testimonialText={testimonial.text}
                                avatarImage={testimonial.imageName}
                                designation={testimonial.title}
                                avatarName={testimonial.fullName}
                            />
                        ))}
                    </FLexLayout>
                </FLexLayout>

                {/* featured On Banner */}
                <FLexLayout
                    rowORColumn="row"
                    justifyContent="center"
                    alignItem="center"
                >
                    <FLexLayout
                        justifyContent="center"
                        alignItem="center"
                        className={Style['banner-container']}
                        rowORColumn="row"
                    >
                        {'Featured On'}
                    </FLexLayout>
                </FLexLayout>

                {/* featured-on-icons */}
                <FLexLayout
                    alignItem="center"
                    justifyContent="center"
                    rowORColumn="column"
                >
                    <FLexLayout
                        justifyContent="between"
                        alignItem="center"
                        style={{ width: '80%' }}
                        rowORColumn="row"
                    >
                        <img
                            className={Style['InC-Icon']}
                            src="/icons/I42.png"
                        />
                        <img
                            className={Style['daily-hunt-icon']}
                            src="/icons/DH.png"
                        />
                        <img
                            className={Style['your-story-icon']}
                            src="/icons/your_story.png"
                        />
                        <img
                            className={Style['tedx-icon']}
                            src="/icons/tedx-logo 1.png"
                        />
                    </FLexLayout>

                    <FLexLayout
                        style={{ marginTop: '40px', marginBottom: '100px' }}
                        className={Style['lower-icons-container']}
                        justifyContent="between"
                        rowORColumn="row"
                    >
                        <img
                            className={Style['yahoo-finance-icon']}
                            src="/icons/YF.png"
                        />
                        <img
                            className={Style['yahoo-news-icon']}
                            src="/icons/YN.png"
                        />
                    </FLexLayout>
                </FLexLayout>

                <Footer />
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
