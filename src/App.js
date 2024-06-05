import { useEffect, useState } from 'react';
import './App.css';
import Layout from './Layout';
import Main from './Main';
import UserContext from './UserContext';

function App() {

    const [isLogin, setIsLoggedIn] = useState(false);
    const value = { isLogin, setIsLoggedIn };
    // const [userName, setUsername] = useState('')
    const accessToken = localStorage.getItem("accessToken");

  useEffect(() => {
//  setisLoggedIn(accessToken !== null)
    if (accessToken) {
      setIsLoggedIn(true);
    }
  }, [accessToken]);



  return (
   
    <UserContext.Provider value={value}>
    <>
    <Layout>
      <Main/>
    </Layout>
    </>
   </UserContext.Provider>
  );
}

export default App;
