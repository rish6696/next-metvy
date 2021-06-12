import React from 'react';
import Loader from 'react-loader-spinner';
import FlexLayout from '../FlexLayout/index';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";


const _LoaderComponent = () => {
    return (
        <FlexLayout style={  { width: '100%' ,height:'100vh' } } justifyContent='center' alignItem='center' rowORColumn="row">
            <Loader type="Bars" color="#00BFFF" height={100} width={100} />
        </FlexLayout>
    );
};

export default _LoaderComponent;
