import { useLocation } from "../../../context/Location"

export default function Card({
    companyInfo, 
    title, 
    city, 
    address,
    locationAlias
}){

    const {setCurrentLocation} = useLocation()
    
    function handleSetLocation(location){
        setCurrentLocation(location)
    }

    return(
        <>
            <div className="location" onClick={() => handleSetLocation(locationAlias)}>
                <img src={companyInfo.logo_url} alt="logo" />
                <h2>
                    {title}
                    <span> {city}</span>
                </h2>
                <p>{address}</p>
            </div>
        </>
    )
}