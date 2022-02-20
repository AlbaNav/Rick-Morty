import React,{useEffect, useState} from "react";
import axios from 'axios';
import GalleryLocations from "../../components/GalleryLocation/GalleryLocations";
import Pagination from "../../components/Pagination";
import Buscador from '../../components/Buscador/Buscador';

export default function LocationsPage(){
    const[locations,setLocations]=useState([]);
    const [texto, setTexto] = useState("");
    
    const getLocations = async(newPage=1) =>{
        const res= await axios("https://rickandmortyapi.com/api/location?page=" + newPage);
       setLocations(res.data.results);
    
    }
    useEffect(()=>{
    getLocations();
}, [])

const locationsFilter = locations.filter((locations) => locations.name.toLowerCase().includes(texto.toLowerCase()));

     return <div> 
     <Buscador texto={texto} setTexto={setTexto} />
     <GalleryLocations list={locationsFilter}/>
     <Pagination getData={getLocations}/>
     </div>

}