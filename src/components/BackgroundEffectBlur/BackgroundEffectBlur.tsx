import FLexLayout from '../FlexLayout';
import Style from './BackgroundBlur.module.css';

const _BackgroundBlurEffect = () => {
    return (
        <FLexLayout
            rowORColumn="column"
            alignItem="center"
            className={Style['background-Blur-Container']}
        >
            <div className={Style['upper-circle']} />
            <div className={Style['lower-circle']} />
        </FLexLayout>
    );
};

export default _BackgroundBlurEffect;
