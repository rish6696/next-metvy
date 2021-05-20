import React, { useState, useEffect } from 'react';
import HeaderStyle from './Header.module.css';
import FLexLayout from '../FlexLayout/index';
import { Image } from 'react-bootstrap';
import Drawer from '@material-ui/core/Drawer';
import { withStyles } from '@material-ui/core/styles';
import MuiAccordion from '@material-ui/core/Accordion';
import MuiAccordionSummary from '@material-ui/core/AccordionSummary';
import MuiAccordionDetails from '@material-ui/core/AccordionDetails';

import { brandName, courses } from '../../constants';

const _Header = () => {
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
            // backgroundColor: 'red',
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

    const menuItems = ['Features', 'Team', 'About Us', 'Contact'];

    const [width, setWidth] = useState(-1);

    useEffect(() => {
        setWidth(window.innerWidth);
    }, []);

    const [showSidePanel, setShowSidePanel] = useState(false);

    const [expanded, setExpanded] = React.useState<string | false>('');

    const handleChange =
        (panel: string) => (event: React.ChangeEvent<{}>, newExpanded: boolean) => {
            setExpanded(newExpanded ? panel : false);
        };

    return (
        <FLexLayout
            style={{ position: 'fixed', width: '100%',zIndex:10 }}
            rowORColumn="row"
            justifyContent="between"
            className={HeaderStyle.headerContainer}
        >
            <Drawer anchor={'right'} open={showSidePanel} onClose={() => setShowSidePanel(false)}>
                <FLexLayout
                    rowORColumn="column"
                    justifyContent="between"
                    style={{ height: '100%' }}
                >
                    <FLexLayout
                        rowORColumn="column"
                        style={{ padding: '32px', width: `${0.72 * width}px` }}
                    >
                        <div className={HeaderStyle.menuItemsText}> About Us </div>

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
                                        style={{  width: '100%' }}
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
                                            <div className={HeaderStyle.accordionItem}> {x} </div>
                                        ))}
                                    </div>
                                </AccordionDetails>
                            </Accordion>
                        </div>

                        <div className={HeaderStyle.menuItemsText}> Team </div>

                        <div className={HeaderStyle.menuItemsText}> Blogs </div>

                        <div className={HeaderStyle.menuItemsText}> Career </div>

                        <div className={HeaderStyle.menuItemsText}> Contact Us </div>
                    </FLexLayout>

                    <FLexLayout
                        rowORColumn="column"
                        style={{
                            backgroundColor: 'rgba(241, 241, 241, 1)',
                            height: '120px',
                           paddingLeft:'32px'
                        }}
                        justifyContent='center'
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
                            <Image style={{ marginRight: '18px' }} src="icons/twitter.png" />
                            <Image style={{ marginRight: '18px' }} src="icons/instagram.png" />
                            <Image style={{ marginRight: '18px' }} src="icons/facebook.png" />
                            <Image style={{ marginRight: '18px' }} src="icons/linkedin.png" />
                        </FLexLayout>
                    </FLexLayout>
                </FLexLayout>
            </Drawer>

            <FLexLayout rowORColumn="row" alignItem="center" className={HeaderStyle.brandContainer}>
                <Image className={HeaderStyle.headerIcon} src="/icons/ic_launcher.png" />
            </FLexLayout>

            <FLexLayout rowORColumn="row" alignItem="center">
                <Image
                    onClick={() => setShowSidePanel(true)}
                    className={HeaderStyle.headerIcon}
                    src="/icons/menu.png"
                />
            </FLexLayout>
        </FLexLayout>
    );
};

export default _Header;
