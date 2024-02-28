import React, { useState } from "react";
import "./User.css";
export default function Userinput({ addToWishlist,clearWishlist }) {
  const [wish, setWish] = useState("");
  function handleSubmit(e) {
    e.preventDefault();
    addToWishlist(wish);
    setWish("");
  }
  function handleChange(e) {
    e.preventDefault();
    setWish(() => e.target.value);
  }
  function handleClearAll(){
    clearWishlist();
  }
  return (
    <div className="user">
      <form onSubmit={handleSubmit} className="inpt">
        <label htmlFor="wish">Wish : </label>
        <input
          type="text" name="" id="wish" value={wish} onChange={handleChange} />
        <button className="btn">Update</button>
        <button className="btn1" onClick={handleClearAll}>Clear All</button>
      </form>
    </div>
  );
}