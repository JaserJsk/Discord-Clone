import './App.css';

import React, { useEffect} from 'react';
import { auth } from './config/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { selectUser, login, logout } from './features/userSlice';
import Login from './components/Login';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';

function App() {
  const dispatch = useDispatch()
  const user = useSelector(selectUser);

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        dispatch(login({
          uid: authUser.uid,
          photo: authUser.photoURL,
          email: authUser.email,
          displayName: authUser.displayName
        }))
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]);

  return (
    // BEM Naming Convention!
    <div className="app">
      {user ? (
        <>
          <Sidebar />
          <Chat />
        </>
      ) : (<Login />)}
    </div>
  );
}

export default App;
