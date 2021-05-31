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
            </Head>
            <MetvyProgramDetailsScreen course={course} />
        </div>
    );
}