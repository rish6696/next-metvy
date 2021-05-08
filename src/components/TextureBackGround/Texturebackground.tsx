import React from 'react'
import Styles from './TextBackground.module.css'

const _TextureBackGround =({children}:{children:React.ReactElement})=>{
   return (
    <div className={Styles.container} >
       {children}
    </div>
   )
}


export default _TextureBackGround