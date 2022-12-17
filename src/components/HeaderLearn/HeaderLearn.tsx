import React, { useState, useEffect } from 'react';
import HeaderStyle from './HeaderLearn.module.css';
import FLexLayout from '../FlexLayout/index';
import { Image } from 'react-bootstrap';
import Drawer from '@material-ui/core/Drawer';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';

import { brandName, courses ,socialMediaLinks} from '../../constants';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Style } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router';
import { route } from 'next/dist/next-server/server/router';

const _Header = () => {
    const useStyle = makeStyles({
        root: {
            fontFamily: 'poppinsRegular',
            fontSize: '14px'
        }
    });

    const classesMaterial = useStyle();

    const [width, setWidth] = useState(-1);

    const updateWindowSize = () => {
        setWidth(window.innerWidth);
    };

    const hamburgerBreakPoint = 1300;
    const router = useRouter();

    const Accordion = withStyles({
        root: {
            border: '0px solid yellow',
            boxShadow: 'none',
            '&:not(:last-child)': {
                borderBottom: 0
            },
            '&:before': {
                display: 'none'
            },
            '&$expanded': {
                margin: 'auto'
            }
        },
        expanded: {}
    })(MuiAccordion);

    const AccordionSummary = withStyles({
        root: {
            padding: '0px',
            borderBottom: '0px solid red',
            minHeight: 5,
            '&$expanded': {
                minHeight: 5
            }
        },
        content: {
            '&$expanded': {
                margin: '0px 0'
            },
            margin: '0px'
        },
        expanded: {}
    })(MuiAccordionSummary);

    const AccordionDetails = withStyles((theme) => ({
        root: {
            padding: theme.spacing(2)
        }
    }))(MuiAccordionDetails);

    const menuItems = ['Features', 'Team','Contact'];

    useEffect(() => {
        setWidth(window.innerWidth);
        window.addEventListener('resize', updateWindowSize);
    }, []);

    const [showSidePanel, setShowSidePanel] = useState(false);

    const [expanded, setExpanded] = React.useState<string | false>('');

    const handleChange =
        (panel: string) => (event: React.ChangeEvent<{}>, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClose = () => {
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const getHamburgerOrItems = () => {
        if (width > hamburgerBreakPoint) {
            return (
                <FLexLayout
                    alignItem="center"
                    justifyContent="end"
                    style={{
                        fontFamily: 'poppinsRegular',
                        fontSize: '18px',
                        color: 'black',
                        width: '45%',
                        height: '100%',
                        marginRight: '30px'
                    }}
                    rowORColumn="row"
                >
                

                    <div  style={{marginLeft:'20px'}} className={HeaderStyle['cursorPointer']}>
                        <FLexLayout onClick={handleMenu} alignItem="center" rowORColumn="row">
                            <div> Metvy Learn </div>
                            <div className={HeaderStyle['triangle-right']}></div>
                        </FLexLayout>

                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right'
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right'
                            }}
                            open={open}
                            onClose={handleClose}
                        >
                            {courses.map((x) => (
                                <div onClick={()=>router.push(x.routePath)} className={Style['menuItemsCoursesDesktop']}>
                                    <MenuItem
                                        classes={{ root: classesMaterial.root }}
                                        onClick={handleClose}
                                    >
                                        {x.name}
                                    </MenuItem>
                                </div>
                            ))}
                        </Menu>
                    </div>

                    <div  onClick={() => router.push('/team')}  style={{marginLeft:'20px'}} className={HeaderStyle['cursorPointer']}> Team </div>
                    <div  onClick={() => router.push('/metvy-networking')}  style={{marginLeft:'20px'}} className={HeaderStyle['cursorPointer']}> Community </div>   
                </FLexLayout>
            );
        } else {
            return (
                <FLexLayout rowORColumn="row" alignItem="center">
                    <Image
                        onClick={() => setShowSidePanel(true)}
                        className={HeaderStyle.headerIcon}
                        src="/icons/menu (1).png"
                    />
                </FLexLayout>
            );
        }
    };

    return (
        <FLexLayout
            style={{ position: 'fixed', width: '100%', zIndex: 10 }}
            rowORColumn="column"
            justifyContent="between"
            className={HeaderStyle.headerContainer}
        >
           
            {/* hamburger with icon  */}
            <FLexLayout
                style={{ width: '100%',height:'60px' }}
                rowORColumn="row"
                justifyContent="between"
                className={HeaderStyle.headerContainer}
            >
                  {width < hamburgerBreakPoint && (
                <Drawer
                    anchor={'right'}
                    open={showSidePanel}
                    onClose={() => setShowSidePanel(false)}
                >
                    <FLexLayout
                        rowORColumn="column"
                        justifyContent="between"
                        style={{ height: '100%',width:'300px' }}
                    >
                        <FLexLayout
                            rowORColumn="column"
                            style={{ padding: '32px', width: `${0.72 * width}px`, height: '60%' }}
                        >
                           

                            <div className={HeaderStyle.menuItemsText}>
                                <Accordion
                                    square
                                    expanded={expanded === 'panel1'}
                                    onChange={handleChange('panel1')}
                                >
                                    <AccordionSummary
                                        aria-controls="panel1d-content"
                                        id="panel1d-header"
                                    >
                                        <FLexLayout
                                            rowORColumn="row"
                                            justifyContent="between"
                                            style={{ width: '100%' }}
                                        >
                                            <div>Metvy Learn </div>

                                            <Image
                                                height="12px"
                                                width="12px"
                                                src={
                                                    expanded === 'panel1'
                                                        ? 'icons/accordionOn.png'
                                                        : 'icons/accordionOff.png'
                                                }
                                            />
                                        </FLexLayout>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <div
                                            style={{
                                                backgroundColor: 'rgba(242, 242, 242, 1)',
                                                padding: '12px'
                                            }}
                                        >
                                            {courses.map((x) => (
                                                <div onClick={()=>router.push(x.routePath)} className={HeaderStyle.accordionItem}>
                                                    {' '}
                                                    {x.name}{' '}
                                                </div>
                                            ))}
                                        </div>
                                    </AccordionDetails>
                                </Accordion>
                            </div>

                            <div  onClick={() => router.push('/team')}  className={HeaderStyle.menuItemsText}> Team </div>
                            <div  onClick={() => router.push('/metvy-networking')}  className={HeaderStyle.menuItemsText}> Community </div>


                        </FLexLayout>

                        <FLexLayout
                            rowORColumn="column"
                            style={{
                                backgroundColor: 'rgba(241, 241, 241, 1)',
                                height: '120px',
                                paddingLeft: '32px'
                            }}
                            justifyContent="center"
                        >
                            <div
                                style={{
                                    fontFamily: 'poppinsRegular',
                                    fontSize: '24px',
                                    marginBottom: '11px'
                                }}
                            >
                                Follow us at -{' '}
                            </div>

                            <FLexLayout rowORColumn="row">
                                <Image  onClick={()=>window.open(socialMediaLinks.twitter)} style={{ marginRight: '18px' }} src="icons/twitter.png" />
                                <Image  onClick={()=>window.open(socialMediaLinks.instagram)} style={{ marginRight: '18px' }} src="icons/instagram.png" />
                                <Image  onClick={()=>window.open(socialMediaLinks.facebook)} style={{ marginRight: '18px' }} src="icons/facebook.png" />
                                <Image  onClick={()=>window.open(socialMediaLinks.linkedIn)} style={{ marginRight: '18px' }} src="icons/linkedin.png" />
                            </FLexLayout>
                        </FLexLayout>
                    </FLexLayout>
                </Drawer>
            )}
                

                <FLexLayout
                    rowORColumn="row"
                    alignItem="center"
                    className={HeaderStyle.brandContainer}
                >
                    <FLexLayout rowORColumn="row" justifyContent="center" alignItem="center">
                        <Image onClick={()=>router.push('/MetvyLearn')} style={{cursor:'pointer'}} className={HeaderStyle.headerIcon} src="/icons/MetvyLearnLogo.png" />
                        <div className={HeaderStyle.MetvyLearnHeading}> Metvy Learn </div>
                    </FLexLayout>
                </FLexLayout>

                {getHamburgerOrItems()}
            </FLexLayout>
          

             {/* book a fitment and apply now container */}
            <FLexLayout style={{ width: '100%' }} rowORColumn="row">

                {/* book a fitment -box */}
                <FLexLayout
                    style={{
                        backgroundColor: 'rgba(214, 214, 214, 1)',
                        height: '50px',
                        width: '100%',
                        cursor:'pointer'
                    }}
                    onClick={()=>window.open("https://calendly.com/metvy-learn/fitment-call")}
                    rowORColumn="row"
                    justifyContent="center"
                    alignItem="center"
                >
                    <div className={`${HeaderStyle.bannerText}`}> {'Book a fitment call'} </div>
                </FLexLayout>

                
                 {/* apply-now-box */}
                <FLexLayout
                    justifyContent="center"
                    alignItem="center"
                    style={{ backgroundColor: 'rgba(0, 0, 0, 1)', height: '50px', width: '100%', cursor:'pointer' }}
                    rowORColumn="row"
                    onClick={()=>router.push('/Enroll')}
                >
                    <div className={`${HeaderStyle.bannerText} ${HeaderStyle.fitmentContainer}`}>
                        {' '}
                        {'Apply Now'}{' '}
                    </div>
                    <Image style={{ marginLeft: '28px' }} src="icons/Arrow 1.png" />
                </FLexLayout>


            </FLexLayout>

        </FLexLayout>
    );
};

export default _Header;
