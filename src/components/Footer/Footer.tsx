import React from 'react';
import FLexLayout from '../FlexLayout';
import Style from './Footer.module.css';
import { Image } from 'react-bootstrap';
import { BASE_URL } from '../../api-services/api-constants';
import { contactDetails,socialMediaLinks } from '../../constants';
import { useRouter } from 'next/router';

const _Footer = () => {

    const router = useRouter();

    
    const onRefundPolicyClick = () => {
        window.open(`${BASE_URL}/api/learn/refund-policy`);
    };

    const onPrivacyPolicyClick = () => {
        window.open(`${BASE_URL}/api/learn/privacy-policy`);
    };

    const onConditionsClick = () => {
        window.open(`${BASE_URL}/api/learn/terms-condition`);
    };

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
                rowORColumn="column"
                style={{ width: '360px', paddingLeft: '20px', paddingRight: '20px' }}
            >
                {/* items-box */}
                <FLexLayout style={{ width: '100%',marginTop:'31px' }} justifyContent="between" rowORColumn="row">
                    {/* items-colum-1 */}
                    <FLexLayout rowORColumn="column">
                        <div  onClick={() => router.push('/')} className={Style['footer-items']}>{'Home'}</div>
                        <div onClick={() => router.push('/team')} className={Style['footer-items']}>{'Team'}</div>
                        <div onClick={onConditionsClick} className={Style['footer-items']}>
                            {'Terms & Conditions'}
                        </div>
                    </FLexLayout>

                    {/* items-colum-2 */}
                    <FLexLayout rowORColumn="column">

                        <div onClick={onRefundPolicyClick} className={Style['footer-items']}>
                            {'Refund Policy'}
                        </div>
                        <div onClick={onPrivacyPolicyClick} className={Style['footer-items']}>
                            {'Privacy Policy'}
                        </div>
                    </FLexLayout>
                </FLexLayout>

                {/* address-container */}
                <FLexLayout style={{ marginTop: '100px' }} rowORColumn="column"> 
                    <div className={Style['GetInTouch']}> {'Get In Touch'}</div>

                    {/* details-row-phone */}
                    <FLexLayout style={{marginTop:"20px"}} rowORColumn="column">
                        {/* detail-label */}
                        <div className={Style['detailsLabel']}>{'Phone:'}</div>
                        <div className={Style['detailsValue']}> {contactDetails.phone} </div>
                    </FLexLayout>

                    {/* details-row-email */}
                    <FLexLayout style={{marginTop:"20px"}} rowORColumn="column">
                        {/* detail-label */}
                        <div className={Style['detailsLabel']}>{'Email:'}</div>
                        <div className={Style['detailsValue']}> {contactDetails.email} </div>
                    </FLexLayout>


                     {/* details-row-address */}
                     <FLexLayout style={{marginTop:"20px"}} rowORColumn="column">
                        {/* detail-label */}
                        <div className={Style['detailsLabel']}>{'Address:'}</div>
                        <div className={Style['detailsValue']}> {contactDetails.address} </div>
                    </FLexLayout>


                </FLexLayout>

                {/* follow-us-at-container */}
                <FLexLayout
                    style={{ marginTop: '98px' }}
                    rowORColumn="row"
                    justifyContent="center"
                    alignItem="center"
                >
                    {/* follow us at text   */}

                    <div style={{ fontFamily: 'poppinsBold', fontSize: '20px' }}>
                        {'Follow us at'}
                    </div>
                </FLexLayout>

                {/* social-media-handle-container */}
                <FLexLayout
                    style={{ marginTop: '11px' }}
                    rowORColumn="row"
                    justifyContent="center"
                    alignItem="center"
                >
                    {/* social-media-icons-row  */}

                    <FLexLayout
                        style={{ width: '154px' }}
                        rowORColumn="row"
                        alignItem="center"
                        justifyContent="between"
                    >
                        <Image
                            className={Style['footer-social-media-items']}
                            style={{ width: '21px', height: '21px' }}
                            src="/icons/Vector_fb.png"
                            onClick={()=>window.open(socialMediaLinks.facebook)}
                        />
                        <Image
                            className={Style['footer-social-media-items']}
                            style={{ width: '21px', height: '21px' }}
                            src="/icons/010-linkedin.png"
                            onClick={()=>window.open(socialMediaLinks.linkedIn)}
                        />
                        <Image
                            className={Style['footer-social-media-items']}
                            style={{ width: '21px', height: '21px' }}
                            src="/icons/013-twitter.png"
                            onClick={()=>window.open(socialMediaLinks.twitter)}
                        />
                        <Image
                            className={Style['footer-social-media-items']}
                            style={{ width: '21px', height: '21px' }}
                            src="/icons/011-instagram.png"
                            onClick={()=>window.open(socialMediaLinks.instagram)}
                        />
                        <Image
                            className={Style['footer-social-media-items']}
                            style={{ width: '21px', height: '21px' }}
                            src="/icons/008-youtube.png"
                            onClick={()=>window.open(socialMediaLinks.youtube)}
                        />
                    </FLexLayout>
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
    );
};

export default _Footer;
