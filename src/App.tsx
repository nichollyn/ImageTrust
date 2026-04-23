import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import LearnPage from './pages/LearnPage';

export default function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col min-h-svh">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/learn" element={<LearnPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
