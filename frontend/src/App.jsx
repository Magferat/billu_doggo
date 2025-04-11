import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import PetShop from './pages/PetShop';
import Cart from './pages/Cart';
import Login from './pages/login';
import Register from './pages/Register';
import Profile from './pages/UserProfile';
import Admin from './pages/AdminDashboard';
import Navbar from './components/Navbar';
import PetList from "./pages/PetList";
import PetDetails from './pages/PetDetails';
import CreatePet from './pages/CreatePet'; // 

function App() {
  const user = JSON.parse(localStorage.getItem('user'));

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/petshop" element={<PetShop />} />
        <Route path="/pets" element={<PetList />} />
        <Route path="/create-pet" element={<CreatePet />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/pets/:id" element={<PetDetails />} />

        {/* Protected Routes */}
        <Route path="/profile" element={user ? <Profile /> : <Navigate to="/login" />} />
        <Route path="/cart" element={user ? <Cart /> : <Navigate to="/login" />} />
        <Route path="/admin" element={user && user.role === 'admin' ? <Admin /> : <Navigate to="/" />} />

        {/* Catch-all Route */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
