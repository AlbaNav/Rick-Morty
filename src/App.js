import React,{ BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react/cjs/react.development';
import './App.css';
import Header from './components/Header/Header';
import { ProfileContext } from './contexts/ProfileContext';
import CharactersPage from './Pages/CharactersPage/CharactersPage';
import HomePage from './Pages/HomePage/HomePage';
import LocationsPage from "./Pages/Locations/LocationsPage";
import Footer from './components/Footer/footer';

function App() {
const [profile, setProfile] = useState({
  "name": "Rick Sanchez",

  "status": "Alive",

  "species": "Human",

  "image": "https://rickandmortyapi.com/api/character/avatar/1.jpeg",

})

  return (
    <ProfileContext.Provider value={{profile, setProfile}}>
      <BrowserRouter>
      <Header/>
        <Routes>  
         <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="Locations" element={<LocationsPage />} />
          <Route path="characters" element={<CharactersPage />} />
        </Route>          
        </Routes>
        <Footer/>
      </BrowserRouter>
    </ProfileContext.Provider>
  );
}

export default App;
