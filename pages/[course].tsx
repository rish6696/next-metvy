import React from 'react'
import Head from 'next/head';
import MetvyProgramDetailsScreen from '../src/screens/MetvyProgramDetails/MetvyProgramDetails'
import { useRouter } from 'next/router'


export default function Home() {

    const router = useRouter()
    const { course } = router.query


    return (
        <div>
            <Head>
                <title>Metvy</title>
                <link rel="icon" href="/icons/ic_launcher.png" />
                <script src="//code.tidio.co/uhenqkwcqosun9a0nqc2o5b1xj10nzdp.js" async></script>

            </Head>
            <MetvyProgramDetailsScreen course={course} />
        </div>
    );
}