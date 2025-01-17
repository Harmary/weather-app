import React, { ReactNode } from 'react';
import { Provider } from 'react-redux';
import { store } from '../config/store';

type StoreProviderProps = {
    children: ReactNode;
}

export const StoreProvider: React.FC<StoreProviderProps> = ({ children }) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    );
};
