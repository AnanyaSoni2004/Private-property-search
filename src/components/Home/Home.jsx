import React,{useContext} from 'react'
import "./Home.css";
import {dataContext} from '../../Context/Usercontext';
import Card from '../Card/Card';
import house from "../../assets/house.jpg";
import house1 from "../../assets/housekichen.jpg";
import house2 from "../../assets/houseliving.jpg";
import farmhouse from "../../assets/farmhouse2.jpg";
import farmhouse1 from "../../assets/farmhouse1.jpg";
import farmhouse2 from "../../assets/farmhouse.jpg";
import villa from "../../assets/villa.jpg";
import villa1 from "../../assets/villa1.jpg";
import villa2 from "../../assets/villa2.jpg";
import mountain from "../../assets/mountain.avif";
import mountain1 from "../../assets/mountain1.avif";
import mountain2 from "../../assets/mountain2.avif";
import huthouse from "../../assets/huthouse.jpg";
import huthouse1 from "../../assets/huthouse1.jpg";
import huthouse2 from "../../assets/huthouse2.jpg";
import village from "../../assets/village.avif";
import village1 from "../../assets/village1.avif";
import village2 from "../../assets/village2.avif";
import room from "../../assets/room.jpg";
import room1 from "../../assets/room1.jpg";
import room2 from "../../assets/room2.jpg";
import old from "../../assets/old.avif";
import old1 from "../../assets/old1.avif";
import old2 from "../../assets/old2.avif";
import roomnew from "../../assets/roomnew.avif";
import roomnew1 from "../../assets/roomnew1.avif";
import roomnew2 from "../../assets/roomnew2.avif";
import hut from "../../assets/hut.avif";
import hut1 from "../../assets/hut1.avif";
import hut2 from "../../assets/hut2.avif";

function Home() {
  let {
    title,
    setTitle,
    addListing,
    setaddListing,
    addImage1,
    setaddImage1,
    addImage2,
    setaddImage2,
    addImage3,
    setaddImage3,
    price,
    setprice,
}=useContext(dataContext)

  return (
    <div id="home">
      <Card image1={house} image2={house1} image3={house2} title={"3BHK Villa in Jhansi"} price={"40,000"}/>
      <Card image1={farmhouse} image2={farmhouse1} image3={farmhouse2} title={"1BHK Farmhouse in Mumbai"} price={"60,000"}/>
      <Card image1={villa} image2={villa1} image3={villa2} title={"5BHK Farmhouse in Delhi "} price={"70,000"}/>
      <Card image1={mountain} image2={mountain1} image3={mountain2} title={"3BHK Villa in Uttrakhand"} price={"40,000"}/>
      <Card image1={huthouse} image2={huthouse1} image3={huthouse2} title={"1BHK Farmhouse in Indore"} price={"20,000"}/>
      <Card image1={village} image2={village1} image3={village2} title={"5BHK Farmhouse in UP "} price={"10,000"}/>
      <Card image1={room} image2={room1} image3={room2} title={"1 room in Mumbai "} price={"5,000"}/>
      <Card image1={old} image2={old1} image3={old2} title={"3BHK apartment in Kolkata "} price={"20,000"}/>
      <Card image1={roomnew} image2={roomnew1} image3={roomnew2} title={"3BHK apartment in Kolkata "} price={"20,000"}/>
      <Card image1={hut} image2={hut1} image3={hut2} title={"3BHK apartment in Delhi"} price={"10,000"}/>
      {addListing && addImage1 && addImage2 && addImage3 ? (
  <Card
    image1={URL.createObjectURL(addImage1)}
    image2={URL.createObjectURL(addImage2)}
    image3={URL.createObjectURL(addImage3)}
    title={title}
    price={price}
  />
) : null}


    </div>
  )
}

export default Home