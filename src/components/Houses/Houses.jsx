import React from 'react'
import "./Houses.css"
import Card from '../Card/Card';
import house from "../../assets/house.jpg";
import house1 from "../../assets/housekichen.jpg";
import house2 from "../../assets/houseliving.jpg";
import villa from "../../assets/villa.jpg";
import villa1 from "../../assets/villa1.jpg";
import villa2 from "../../assets/villa2.jpg";
import village from "../../assets/village.avif";
import village1 from "../../assets/village1.avif";
import village2 from "../../assets/village2.avif";
import hut from "../../assets/hut.avif";
import hut1 from "../../assets/hut1.avif";
import hut2 from "../../assets/hut2.avif";
function Houses() {
  return (
    <div id="houses">
        <Card image1={house} image2={house1} image3={house2} title={"3BHK Villa in Jhansi"} price={"40,000"}/>
        <Card image1={villa} image2={villa1} image3={villa2} title={"5BHK Farmhouse in Delhi "} price={"70,000"}/>
        <Card image1={village} image2={village1} image3={village2} title={"5BHK Farmhouse in UP "} price={"10,000"}/>
        <Card image1={hut} image2={hut1} image3={hut2} title={"3BHK apartment in Delhi"} price={"10,000"}/>
    </div>
  )
}

export default Houses