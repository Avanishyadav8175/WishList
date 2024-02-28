import React,{useState} from 'react';
import './App.css';
import Userinput from './component/Userinput.jsx';
import Data from './component/Data.jsx';

function App() {
  const [wishlist,setWishlist] = useState([]);
  
  function addToWishlist(newWish){
    setWishlist([...wishlist,newWish]);
  }
  function clearWishlist() {
    setWishlist([]);
  }
  
  function deleteWish(index) {
    const newWishlist = [...wishlist];
    newWishlist.splice(index, 1);
    setWishlist(newWishlist);
  }

  return (
    <div className="wishlist">
          <Userinput addToWishlist={addToWishlist} clearWishlist={clearWishlist}/>  
          <Data wishlist={wishlist} deleteWish={deleteWish}/>
    </div>
  );
}

export default App;