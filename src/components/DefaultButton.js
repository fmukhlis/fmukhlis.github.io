import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

const DefaultButton = (props) => {    
    return (
        <button type={props.type} {...props.events} className={"rounded-sm overflow-hidden inline-block px-5 py-3 group border-b-4 border-red-700 bg-main relative text-white transition-all ease-out duration-150 hover:bg-red-500 " + props.additionalClass}>
            <span className="absolute right-0 w-8 h-32 -mt-12 bg-white animate-sparkling-lg-slow"></span>
            <span>{props.text} <FontAwesomeIcon icon={props.icon} className="ml-1"/></span>
        </button>
    )
}

export default DefaultButton
