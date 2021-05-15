import Head from 'next/head';
import styles from '../styles/Home.module.css';
import LandingScreen from '../src/screens/LandingScreen/LandingScreen';
import Rough from '../src/screens/Rough'

export default function Home() {
    return (
        <div>
            <Head>
                <title>Metvy</title>
                <link rel="icon" href="/icons/ic_launcher.png" />
            </Head>
            <LandingScreen />
        </div>
    );
}

