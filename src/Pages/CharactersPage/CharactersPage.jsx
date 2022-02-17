import React,{useEffect, useState} from "react";
import axios from 'axios';
import Gallery from "../../components/Gallery/Gallery";
import Pagination from "../../components/Pagination";

export default function CharactersPage(){
    const[characters,setCharacters]=useState([]);
    

    
    const getCharacters = async(newPage=1) =>{
        const res= await axios("https://rickandmortyapi.com/api/character?page=" + newPage);
       setCharacters(res.data.results);
    
    }
    useEffect(()=>{
    getCharacters();
}, [])
     

     return <div> 
     <Gallery list={characters}/>
     <Pagination getData={getCharacters}/>
     </div>

}