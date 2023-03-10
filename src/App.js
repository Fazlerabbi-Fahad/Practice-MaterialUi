import './App.css';
import { RouterProvider } from 'react-router-dom';
import route from "./Routes/Route";
import { CssBaseline, ThemeProvider } from '@mui/material';
import { theme } from './Theme/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <RouterProvider router={route}>
      </RouterProvider>
      <CssBaseline />

    </ThemeProvider>
  );
}

export default App;
