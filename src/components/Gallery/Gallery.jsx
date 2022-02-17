import React, { useContext } from "react";
import { ProfileContext } from "../../contexts/ProfileContext";
import "./Gallery.scss";

export default function Gallery({ list }) {
  const { setProfile } = useContext(ProfileContext);

  const ChangeProfile = (newProfile) => {
    setProfile(newProfile)
    document.body.setAttribute("theme", newProfile.species.toLowerCase());
  };

  return (
    <div className="Gallerybox">
      {list.map((item) => (
        <figure className="cartita" key={item.id}>
          <img src={item.image} alt={item.name} />
          <figcaption className="detallitos" />
          <h4>{item.name}</h4>
          <button className="one" onClick={() => ChangeProfile(item)}>Mutar</button>
          <p>{item.status}</p>
          <p>{item.species}</p>
          <p>{item.gender}</p>
        </figure>
      ))}
    </div>
  );
}
