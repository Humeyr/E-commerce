import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/home/HomePage';
import Footer from './components/Footer';
import useApi from "./hooks/useApi";
import Login from "./pages/home/auth/Login";
import Register from "./pages/home/auth/Register";
import ContactPage from "./pages/ContactPage";
import { useEffect } from 'react';
import ProductListPage from './pages/ProductListPage';
import { useDispatch } from 'react-redux';



function App() {
  const api = useApi();
  const dispatch = useDispatch();

  useEffect(() => {
    (async()=> {
     const result = await api.get("shop/taxons", {
      params: {
        page: 1,
        itemsPerPage: 30,
      },
    })
    dispatch({
      type: SET_CATEGORIES,
      payload: result.data,
    });
    })();

  }, []);


  return (
    <>
     <BrowserRouter>
        <Header/>
      <Routes>
        <Route index element={<HomePage/>}/>
        <Route path="/auth"/>
        <Route path="login" element={<Login/>} />
        <Route path="register" element={<Register/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/category/:code" element={<ProductListPage />} />

      </Routes>
      <Footer/>
     </BrowserRouter>
    
    </>
  )
}

export default App
