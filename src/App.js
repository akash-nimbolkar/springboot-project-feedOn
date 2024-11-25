import logo from './logo.svg';
import './App.css';

import { ThemeProvider } from '@emotion/react';
import { darkTheme } from './Theme/DarkTheme';
import { CssBaseline } from '@mui/material';

import { CustomerRouter } from './Routers/CustomerRouter';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from './component/State/Authentication/Action';
import { store } from './component/State/store';
import { findCart } from './component/State/Cart/Action';




function App() {
  const dispatch=useDispatch()
  const jwt=localStorage.getItem("jwt")
  const {auth}=useSelector(store=>store)
  useEffect(()=>{
      dispatch(getUser(auth.jwt || jwt));
      dispatch(findCart(jwt));
  },[auth.jwt])
  return (
    < ThemeProvider theme={darkTheme}>
      <CssBaseline/>
      <CustomerRouter/>
    </ThemeProvider>
  );
}

export default App;
