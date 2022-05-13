import {useState, useEffect} from 'react';
import { Button } from 'react-bootstrap';

const ItemCount = ({ stock, itemsQty, setItemsQty , onAdd }) => {

  const AddProduct = () => {
    setItemsQty (itemsQty + 1)
    onAdd ()
  }
  const RestProduct = () => {
    setItemsQty (itemsQty - 1 )
    onAdd()
  }
  
  return (
    
    <div>
      
      {/* <div style={{ marginTop:30, marginBottom: 5, marginTop: 5, color: 'black', fontSize: '1rem', lineHeight:"22px"}}>
        {name} <br/> <span style={{fontSize: "1.5rem"}}>Precio: {precio}</span> <br/> <span style={{fontSize: "1.5rem"}}>Stock: {stock}<br/>Total:{total}</span>
      </div> */}
      <div style={{marginBottom: 10}}>
        <Button onClick={RestProduct} disabled={itemsQty === 1} variant={"danger"}>-</Button>
        
        <span style={{margin: 10, fontSize: "1.5rem", marginTop:"30px" }}>{itemsQty}</span>

        <Button onClick={AddProduct} disabled={itemsQty === stock} variant={"success"}>+</Button>
      </div>
      <div>
                <small style={{ color: "#a1a1a1", marginBottom:"20px" }}>{stock} Disponibles</small>
            </div>    
    </div>
  );
}

export default ItemCount;