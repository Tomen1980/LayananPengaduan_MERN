import React from 'react';
import { Container } from 'react-bootstrap';
import {BrowserRouter as Router, Route} from'react-router-dom'
import Header from './components/Header.js'
import HomeScreens from './screens/HomeScreens.js'
import LoginMasyarakatScreen from './screens/login/LoginMasyarakatScreens.js';
import LoginPetugasScreen from './screens/login/LoginPetugasScreens.js';
import RegisterMasyarakatScreen from './screens/register/RegisterMasyarakatScreens.js';
import RegisterPetugasScreen from './screens/register/RegisterPetugasScreens.js';
import DashMasyarakatScreen from './screens/dashboard/DashMasyarakatScreens.js';
import DashPetugasScreen from './screens/dashboard/DashPetugasScreens.js';
import ProfileMasyarakatScreen from './screens/profile/ProfileMasyarakatScreens.js';
import ProfileAdminScreen from './screens/profile/ProfileAdminScreens.js';
import PengaduanScreen from './screens/pengaduan/PengaduanScreens.js';
import DataMasyarakatScreen from './screens/data/DataMasyarakatScreens.js';
import DetailsMasyarakatScreen from './screens/data/DetailsMasyarakatScreens.js';
import DetailsPetugasScreen from './screens/data/DetailsPetugasScreens.js';
import DataPetugasScreen from './screens/data/DataPetugasScreens.js';
import TanggapanScreens from './screens/tanggapan/TanggapanScreens.js';
import HistoryTanggapanScreens from './screens/tanggapan/HistoryTanggapanScreens.js';
import MenanggapiScreens from './screens/tanggapan/MenanggapiScreens.js';
import HistoryPengaduanScreens from './screens/pengaduan/HistoryPengaduanScreens.js';
import DitanggapiScreen from './screens/pengaduan/DitanggapiScreens.js';
import PdfScreen from './screens/generatorPdf/PdfScreens.js';

function App() {
  return (
    <Router>
      
      <Header />
      <main className = "py-3">
    <Container>
        <Route path='/' component={HomeScreens} exact/>
        <Route path='/masyarakat/login' component={LoginMasyarakatScreen} />
        <Route path='/petugas/login' component={LoginPetugasScreen} />
        <Route path='/masyarakat/register' component={RegisterMasyarakatScreen} />
        <Route path='/petugas/register' component={RegisterPetugasScreen} />
        <Route path='/masyarakat/dashboard' component={DashMasyarakatScreen} />
        <Route path='/petugas/dashboard' component={DashPetugasScreen} />
        <Route path='/petugas/menanggapi' component={TanggapanScreens} />
        <Route path='/petugas/tanggapi/:id' component={MenanggapiScreens} />
        <Route path='/masyarakat/profile' component={ProfileMasyarakatScreen} />
        <Route path='/petugas/profile' component={ProfileAdminScreen} />
        <Route path='/masyarakat/pengaduan' component={PengaduanScreen} />
        <Route path='/masyarakat/:id/tanggapan' component={DitanggapiScreen} />
        <Route path='/masyarakat/history' component={HistoryPengaduanScreens} />
        <Route path='/masyarakat/data' component={DataMasyarakatScreen} />
        <Route path='/petugas/data' component={DataPetugasScreen} />
        <Route path='/masyarakat/details/:id' component={DetailsMasyarakatScreen} />
        <Route path='/petugas/details/:id' component={DetailsPetugasScreen} />
        <Route path='/petugas/pdf' component={PdfScreen} />
        <Route path='/petugas/history' component={HistoryTanggapanScreens} />
    </Container>
      </main>

    </Router>
  );
}

export default App;
