import { useContext } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeContext, ThemeProvider } from './context/ThemeContext';


import Header from './components/Header';
import ProtectedRoute from './components/ProtectedRoute';
import FeedPage from './pages/FeedPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';


import './App.css';

function AppContent() {
  const { theme } = useContext(ThemeContext);
  
  return (
    
    <div className={`App ${theme}`}>
      <Header />
      
      <main className="container">
        <Routes>
         
          <Route path="/login" element={<LoginPage />} />

       
          <Route path="/" element={
            <ProtectedRoute>
              <FeedPage />
            </ProtectedRoute>
          } />

     
          <Route path="/user/:username" element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          } />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider>
          <AppContent />
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;