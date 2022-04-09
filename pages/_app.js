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
        import('react-facebook-pixel')
            .then((x) => x.default)
            .then((ReactPixel) => {
                ReactPixel.init('1213716492700546') // facebookPixelId
                ReactPixel.pageView()

                router.events.on('routeChangeComplete', () => {
                    ReactPixel.pageView()
                })
            })
    },[router.events])
    return (
    <Provider store={Store} >
        <Component {...pageProps} />
    </Provider>);
}

export default MyApp;
