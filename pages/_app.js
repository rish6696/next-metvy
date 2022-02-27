import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import '../styles/globals.css';
import Store from '../src/redux/store';
import { useRouter } from 'next/router'    
import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
    const router = useRouter();
    useEffect(() => {
        router.events.on('routeChangeComplete', url => console.log(url, 'test'));
    },[router.events])
    return (
    <Provider store={Store} >
        <Component {...pageProps} />
    </Provider>);
}

export default MyApp;
