import React, { useEffect, useState } from 'react';
import FLexLayout from '../FlexLayout';
import Style from './FooterNew.module.css';
import { Image } from 'react-bootstrap';
import { BASE_URL } from '../../api-services/api-constants';
import { contactDetails, socialMediaLinks } from '../../constants';
import { useRouter } from 'next/router';

const _FooterNew = () => {
    const router = useRouter();
    const [width, setWidth] = useState(-1);

    const updateWindowSize = () => {
        setWidth(window.innerWidth);
    };

    useEffect(() => {
        setWidth(window.innerWidth);
        window.addEventListener('resize', updateWindowSize);
    }, []);

    return (
        // footer-container-black
        <FLexLayout
            className={Style['footer-container-black']}
            rowORColumn="row"
            justifyContent="center"
            alignItem="center"
        >
            {/* footer box */}
            <FLexLayout
                rowORColumn={width < 900 ? "column" : "row"}
                style={{ width: '100%', alignItems: 'center' }}
            >
                <div style={{ display: 'flex', flexDirection: 'row', width: '50%', padding: width < 900 && '10px' }}>
                    {/* items-box */}
                    <FLexLayout style={{ width: '60%', padding: width < 900 && '20px' }} justifyContent="between" rowORColumn="row">
                        {/* items-colum-1 */}
                        <FLexLayout rowORColumn="column" style={{ width: '100%' }}>
                            {/* <div onClick={() => router.push('/')} className={Style['footer-items']}>{'About Metvy'}</div> */}
                            <div className={Style['footer-items']}><a href="https://metvy.com/">{'About Metvy'}</a></div>
                            {/* <div onClick={() => router.push('/team')} className={Style['footer-items']}>{'Team'}</div> */}
                            <div className={Style['footer-items']}><a href="https://t.me/joinchat/PRXD91iL538zNGM9">{'Community'}</a></div>
                            {/* <div onClick={onConditionsClick} className={Style['footer-items']}>
                            {'Terms & Conditions'}
                        </div> */}
                            {/* <div className={Style['footer-items']}>{'Resources'}</div> */}
                            <div className={Style['footer-items']}><a href="https://metvy.com/team">{'Team'}</a></div>
                        </FLexLayout>
                    </FLexLayout>
                    <FLexLayout style={{ width: '50%', padding: width < 900 && '20px' }} justifyContent="between" rowORColumn="row">
                        {/* items-colum-1 */}
                        <FLexLayout rowORColumn="column" style={{ width: '100%' }}>
                            {/* <div onClick={() => router.push('/')} className={Style['footer-items']}>{'About Metvy'}</div> */}
                            <div className={Style['footer-items']}><a href="https://api2.metvy.com/api/learn/terms-condition">{'Terms & Conditions'}</a></div>
                            {/* <div onClick={() => router.push('/team')} className={Style['footer-items']}>{'Team'}</div> */}
                            {/* <div className={Style['footer-items']}>{'Contact Us'}</div> */}
                            {/* <div onClick={onConditionsClick} className={Style['footer-items']}>
                            {'Terms & Conditions'}
                        </div> */}
                            <div className={Style['footer-items']}><a href="https://api2.metvy.com/api/learn/privacy-policy">{'Privacy Policy'}</a></div>
                        </FLexLayout>
                    </FLexLayout>
                </div>
                {/* follow-us-at-container */}
                <FLexLayout
                    style={{ width: '50%' }}
                    rowORColumn="row"
                    justifyContent="center"
                    alignItem="center"
                >
                    {/* follow us at text   */}
                    {/* social-media-handle-container */}
                    <FLexLayout
                        style={{ marginTop: '11px' }}
                        rowORColumn="column"
                        justifyContent="center"
                        alignItem="center"
                    >
                        <div style={{ fontFamily: 'poppinsBold', fontSize: '20px', marginBottom: '20px' }} className={Style['followus']}>
                            {'Follow us at'}
                        </div>
                        {/* social-media-icons-row  */}
                        <FLexLayout
                            style={{ alignContent: 'center', alignItems: 'center', width: '100%' }}
                            rowORColumn="row"
                            alignItem="center"
                            justifyContent="between"
                        >
                            <Image
                                className={Style['footer-social-media-items']}
                                // style={{ width: '21px', height: '21px' }}
                                src="/icons/facebook-logo.png"
                                onClick={() => window.open(socialMediaLinks.facebook)}
                            />
                            <Image
                                className={Style['footer-social-media-items']}
                                // style={{ width: '21px', height: '21px' }}
                                src="/icons/linkedin-logo.png"
                                onClick={() => window.open(socialMediaLinks.linkedIn)}
                            />
                            <Image
                                className={Style['footer-social-media-items']}
                                // style={{ width: '21px', height: '21px' }}
                                src="/icons/twitter-logo.png"
                                onClick={() => window.open(socialMediaLinks.twitter)}
                            />
                            <Image
                                className={Style['footer-social-media-items']}
                                // style={{ width: '21px', height: '21px' }}
                                src="/icons/instagram-logo.png"
                                onClick={() => window.open(socialMediaLinks.instagram)}
                            />
                            <Image
                                className={Style['footer-social-media-items']}
                                // style={{ width: '21px', height: '21px' }}
                                src="/icons/youtube-logo.png"
                                onClick={() => window.open(socialMediaLinks.youtube)}
                            />
                        </FLexLayout>
                        {/* copyright container */}
                        <FLexLayout
                            style={{ marginTop: '27px' }}
                            rowORColumn="row"
                            justifyContent="center"
                            alignItem="center"
                        >
                            {/* follow us at text   */}
                            <div
                                style={{
                                    fontFamily: 'poppinsRegular',
                                    fontSize: '10px',
                                    color: 'rgba(171, 171, 171, 1)'
                                }}
                            >
                                {'© Copyright 2021, Metvy'}
                            </div>
                        </FLexLayout>
                    </FLexLayout>
                </FLexLayout>
            </FLexLayout>
        </FLexLayout>
    );
};

export default _FooterNew;
