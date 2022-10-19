import env from 'config/Env';
import useCachedResources from 'hooks/useCachedResources';
import useColorScheme from 'hooks/useColorScheme';
import Navigation from 'navigation';
import React from 'react';
import { Provider } from 'react-redux';
import { store } from 'redux_toolkit/store';

console.log('Running app on ' + env.BUILD_MODE + ' mode.');

export default function App() {
    const isLoadingComplete = useCachedResources();
    const colorScheme = useColorScheme();

    if (!isLoadingComplete) {
        return null;
    } else {
        return (
            <Provider store={store}>
                <Navigation colorScheme={colorScheme} />
            </Provider>
        );
    }
}
