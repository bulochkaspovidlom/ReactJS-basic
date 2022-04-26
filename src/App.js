import React from 'react';
import { Routes, Route, Link as RouterLink } from 'react-router-dom';

import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';

import Chats from './pages/Chats';
import About from './pages/About';
import Home from './pages/Home';
import Profile from './pages/Profile';

const App = () => {

  return (
    <>
      <header>
        <nav>
          <div>
            <Link component={RouterLink} underline="hover" to="/">Home</Link>
            <Link component={RouterLink} underline="hover" to="/chats">Chats</Link>
            <Link component={RouterLink} underline="hover" to="/about">About</Link>
          </div>
          <div className='flex'>
            <Avatar>H</Avatar>
            <Link component={RouterLink} underline="hover" to="/profile">Profile</Link>
          </div>
        </nav>
        
      </header>

      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/chats' element={<Chats />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </>
    );
}



export default App;
