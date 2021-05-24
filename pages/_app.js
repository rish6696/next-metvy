import 'bootstrap/dist/css/bootstrap.min.css';
import { Provider } from 'react-redux';
import '../styles/globals.css';
import Store from '../src/redux/store'

function MyApp({ Component, pageProps }) {
    return (
    <Provider store={Store} >
        <Component {...pageProps} />
    </Provider>);
}

export default MyApp;
