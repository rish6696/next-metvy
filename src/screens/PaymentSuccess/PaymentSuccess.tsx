import React,{useEffect,useState} from 'react';
import Lottie from 'react-lottie';
import animationData from '../../lottie/23660-tick-animation.json';
import FLexLayout from '../../components/FlexLayout/index';
import Style from './PaymentSuccess.module.css';


const _PaymentSuccess = (props) => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    };

    const [width,setWindowWidth ] = useState(-1);

    useEffect(() => {
        setWindowWidth(window.innerWidth);
        window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
    }, []);


    const animationWidth =  props.windowWidth > 800 ? { height: 400,width: 400 } : {}
    
    return (
        <div>
            <div
                style={{
                    paddingTop: '100px',
                    height: '1200px'
                }}
            >
                {/* animation-container */}

                <FLexLayout rowORColumn="column" justifyContent="center" alignItem="center">
                    {/* animation-box  */}
                    <FLexLayout
                        className={Style['lottie-container']}
                        rowORColumn="column"
                        style={{ width: '80%' }}
                        alignItem="center"
                    >
                        {/* thankyou-heading */}
                        <div className={Style['thankyou-heading']}>{'Thank You!'}</div>

                        {/* payment received-heading */}
                        <div style={{textAlign:'center'}} className={Style['payment-received-heading']}>
                            {'Your payment has been received.'}
                        </div>

                        {/* transaction-number is  */}
                        <div className={Style['invoice-heading']}>
                            {'Your invoice  id is  '}{' '}
                            <span className={Style['invoice-value']}>{'453243434'}</span>{' '}
                        </div>

                        <Lottie
                            options={defaultOptions}
                            isStopped={false}
                            isPaused={false}
                            width  = { width> 800 ? 400 : null }
                            height = { width > 800 ? 400 : null }
                        />
                    </FLexLayout>
                </FLexLayout>
            </div>
        </div>
    );
};




export default _PaymentSuccess
