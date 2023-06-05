import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ProductListPage from './pages/ProductListPage/ProductListPage';
import SalesPage from './pages/SalesPage/SalesPage';
import ShoppingCartPage from './pages/ShoppingCartPage/ShoppingCartPage';
import CategoriesListPage from './pages/CategoriesListPage/CategoriesListPage';
import Footer from './components/Footer/Footer';
import CategoryItemProductsPage from './pages/CategoryItemProductsPage/CategoryItemProductsPage';
import ProductInfoPage from './pages/ProductInfoPage/ProductInfoPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App = () => {
  return (
    <div className='app__wrapper'>
      <div className='container'>
        <Header />
      </div>
      <ScrollToTop />
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/products' element={<ProductListPage />} />
          <Route path='/sales' element={<SalesPage />} />
          <Route path='/cart' element={<ShoppingCartPage />} />
          <Route path='/categories' element={<CategoriesListPage />} />
          <Route
            path='/categories/:id'
            element={<CategoryItemProductsPage />}
          />
          <Route path='/products/:id' element={<ProductInfoPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
