import './App.css';
import { lazy, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { selectIsRefreshing } from '../redux/auth/selectors';
import { refreshUser } from '../redux/auth/operations';
import Layout from './Layout/Layout';

const HomePage = lazy(()=> import('../pages/HomePage/HomePage'));
const RegistrationPage = lazy(()=> import('../pages/RegistrationPage/RegistrationPage'));
const LoginPage = lazy(()=> import('../pages/LoginPage/LoginPage'));
const ContactsPage = lazy(()=> import('../pages/ContactsPage/ContactsPage'));


function App() {
  const dispatch = useDispatch()
  const isRefreshing = useSelector(selectIsRefreshing);
  // const loading = useSelector(selectLoading);
  // const error = useSelector(selectError);

  useEffect(() => {
    dispatch(refreshUser())
  }, [dispatch]);

  if(isRefreshing){
    return <div>Refreshing...</div>
  }

  return (
    <Layout>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/register"
          element={
            <RestrictedRoute component={<RegistrationPage />} />
          }
        />
        <Route
          path="/login"
          element={
            <RestrictedRoute component={<LoginPage />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute component={<ContactsPage />} />
          }
        />
      </Routes>
      {/* </Suspense> */}
    </Layout>
    );
};

export default App
