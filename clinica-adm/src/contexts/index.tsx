import { AlertProvider } from './alert/alert';
import React, { ReactNode } from 'react';
import { LanguageProvider } from './multi-languages/languages';



type AppProvider = {
    children: ReactNode
}

const AppProvider: React.FC<AppProvider> = ({ children }) => (

    <AlertProvider>
        <LanguageProvider>
            {children}
        </LanguageProvider>
    </AlertProvider>


);

export default AppProvider;
