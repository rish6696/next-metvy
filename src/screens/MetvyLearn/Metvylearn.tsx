import React, { useState, useEffect } from 'react';
import FLexLayout from '../../components/FlexLayout';
import HeaderLearn from '../../components/HeaderLearn/HeaderLearn';
import Style from './MetvyLearn.module.css';
import { Image } from 'react-bootstrap';
import { testimonialLearn } from '../../constants'

const _MetvyLearn = () => {
    const [width, setWidth] = useState(-1);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    return (
        <div>
            <HeaderLearn />
            <div style={{ paddingTop: '100px' }}>
                {/* iconContainer */}
                <FLexLayout
                    style={{ marginTop: '35px' }}
                    rowORColumn="column"
                    justifyContent="center"
                    alignItem="center"
                >
                    <Image
                        style={{ width: `${0.16 * width}px`, height: '68px' }}
                        src="/icons/ML_LOGO 3.png"
                        className={Style.iconContainer}
                    />
                    <div className={Style.bannerText} style={{ marginTop: '24px' }}>
                        {'30-Day Cohort Based Mentorship Programs'}
                    </div>
                </FLexLayout>

                {/* card */}

                <FLexLayout
                    className={Style.mentorshipCard}
                    rowORColumn="column"
                    style={{
                        width: `${0.87 * width}px`,
                        marginLeft: `${0.06 * width}px`,
                        marginRight: `${0.06 * width}px`,
                        marginTop: '29px',
                        height: `320px`
                    }}
                    alignItem="center"
                >
                    <Image
                        src="icons/Business 2.png"
                        style={{ width: `${0.41 * width}px`, height: `118px` }}
                    />

                    <div
                        style={{
                            marginLeft: `${0.19 * width}px`,
                            marginRight: `${0.19 * width}px`,
                            marginTop: '9px'
                        }}
                    >
                        {'Want to become an Entrepreneur?'}
                    </div>

                    <div
                        style={{
                            height: '2px',
                            width: `${0.05 * width}px`,
                            backgroundColor: 'white',
                            marginTop: '10px'
                        }}
                    ></div>

                    <div
                        style={{ fontFamily: 'poppinsRegular', fontSize: '12px', marginTop: '8px' }}
                    >
                        {'Mentors from '}
                    </div>

                    <FLexLayout
                        rowORColumn="row"
                        justifyContent="between"
                        style={{
                            marginLeft: `${0.06 * width}px`,
                            marginRight: `${0.06 * width}px`,
                            padding: '15px',
                            backgroundColor: 'white',
                            width: '100%',
                            marginTop: '19px'
                        }}
                    >
                        <Image src="icons/amazon.png" style={{ width: '48px', height: '19px' }} />
                        <Image src="icons/adobe.png" style={{ width: '54px', height: '14px' }} />
                        <Image src="icons/nike.png" style={{ width: '27px', height: '14px' }} />
                        <Image src="icons/bharatpe.png" style={{ width: '58px', height: '16px' }} />
                        <Image
                            src="icons/facebook_1.png"
                            style={{ width: '37px', height: '14px' }}
                        />
                    </FLexLayout>
                </FLexLayout>

                {/* Live mentorship heading */}

                <FLexLayout
                    rowORColumn="column"
                    justifyContent="center"
                    alignItem="center"
                    style={{
                        margin: '49px',
                        textAlign: 'center',
                        fontFamily: 'poppinsSemiBoldItalic',
                        fontSize: '24px'
                    }}
                >
                    <FLexLayout rowORColumn="row">
                        <div> {'India’s First Curated Live Mentorship Experience'}</div>
                    </FLexLayout>
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
                            {'200+'}
                        </div>
                        <div style={{ fontFamily: 'poppinsRegular', fontSize: '11px' }}>
                            {'Sessions'}
                        </div>
                    </FLexLayout>

                    {/* stats-box-3 */}

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
                </FLexLayout>

                {/* underline */}
                <FLexLayout
                    style={{ marginTop: '82px' }}
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
                        textAlign: 'center',
                        fontFamily: 'poppinsSemiBoldItalic',
                        fontSize: '24px'
                    }}
                >
                    <FLexLayout rowORColumn="row">
                        <div> {'Check out our Mentorship Programs'}</div>
                    </FLexLayout>
                </FLexLayout>

                {/* program-card-container */}

                <FLexLayout justifyContent="center" alignItem="center" rowORColumn="row">
                    {/* program-card */}
                    <FLexLayout
                        style={{
                            width: `${0.77 * width}px`,
                            height: '540px',
                            backgroundImage: 'url("icons/pink_background.png")',
                            backgroundPosition: 'center',
                            backgroundSize: 'cover'
                        }}
                        className={Style.programCard}
                        rowORColumn="column"
                    >
                        {/* program- heading - container  */}
                        <FLexLayout justifyContent="center" alignItem="center" rowORColumn="row">
                            {/* program-heading */}
                            <div className={Style.programHeading}>{'Metvy Design Program'}</div>
                        </FLexLayout>

                        {/* data-weeks-container */}
                        <FLexLayout
                            rowORColumn="row"
                            alignItem="center"
                            justifyContent="center"
                            style={{ marginTop: '54px' }}
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
                                        <div>{'4'}</div>
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
                                        <div>{'20'}</div>
                                    </FLexLayout>

                                    {/* data-value-label */}
                                    <div className={Style['data-value-label']}>
                                        {'Seats Remaining'}
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
                                        <div>{'20'}</div>
                                    </FLexLayout>

                                    {/* data-value-label */}
                                    <div className={Style['data-value-label']}>{'Sessions'}</div>
                                </FLexLayout>
                            </FLexLayout>
                        </FLexLayout>

                        {/* underline */}
                        <FLexLayout
                            style={{ marginTop: '30px' }}
                            rowORColumn="row"
                            justifyContent="center"
                            alignItem="center"
                        >
                            <div
                                style={{
                                    height: '3px',
                                    width: `${0.15 * width}px`,
                                    backgroundColor: 'black'
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
                                marginTop: '27px',
                                textAlign: 'center',
                                fontFamily: 'poppinsSemiBold',
                                fontSize: '13px'
                            }}
                        >
                            <FLexLayout style={{ width: '80%' }} rowORColumn="row">
                                <div>
                                    {' '}
                                    {
                                        'Live Mentorship Program on Entrepreneurship backed with Compendiums and Live Projects crafted and led by top mentors.'
                                    }
                                </div>
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
                                            {'2,500'}
                                        </div>
                                        <div
                                            style={{
                                                fontFamily: 'poppinsLightItalic',
                                                fontSize: '9px',
                                                color: 'white'
                                            }}
                                        >
                                            <del>{'5,000'}</del>
                                        </div>
                                    </FLexLayout>

                                    <Image
                                        style={{ marginLeft: '14px', height: '20px' }}
                                        src="icons/Arrow 1.png"
                                    />
                                </FLexLayout>
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
                        margin: '51px',
                        textAlign: 'center',
                        fontFamily: 'poppinsSemiBoldItalic',
                        fontSize: '24px'
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
                                    backgroundImage: 'url("icons/pink_background.png")',
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
                                    backgroundImage: 'url("icons/pink_background.png")',
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
                                    backgroundImage: 'url("icons/pink_background.png")',
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
                                    backgroundImage: 'url("icons/pink_background.png")',
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

                {/* heading-text-check-our-program */}
                <FLexLayout
                    rowORColumn="column"
                    justifyContent="center"
                    alignItem="center"
                    style={{
                        margin: '51px',
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

                <FLexLayout style={{marginTop:'32px'}} rowORColumn="column" justifyContent="center" alignItem="center">

                    {/* testimonial-learn-card */}
                    <FLexLayout
                        style={{ width: '80%' }}
                        className={Style['testimonial-learn-card']}
                        rowORColumn="row"
                    >
                        <Image style={{width:'70px',height:'100%'}} src='icons/Rectangle 98.png' />

                        <FLexLayout rowORColumn='column' style={{marginLeft:'17px'}} >
                            
                             <div style={{fontFamily:'poppinsSemiBold',fontSize:'16px'}} >{'Vipul Ghai'}</div>
                             <div style={{fontFamily:'poppinsLight',fontSize:'8px'}} > {'The Design Village'} </div>

                             <div style={{marginTop:'15px',fontFamily:'poppinsRegular',fontSize:'13px'}} >{testimonialLearn}</div>
                        </FLexLayout>

                    </FLexLayout>
                </FLexLayout>

                {/* testimonial-learn-container-2 */}

                <FLexLayout style={{marginTop:'32px'}} rowORColumn="column" justifyContent="center" alignItem="center">

                    {/* testimonial-learn-card */}
                    <FLexLayout
                        style={{ width: '80%' }}
                        className={Style['testimonial-learn-card']}
                        rowORColumn="row"
                    >
                        <Image style={{width:'70px',height:'100%'}} src='icons/Rectangle 98.png' />

                        <FLexLayout rowORColumn='column' style={{marginLeft:'17px'}} >
                            
                             <div style={{fontFamily:'poppinsSemiBold',fontSize:'16px'}} >{'Vipul Ghai'}</div>
                             <div style={{fontFamily:'poppinsLight',fontSize:'8px'}} > {'The Design Village'} </div>

                             <div style={{marginTop:'15px',fontFamily:'poppinsRegular',fontSize:'13px'}} >{testimonialLearn}</div>
                        </FLexLayout>

                    </FLexLayout>
                </FLexLayout>

                {/* testimonial-learn-container-3 */}

                <FLexLayout style={{marginTop:'32px'}} rowORColumn="column" justifyContent="center" alignItem="center">

                    {/* testimonial-learn-card */}
                    <FLexLayout
                        style={{ width: '80%' }}
                        className={Style['testimonial-learn-card']}
                        rowORColumn="row"
                    >
                        <Image style={{width:'70px',height:'100%'}} src='icons/Rectangle 98.png' />

                        <FLexLayout rowORColumn='column' style={{marginLeft:'17px'}} >
                            
                             <div style={{fontFamily:'poppinsSemiBold',fontSize:'16px'}} >{'Vipul Ghai'}</div>
                             <div style={{fontFamily:'poppinsLight',fontSize:'8px'}} > {'The Design Village'} </div>

                             <div style={{marginTop:'15px',fontFamily:'poppinsRegular',fontSize:'13px'}} >{testimonialLearn}</div>
                        </FLexLayout>

                    </FLexLayout>
                </FLexLayout>

            </div>
        </div>
    );
};

export default _MetvyLearn;
