import { createTheme } from '@mui/material';

export const DarkTheme = createTheme({
    palette: {
        primary: {
            main: '#790e8b',
            light: '#ab47bc',
            dark: '#48005d',
            contrastText: '#ffffff'
        },
        secondary: {
            main: '#cabf45',
            light: '#fff176',
            dark: '#968f0b',
            contrastText: '#000000'
        },
        background: {
            default: '#202124',
            paper: '#303134'
        }
    }
});