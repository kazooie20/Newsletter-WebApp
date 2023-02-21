import { useState } from 'react'
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import './styles/app.css'
import Home from './components/home';
import PostComponent from './components/posts';
import Contact from './components/contact';
import Header from './components/Header';
import MainLayout from './layouts/mainLayout';

function Router() {


  return (
    <BrowserRouter>
      <Header />
      <MainLayout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='contact' element={<Contact />} />
          <Route path='article/:id' element={<PostComponent />} />

          <Route path='*' element={<h1>Error 404 NOT FOUND LOL</h1>} />

        </Routes>
      </MainLayout>

    </BrowserRouter>
  )
}

export default Router
