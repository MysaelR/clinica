import { createGlobalStyle } from "styled-components"
import styled, { css } from "styled-components";
import { useEffect, useState } from "react";


export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.backgroundTheme};
    font-family: Tahoma, Helvetica, Arial, Roboto, sans-serif;
    transition: all 0.50s linear;
  }


`




export const useDarkMode = () => {
  const [theme, setTheme] = useState('light');

  const setMode = (mode: React.SetStateAction<any>) => {
      window.localStorage.setItem('theme', mode)
      setTheme(mode)
  };

  const themeToggler = () => {
      theme === 'light' ? setMode('dark') : setMode('light')
  };

  useEffect(() => {
      const localTheme = window.localStorage.getItem('theme');
      localTheme && setTheme(localTheme)
  }, []);
  return [theme, themeToggler]
};
