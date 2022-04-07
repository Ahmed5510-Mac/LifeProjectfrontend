import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Registration from './pages/Registration/Registration';
import NotFound from './pages/NotFound/NotFound';
import { ThemeProvider } from '@mui/material/styles';
import Navbar from './components/Navbar/Navbar';
import themeDark from './theme/DarkTheme/DarkTheme';
import themeLight from './theme/LightTheme/LightTheme';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Footer from './components/Footer/Footer';
import Contact from './pages/Contact/Contact.jsx' 

const App = () => {
  const [light, setLight] = React.useState(true);
  return (
    <>
      <ThemeProvider theme={light ? themeLight : themeDark}>
         {/* <Navbar />  */}
        {/*<CssBaseline /> */}
       {/* <Button onClick={() => setLight((prev) => !prev)}>Toggle Theme</Button> */}
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/register' element={<Registration />} />
            <Route path='/contactus' element={<Contact />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
 {/*  <Footer/>  */}

      </ThemeProvider>
    </>
  );
};

export default App;
