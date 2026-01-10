import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import ProjectListPage from './pages/ProjectListPage';
import LoginSignupPage from './pages/LoginSignupPage';
import MyPage from './pages/MyPage';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import EventListPage from './pages/EventListPage';

/**
 * Top-level application component that configures client-side routing and renders the common layout.
 *
 * Renders a BrowserRouter containing a persistent Header and Footer and a Routes tree that maps:
 * "/" → LandingPage, "/projects" → ProjectListPage, "/events" → EventListPage, "/login" → LoginSignupPage, and "/mypage" → MyPage.
 *
 * @returns The React element tree for the application's router and layout
 */
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/projects" element={<ProjectListPage />} />
        <Route path="/events" element={<EventListPage />} />
        <Route path="/login" element={<LoginSignupPage />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;