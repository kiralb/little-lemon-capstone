import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import BookingPage from './components/BookingPage';

export default function Main() {
    return (
        <div className="main-grid">
            <main>
                <Routes> 
                    <Route path="/" element={<HomePage />}></Route>
                    <Route path="/booking" element={<BookingPage />}></Route>
                </Routes>
                <h2>Our Menu</h2>
                <p>Explore our delicious dishes</p>
            </main>
        </div>
    )
}