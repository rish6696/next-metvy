import React from 'react';
import FLexLayout from '../FlexLayout';
import { Image } from 'react-bootstrap';
import Style from './ServerDown.module.css'


const _ServerDown = () => {
   return (
     <FLexLayout rowORColumn='column' alignItem='center' >
          <Image src='/icons/error_img.svg' style={{width:'80%'}} />
          <div className={Style['text']}  >{'We Will be Back Soon'}</div>         
     </FLexLayout>
   )
};

export default _ServerDown;
