import Header from './components/Header'
import Container from '@mui/material/Container';
import { ThemeProvider } from '@mui/material/styles'
import { ThemeOptions, createTheme } from '@mui/material/styles';
import DetailPage from './pages/Detail';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ChartPage from './pages/Chart';
import IntroductionPage from './pages/Introduction';
import Footer from './components/Footer';

const theme: ThemeOptions = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#76D8A6',
    },
    secondary: {
      main: '#ff7e63',
    },
    error: {
      main: '#FF7E63',
    },
  },
  typography: {
    fontFamily: 'Noto Sans KR',
  },
});



function App() {


  return (
    <>
      <ThemeProvider theme={theme}>
        <div style={{display:'flex', flexDirection:'column', height:'100vh', overflow:'hidden'}}>
          <BrowserRouter>
            <Header/>
            <Container maxWidth="xl" sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, flexGrow:1, flexShrink:1, overflow:'auto', padding:'12px'}}>
              <Routes>
                <Route path="/" element={<IntroductionPage />} />
                <Route path="/chart" element={<ChartPage />} />
                <Route path="/Detail" element={<DetailPage />} />
              </Routes>
            </Container>
          </BrowserRouter>
          <Footer/>
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
