import React, { useState, useEffect } from 'react';
import HeaderStyle from './HeaderNew.module.css';
import FLexLayout from '../FlexLayout/index';
import { Image } from 'react-bootstrap';
import Drawer from '@material-ui/core/Drawer';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';

import { brandName, courses, socialMediaLinks } from '../../constants';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Style } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import { useRouter } from 'next/router';

const _HeaderNew = () => {
    const router = useRouter();

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

    const menuItems = ['Features', 'Team', 'Contact'];

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
                        fontFamily: 'poppinsSemiBold',
                        fontSize: '16px',
                        color: 'black',
                        width: '45%',
                        height: '100%',
                        marginRight: '30px',
                    }}
                    rowORColumn="row"
                >
                    {/* <div onClick={() => router.push('/team')} style={{ marginLeft: '20px' }} className={HeaderStyle['cursorPointer']}> About Us </div> */}

                    {/* <div style={{ marginLeft: '20px' }} className={HeaderStyle['cursorPointer']}>
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
                                <div className={Style['menuItemsCoursesDesktop']}>
                                    <MenuItem
                                        classes={{ root: classesMaterial.root }}
                                        onClick={() => router.push(x.routePath)}
                                    >
                                        {x.name}
                                    </MenuItem>
                                </div>
                            ))}
                        </Menu>
                    </div> */}
                    <div
                        // onClick={() => router.push('/team')}
                        className={HeaderStyle['cursorPointer']}
                        style={{
                            marginLeft: '20px', fontFamily: 'Poppins', fontStyle: 'normal', fontWeight: 'normal', fontSize: '22px', lineHeight: '33px', letterSpacing: '0.02em', color: '#252641'
                        }}
                    >
                        {' '}
                        Home{' '}
                    </div>
                    <div
                        // onClick={() => router.push('/team')}
                        className={HeaderStyle['cursorPointer']}
                        style={{
                            marginLeft: '20px', fontFamily: 'Poppins', fontStyle: 'normal', fontWeight: 'normal', fontSize: '22px', lineHeight: '33px', letterSpacing: '0.02em', color: '#252641'
                        }}
                    >
                        {' '}
                        Careers{' '}
                    </div>
                    <div
                        // onClick={() => router.push('/team')}
                        className={HeaderStyle['cursorPointer']}
                        style={{
                            marginLeft: '20px', fontFamily: 'Poppins', fontStyle: 'normal', fontWeight: 'normal', fontSize: '22px', lineHeight: '33px', letterSpacing: '0.02em', color: '#252641'
                        }}
                    >
                        {' '}
                        Blog{' '}
                    </div>


                    <div
                        // onClick={() => router.push('/team')}
                        className={HeaderStyle['cursorPointer']}
                        style={{
                            marginLeft: '20px', fontFamily: 'Poppins', fontStyle: 'normal', fontWeight: 'normal', fontSize: '22px', lineHeight: '33px', letterSpacing: '0.02em', color: '#252641'
                        }}
                    >
                        {' '}
                        About Us{' '}
                    </div>

                </FLexLayout >
            );
        } else {
            return (
                <FLexLayout rowORColumn="row" alignItem="center">
                    <Image
                        onClick={() => setShowSidePanel(true)}
                        className={HeaderStyle.headerIcon}
                        src="/icons/menuV2.png"
                    />
                </FLexLayout>
            );
        }
    };

    return (
        <FLexLayout
            style={{ position: 'fixed', width: '100%', zIndex: width < 900 ? 15 : 10, backgroundColor: width < 900 ? 'white' : 'transparent', backgroundSize: '100%', top: '0px' }}
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
                        style={{ height: '100%', width: '300px' }}
                    >
                        <FLexLayout
                            rowORColumn="column"
                            style={{ padding: '32px', width: `${0.72 * width}px`, height: '60%' }}
                        >
                            {/* <div onClick={() => router.push('/team')} className={HeaderStyle.menuItemsText}> About Us </div> */}
                            {/* <div className={HeaderStyle.menuItemsText}> Home </div> */}
                            {/* <div className={HeaderStyle.menuItemsText}>
                                <Accordion
                                    square
                                    expanded={expanded === 'panel1'}
                                // onChange={handleChange('panel1')}
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
                                            <div>Careers</div>

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
                                                <div
                                                    onClick={() => router.push(x.routePath)}
                                                    className={HeaderStyle.accordionItem}
                                                >
                                                    {' '}
                                                    {x.name}{' '}
                                                </div>
                                            ))}
                                        </div>
                                    </AccordionDetails>
                                </Accordion>
                            </div> */}
                            {/* <div
                                className={HeaderStyle.menuItemsText}
                            >
                                Blog
                            </div>
                            <div
                                className={HeaderStyle.menuItemsText}
                            >
                                About Us
                            </div> */}
                        </FLexLayout>
                    </FLexLayout>
                </Drawer>
            )}

            <FLexLayout onClick={() => router.push('/')} rowORColumn="row" alignItem="center" justifyContent='center' className={HeaderStyle.brandContainer}>
                <a href="https://metvy.com/"><Image className={HeaderStyle.headerIcon} src="/icons/ic_launcher.png" /></a>
                <div> {brandName} </div>
            </FLexLayout>
            {/* {getHamburgerOrItems()} */}
        </FLexLayout>
    );
};

export default _HeaderNew;
