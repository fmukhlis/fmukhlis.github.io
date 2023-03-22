import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLocationDot } from "@fortawesome/free-solid-svg-icons"
import { faStar } from "@fortawesome/free-solid-svg-icons"
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons"

const Journal = (props) => {
    React.useEffect(() => {
        document.title = props.docTitle
    }, [])

    function handleFavourite(id){
        props.toggle(id)
    }

    return (
        <div className="flex max-w-2xl mx-auto items-center">
            <img src={props.imageUrl} alt="Foto Journal" className="w-40 h-52 object-cover rounded-md mr-8"/>
            <div className="d-flex flex-col text-slate-800 dark:text-slate-50 text-start">
                <div className="mb-2 flex align-items-center">
                    <FontAwesomeIcon icon={faLocationDot} className="text-red-600"/>
                    <span className="font-light ml-2">{props.location}</span> 
                    <a href={props.googleMapsUrl} className="ml-5 text-sm text-slate-500 dark:text-slate-400 underline">View on Google Maps</a>
                    {props.isVerified && <span className="ml-2"><FontAwesomeIcon icon={faCheckCircle}/></span>}
                    <button type="button" onClick={() => handleFavourite(props.id)} className={`ml-auto ${props.isFavourite ? 'text-main' : 'text-slate-300 dark:text-slate-600'}`}>{<FontAwesomeIcon icon={faStar}/>}</button>
                </div>
                <h3 className="font-bold text-2xl mb-3">{props.title}</h3>
                <small className="mb-2 font-bold">{props.startDate} - {props.endDate}</small>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Journal