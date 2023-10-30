import './App.css';
import { BrowserRouter as Router, Routes, Route }from "react-router-dom";
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Resetpassword from './pages/Resetpassword';
import Forgotpassword from './pages/Forgotpassword';
import MainLayout from './components/MainLayout';
import Lembur from './pages/Lembur';
import Piket from './pages/Piket';
import Premi from './pages/Premi';
import Rekap_Lembur from './pages/Rekap_Lembur';
import Rekap_Piket from './pages/Rekap_Piket';
import Rekap_Premi from './pages/Rekap_Premi';
import Data_Pegawai from './pages/Data_Pegawai';

function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/reset-password" element={<Resetpassword />} />
      <Route path="/forgot-password" element={<Forgotpassword />} />
      <Route path="/admin" element={<MainLayout />}>
        <Route index element={<Dashboard />} />
        <Route path="/admin/lembur" element={<Lembur />} />
        <Route path="/admin/piket" element= {<Piket />} />
        <Route path="/admin/premi" element={<Premi />} />
        <Route path="/admin/rekap_lembur" element={<Rekap_Lembur />} />
        <Route path="/admin/rekap_piket" element={<Rekap_Piket />} />
        <Route path="/admin/rekap_premi" element={<Rekap_Premi />} />
        <Route path="/admin/datapegawai" element={<Data_Pegawai />} />
      </Route>
    </Routes>
  </Router>
  )
}

export default App;
