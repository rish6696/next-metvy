import Header from '../../components/HeaderLanding/HeaderLanding';

import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FLexLayout from '../../components/FlexLayout';
import { Col, Container, Image, Row,Carousel } from 'react-bootstrap';
import {
    brandName,
    firstPartText,
    mentorData,
    rating,
    testimonialHeading,
    totalDownloadsLandingScreen,teamData,aboutUs
} from '../../constants';
import Style from './team.module.css';


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
                        <div className={Style.brandText}>{'The Team '}</div>
                    </FLexLayout>
                </FLexLayout>
                  
                    {/* our-mentors-carousel-mobile */}
                 {width <= 768 && (
                    <Carousel interval={2000} fade={true} controls={false} indicators={false}>
                        {teamData.map((mentor) => {
                            return (
                                <Carousel.Item>
                                      <FLexLayout
                                            style={{ marginTop: '120px', height: '490px' }}
                                            rowORColumn="row"
                                            justifyContent="center"
                                            alignItem="center"
                                            className={Style['team-box']}
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
                                                    <Image style={{height:'175px',width:'175px'}}  className={Style['circular-image']} src={mentor.imageName} />
                                                </FLexLayout>

                                                {/*first-name-container */}
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
                                                        {mentor.firstName}{' '}
                                                    </div>
                                                </FLexLayout>

                                                {/*last-name-container */}
                                                <FLexLayout
                                                    style={{ position: 'relative', top: '-82px' }}
                                                    rowORColumn="row"
                                                    justifyContent="center"
                                                    alignItem="center"
                                                >
                                                    <div
                                                        style={{
                                                            fontFamily: 'poppinsRegular',
                                                            fontSize: '18px',
                                                            color:'#3BB0A3'
                                                        }}
                                                    >
                                                        {' '}
                                                        {mentor.lastName}{' '}
                                                    </div>
                                                </FLexLayout>


                                                 {/*title-container */}
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
                                                        {mentor.title}{' '}
                                                    </div>
                                                </FLexLayout>

                                                {/*description-container */}
                                                <FLexLayout
                                                    style={{ position: 'relative', top: '-52px' }}
                                                    rowORColumn="row"
                                                    justifyContent="center"
                                                    alignItem="center"
                                                >
                                                    <div
                                                        style={{
                                                            fontFamily: 'poppinsRegular',
                                                            fontSize: '14px',
                                                            width:'80%',
                                                            textAlign:'center'
                                                        }}
                                                    >
                                                        {' '}
                                                        {mentor.description}{' '}
                                                    </div>
                                                </FLexLayout>



                                                {/*college-container */}
                                                <FLexLayout
                                                    style={{ position: 'relative', top: '-22px' }}
                                                    rowORColumn="row"
                                                    justifyContent="center"
                                                    alignItem="center"
                                                >
                                                    <div
                                                        style={{
                                                            fontFamily: 'poppinsRegular',
                                                            fontSize: '14px',
                                                            width:'80%',
                                                            textAlign:'center'
                                                        }}
                                                    >
                                                        {' '}
                                                        {mentor.institute}{' '}
                                                    </div>
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
                            {teamData.map((mentor) => {
                                return (
                                    <Col >
                                        <FLexLayout
                                            style={{ marginTop: '120px', height: '490px' }}
                                            rowORColumn="row"
                                            justifyContent="center"
                                            alignItem="center"
                                            className={Style['team-box']}
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
                                                    <Image  className={Style['circular-image']} src={mentor.imageName} />
                                                </FLexLayout>

                                                {/*first-name-container */}
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
                                                        {mentor.firstName}{' '}
                                                    </div>
                                                </FLexLayout>

                                                {/*last-name-container */}
                                                <FLexLayout
                                                    style={{ position: 'relative', top: '-82px' }}
                                                    rowORColumn="row"
                                                    justifyContent="center"
                                                    alignItem="center"
                                                >
                                                    <div
                                                        style={{
                                                            fontFamily: 'poppinsRegular',
                                                            fontSize: '18px',
                                                            color:'#3BB0A3'
                                                        }}
                                                    >
                                                        {' '}
                                                        {mentor.lastName}{' '}
                                                    </div>
                                                </FLexLayout>


                                                 {/*title-container */}
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
                                                        {mentor.title}{' '}
                                                    </div>
                                                </FLexLayout>

                                                {/*description-container */}
                                                <FLexLayout
                                                    style={{ position: 'relative', top: '-52px' }}
                                                    rowORColumn="row"
                                                    justifyContent="center"
                                                    alignItem="center"
                                                >
                                                    <div
                                                        style={{
                                                            fontFamily: 'poppinsRegular',
                                                            fontSize: '14px',
                                                            width:'80%',
                                                            textAlign:'center'
                                                        }}
                                                    >
                                                        {' '}
                                                        {mentor.description}{' '}
                                                    </div>
                                                </FLexLayout>



                                                {/*college-container */}
                                                <FLexLayout
                                                    style={{ position: 'relative', top: '-22px' }}
                                                    rowORColumn="row"
                                                    justifyContent="center"
                                                    alignItem="center"
                                                >
                                                    <div
                                                        style={{
                                                            fontFamily: 'poppinsRegular',
                                                            fontSize: '14px',
                                                            width:'80%',
                                                            textAlign:'center'
                                                        }}
                                                    >
                                                        {' '}
                                                        {mentor.institute}{' '}
                                                    </div>
                                                </FLexLayout>

                                                 {/* linkedin-icon-container */}

                                                 <FLexLayout
                                                    rowORColumn="row"
                                                    justifyContent="center"
                                                    alignItem="center"
                                                    style={{ position: 'relative', top: '-15px' }}
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


                {/* AboutUs heading */}
                <FLexLayout
                    style={{ paddingTop: '120px' }}
                    rowORColumn="row"
                    alignItem="center"
                    justifyContent="center"
                >
                    <FLexLayout justifyContent="center" alignItem="center" rowORColumn="column">
                        <div className={Style.brandText}>{'About Us'}</div>
                    </FLexLayout>
                </FLexLayout>

                 {/* AboutUs content */}
                 <FLexLayout
                    rowORColumn="row"
                    alignItem="center"
                    justifyContent="center"
                    className={Style['aboutUs']}
                    style={{marginBottom:'30px'}}
                >
                    <div style={{width:'95%'}} >  {aboutUs} </div>

                </FLexLayout>

                <Footer/>

               
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
