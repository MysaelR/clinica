import { ThemeProvider } from 'styled-components';
import React, { ReactNode, useState } from 'react';

import { AlertProvider } from './alert/alert';
import { LanguageProvider } from './multi-languages/languages';
import { ToogleProvider } from './toogle-theme/toogle';


type AppProvider = {
    children: ReactNode
}



const AppProvider: React.FC<AppProvider> = ({ children }) => {




    return (
        <ToogleProvider>
            <AlertProvider>
                <LanguageProvider>
                    {children}
                </LanguageProvider>
            </AlertProvider>
        </ToogleProvider>

    )


};

export default AppProvider;
