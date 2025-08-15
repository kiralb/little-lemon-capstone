import './App.css';
import React from "react";
import { Routes, Route } from 'react-router-dom';
import Header from "./pages/Header";
import Nav from "./pages/Nav";
import Footer from "./pages/Footer";
import HomePage from "./components/Home/HomePage";
import AboutPage from "./components/About/AboutPage";
import MenuPage from "./components/Menu/MenuPage";
import BookingPage from "./components/Reservations/BookingPage";
import OrderPage from "./components/Orders/OrderPage";
import LoginPage from "./components/Login/LoginPage";

function App() {
  return (
    <>
      <Header />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about/aboutpage" element={<AboutPage />} />
          <Route path="/menu/menupage" element={<MenuPage />} />
          <Route path="/reservations/bookingpage" element={<BookingPage />} />
          <Route path="/orders/orderpage" element={<OrderPage />} />
          <Route path="/login/loginpage" element={<LoginPage />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
