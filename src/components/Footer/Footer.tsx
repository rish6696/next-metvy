import React from 'react'
import FLexLayout from '../FlexLayout'
import Style from './Footer.module.css'
import {Image} from 'react-bootstrap'



const  _Footer =()=>{
    return(
        // footer-container-black
        <FLexLayout  className={Style['footer-container-black']}  rowORColumn='row' justifyContent='center' alignItem='center' >
            

            {/* footer box */}
            <FLexLayout rowORColumn='column' style={{width:'360px'}} >

                {/* items-box */}
                <FLexLayout style={{width:'100%'}} justifyContent='between' rowORColumn='row'>

                    {/* items-colum-1 */}
                    <FLexLayout  rowORColumn='column' >
                        <div className={Style['footer-items']} >{'Home'}</div>
                        <div  className={Style['footer-items']} >{'Blogs'}</div>
                        <div  className={Style['footer-items']} >{'Careers'}</div>
                    </FLexLayout>


                      {/* items-colum-2 */}
                    <FLexLayout  rowORColumn='column' >
                        <div  className={Style['footer-items']} >{'Terms & Conditions'}</div>
                        <div  className={Style['footer-items']} >{'Contact Us'}</div>
                        <div  className={Style['footer-items']} >{'Privacy Policy'}</div>
                    </FLexLayout>
    
                </FLexLayout>

                
                 {/* follow-us-at-container */}
                 <FLexLayout style={{marginTop:'98px'}}  rowORColumn='row' justifyContent='center' alignItem='center' >
                      {/* follow us at text   */}

                      <div style={{fontFamily:'poppinsBold',fontSize:'20px'}} >{'Follow us at'}</div>
                 </FLexLayout>


                  {/* social-media-handle-container */}
                 <FLexLayout style={{marginTop:'11px'}}  rowORColumn='row' justifyContent='center' alignItem='center' >
                      {/* social-media-icons-row  */}

                      <FLexLayout style={{width:'154px'}} rowORColumn='row' alignItem='center' justifyContent='between' >
                        <Image className={Style['footer-social-media-items']} style={{width:'21px',height:'21px'}} src='/icons/Vector_fb.png'  />
                        <Image className={Style['footer-social-media-items']} style={{width:'21px',height:'21px'}} src='/icons/010-linkedin.png'  />
                        <Image className={Style['footer-social-media-items']} style={{width:'21px',height:'21px'}} src='/icons/013-twitter.png'  />
                        <Image className={Style['footer-social-media-items']} style={{width:'21px',height:'21px'}} src='/icons/011-instagram.png'  />
                        <Image className={Style['footer-social-media-items']} style={{width:'21px',height:'21px'}} src='/icons/008-youtube.png'  />
                      </FLexLayout>
                 </FLexLayout>



                 {/* copyright container */}
                 <FLexLayout style={{marginTop:'27px'}}  rowORColumn='row' justifyContent='center' alignItem='center' >
                      {/* follow us at text   */}

                      <div style={{fontFamily:'poppinsRegular',fontSize:'10px',color:'rgba(171, 171, 171, 1)'}} >{'© Copyright 2021, Metvy'}</div>
                 </FLexLayout>
            </FLexLayout>
        </FLexLayout>
    )
}


export default _Footer;