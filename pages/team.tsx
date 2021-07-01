import Head from 'next/head';
import TeamScreen  from '../src/screens/Teams/Team';

export default function Home() {
    return (
        <div>
            <Head>
                <title>Metvy Team</title>
                <script src="//code.tidio.co/uhenqkwcqosun9a0nqc2o5b1xj10nzdp.js" async></script>
                <link rel="icon" href="/icons/ic_launcher.png" />
                <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=0"/>
            </Head>
            <TeamScreen/>
        </div>
    );
}

