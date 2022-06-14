import React, { useEffect } from 'react';
import { Navigate, Route, Routes, useLocation } from 'react-router';
import { checkUrl } from 'Shared/Utils/app';
import { useAppDispatch } from 'Store/store';
import { getAllUsers } from 'Store/users/reducers';
import { routeArray } from 'routes';
import 'antd/dist/antd.min.css'
import './App.scss';

const routes = routeArray.map((route) => (
  <Route key={route.path} path={route.path} element={<route.page />} />
))

function App() {
  const dispatch = useAppDispatch();
  const location = useLocation();

  const redirect = checkUrl(location)

  useEffect(() => {
    dispatch(getAllUsers())
  }, [dispatch])
  if (redirect !== undefined) return <Navigate to={redirect} />
  return (
    <div>
      <Routes>
        {routes}
      </Routes>
    </div>
  );
}

export default App;
