import React, { useEffect } from 'react';
import './App.css';
import Header from './components/Header/Header';
import { Route, Routes, useLocation } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import ProductListPage from './pages/ProductListPage/ProductListPage';
import ShoppingCartPage from './pages/ShoppingCartPage/ShoppingCartPage';
import CategoriesListPage from './pages/CategoriesListPage/CategoriesListPage';
import Footer from './components/Footer/Footer';
import ProductInfoPage from './pages/ProductInfoPage/ProductInfoPage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

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
          <Route path='/products' element={<ProductListPage type={'all'} />} />
          <Route path='/sales' element={<ProductListPage type={'sale'} />} />
          <Route path='/cart' element={<ShoppingCartPage type={'cart'} />} />
          <Route
            path='/categories'
            element={<CategoriesListPage type='categories' />}
          />
          <Route
            path='/categories/:id'
            element={<ProductListPage type={'category'} />}
          />
          <Route path='/products/:id' element={<ProductInfoPage />} />
          <Route path='*' element={<NotFoundPage type={'not_found'} />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

export default App;
