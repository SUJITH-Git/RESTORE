import '../../App.css'
import Catalog from '../../features/catalog/Catalog';
import { Container, createTheme, CssBaseline, ThemeProvider} from '@mui/material';
import Header from './Header';
import { dark } from '@mui/material/styles/createPalette';
import { useState } from 'react';
import { Route,Routes } from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import ProductDetails from '../../features/catalog/ProductDetails';
import AboutPage from '../../features/about/aboutPage';
import ContactPage from '../../features/contact/ContactPage';
function App() {
  const [darkMode,setDarkMode]=useState(false);
  const paletteType=darkMode? 'dark' : 'light';
  const theme=createTheme({
    palette:{
      mode: paletteType,
      background:{
         default: paletteType==='light'? '#eaeaea' :'#121212'
      }
    }
  })
  function handleThemeChange(){
    setDarkMode(!darkMode);
  }
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline></CssBaseline>
      <Header darkMode={darkMode} handleThemeChange={handleThemeChange}></Header>
      <Container>
      <Routes>
         <Route path='/' element={<HomePage/>} />
         <Route path='/catalog' element={<Catalog/>} />
         <Route path='/catalog/:id' element={<ProductDetails/>} />
         <Route path='/contact' element={<ContactPage/>} />
         <Route path="about" element={<AboutPage />} />
      </Routes>
      </Container>
    </ThemeProvider>
  );
}

export default App;
