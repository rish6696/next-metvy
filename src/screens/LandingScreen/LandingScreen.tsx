// import React from 'react'

// const _LandingScreen = ()=>{
//     return (
//         <div>Hello World</div>
//     )
// }

// export default _LandingScreen

import Firstpart from './../../components/1stPart/FirstPart';
import Header from '../../components/Header/Header';

import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import FLexLayout from '../../components/FlexLayout';
import { Image } from 'react-bootstrap';
import { brandName, firstPartText, testimonialHeading } from '../../constants';
import Style from './LandingScreen.module.css';

import dynamic from 'next/dynamic';

import Carousel from '../Carousel/Carousel';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel as CarouselTestimonial } from 'react-responsive-carousel';

const useStyles = makeStyles({
    list: {
        width: 250
    },
    fullList: {
        width: 'auto'
    }
});

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function TemporaryDrawer() {
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false
    });

    const [width, setWidth] = useState(-1);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    const toggleDrawer = (anchor: Anchor, open: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent
    ) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        setState({ ...state, [anchor]: open });
    };

    const list = (anchor: Anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom'
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
            <Divider />
            <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem button key={text}>
                        <ListItemIcon>
                            {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                    </ListItem>
                ))}
            </List>
        </div>
    );

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



    const testimonial = (
        <FLexLayout rowORColumn='column' justifyContent='center' alignItem='center' >
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
                            backgroundColor:'red'
                        }}
                        src='/icons/ginpic-20180223123437455.jpeg'
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
    )


    const testimonials = [1,2,3,4].map(x=>(testimonial))

    return (
        <div>
            <Header />
            <div className={Style.container}>
                <FLexLayout
                    style={{ paddingTop: '120px' }}
                    rowORColumn="row"
                    alignItem="center"
                    justifyContent="center"
                >
                    <FLexLayout justifyContent="center" alignItem="center" rowORColumn="column">
                        <Image src="/icons/ic_launcher.png" />
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

                <FLexLayout
                    style={{
                        marginLeft: `${0.13 * width}px`,
                        marginRight: `${0.13 * width}px`,
                        marginTop: '60px'
                    }}
                    alignItem="center"
                    justifyContent="between"
                    rowORColumn="row"
                >
                    <FLexLayout rowORColumn="column" justifyContent="center" alignItem="center">
                        <FLexLayout
                            rowORColumn="column"
                            justifyContent="center"
                            alignItem="center"
                            className={Style.navigationIcons}
                            style={{
                                width: `${width / 4}px`,
                                height: `${width / 4}px`,
                                textAlign: 'center'
                            }}
                        >
                            <Image
                                style={{ width: `${0.12 * width}px`, height: `${0.1 * width}px` }}
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
                            style={{ color: 'white', fontFamily: 'poppinsBold', fontSize: '14px' }}
                        >
                            {' '}
                            Networking{' '}
                        </div>
                    </FLexLayout>

                    <FLexLayout rowORColumn="column" justifyContent="center" alignItem="center">
                        <FLexLayout
                            rowORColumn="column"
                            justifyContent="center"
                            alignItem="center"
                            className={Style.navigationIcons}
                            style={{
                                width: `${width / 4}px`,
                                height: `${width / 4}px`,
                                textAlign: 'center'
                            }}
                        >
                            <Image
                                style={{ width: `${0.12 * width}px`, height: `${0.1 * width}px` }}
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
                            style={{ color: 'white', fontFamily: 'poppinsBold', fontSize: '14px' }}
                        >
                            {' '}
                            Mentorship{' '}
                        </div>
                    </FLexLayout>
                </FLexLayout>

                <FLexLayout
                    rowORColumn="row"
                    style={{
                        marginLeft: `${0.13 * width}px`,
                        marginRight: `${0.13 * width}px`,
                        marginTop: '76px'
                    }}
                    alignItem="center"
                    justifyContent="center"
                >
                    <FLexLayout
                        className={Style.storeIcons}
                        rowORColumn="row"
                        style={{
                            padding: '17px',
                            width: `${0.35 * width}px`,
                            height: `${0.12 * width}px`,
                            marginRight: `${0.03 * width}px`
                        }}
                        alignItem="center"
                        justifyContent="center"
                    >
                        <FLexLayout
                            rowORColumn="column"
                            style={{ marginRight: `${0.027 * width}px` }}
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
                                onPlayStore
                            </div>
                        </FLexLayout>

                        <Image
                            style={{ height: `${0.06 * width}px`, width: `${0.05 * width}px` }}
                            src="/icons/playstore.png"
                        />
                    </FLexLayout>

                    <FLexLayout
                        className={Style.storeIcons}
                        rowORColumn="row"
                        style={{
                            padding: '17px',
                            width: `${0.35 * width}px`,
                            height: `${0.12 * width}px`,
                            marginRight: `${0.03 * width}px`
                        }}
                        alignItem="center"
                        justifyContent="center"
                    >
                        <FLexLayout
                            rowORColumn="column"
                            style={{ marginRight: `${0.027 * width}px` }}
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
                                onPlayStore
                            </div>
                        </FLexLayout>

                        <Image
                            style={{ height: `${0.06 * width}px`, width: `${0.05 * width}px` }}
                            src="/icons/apple.png"
                        />
                    </FLexLayout>
                </FLexLayout>

                <FLexLayout rowORColumn="column" alignItem="center" justifyContent="center">
                    <div
                        className={Style.headingDiscover}
                        style={{ color: 'white', marginTop: '87px' }}
                    >
                        {' '}
                        {'DISCOVER & EXPLORE'}{' '}
                    </div>
                </FLexLayout>

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

                <div
                    className={Style.headingBold}
                    style={{ marginLeft: `${0.13 * width}px`, marginRight: `${0.13 * width}px` }}
                >
                    {'A New way to interact with your Network!'}
                </div>

                <FLexLayout
                    style={{ marginLeft: `${0.1 * width}px`, marginRight: `${0.1 * width}px` }}
                    rowORColumn="column"
                    justifyContent="center"
                    alignItem="center"
                >
                    <Carousel />
                </FLexLayout>

                <FLexLayout
                    className={Style.testimonialsHeading}
                    rowORColumn="row"
                    justifyContent="center"
                    alignItem="center"
                    style={{
                        width: `${0.75 * width}px`,
                        height: `${50}px`,
                        marginLeft: `${0.12 * width}px`,
                        marginRight: `${0.12 * width}px`
                    }}
                >
                    <div className={Style.testimonialText}>{testimonialHeading}</div>
                </FLexLayout>

                <CarouselTestimonial infiniteLoop={true} autoPlay={true} showArrows={false} showIndicators={false} showStatus={false} showThumbs={false} >
                    {testimonials}
                </CarouselTestimonial>

            </div>
        </div>
    );
}
