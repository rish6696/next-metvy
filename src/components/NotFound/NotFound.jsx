import React from 'react'
import { Image } from 'react-bootstrap'
import FLexLayout from '../FlexLayout';


const _NotFound =()=>{
    return (
       <FLexLayout rowORColumn='column' justifyContent='center' alignItem='center' >
              <Image style={{width:'80%',height:'80%'}} src="/icons/notfound.svg"/>
              <div style={{fontFamily:'poppinsBold',fontSize:'40px',marginTop:'40px'}} >{'Not Found'}</div>
       </FLexLayout>
    )
}

export default _NotFound;