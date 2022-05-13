// import React from "react";
// import { useEffect, useState } from "react";
// import { makeStyles } from "@material-ui/core";
// import { useParams } from "react-router-dom";
// import ItemDetail from "./ItemDetail";
// import Loading from "./Loading";
// import { productListData } from "./ProductListData.js";


// const useStyle = makeStyles(() => ({
//   detailContainer:{
//     display: "flex",
//     margin: "36px",
//     justifyContent: "center",
//   }
// }));

// export const getFetch = (id) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(()=>{
//       const product = productListData.find((product) => {
//         return product.id === id;
//       });
//       resolve(product);
//     }, 2000)
//   });
// };

// const ItemDetailContainer = () => {
//   const classes = useStyle();
//   const { id } = useParams();
//   const [product, setProduct] = useState();

// // hacer un boton de volver para atras

//   useEffect(() => {
//     getFetch(id).then((results) => {
//       setProduct(results);
//     });
//   }, [id]);

//   return <div>{product ? <ItemDetail item={product} /> : <Loading />}</div>;
// };

// export default ItemDetailContainer;

import { getFirestore, doc, getDoc} from "firebase/firestore";
import { useEffect, useState } from "react";

import ItemDetail from "./ItemDetail";
import Loading from "./Loading";
import React from "react";
import { db } from "../firebase.js";
import { useParams } from "react-router-dom";



const ItemDetailContainer = () => {
  const { id } = useParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    const db = getFirestore();
    const queryProduct = doc(db, `productListData`, id);
    getDoc(queryProduct).then((resp) => {
      setProduct({ id: resp.id, ...resp.data() });
    });
  }, [id]);
  return (
    <div>
      {product ? <ItemDetail item={product} /> : <Loading />}
    </div>
  );
};

export default ItemDetailContainer;