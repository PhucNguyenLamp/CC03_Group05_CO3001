import { createTheme, StyledEngineProvider, ThemeProvider } from '@mui/material';
import { RouterProvider } from "react-router";
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

import router from './routers/router.jsx'

const theme = createTheme({
  palette: {
    primary: {
      main: '#052b8e',
    },
    secondary: {
      main: '#1488db',
    },
  },
})
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </StyledEngineProvider>
  </StrictMode>,
)
