import React from 'react';
import HeaderStyle from './Header.module.css';
import FLexLayout from '../FlexLayout/index';
import { Image } from 'react-bootstrap';
import { brandName } from '../../constants';

const _Header = () => {
    const menuItems = ['Features', 'Team', 'About Us', 'Contact'];

    return (
        <FLexLayout
            style={{ position:'fixed',width: '100%' }}
            rowORColumn="row"
            justifyContent="between"
            className={HeaderStyle.headerContainer}
        >
            <FLexLayout rowORColumn="row" alignItem="center" className={HeaderStyle.brandContainer}>
                <Image className={HeaderStyle.headerIcon} src="/icons/ic_launcher.png" />
            </FLexLayout>

            <FLexLayout rowORColumn="row" alignItem="center">
                <Image className={HeaderStyle.headerIcon} src="/icons/menu.png" />
            </FLexLayout>
        </FLexLayout>
    );
};

export default _Header;
