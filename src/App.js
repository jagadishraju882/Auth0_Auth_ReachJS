import React from 'react';
import './App.css';
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import { useAuth0 } from '@auth0/auth0-react';

function App() {

  const { isLoading, isAuthenticated } = useAuth0();

  if (isLoading) return <div>Loading...</div>

  return (
    <div className={`app-container ${isAuthenticated?"logged-in-bg":"default-bg"}`} style={
      {
        height:"100%",
        width:"100%"
      }
    }>

      <LoginButton />
      <LogoutButton />
      <Profile />
    </div>
  );
} 

export default App;
