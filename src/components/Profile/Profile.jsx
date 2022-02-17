import { useContext } from "react"
import { ProfileContext } from "../../contexts/ProfileContext"
import "./Profile.scss";

export default function Profile(){

    const {profile} = useContext(ProfileContext)
    
   
    return <div className="cprofile">
        
        <img className="fotito" src={profile.image} alt="" />
        <h4>{profile.name} - {profile.species}</h4>
    </div>
}