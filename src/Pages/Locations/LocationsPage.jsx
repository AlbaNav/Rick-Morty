import React,{useEffect, useState} from "react";
import axios from 'axios';
import GalleryLocations from "../../components/GalleryLocation/GalleryLocations";
import Pagination from "../../components/Pagination";


export default function LocationsPage(){
    const[locations,setLocations]=useState([]);

    
    const getLocations = async(newPage=1) =>{
        const res= await axios("https://rickandmortyapi.com/api/location?page=" + newPage);
       setLocations(res.data.results);
    
    }
    useEffect(()=>{
    getLocations();
}, [])

     return <div> 
     <GalleryLocations list={locations}/>
     <Pagination getData={getLocations}/>
     </div>

}