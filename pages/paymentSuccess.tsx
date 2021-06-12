import Head from 'next/head';
import PaymentSuccess from '../src/screens/PaymentSuccess/PaymentSuccess';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Metvy</title>
                <link rel="icon" href="/icons/ic_launcher.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0"/>
            </Head>
            <PaymentSuccess/>
        </div>
    );
}

