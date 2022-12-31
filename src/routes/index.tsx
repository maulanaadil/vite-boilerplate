import NoPage from '@/pages/Error/NoPage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';

const Home = React.lazy(() => import('@/pages/home'));

function BaseRoute() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="dashboard" element={<PrivateRoute />}>
        <Route path="" element={<Private />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<NoPage />} />
    </Routes>
  );
}

const Private = () => (
  <div className="bg-slate-700 h-screen w-full flex justify-center items-center text-white font-medium">
    Private Route
  </div>
);

const Login = () => (
  <div className="bg-slate-700 h-screen w-full flex justify-center items-center text-white font-medium">
    Login Route
  </div>
);

export default BaseRoute;
