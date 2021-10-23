import './App.css';
import React, {useEffect} from 'react';
import AppRouter from './router/AppRouter';
import AuthContextProvider from './context/AuthContext';
import firebaseApp from './auth/firebase';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  useEffect(() => {
    console.log(firebaseApp);
  }, []);

  return (
    <AuthContextProvider>
      <AppRouter />
    </AuthContextProvider>
  );
}

export default App;
