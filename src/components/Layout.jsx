import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
// import { collection, getDocs} from 'firebase/firestore'
// import {db} from '../firebase'
// import React, {useEffect} from "react";


const Layout = () => {

//   useEffect (() => {
//  const getFromFirebase = async () => {
//    const query = collection(db, "items");
//    const snapshot = await getDocs (query)
//    snapshot.forEach( doc => {
//      console.log(doc.data)
//      console.log(doc.id)

//    })
//  }

// getFromFirebase()



  // }, []);

    return(
      <div className='bodyImagen'>
        <NavBar/>
        <Outlet/>
      </div>

    )
};

export default Layout;