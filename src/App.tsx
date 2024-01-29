import { ThemeProvider } from '@mui/material/styles';
import './App.css'
import { theme } from './styles/theme';
import '@fontsource/roboto'
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';

function App() {

  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
