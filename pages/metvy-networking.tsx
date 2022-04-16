import Head from 'next/head';
import styles from '../styles/Home.module.css';
import CircleScreen from '../src/screens/CircleNetworking/circleNetworking';
import Rough from '../src/screens/Rough';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Metvy</title>
                <link rel="icon" href="/icons/ic_launcher.png" />
            </Head>
            <CircleScreen />
        </div>
    );
}
