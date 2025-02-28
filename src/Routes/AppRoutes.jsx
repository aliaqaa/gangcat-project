import { BrowserRouter as Router, Routes, Route } from 'react-router';
import AuthLayout from '../components/Layouts/AuthLayout';
import Auth from '../Pages/Auth/Auth';
import AliTousi from '../Pages/AliTousi/AliTousi';
import DefaultLayout from '../components/Layouts/DefaultLayout';
import Landing from '../Pages/Landing/Landing';
import AboutUs from '../Pages/AboutUs/AboutUs';
import Cats from '../Pages/Cats/Cats';
import Gallery from '../Pages/Gallery/Gallery';
import PrivateRoute from './PrivateRoute';
import NotFound from '../Pages/NotFound/NotFound';

const AppRoutes = () => (
  <Router>
    <Routes>
      {/* Public Routes */}
      <Route element={<AuthLayout />}>
        <Route path="/" element={<Auth />} />
        <Route path="*" element={<NotFound />} />
      </Route>

      {/* Protected Routes */}
      <Route element={<PrivateRoute />}>
        <Route element={<DefaultLayout />}>
          <Route path="/landing" element={<Landing />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/cats" element={<Cats />} />
          <Route path="/cats/:catName" element={<Cats />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/alitousi" element={<AliTousi />} />
        </Route>
      </Route>
    </Routes>
  </Router>
);

export default AppRoutes;