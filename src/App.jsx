import HomeMain from "./HomeMain";
import CartMain from "./CartMain";
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import { SharedCartValueProvider, SharedContext } from "./NumOFOr";
import React, {createContext, useContext, useEffect, useState} from "react";
import TopsPage from "./TopsPage";
import HatsPage from "./HomePage";
import CollisionHatsPage from "./CollisionHatsPage";


export const pageRefresh = createContext();
function App() {

  const [cartRefresh1,setCartRefresh1]= useState(0);
  const {sharedCartArray} = useContext(SharedContext);

  useEffect(()=>setCartRefresh1(0),[sharedCartArray])

  return(
    <>
    
      <pageRefresh.Provider value={{cartRefresh1,setCartRefresh1}}>
    <Router>
    <Routes>
      
      <Route path="/" element={<HomeMain/>}/>
      <Route path="/Tops" element={<TopsPage/>}/>
      <Route path="/Hats" element={<CollisionHatsPage/>}/>
      
    </Routes>
    </Router>
    </pageRefresh.Provider>
   
     
     
    </>
  );
  }

export default App

