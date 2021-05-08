import Head from 'next/head';
import styles from '../styles/Home.module.css';
import LandingScreen from './../src/screens/LandingScreen/LandingScreen';

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

//  function Home() {
//   return (
//     <div className={styles.container}>
//       <Head>
//         <title>Metvy</title>
//         <link rel="icon" href="/favicon.ico" />
//       </Head>

//       <main className={styles.main}>
//         <div></div>
//       </main>

//       <footer className={styles.footer}>
//         <a
//           href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Powered by{' '}
//           <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
//         </a>
//       </footer>
//     </div>
//   )
// }
