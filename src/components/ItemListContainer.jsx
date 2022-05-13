// import {useState, useEffect} from 'react';
// import ItemList from './ItemList';
// import Loading from './Loading';
// import './Loading.css'
// import { productListData } from "./ProductListData";
// import { useParams } from "react-router-dom";
// import { collection, getDoc, getDocs, doc, query, where} from 'firebase/firestore'
// import {db} from '../firebase'

// export const getFetch = (id) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(()=>{
//       const product = productListData.find((product) => {
//         return product.id;
//       });
//       resolve(product);
//     }, 500)
//   });
// };

// const ItemListContainer = () => {

//   useEffect (() => {
// // METODO1
//     const getFromFirebase = async () => {
//       const query = collection(db, "productListData");
//       const snapshot = await getDocs (query)
//       snapshot.forEach((doc) => {
//         console.log(doc.id)

//         console.log(doc.data())
   
//       })
// // USANDO QUERY Y WHERE
// // const getFromFirebase = async () => {
// //   const q = query(collection(db, "productListData"), where ("id", "==", "Super Mario Maker 2"));
// //   const snapshot = await getDocs(q)
// //   snapshot.forEach((doc) =>{
// //     console.log("el id", doc.id)
// //     console.log("los datos de mi item en la coleecion los tengo con .data", doc.data())
// //   })
// // }

// // USANDO getDoc

//       const docRef = doc(db, "productListData" , "M4DYCk8Qja2n2ldPepnG")
//       const docSnapshot = await getDoc(docRef)
//       console.log(docSnapshot.data())
//     }
   


// getFromFirebase()


   
   
   
//      }, []);

//   const { id } = useParams();
//   const [product, setProductListData] = useState();
//   useEffect(() => {
//     getFetch(id).then((results) => {
//       setProductListData(results);
//     });
//   }, [id]);

//   return <div>
//     {product ? <ItemList item={product} /> : <Loading />}
//     </div>;
    
// };

// export default ItemListContainer;

import {useState, useEffect} from 'react';
import ItemList from './ItemList';
import Loading from './Loading';
import './Loading.css'
import { productListData } from "./ProductListData";
import { useParams } from "react-router-dom";
import { collection, getDoc, getDocs, doc, query, where} from 'firebase/firestore'
import {db} from '../firebase'

const ItemListContainer = ({ props }) => {
  const [productos, setProductListData] = useState([]);

  useEffect(() => {
    const getFromFirebase = async () => {
      const q = query(collection(db, "productListData"));
      const snapshot = await getDocs(q);
      snapshot.forEach((doc) => {
        setProductListData((prev) => [...prev, { ...doc.data(), key: doc.id }]);
      });
    };
    getFromFirebase();
  }, []);

  useEffect(() => {
    console.log(productos);
  }, [productos]);

  return (
    <>
  
      <ItemList productos={productos} />
    </>
  );
};

export default ItemListContainer;
