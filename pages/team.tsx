import Head from 'next/head';
import TeamScreen  from '../src/screens/Teams/Team';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Metvy Team</title>
                <link rel="icon" href="/icons/ic_launcher.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0"/>
            </Head>
            <TeamScreen/>
        </div>
    );
}

