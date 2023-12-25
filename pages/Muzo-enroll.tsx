import Head from 'next/head';
import MuzoScreen  from '../src/screens/muzoClass/MuzoCheckout';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Muzo Checkout</title>
                <link rel="icon" href="/icons/ic_launcher.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0"/>
            </Head>
            <MuzoScreen/>
        </div>
    );
}

