import React from 'react';
import Style from './MetvyProgramDetails.module.css';
import HeaderLearn from '../../components/HeaderLearn/HeaderLearn';
import FLexLayout from '../../components/FlexLayout';
import { courseDetailsScreenData } from '../../constants';
import { connect } from 'react-redux';
import { setWidth } from '../../redux/Actions/Screenconfig';
import { Image } from 'react-bootstrap';
import Footer from '../../components/Footer/Footer';


interface Props {
    course: string | string[] | 'research_program';
    width: number;
    setWidth: (number) => void;
}

const _ProgramDetails = ({ width, setWidth, course }: Props) => {
    const metaData = courseDetailsScreenData[course as string ];

    return (
        <div>
            <HeaderLearn />
            <div className={Style['container']}>
                {/* heading-program */}
                {metaData && (
                    <FLexLayout
                        justifyContent="center"
                        alignItem="center"
                        rowORColumn="row"
                        className={Style['course-heading']}
                    >
                        <FLexLayout
                            style={{ width: '80%' }}
                            rowORColumn="row"
                            justifyContent="center"
                            alignItem="center"
                        >
                            <div className={Style['heading']}>{metaData.heading}</div>
                        </FLexLayout>
                    </FLexLayout>
                )}

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
                                width: `${56}px`,
                                backgroundColor: 'black'
                            }}
                        >
                            {' '}
                        </div>
                    </FLexLayout>
                </FLexLayout>

                {/* program-description */}
                {metaData && (
                    <FLexLayout
                        justifyContent="center"
                        alignItem="center"
                        rowORColumn="row"
                        style={{ marginTop: '40px' }}
                    >
                        <FLexLayout
                            style={{ width: '80%' }}
                            rowORColumn="row"
                            justifyContent="center"
                            alignItem="center"
                        >
                            <div className={Style['description']}>{metaData.description}</div>
                        </FLexLayout>
                    </FLexLayout>
                )}

                {/* apply-now-button */}

                <FLexLayout
                    style={{ marginTop: '60px' }}
                    justifyContent="center"
                    alignItem="center"
                    rowORColumn="row"
                >
                    <FLexLayout
                        justifyContent="center"
                        alignItem="center"
                        rowORColumn="row"
                        className={Style['apply-now-button']}
                    >
                        <div className={Style['apply-now-text']}>{'Apply Now'}</div>
                    </FLexLayout>
                </FLexLayout>

                {/* program-structure-heading */}
                <FLexLayout
                    className={Style['program-heading-container']}
                    rowORColumn="row"
                    justifyContent="center"
                >
                    <FLexLayout
                        style={{ width: '90%' }}
                        rowORColumn="row"
                        justifyContent="center"
                        alignItem="center"
                    >
                        <div className={Style['programs-heading']}>{'Program Structure'}</div>
                    </FLexLayout>
                </FLexLayout>

                {/* program-structure-container */}
                {metaData && (
                    <FLexLayout
                        style={{ marginTop: '142px' }}
                        rowORColumn="column"
                        justifyContent="center"
                        alignItem="center"
                        className={Style['program-structure-container']}
                    >
                        {/* week-1-box */}
                        <FLexLayout style={{ marginBottom: '105px' }} rowORColumn="row">
                            {/* week-number-box */}
                            <FLexLayout className={Style['week-box']} rowORColumn="column">
                                <div className={Style['week-label']}>{'Week-1'}</div>
                                <FLexLayout rowORColumn="row" justifyContent={'end'}>
                                    <div className={Style['hours-text']}>{'4 Hours'}</div>
                                </FLexLayout>
                            </FLexLayout>

                            {/* content-box */}
                            <FLexLayout className={Style['content-box']} rowORColumn="row">
                                <div className={Style['content-description']}>
                                    {metaData.weeksData[0].content}
                                </div>
                            </FLexLayout>
                        </FLexLayout>

                        {/* week-2-box */}
                        <FLexLayout style={{ marginBottom: '105px' }} rowORColumn="row">
                            {/* week-number-box */}
                            <FLexLayout className={Style['week-box']} rowORColumn="column">
                                <div className={Style['week-label']}>{'Week-1'}</div>
                                <FLexLayout rowORColumn="row" justifyContent={'end'}>
                                    <div className={Style['hours-text']}>{'4 Hours'}</div>
                                </FLexLayout>
                            </FLexLayout>

                            {/* content-box */}
                            <FLexLayout className={Style['content-box']} rowORColumn="row">
                                <div className={Style['content-description']}>
                                    {metaData.weeksData[0].content}
                                </div>
                            </FLexLayout>
                        </FLexLayout>

                        {/* week-3-box */}
                        <FLexLayout style={{ marginBottom: '105px' }} rowORColumn="row">
                            {/* week-number-box */}
                            <FLexLayout className={Style['week-box']} rowORColumn="column">
                                <div className={Style['week-label']}>{'Week-1'}</div>
                                <FLexLayout rowORColumn="row" justifyContent={'end'}>
                                    <div className={Style['hours-text']}>{'4 Hours'}</div>
                                </FLexLayout>
                            </FLexLayout>

                            {/* content-box */}
                            <FLexLayout className={Style['content-box']} rowORColumn="row">
                                <div className={Style['content-description']}>
                                    {metaData.weeksData[0].content}
                                </div>
                            </FLexLayout>
                        </FLexLayout>

                        {/* week-4-box */}
                        <FLexLayout style={{ marginBottom: '305px' }} rowORColumn="row">
                            {/* week-number-box */}
                            <FLexLayout className={Style['week-box']} rowORColumn="column">
                                <div className={Style['week-label']}>{'Week-1'}</div>
                                <FLexLayout rowORColumn="row" justifyContent={'end'}>
                                    <div className={Style['hours-text']}>{'4 Hours'}</div>
                                </FLexLayout>
                            </FLexLayout>

                            {/* content-box */}
                            <FLexLayout className={Style['content-box']} rowORColumn="row">
                                <div className={Style['content-description']}>
                                    {metaData.weeksData[0].content}
                                </div>
                            </FLexLayout>
                        </FLexLayout>
                    </FLexLayout>
                )}

                {/* brands-box */}
                <FLexLayout
                    className={Style['mentors-from-brand-container']}
                    rowORColumn="row"
                    justifyContent="center"
                    alignItem="center"
                >
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
                                <Image src="/icons/Paytm-Logo 1.png" />
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

                {/* who-is-this-for-section */}
                <FLexLayout rowORColumn="column" justifyContent="center" alignItem="center">
                    {/* who-is-this-for-container */}
                    <FLexLayout className={Style['who-is-this-for-container']} rowORColumn="column">
                        <FLexLayout
                            rowORColumn="row"
                            justifyContent="center"
                            alignItem="center"
                            className={Style['who-is-this-heading-box']}
                        >
                            <div className={Style['who-is-this-heading']}>
                                {'Who is this for ?'}
                            </div>
                        </FLexLayout>

                        <FLexLayout className={Style['who-is-this-for-content']} rowORColumn="row">
                            <div>{`The Metvy Research Program is for anyone who wants to understand the fundamentals of Academic Research as well as Market Research.
                        Everything will be worked upon from scratch, so even if you have not even written a
                        research essay, this is absolutely for you.`}</div>
                        </FLexLayout>
                    </FLexLayout>
                </FLexLayout>

                {/* phrase-container */}
                <FLexLayout justifyContent="center" alignItem="center" rowORColumn="row">
                    <FLexLayout
                        style={{ width: '80%' }}
                        rowORColumn="row"
                        justifyContent="center"
                        alignItem="center"
                    >
                        <div
                            className={Style['phrase']}
                        >{`Nobody is born an entrepreneur, we’ll help you become one!`}</div>
                    </FLexLayout>
                </FLexLayout>

                {/* Perks Text */}
                <FLexLayout
                    justifyContent="center"
                    alignItem="center"
                    rowORColumn="row"
                    style={{ marginTop: '100px' }}
                >
                    <FLexLayout
                        style={{ width: '80%' }}
                        rowORColumn="row"
                        justifyContent="center"
                        alignItem="center"
                    >
                        <div className={Style['perks-heading']}>{`Perks`}</div>
                    </FLexLayout>
                </FLexLayout>

                {/* perks-container-1 */}
                {[1, 2, 3, 4, 5].map((x) => (
                    <FLexLayout
                        className={Style['perks-container']}
                        rowORColumn="row"
                        justifyContent="center"
                        alignItem="center"
                    >
                        {/* perks-box */}
                        <FLexLayout rowORColumn="column" className={Style['perks-box']}>
                            {/* circular -popup-box */}
                            <FLexLayout
                                className={Style['circular-pop-up-container']}
                                rowORColumn="column"
                                justifyContent="center"
                                alignItem="center"
                            >
                                <Image
                                    className={Style['perks-icon']}
                                    src="/icons/Vector (3).png"
                                />
                            </FLexLayout>

                            {/* perks-box-content */}
                            <FLexLayout className={Style['perks-box-content']} rowORColumn="row">
                                <div>{`One-on-one networking and mentorship from Academicians and  Industry Experts in Live Sessions`}</div>
                            </FLexLayout>
                        </FLexLayout>
                    </FLexLayout>
                ))}


                {/* apply-now-button */}
                <FLexLayout
                    style={{ marginTop: '159px' }}
                    justifyContent="center"
                    alignItem="center"
                    rowORColumn="row"
                >
                    <FLexLayout
                        justifyContent="center"
                        alignItem="center"
                        rowORColumn="row"
                        className={Style['apply-now-button']}
                    >
                        <div className={Style['apply-now-text']}>{'Apply Now'}</div>
                    </FLexLayout>
                </FLexLayout>

               
                 {/* Perks Text */}
                <FLexLayout
                    justifyContent="center"
                    alignItem="center"
                    rowORColumn="row"
                    style={{ marginTop: '100px' }}
                >
                    <FLexLayout
                        style={{ width: '80%' }}
                        rowORColumn="row"
                        justifyContent="center"
                        alignItem="center"
                    >
                        <div className={Style['perks-heading']}>{`Explore MCP`}</div>
                    </FLexLayout>
                </FLexLayout>
                 
                  {/* drop-a-query-box */}
                <FLexLayout
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
                </FLexLayout>

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

export default connect(mapDispatchToProps, mapActionToProps)(_ProgramDetails);