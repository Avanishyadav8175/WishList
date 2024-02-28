import React from "react";
// import { wishlist } from "./Userinput";
import './Data.css';

export default function Data({wishlist, deleteWish}){
    let list = wishlist.map((item,index)=><li key={index}>{item}  {deleteWish && <button  className="bttn" onClick={(index) => handleDelete(index)}>Delete</button>}</li>)

    function handleDelete(index) {
      deleteWish(index);
    }
  
  return (
    <div className="data">
      <h3>Wish List:</h3>
      <ul >{list}</ul>
      
    </div>
  );
}