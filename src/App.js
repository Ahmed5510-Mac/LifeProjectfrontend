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
<<<<<<< HEAD
import Cart from "./pages/Cart/Cart"
import About from "./pages/About/About"

=======
import Product from './pages/product/product';
>>>>>>> dda44887eaded38040c3c73367f2b913ab5d7b7f

const App = () => {
  const [light, setLight] = React.useState(true);
  return (
    <>
      <ThemeProvider theme={light ? themeLight : themeDark}>
        {/*<CssBaseline /> */}
       {/* <Button onClick={() => setLight((prev) => !prev)}>Toggle Theme</Button> */}
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/register' element={<Registration />} />
            <Route path='/contactus' element={<Contact />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<NotFound />} />
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
        </BrowserRouter>
<<<<<<< HEAD
          <Footer/> 
=======
        
  <Footer/> 

>>>>>>> dda44887eaded38040c3c73367f2b913ab5d7b7f
      </ThemeProvider>
    </>
  );
};

export default App;
