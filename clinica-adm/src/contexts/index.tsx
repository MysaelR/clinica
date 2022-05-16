import { ThemeProvider } from 'styled-components';
import React, { ReactNode, useState } from 'react';

import { darkTheme, lightTheme } from '../components/global-style/themes';
import { AlertProvider } from './alert/alert';
import { LanguageProvider } from './multi-languages/languages';

type AppProvider = {
    children: ReactNode
}



const AppProvider: React.FC<AppProvider> = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(false)


    return (
        <ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
            <AlertProvider>
                <LanguageProvider>
                    {children}
                </LanguageProvider>
            </AlertProvider>
        </ThemeProvider>
    )


};

export default AppProvider;
