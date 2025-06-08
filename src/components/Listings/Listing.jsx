import React from 'react'
import "./Listing.css"
import { IoMdAddCircleOutline } from "react-icons/io";
function Listing() {
  return (
    <div id="Listing">
        <form action="">
        <span id='listingtitle'>
            Add your Listing
        </span>
            <div className="list">
            <label htmlFor="name">Title</label>
            <input type="text" id="title" required/>
            </div>
            <div className="list">
            <label htmlFor="des">Description</label>
            <input type="text" id="des" required/>
            </div>
            <div className="list">
            <label htmlFor="img1">Image1</label>
            <input type="file" id="img1"/>
            </div>
            <div className="list">
            <label htmlFor="img2">Image2</label>
            <input type="file" id="img2" required/>
            </div>
            <div className="list">
            <label htmlFor="img3">Image3</label>
            <input type="file" id="img3" required/>
            </div>
            <div className="list">
            <label htmlFor="price">Price</label>
            <input type="text" id="price" required/>
            </div>
            <div className="list">
            <label htmlFor="loc">Location</label>
            <input type="text" id="loc" required/>
            </div>
            <button id="listingbtn">Add<IoMdAddCircleOutline /></button>
        </form>


    </div>
  )
}

export default Listing