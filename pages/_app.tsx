import '@/styles/globals.css';
import { Provider } from 'react-redux';
import store from '@/store/store';
import Site from '@/components/Layout/Site';
import { Toaster } from 'react-hot-toast';

export default function App({ Component, pageProps }: any) {
    return (
        <Provider store={store}>
            <Site layout={Component?.layout || 'default'} middleware={Component?.middleware}>
                <Component {...pageProps} />
            </Site>
            <Toaster toastOptions={{ duration: 100000, style: { maxWidth: 'none' } }} />
        </Provider>
    );
}
