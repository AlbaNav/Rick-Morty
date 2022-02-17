import React from "react"
import "./GalleryLocations.scss";


export default function GalleryLocations ({list}){
    return <div className="Gallerybox">
        {list.map(item=><figure key={item.id}>
            <img src="https://res.cloudinary.com/dua6dm8ik/image/upload/v1643487424/rick_morty_oygpnb.jpg" alt={item.name}/>
            <figcaption/>
            <h4>{item.name}</h4>

        </figure>)}
    </div>
}