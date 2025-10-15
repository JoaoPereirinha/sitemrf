import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import Careers from './pages/Careers';
import JobDrogaria from './pages/JobDrogaria';
import JobArmazem from './pages/JobArmazem';
import JobMotorista from './pages/JobMotorista';
import JobAdministrativo from './pages/JobAdministrativo';
import JobExposicao from './pages/JobExposicao';
import PrivacyPolicy from './pages/PrivacyPolicy';
import LoadingScreen from './components/LoadingScreen';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading ? (
        <LoadingScreen onLoadingComplete={() => setIsLoading(false)} />
      ) : (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogo" element={<Catalog />} />
            <Route path="/carreiras" element={<Careers />} />
            <Route path="/carreiras/drogaria" element={<JobDrogaria />} />
            <Route path="/carreiras/armazem" element={<JobArmazem />} />
            <Route path="/carreiras/motorista" element={<JobMotorista />} />
            <Route path="/carreiras/administrativo" element={<JobAdministrativo />} />
            <Route path="/carreiras/exposicao" element={<JobExposicao />} />
            <Route path="/politica-de-privacidade" element={<PrivacyPolicy />} />
          </Routes>
        </BrowserRouter>
      )}
    </>
  );
}

export default App;