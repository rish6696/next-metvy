import Head from 'next/head';
import styles from '../styles/Home.module.css';
import LandingScreen from '../src/screens/LandingV2/LandingV2';
import Rough from '../src/screens/Rough'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Metvy</title>
                <link rel="icon" href="/icons/ic_launcher.png" />
                {/* <script src="//code.tidio.co/uhenqkwcqosun9a0nqc2o5b1xj10nzdp.js" async></script> */}
            </Head>
            <LandingScreen />
        </div>
    );
}

