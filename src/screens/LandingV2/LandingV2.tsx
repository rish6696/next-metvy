import Style from './LandingV2.module.css';
import HeaderV2 from '../../components/HeaderV2/HeaderV2';
import BackgroundBlur from '../../components/BackgroundEffectBlur/BackgroundEffectBlur';
import FLexLayout from '../../components/FlexLayout';
import { Image, Row, Container, Col, Carousel } from 'react-bootstrap';
import { setWidth } from '../../redux/Actions/Screenconfig';
import { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import TestimonialCard from '../../components/TestimonialsV2/testimonialV2';
import { appTestimonialsData, faqData } from '../../constants';
import Footer from '../../components/Footer/Footer';
import { useRouter } from 'next/router';
import SubmitForm from '../../components/SubmitForm/SubmitForm';

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
            imgName: 'Dhwani_Kachru.jpg',
            title: 'Marketing Fundamentals for Startups',
            name: 'Dhwani Kachru',
            date: '25th Feb 2022',
            time: '8 to 9 p.m',
            registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfD94LMD_49yhfRjCfo9IZEymxltQWaSjncL91LZ_vjIntcEA/viewform'
        },
        // {
        //     imgName: 'ankur_img.png',
        //     title: 'Getting your First Customers',
        //     name: 'Ankur Jain',
        //     date: '',
        //     time: 'To be Announced, Register today to reserve your spot',
        //     registerLink :  'https://docs.google.com/forms/d/e/1FAIpQLSfD94LMD_49yhfRjCfo9IZEymxltQWaSjncL91LZ_vjIntcEA/viewform'
        // },
        {
            imgName: 'anisha_img.png',
            title: 'Marketing 101',
            name: 'Anisha Tandon',
            date: 'To be Announced, Register today to reserve your spot',
            time: '',
            registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfD94LMD_49yhfRjCfo9IZEymxltQWaSjncL91LZ_vjIntcEA/viewform'
        },
        {
            imgName: 'Shawrya.png',
            title: 'Public Speaking 101',
            name: 'Shawrya Mehrotra',
            date: 'To be Announced, Register today to reserve your spot',
            time: '',
            registerLink: 'https://docs.google.com/forms/d/e/1FAIpQLSfD94LMD_49yhfRjCfo9IZEymxltQWaSjncL91LZ_vjIntcEA/viewform'
        },
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

    const designCourse = () => {
        console.log('testt');
        window.location.href = "https://metvy.com/design_program";
    }

    const consultancyCourse = () => {
        console.log('testt');
        window.location.href = "https://metvy.com/consultancy_program";
    }

    const businessCourse = () => {
        console.log('testt');
        window.location.href = "https://metvy.com/business_program";
    }

    function questionOne() {
        var x = document.getElementById("myDIV1");
        var y = document.getElementById("questionDiv1");
        var black = document.getElementById("blackPolygon1");
        var white = document.getElementById("whitePolygon1");
        if (x.style.display === "none") {
            x.style.display = "block";
            // x.style.marginTop = "20px";
            y.style.height = width < 900 ? "180px" : "150px";
            y.style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.05), 0px 18px 166px rgba(0, 0, 0, 0.05)";
            black.style.display = "none";
            white.style.display = "block";
            black.style.display = "none";
        } else {
            x.style.display = "none";
            y.style.height = "80px";
            white.style.display = "none";
            black.style.display = "block";
            y.style.boxShadow = "none";
        }
    }

    function questionTwo() {
        var x = document.getElementById("myDIV2");
        var y = document.getElementById("questionDiv2");
        var black = document.getElementById("blackPolygon2");
        var white = document.getElementById("whitePolygon2");
        if (x.style.display === "none") {
            x.style.display = "block";
            // x.style.marginTop = "20px";
            y.style.height = width < 900 ? "180px" : "150px";
            y.style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.05), 0px 18px 166px rgba(0, 0, 0, 0.05)";
            black.style.display = "none";
            white.style.display = "block";
            black.style.display = "none";
        } else {
            x.style.display = "none";
            y.style.height = "80px";
            white.style.display = "none";
            black.style.display = "block";
            y.style.boxShadow = "none";
        }
    }

    function questionThree() {
        var x = document.getElementById("myDIV3");
        var y = document.getElementById("questionDiv3");
        var black = document.getElementById("blackPolygon3");
        var white = document.getElementById("whitePolygon3");
        if (x.style.display === "none") {
            x.style.display = "block";
            // x.style.marginTop = "20px";
            y.style.height = width < 900 ? "180px" : "150px";
            y.style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.05), 0px 18px 166px rgba(0, 0, 0, 0.05)";
            black.style.display = "none";
            white.style.display = "block";
            black.style.display = "none";
        } else {
            x.style.display = "none";
            y.style.height = "80px";
            white.style.display = "none";
            black.style.display = "block";
            y.style.boxShadow = "none";
        }
    }

    function questionFour() {
        var x = document.getElementById("myDIV4");
        var y = document.getElementById("questionDiv4");
        var black = document.getElementById("blackPolygon4");
        var white = document.getElementById("whitePolygon4");
        if (x.style.display === "none") {
            x.style.display = "block";
            // x.style.marginTop = "20px";
            y.style.height = width < 900 ? "180px" : "150px";
            y.style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.05), 0px 18px 166px rgba(0, 0, 0, 0.05)";
            black.style.display = "none";
            white.style.display = "block";
            black.style.display = "none";
        } else {
            x.style.display = "none";
            y.style.height = "80px";
            white.style.display = "none";
            black.style.display = "block";
            y.style.boxShadow = "none";
        }
    }

    function questionFive() {
        var x = document.getElementById("myDIV5");
        var y = document.getElementById("questionDiv5");
        var black = document.getElementById("blackPolygon5");
        var white = document.getElementById("whitePolygon5");
        if (x.style.display === "none") {
            x.style.display = "block";
            // x.style.marginTop = "20px";
            y.style.height = width < 900 ? "180px" : "150px";
            y.style.boxShadow = "0px 4px 4px rgba(0, 0, 0, 0.05), 0px 18px 166px rgba(0, 0, 0, 0.05)";
            black.style.display = "none";
            white.style.display = "block";
            black.style.display = "none";
        } else {
            x.style.display = "none";
            y.style.height = "80px";
            white.style.display = "none";
            black.style.display = "block";
            y.style.boxShadow = "none";
        }
    }


    const colors = ["/icons/Mobile-P-P-L.png", "/icons/Mobile-L-F-I-E.png", "/icons/Mobile-P-L.png"];
    const delay = 5000;
    const [index, setIndex] = useState(0);
    const timeoutRef = useRef(null);

    function resetTimeout() {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(
            () =>
                setIndex((prevIndex) =>
                    prevIndex === colors.length - 1 ? 0 : prevIndex + 1
                ),
            delay
        );

        return () => {
            resetTimeout();
        };
    }, [index]);

    return (
        <div className={Style['page-body']} style={{ marginTop: width < 900 && '50px', backgroundImage: width >= 1221 ? `url("/icons/Header.png")` : width < 1221 && width > 900 ? `url("/icons/Header.png")` : `url("/icons/Mobile-Header.png")`, backgroundRepeat: 'no-repeat', backgroundSize: '100%', width: width < 900 && '150%' }}>
            <link href='https://fonts.googleapis.com/css?family=Poppins' rel='stylesheet'></link>
            <BackgroundBlur />
            <HeaderV2 />
            {width >= 1221 && (<FLexLayout
                rowORColumn="column"
                className={Style['content-container-landing']}
                style={{
                    marginLeft: '70%', paddingBottom: '10%', position: 'sticky', top: '-700px', width: '25%', zIndex: 10, backgroundColor: 'transparent', backgroundSize: '100%',
                }}
            ><SubmitForm /></FLexLayout>)}
            {/* {width >= 1221 && <div style={{ height: '115vh' }}></div>} */}
            {width < 1221 && width > 900 && <div style={{ height: '60vh' }}></div>}
            {width < 900 && <div style={{ height: '70vh' }}></div>}
            {width < 1260 && (<a href="#submitForm"><FLexLayout
                rowORColumn="column"
                className={Style['content-container-landing']}
                style={{ alignItems: 'center' }}
            ><button style={{ width: '25%', height: '45px' }} className={Style['apply-button']}>Apply Now</button>
            </FLexLayout></a>)}
            <FLexLayout
                rowORColumn="column"
                className={Style['content-container-landing']}
                style={{ paddingBottom: '15%', marginTop: width >= 1221 && '-30%', paddingLeft: width >= 1221 && '5%' }}
            >
                {/* mentors-from-title */}
                {width >= 1221 && (
                    <FLexLayout
                        justifyContent="center"
                        alignItem="center"
                        rowORColumn="row"
                        style={{
                            width: '60%',
                            display: 'flex',
                            flexDirection: 'column',
                            fontFamily: 'Poppins',
                            fontStyle: 'normal',
                            fontWeight: 600,
                            fontSize: '44px',
                            lineHeight: '135%',
                            alignItems: 'center',
                            textAlign: 'center',
                            color: '#000000',
                        }}
                    >
                        <div className={Style['mainFont']} style={{ color: '#F48C06' }}>
                            {'Mentors'}
                        </div>
                        <div className={Style['mainFont']} style={{ color: '#2F327D', marginLeft: '5px' }}>{'From'}</div>
                    </FLexLayout>
                )}

                {/* mentor-from-strip-desktop */}
                {width >= 1221 && (
                    <FLexLayout
                        justifyContent="between"
                        rowORColumn="row"
                        alignItem="center"
                        className={Style['companies-container-desktop']}
                        style={{ width: '75%', height: '100%' }}
                    >
                        <div style={{ display: 'flex', flexDirection: 'column' }}>
                            <div style={{ padding: '15px' }}><img
                                src="/icons/Amazon-logo.png"
                                style={{
                                    width: '138.4px',
                                    height: '38px',
                                    left: '95px',
                                    top: '1284.1px',
                                }}
                            />
                                <img
                                    src="/icons/pepsi-logo.png"
                                    style={{
                                        width: '140px',
                                        height: '43.7px',
                                        left: '321.1px',
                                        top: '1267px',
                                        marginLeft: '45px'
                                    }}
                                />
                                <img
                                    src="/icons/BharatPe-logo.png"
                                    style={{
                                        width: '96.9px',
                                        height: '32.3px',
                                        left: '553.85px',
                                        top: '1284.1px',
                                        marginLeft: '45px'
                                    }}
                                />
                                <img
                                    src="/icons/Walmart-logo.png"
                                    style={{
                                        width: '128px',
                                        height: '32.3px',
                                        left: '721.05px',
                                        top: '1280.3px',
                                        marginLeft: '45px'
                                    }}
                                />
                                <img
                                    src="/icons/Google_logo.png"
                                    style={{
                                        width: '110px',
                                        height: '37.05px',
                                        left: '916.75px',
                                        top: '1278.4px',
                                        marginLeft: '45px'
                                    }}
                                />
                                <img
                                    src="/icons/Adobe-logo.png"
                                    style={{
                                        width: '110.9px',
                                        height: '29.45px',
                                        left: '1109.6px',
                                        top: '1284.1px',
                                        marginLeft: '45px'
                                    }}
                                /></div>

                            <div style={{ padding: '15px' }}><img
                                src="/icons/ig-logo.png"
                                style={{
                                    width: '130.5px',
                                    height: '46.55px',
                                    left: '1091.55px',
                                    top: '1391.45px',
                                }}
                            />
                                <img
                                    src="/icons/Facebook-Logo.png"
                                    style={{
                                        width: '110.15px',
                                        height: '40.85px',
                                        left: '108.3px',
                                        top: '1388.6px',
                                        marginLeft: '45px'
                                    }}
                                />

                                <img
                                    src="/icons/microsoft-logo.png"
                                    style={{
                                        width: '110.6px',
                                        height: '24.7px',
                                        left: '301.15px',
                                        top: '1396.2px',
                                        marginLeft: '45px'
                                    }}
                                />

                                <img
                                    src="/icons/Nike-logo.png"
                                    style={{
                                        width: '75px',
                                        height: '42.75px',
                                        left: '504.45px',
                                        top: '1387.65px',
                                        marginLeft: '45px'
                                    }}
                                />
                                <img
                                    src="icons/WB-logo.png"
                                    style={{
                                        width: '130.75px',
                                        height: '26.6px',
                                        left: '667.85px',
                                        top: '1400px',
                                        marginLeft: '45px'
                                    }}
                                />

                                <img
                                    src="icons/Paytm-logo.png"
                                    style={{
                                        width: '110.5px',
                                        height: '36.1px',
                                        left: '887.3px',
                                        top: '1390.5px',
                                        marginLeft: '45px'
                                    }}
                                /></div>
                        </div>
                    </FLexLayout>
                )}

                {/* brand-advertisement-container-mobile */}
                {width < 1221 && (
                    <FLexLayout
                        rowORColumn="row"
                        justifyContent="center"
                        alignItem="center"
                        style={{ width: '100%' }}
                    >
                        <FLexLayout
                            style={{
                                padding: '32px',
                                width: width > 380 ? '380px' : '90%',
                                height: `${370}px`
                            }}
                            rowORColumn="column"
                            className={Style['brand-advertisement-container']}
                        >
                            {/* text-container */}

                            <FLexLayout
                                rowORColumn="row"
                                justifyContent="center"
                                alignItem="center"
                                style={{
                                    fontFamily: 'Poppins',
                                    fontStyle: 'normal',
                                    fontWeight: 600,
                                    fontSize: '35px',
                                    lineHeight: '135%',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    color: '#000000',
                                }}
                            >
                                {/* heading */}
                                <div className={Style['mainFontMobile']} style={{ color: '#F48C06' }}>
                                    {'Mentors'}
                                </div>
                                <div className={Style['mainFontMobile']} style={{ color: '#2F327D', marginLeft: '5px' }}>{'From'}</div>
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
                        style={{ marginTop: '100px', width: '60%', alignItems: 'center' }}
                    >
                        <FLexLayout
                            justifyContent="center"
                            alignItem="center"
                            rowORColumn="column"
                            style={{ width: '60%', textAlign: 'center', alignItems: 'center', display: 'flex', justifyContent: 'center', marginLeft: '50px' }}
                        >
                            <div style={{
                                display: 'flex',
                                flexDirection: 'row',
                                fontFamily: 'Poppins',
                                fontStyle: 'normal',
                                fontWeight: 600,
                                fontSize: '44px',
                                lineHeight: '135%',
                                alignItems: 'center',
                                textAlign: 'center',
                                color: '#000000',
                            }}>
                                <div className={Style['mainFont']} style={{ color: '#2F327D' }}>
                                    {'Top'}
                                </div>
                                <div className={Style['mainFont']} style={{ color: '#F48C06', marginLeft: '5px' }}>{'Recommended'}</div>
                                <div className={Style['mainFont']} style={{ color: '#2F327D', marginLeft: '5px' }}>{'Courses'}</div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'row', padding: '100px', marginLeft: '100px' }} >
                                <div style={{ padding: '20px', cursor: 'pointer' }} onClick={designCourse}>
                                    <img src="/icons/Rectangle-5.png" />
                                    <div style={{
                                        background: '#EEEEEE',
                                        borderBottomLeftRadius: '16px',
                                        borderBottomRightRadius: '16px',
                                        padding: '20px'
                                    }}>
                                        <div style={{
                                            color: '#FF8139',
                                            textAlign: 'start',
                                            fontFamily: 'Inter',
                                            fontStyle: 'normal',
                                            fontWeight: 500,
                                            fontSize: '12px',
                                            lineHeight: '100%',
                                            textTransform: 'uppercase',
                                            marginBottom: '10px'
                                        }}>Trending now</div>
                                        <div style={{
                                            fontFamily: 'Inter',
                                            fontStyle: 'normal',
                                            fontWeight: 500,
                                            fontSize: '20px',
                                            lineHeight: '100%',
                                            textAlign: 'start',
                                            marginBottom: '5px'
                                        }}>Metvy Design Program</div>
                                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                                            <div style={{ width: '50%', textAlign: 'start', color: '#777777' }}>₹3499</div>
                                            <div style={{ width: '50%', textAlign: 'end', color: '#777777' }}>1 day left</div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ padding: '20px', cursor: 'pointer' }} onClick={consultancyCourse}>
                                    <img src="/icons/Rectangle-6.png" />
                                    <div style={{
                                        background: '#EEEEEE',
                                        borderBottomLeftRadius: '16px',
                                        borderBottomRightRadius: '16px',
                                        padding: '20px'
                                    }}>
                                        <div style={{
                                            color: '#FF8139',
                                            textAlign: 'start',
                                            fontFamily: 'Inter',
                                            fontStyle: 'normal',
                                            fontWeight: 500,
                                            fontSize: '12px',
                                            lineHeight: '100%',
                                            textTransform: 'uppercase',
                                            marginBottom: '10px'
                                        }}>Trending now</div>
                                        <div style={{
                                            fontFamily: 'Inter',
                                            fontStyle: 'normal',
                                            fontWeight: 500,
                                            fontSize: '20px',
                                            lineHeight: '100%',
                                            textAlign: 'start',
                                            marginBottom: '5px'
                                        }}>Metvy Consultancy Program</div>
                                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                                            <div style={{ width: '50%', textAlign: 'start', color: '#777777' }}>₹3499</div>
                                            <div style={{ width: '50%', textAlign: 'end', color: '#777777' }}>1 day left</div>
                                        </div>
                                    </div>
                                </div>
                                <div style={{ padding: '20px', cursor: 'pointer' }} onClick={businessCourse}>
                                    <img src="/icons/Rectangle-7.png" />
                                    <div style={{
                                        background: '#EEEEEE',
                                        borderBottomLeftRadius: '16px',
                                        borderBottomRightRadius: '16px',
                                        padding: '20px'
                                    }}>
                                        <div style={{
                                            color: '#FF8139',
                                            textAlign: 'start',
                                            fontFamily: 'Inter',
                                            fontStyle: 'normal',
                                            fontWeight: 500,
                                            fontSize: '12px',
                                            lineHeight: '100%',
                                            textTransform: 'uppercase',
                                            marginBottom: '10px'
                                        }}>Trending now</div>
                                        <div style={{
                                            fontFamily: 'Inter',
                                            fontStyle: 'normal',
                                            fontWeight: 500,
                                            fontSize: '20px',
                                            lineHeight: '100%',
                                            textAlign: 'start',
                                            marginBottom: '5px'
                                        }}>Metvy Business Program</div>
                                        <div style={{ display: 'flex', flexDirection: 'row' }}>
                                            <div style={{ width: '50%', textAlign: 'start', color: '#777777' }}>₹3499</div>
                                            <div style={{ width: '50%', textAlign: 'end', color: '#777777' }}>1 day left</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <button style={{ backgroundColor: 'transparent', border: 'none', marginTop: '10px' }}><a href="https://metvy.com/MetvyLearn"><img src="/icons/button-2.png" /></a></button>
                            {/* <button style={{ color: '#F48C06', borderRadius: '30px', padding: '20px', backgroundColor: 'transparent', border: '1px solid #F48C06', width: '50%', display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignContent: 'center' }}><h4>Explore All Courses</h4><div style={{ border: '1px solid #F48C06', borderRadius: '50%', padding: '25px' }}><img src="/icons/Arrow-logo.png" /></div></button> */}
                        </FLexLayout>
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
                        </FLexLayout>
                    </FLexLayout>
                )}

                {/* mobile view for Top Courses Recommended */}
                {width < 1221 && (
                    <div>
                        <FLexLayout
                            rowORColumn="column"
                            style={{ marginTop: '100px', alignItems: 'center' }}
                        >
                            <FLexLayout
                                justifyContent="center"
                                alignItem="center"
                                rowORColumn="column"
                                style={{ textAlign: 'center', alignItems: 'center', display: 'flex', justifyContent: 'center' }}
                            >
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    fontFamily: 'Poppins',
                                    fontStyle: 'normal',
                                    fontWeight: 600,
                                    fontSize: '35px',
                                    lineHeight: '135%',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    color: '#000000',
                                }}>
                                    <div className={Style['mainFontMobile']} style={{ color: '#2F327D' }}>
                                        {'Top'}
                                    </div>
                                    <div className={Style['mainFontMobile']} style={{ color: '#F48C06', marginLeft: '5px' }}>{'Recommended'}</div>
                                    <div className={Style['mainFontMobile']} style={{ color: '#2F327D', marginLeft: '5px' }}>{'Courses'}</div>
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', padding: '100px' }}>
                                    <div style={{ padding: '20px' }} onClick={designCourse}>
                                        <img src="/icons/Rectangle-5.png" />
                                        <div style={{
                                            background: '#EEEEEE',
                                            borderBottomLeftRadius: '16px',
                                            borderBottomRightRadius: '16px',
                                            padding: '20px'
                                        }}>
                                            <div style={{
                                                color: '#FF8139',
                                                textAlign: 'start',
                                                fontFamily: 'Inter',
                                                fontStyle: 'normal',
                                                fontWeight: 500,
                                                fontSize: '12px',
                                                lineHeight: '100%',
                                                textTransform: 'uppercase',
                                                marginBottom: '10px'
                                            }}>Trending now</div>
                                            <div style={{
                                                fontFamily: 'Inter',
                                                fontStyle: 'normal',
                                                fontWeight: 500,
                                                fontSize: '20px',
                                                lineHeight: '100%',
                                                textAlign: 'start',
                                                marginBottom: '5px'
                                            }}>Metvy Design Program</div>
                                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                                <div style={{ width: '50%', textAlign: 'start', color: '#777777' }}>₹2999</div>
                                                <div style={{ width: '50%', textAlign: 'end', color: '#777777' }}>1 day left</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ padding: '20px' }} onClick={consultancyCourse}>
                                        <img src="/icons/Rectangle-6.png" />
                                        <div style={{
                                            background: '#EEEEEE',
                                            borderBottomLeftRadius: '16px',
                                            borderBottomRightRadius: '16px',
                                            padding: '20px'
                                        }}>
                                            <div style={{
                                                color: '#FF8139',
                                                textAlign: 'start',
                                                fontFamily: 'Inter',
                                                fontStyle: 'normal',
                                                fontWeight: 500,
                                                fontSize: '12px',
                                                lineHeight: '100%',
                                                textTransform: 'uppercase',
                                                marginBottom: '10px'
                                            }}>Trending now</div>
                                            <div style={{
                                                fontFamily: 'Inter',
                                                fontStyle: 'normal',
                                                fontWeight: 500,
                                                fontSize: '20px',
                                                lineHeight: '100%',
                                                textAlign: 'start',
                                                marginBottom: '5px'
                                            }}>Metvy Consultancy Program</div>
                                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                                <div style={{ width: '50%', textAlign: 'start', color: '#777777' }}>₹3999</div>
                                                <div style={{ width: '50%', textAlign: 'end', color: '#777777' }}>1 day left</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={{ padding: '20px' }} onClick={businessCourse}>
                                        <img src="/icons/Rectangle-7.png" />
                                        <div style={{
                                            background: '#EEEEEE',
                                            borderBottomLeftRadius: '16px',
                                            borderBottomRightRadius: '16px',
                                            padding: '20px'
                                        }}>
                                            <div style={{
                                                color: '#FF8139',
                                                textAlign: 'start',
                                                fontFamily: 'Inter',
                                                fontStyle: 'normal',
                                                fontWeight: 500,
                                                fontSize: '12px',
                                                lineHeight: '100%',
                                                textTransform: 'uppercase',
                                                marginBottom: '10px'
                                            }}>Trending now</div>
                                            <div style={{
                                                fontFamily: 'Inter',
                                                fontStyle: 'normal',
                                                fontWeight: 500,
                                                fontSize: '20px',
                                                lineHeight: '100%',
                                                textAlign: 'start',
                                                marginBottom: '5px'
                                            }}>Metvy Business Program</div>
                                            <div style={{ display: 'flex', flexDirection: 'row' }}>
                                                <div style={{ width: '50%', textAlign: 'start', color: '#777777' }}>₹2999</div>
                                                <div style={{ width: '50%', textAlign: 'end', color: '#777777' }}>1 day left</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </FLexLayout>
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
                            </FLexLayout>
                        </FLexLayout>
                        <a href="#submitForm"><FLexLayout
                            rowORColumn="column"
                            className={Style['content-container-landing']}
                            style={{ alignItems: 'center', marginBottom: '15%', marginTop: '-15%' }}
                        ><button style={{ width: '25%', height: '45px' }} className={Style['apply-button']}>Apply Now</button>
                        </FLexLayout>
                        </a>
                    </div>
                )
                }

                {/* desktop for What makes us cool */}
                {
                    width > 1260 && (
                        <FLexLayout
                            rowORColumn="column"
                            style={{ marginTop: '100px', width: '60%', alignItems: 'center', }}
                        >
                            {/* outer-box-overlapping-content-box */}
                            {/* right-side of vector icons -community  */}
                            <FLexLayout
                                style={{
                                    position: 'relative',
                                    width: '60%',
                                }}
                                rowORColumn="row"
                                order="1"
                                justifyContent="center"
                                alignItem="center"
                            >
                                <div style={{
                                    display: 'flex',
                                    flexDirection: 'row',
                                    fontFamily: 'Poppins',
                                    fontStyle: 'normal',
                                    fontWeight: 600,
                                    fontSize: '44px',
                                    lineHeight: '135%',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    color: '#000000',
                                }}>
                                    <div className={Style['mainFont']} style={{ color: '#2F327D' }}>
                                        {'What makes us'}
                                    </div>
                                    <div className={Style['mainFont']} style={{ color: '#F48C06', marginLeft: '5px' }}>{'Cool?'}</div>
                                </div>
                            </FLexLayout>
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
                                <img src="/icons/Peer-to-Peer-Learning.png" style={{ width: '100%' }} />
                            </FLexLayout>
                        </FLexLayout>
                    )
                }

                {/* mobile view What makes you cool ? */}
                {
                    width < 1221 && (
                        <div style={{ backgroundColor: '#EBECF0' }}>
                            <FLexLayout
                                rowORColumn="column"
                                style={{ marginTop: '100px', alignItems: 'center', }}
                            >
                                <FLexLayout
                                    style={{
                                        position: 'relative',
                                    }}
                                    rowORColumn="row"
                                    order="1"
                                    justifyContent="center"
                                    alignItem="center"
                                >
                                    <div style={{
                                        display: 'flex',
                                        flexDirection: 'row',
                                        fontFamily: 'Poppins',
                                        fontStyle: 'normal',
                                        fontWeight: 600,
                                        fontSize: '35px',
                                        lineHeight: '135%',
                                        alignItems: 'center',
                                        textAlign: 'center',
                                        color: '#000000',
                                    }}>
                                        <div className={Style['mainFontMobile']} style={{ color: '#2F327D' }}>
                                            {'What makes us'}
                                        </div>
                                        <div className={Style['mainFontMobile']} style={{ color: '#F48C06', marginLeft: '5px' }}>{'Cool?'}</div>
                                    </div>
                                </FLexLayout>
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
                                    <div className={Style["slideshow"]} >
                                        <div
                                            className={Style["slideshowSlider"]}
                                            style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
                                        >
                                            {colors.map((data, index) => (
                                                <div
                                                    className={Style["slide"]}
                                                    key={index}
                                                >
                                                    <img src={data} style={{ width: '100%', height: '100%' }} />
                                                </div>

                                            ))}
                                        </div>
                                    </div>
                                </FLexLayout>
                            </FLexLayout>
                            <a href="#submitForm"><FLexLayout
                                rowORColumn="column"
                                className={Style['content-container-landing']}
                                style={{ alignItems: 'center', marginTop: '10%', marginBottom: '5%' }}
                            ><button style={{ width: '25%', height: '45px' }} className={Style['apply-button']}>Apply Now</button>
                            </FLexLayout>
                            </a>
                        </div>
                    )
                }

                {/* mobile view Testimonial Headline */}
                {
                    width < 1221 && (
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
                                style={{
                                    width: '80%',
                                    fontFamily: 'Poppins',
                                    fontStyle: 'normal',
                                    fontWeight: 600,
                                    fontSize: '35px',
                                    lineHeight: '135%',
                                    display: 'flex',
                                    alignItems: 'center',
                                    textAlign: 'center',
                                    color: '#000000',
                                }}
                            >
                                <p>
                                    <span style={{ color: '#2F327D' }}>Trusted by</span>
                                    <span style={{ color: 'rgb(244, 140, 6)', marginLeft: '10px' }}>
                                        2000+
                                    </span>
                                    <span style={{ color: '#2F327D', marginLeft: '10px' }}>Young Professionals & Students</span>
                                </p>
                            </FLexLayout>
                        </FLexLayout>
                    )
                }
                {/* Mobile View for Testimonials */}
                {
                    width < 1221 && (
                        <div>
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
                            <a href="#submitForm"><FLexLayout
                                rowORColumn="column"
                                className={Style['content-container-landing']}
                                style={{ alignItems: 'center', marginTop: '-15%' }}
                            ><button style={{ width: '25%', height: '45px' }} className={Style['apply-button']}>Apply Now</button>
                            </FLexLayout>
                            </a>
                        </div>
                    )
                }

                {/* mobile view of Submit Form */}
                {
                    width < 900 && (<FLexLayout
                        rowORColumn="column"
                        className={Style['content-container-landing']}
                        style={{ marginLeft: '10%', paddingBottom: '10%', width: '75%', zIndex: 10, backgroundColor: 'transparent', backgroundSize: '100%', marginTop: '-120%' }}
                    ><SubmitForm /></FLexLayout>)
                }

                {/* tablet view of Submit Form */}
                {
                    (width > 900 && width < 1221) && (<FLexLayout
                        rowORColumn="column"
                        className={Style['content-container-landing']}
                        style={{ marginLeft: '10%', paddingBottom: '10%', width: '75%', zIndex: 10, backgroundColor: 'transparent', backgroundSize: '100%', marginTop: '-60%' }}
                    ><SubmitForm /></FLexLayout>)
                }

                {/* Industry Experts  */}
                {
                    width > 1260 && (
                        <FLexLayout
                            rowORColumn="column"
                            style={{ marginTop: '10px', width: '60%' }}
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
                                <img src="/icons/Industry-Experts.png" style={{ width: '100%' }} />
                            </FLexLayout>
                        </FLexLayout>
                    )
                }

                {/*Personalised Care */}
                {
                    width > 1260 && (
                        <FLexLayout
                            rowORColumn="column"
                            style={{ marginTop: '10px', width: '60%' }}
                        >
                            <FLexLayout
                                style={{
                                    position: 'relative',
                                    top: '110px'
                                }}
                                justifyContent="between"
                                order="4"
                                rowORColumn="row"
                            >
                                <img src="/icons/Personalised-Care.png" style={{ width: '100%' }} />
                            </FLexLayout>
                        </FLexLayout>
                    )
                }

                {/*Testemonial*/}
                {
                    width > 1260 && (
                        <FLexLayout
                            rowORColumn="column"
                            style={{ marginTop: '10px', width: '60%' }}
                        >
                            <FLexLayout
                                style={{
                                    position: 'relative',
                                    top: '110px'
                                }}
                                justifyContent="between"
                                order="4"
                                rowORColumn="row"
                            >
                                <img src="/icons/Testimonial.png" style={{ width: '100%' }} />
                            </FLexLayout>
                        </FLexLayout>
                    )
                }

                {/*FAQ*/}
                {
                    width > 1260 && (
                        <FLexLayout
                            rowORColumn="column"
                            style={{ marginTop: '100px', width: '60%', alignItems: 'center', height: '100%' }}
                        >
                            <FLexLayout
                                style={{
                                    position: 'relative',
                                    height: '100%'
                                }}
                                rowORColumn="row"
                                order="1"
                                justifyContent="center"
                                alignItem="center"
                            >
                                <div
                                    style={{
                                        fontFamily: 'Poppins',
                                        fontStyle: 'normal',
                                        fontWeight: 600,
                                        fontSize: '44px',
                                        lineHeight: '135%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        textAlign: 'center',
                                        color: '#000000',
                                    }}
                                >
                                    {'Frequesntly Asked Questions'}
                                </div>
                            </FLexLayout>
                            {/* benefits-cards-rows */}
                            <FLexLayout
                                style={{
                                    position: 'relative',
                                    top: '110px',
                                    width: '100%',
                                    padding: '40px',
                                    height: '100%',
                                }}
                                justifyContent="between"
                                order="4"
                                rowORColumn="column"
                            >
                                {/* {
                                faqData.map((data, index) => (
                                    <div style={{
                                        background: '#FFFFFF',
                                        borderRadius: '36px',
                                        marginBottom: '15px',
                                        textAlign: 'center',
                                    }} id="questionDiv" key={index}>
                                        <button style={{
                                            background: '#FFFFFF',
                                            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.05), 0px 18px 166px rgba(0, 0, 0, 0.05)',
                                            borderRadius: '36px',
                                            width: '100%',
                                            padding: '20px',
                                            marginBottom: '10px',
                                            textAlign: 'start',
                                            border: 'none',
                                            outline: 'none'
                                        }} onClick={(e) => questionOne(index, e)} key={index}>{data.question} <img src="/icons/Polygon-black.png" id="blackPolygon" style={{ display: 'block' }} /> <img src="/icons/Polygon-white.png" id="whitePolygon" style={{ display: 'none' }} /></button>
                                        <div id="myDIV" style={{ fontSize: '17px', display: 'none' }} key={index}>
                                            {data.answer}
                                        </div>
                                    </div>
                                ))
                            } */}
                                <div style={{
                                    background: '#FFFFFF',
                                    borderRadius: '36px',
                                    marginBottom: '15px',
                                    textAlign: 'center',
                                    height: '80px',
                                    boxShadow: 'none'
                                }} id="questionDiv1">
                                    <button style={{
                                        background: '#FFFFFF',
                                        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.05), 0px 18px 166px rgba(0, 0, 0, 0.05)',
                                        borderRadius: '36px',
                                        width: '100%',
                                        padding: '20px',
                                        marginBottom: '10px',
                                        textAlign: 'start',
                                        border: 'none',
                                        outline: 'none',
                                        display: 'flex',
                                    }} onClick={questionOne}><div style={{ width: '50%' }}>What’s the Program Duration?</div> <div style={{ display: 'block', width: '40%', textAlign: 'end' }} id="blackPolygon1"><img src="/icons/Polygon-black.png" /></div><div style={{ display: 'none', width: '40%', textAlign: 'end' }} id="whitePolygon1"><img src="/icons/Polygon-white.png" /></div></button>
                                    <div id="myDIV1" style={{ fontSize: '15px', display: 'none', textAlign: 'start', padding: '15px' }} >
                                        We offer 30-day curated upskilling programs which require a commitment of 4 hours per week from the user’s end.
                                    </div>
                                </div>
                                <div style={{
                                    background: '#FFFFFF',
                                    borderRadius: '36px',
                                    marginBottom: '15px',
                                    textAlign: 'center',
                                    boxShadow: 'none'
                                }} id="questionDiv2" >
                                    <button style={{
                                        background: '#FFFFFF',
                                        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.05), 0px 18px 166px rgba(0, 0, 0, 0.05)',
                                        borderRadius: '36px',
                                        width: '100%',
                                        padding: '20px',
                                        marginBottom: '10px',
                                        textAlign: 'start',
                                        border: 'none',
                                        outline: 'none',
                                        display: 'flex',
                                    }} onClick={questionTwo}><div style={{ width: '50%' }}>What if I miss a live session?</div><div style={{ display: 'block', width: '40%', textAlign: 'end' }} id="blackPolygon2"><img src="/icons/Polygon-black.png" /></div><div style={{ display: 'none', width: '40%', textAlign: 'end' }} id="whitePolygon2"><img src="/icons/Polygon-white.png" /></div></button>
                                    <div id="myDIV2" style={{ fontSize: '15px', display: 'none', textAlign: 'start', padding: '15px' }}>
                                        In such cases, we provide session recordings for each session that has happened, and one can refer to them at any time (Recordings would be available for 1 week after the cohort ends).
                                    </div>
                                </div>
                                <div style={{
                                    background: '#FFFFFF',
                                    borderRadius: '36px',
                                    marginBottom: '15px',
                                    textAlign: 'center',
                                    boxShadow: 'none'
                                }} id="questionDiv3" >
                                    <button style={{
                                        background: '#FFFFFF',
                                        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.05), 0px 18px 166px rgba(0, 0, 0, 0.05)',
                                        borderRadius: '36px',
                                        width: '100%',
                                        padding: '20px',
                                        marginBottom: '10px',
                                        textAlign: 'start',
                                        border: 'none',
                                        outline: 'none',
                                        display: 'flex',
                                    }} onClick={questionThree}><div style={{ width: '50%' }}>Is there any deadline to register?</div><div style={{ display: 'block', width: '40%', textAlign: 'end' }} id="blackPolygon3"><img src="/icons/Polygon-black.png" /></div><div style={{ display: 'none', width: '40%', textAlign: 'end' }} id="whitePolygon3"><img src="/icons/Polygon-white.png" /></div></button>
                                    <div id="myDIV3" style={{ fontSize: '15px', display: 'none', textAlign: 'start', padding: '15px' }}>
                                        For every cohort the registration are opened till the last day of the previous cohort (Subject to seat availability).
                                    </div>
                                </div>
                                <div style={{
                                    background: '#FFFFFF',
                                    borderRadius: '36px',
                                    marginBottom: '15px',
                                    textAlign: 'center',
                                    boxShadow: 'none'
                                }} id="questionDiv4" >
                                    <button style={{
                                        background: '#FFFFFF',
                                        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.05), 0px 18px 166px rgba(0, 0, 0, 0.05)',
                                        borderRadius: '36px',
                                        width: '100%',
                                        padding: '20px',
                                        marginBottom: '10px',
                                        textAlign: 'start',
                                        border: 'none',
                                        outline: 'none',
                                        display: 'flex',
                                    }} onClick={questionFour}><div style={{ width: '50%' }}>What is the time commitment for any of these programs?</div><div style={{ display: 'block', width: '40%', textAlign: 'end' }} id="blackPolygon4"><img src="/icons/Polygon-black.png" /></div><div style={{ display: 'none', width: '40%', textAlign: 'end' }} id="whitePolygon4"><img src="/icons/Polygon-white.png" /></div></button>
                                    <div id="myDIV4" style={{ fontSize: '15px', display: 'none', textAlign: 'start', padding: '15px' }}>
                                        All the programs require a commitment of 4 hours per week from the user’s end.
                                    </div>
                                </div>
                                <div style={{
                                    background: '#FFFFFF',
                                    borderRadius: '36px',
                                    marginBottom: '15px',
                                    textAlign: 'center',
                                    boxShadow: 'none'
                                }} id="questionDiv5" >
                                    <button style={{
                                        background: '#FFFFFF',
                                        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.05), 0px 18px 166px rgba(0, 0, 0, 0.05)',
                                        borderRadius: '36px',
                                        width: '100%',
                                        padding: '20px',
                                        marginBottom: '10px',
                                        textAlign: 'start',
                                        border: 'none',
                                        outline: 'none',
                                        display: 'flex',
                                    }} onClick={questionFive}><div style={{ width: '50%' }}>What do I get after successful completion of the program?</div><div style={{ display: 'block', width: '40%', textAlign: 'end' }} id="blackPolygon5"><img src="/icons/Polygon-black.png" /></div><div style={{ display: 'none', width: '40%', textAlign: 'end' }} id="whitePolygon5"><img src="/icons/Polygon-white.png" /></div></button>
                                    <div id="myDIV5" style={{ fontSize: '15px', display: 'none', textAlign: 'start', padding: '15px' }}>
                                        After the successful completion of the cohort one would received a certificate and a letter of recommendation backed by NSRCEL, IIM Bangalore and ANDC InStart Foundation.
                                    </div>
                                </div>
                            </FLexLayout>
                        </FLexLayout>
                    )
                }

                {/*Mobile view FAQ*/}
                {
                    width < 1221 && (
                        <FLexLayout
                            rowORColumn="column"
                            style={{ marginTop: '100px', width: '100%', alignItems: 'center', height: '100%' }}
                        >
                            <FLexLayout
                                style={{
                                    position: 'relative',
                                    height: '100%'
                                }}
                                rowORColumn="row"
                                order="1"
                                justifyContent="center"
                                alignItem="center"
                            >
                                <div
                                    style={{
                                        fontFamily: 'Poppins',
                                        fontStyle: 'normal',
                                        fontWeight: 600,
                                        fontSize: '35px',
                                        lineHeight: '135%',
                                        display: 'flex',
                                        alignItems: 'center',
                                        textAlign: 'center',
                                        color: '#000000',
                                    }}
                                >
                                    {'Frequently Asked Questions'}
                                </div>
                            </FLexLayout>
                            {/* benefits-cards-rows */}
                            {/* <FLexLayout
                                style={{
                                    position: 'relative',
                                    top: '110px',
                                    width: '100%',
                                    padding: '40px',
                                    height: '100%'
                                }}
                                justifyContent="between"
                                order="4"
                                rowORColumn="column"
                            >
                                <div style={{
                                    background: '#FFFFFF',
                                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.05), 0px 18px 166px rgba(0, 0, 0, 0.05)',
                                    borderRadius: '36px',
                                    width: '100%',
                                    padding: '20px',
                                    marginBottom: '10px'
                                }}>What’s the Program Duration?</div>
                                <div style={{
                                    background: '#FFFFFF',
                                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.05), 0px 18px 166px rgba(0, 0, 0, 0.05)',
                                    borderRadius: '36px',
                                    padding: '20px',
                                    marginBottom: '10px'
                                }}>What if I miss a live session?</div>
                                <div style={{
                                    background: '#FFFFFF',
                                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.05), 0px 18px 166px rgba(0, 0, 0, 0.05)',
                                    borderRadius: '36px',
                                    padding: '20px',
                                    marginBottom: '10px'
                                }}>Is there any deadline to register?</div>
                                <div style={{
                                    background: '#FFFFFF',
                                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.05), 0px 18px 166px rgba(0, 0, 0, 0.05)',
                                    borderRadius: '36px',
                                    padding: '20px',
                                    marginBottom: '10px'
                                }}>What is the time commitment for any of these programs?</div>
                                <div style={{
                                    background: '#FFFFFF',
                                    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.05), 0px 18px 166px rgba(0, 0, 0, 0.05)',
                                    borderRadius: '36px',
                                    padding: '20px',
                                    marginBottom: '10px'
                                }}>What do I get after successful completion of the program?</div>
                            </FLexLayout> */}
                            <FLexLayout
                                style={{
                                    position: 'relative',
                                    top: '110px',
                                    width: '100%',
                                    padding: '40px',
                                    height: '100%'
                                }}
                                justifyContent="between"
                                order="4"
                                rowORColumn="column"
                            >
                                {/* {
                                faqData.map((data, index) => (
                                    <div style={{
                                        background: '#FFFFFF',
                                        borderRadius: '36px',
                                        marginBottom: '15px',
                                        textAlign: 'center',
                                    }} id="questionDiv" key={index}>
                                        <button style={{
                                            background: '#FFFFFF',
                                            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.05), 0px 18px 166px rgba(0, 0, 0, 0.05)',
                                            borderRadius: '36px',
                                            width: '100%',
                                            padding: '20px',
                                            marginBottom: '10px',
                                            textAlign: 'start',
                                            border: 'none',
                                            outline: 'none'
                                        }} onClick={(e) => questionOne(index, e)} key={index}>{data.question} <img src="/icons/Polygon-black.png" id="blackPolygon" style={{ display: 'block' }} /> <img src="/icons/Polygon-white.png" id="whitePolygon" style={{ display: 'none' }} /></button>
                                        <div id="myDIV" style={{ fontSize: '17px', display: 'none' }} key={index}>
                                            {data.answer}
                                        </div>
                                    </div>
                                ))
                            } */}
                                <div style={{
                                    background: '#FFFFFF',
                                    borderRadius: '36px',
                                    marginBottom: '15px',
                                    textAlign: 'center',
                                    // height: '80px',
                                    boxShadow: 'none'
                                }} id="questionDiv1">
                                    <button style={{
                                        background: '#FFFFFF',
                                        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.05), 0px 18px 166px rgba(0, 0, 0, 0.05)',
                                        borderRadius: '36px',
                                        width: '100%',
                                        padding: '20px',
                                        marginBottom: '10px',
                                        textAlign: 'start',
                                        border: 'none',
                                        outline: 'none',
                                        display: 'flex',
                                    }} onClick={questionOne}><div style={{ width: '50%', fontSize: width < 900 && '15px' }}>What’s the Program Duration?</div> <div style={{ display: 'block', width: '40%', textAlign: 'end' }} id="blackPolygon1"><img src="/icons/Polygon-black.png" /></div><div style={{ display: 'none', width: '40%', textAlign: 'end' }} id="whitePolygon1"><img src="/icons/Polygon-white.png" /></div></button>
                                    <div id="myDIV1" style={{ fontSize: width < 900 && '14px', display: 'none', textAlign: 'start', padding: '15px' }} >
                                        We offer 30-day curated upskilling programs which require a commitment of 4 hours per week from the user’s end.
                                    </div>
                                </div>
                                <div style={{
                                    background: '#FFFFFF',
                                    borderRadius: '36px',
                                    marginBottom: '15px',
                                    textAlign: 'center',
                                    boxShadow: 'none'
                                }} id="questionDiv2" >
                                    <button style={{
                                        background: '#FFFFFF',
                                        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.05), 0px 18px 166px rgba(0, 0, 0, 0.05)',
                                        borderRadius: '36px',
                                        width: '100%',
                                        padding: '20px',
                                        marginBottom: '10px',
                                        textAlign: 'start',
                                        border: 'none',
                                        outline: 'none',
                                        display: 'flex',
                                    }} onClick={questionTwo}><div style={{ width: '50%', fontSize: width < 900 && '15px' }}>What if I miss a live session?</div><div style={{ display: 'block', width: '40%', textAlign: 'end' }} id="blackPolygon2"><img src="/icons/Polygon-black.png" /></div><div style={{ display: 'none', width: '40%', textAlign: 'end' }} id="whitePolygon2"><img src="/icons/Polygon-white.png" /></div></button>
                                    <div id="myDIV2" style={{ fontSize: width < 900 && '14px', display: 'none', textAlign: 'start', padding: '15px' }}>
                                        In such cases, we provide session recordings for each session that has happened, and one can refer to them at any time (Recordings would be available for 1 week after the cohort ends).
                                    </div>
                                </div>
                                <div style={{
                                    background: '#FFFFFF',
                                    borderRadius: '36px',
                                    marginBottom: '15px',
                                    textAlign: 'center',
                                    boxShadow: 'none'
                                }} id="questionDiv3" >
                                    <button style={{
                                        background: '#FFFFFF',
                                        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.05), 0px 18px 166px rgba(0, 0, 0, 0.05)',
                                        borderRadius: '36px',
                                        width: '100%',
                                        padding: '20px',
                                        marginBottom: '10px',
                                        textAlign: 'start',
                                        border: 'none',
                                        outline: 'none',
                                        display: 'flex',
                                    }} onClick={questionThree}><div style={{ width: '50%', fontSize: width < 900 && '15px' }}>Is there any deadline to register?</div><div style={{ display: 'block', width: '40%', textAlign: 'end' }} id="blackPolygon3"><img src="/icons/Polygon-black.png" /></div><div style={{ display: 'none', width: '40%', textAlign: 'end' }} id="whitePolygon3"><img src="/icons/Polygon-white.png" /></div></button>
                                    <div id="myDIV3" style={{ fontSize: width < 900 && '14px', display: 'none', textAlign: 'start', padding: '15px' }}>
                                        For every cohort the registration are opened till the last day of the previous cohort ( Subject to seat availability).
                                    </div>
                                </div>
                                <div style={{
                                    background: '#FFFFFF',
                                    borderRadius: '36px',
                                    marginBottom: '15px',
                                    textAlign: 'center',
                                    boxShadow: 'none'
                                }} id="questionDiv4" >
                                    <button style={{
                                        background: '#FFFFFF',
                                        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.05), 0px 18px 166px rgba(0, 0, 0, 0.05)',
                                        borderRadius: '36px',
                                        width: '100%',
                                        padding: '20px',
                                        marginBottom: '10px',
                                        textAlign: 'start',
                                        border: 'none',
                                        outline: 'none',
                                        display: 'flex',
                                    }} onClick={questionFour}><div style={{ width: '50%', fontSize: width < 900 && '15px' }}>What is the time commitment for any of these programs?</div><div style={{ display: 'block', width: '40%', textAlign: 'end' }} id="blackPolygon4"><img src="/icons/Polygon-black.png" /></div><div style={{ display: 'none', width: '40%', textAlign: 'end' }} id="whitePolygon4"><img src="/icons/Polygon-white.png" /></div></button>
                                    <div id="myDIV4" style={{ fontSize: width < 900 && '14px', display: 'none', textAlign: 'start', padding: '15px' }}>
                                        All the programs require a commitment of 4 hours per week from the user’s end.
                                    </div>
                                </div>
                                <div style={{
                                    background: '#FFFFFF',
                                    borderRadius: '36px',
                                    marginBottom: '15px',
                                    textAlign: 'center',
                                    boxShadow: 'none'
                                }} id="questionDiv5" >
                                    <button style={{
                                        background: '#FFFFFF',
                                        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.05), 0px 18px 166px rgba(0, 0, 0, 0.05)',
                                        borderRadius: '36px',
                                        width: '100%',
                                        padding: '20px',
                                        marginBottom: '10px',
                                        textAlign: 'start',
                                        border: 'none',
                                        outline: 'none',
                                        display: 'flex',
                                    }} onClick={questionFive}><div style={{ width: '50%', fontSize: width < 900 && '15px' }}>What do I get after successful completion of the program?</div><div style={{ display: 'block', width: '40%', textAlign: 'end' }} id="blackPolygon5"><img src="/icons/Polygon-black.png" /></div><div style={{ display: 'none', width: '40%', textAlign: 'end' }} id="whitePolygon5"><img src="/icons/Polygon-white.png" /></div></button>
                                    <div id="myDIV5" style={{ fontSize: width < 900 && '12px', display: 'none', textAlign: 'start', padding: '15px' }}>
                                        After the successful completion of the cohort one would received a certificate and a letter of recommendation backed by NSRCEL, IIM Bangalore and ANDC InStart Foundation.
                                    </div>
                                </div>
                            </FLexLayout>
                        </FLexLayout>
                    )
                }
            </FLexLayout >
            <Footer />
        </div >
    );
};

const mapDispatchToProps = (state) => {
    return {
        width: state.screenConfig.width
    };
};

const mapActionToProps = { setWidth };

export default connect(mapDispatchToProps, mapActionToProps)(_Landing);
